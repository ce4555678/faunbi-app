export default function chunkSrtWithMetadata(
    legendas: {
        id: string;
        startTime: string;
        startSeconds: number;
        endTime: string;
        endSeconds: number;
        text: string;
    }[],
    maxChars = 100,
    minChars = 30
) {
    const chunks = [];
    let buffer = "";
    let startTime = "";
    let endTime = "";
    let collectedSubs: {
        start: string;
        end: string;
        text: string;
    }[] = [];

    for (let i = 0; i < legendas.length; i++) {
        const item = legendas[i];
        const texto = item.text.replace(/\n/g, " ").trim();

        const newBuffer = (buffer + " " + texto).trim();

        if (buffer.length === 0) {
            startTime = item.startTime;
        }

        // Condição para quebrar chunk:
        // 1. Passou do limite
        // 2. buffer atual já é >= minChars (evita chunks pequenos)
        const shouldBreak =
            newBuffer.length > maxChars && buffer.length >= minChars;

        if (shouldBreak) {
            chunks.push({
                text: buffer.trim(),
                startTime,
                endTime,
                metadata: { subtitles: collectedSubs },
            });

            // Reinicia para o próximo chunk
            buffer = texto;
            collectedSubs = [
                {
                    //   index: i + 1,
                    start: item.startTime,
                    end: item.endTime,
                    text: texto,
                },
            ];
            startTime = item.startTime;
            endTime = item.endTime;
        } else {
            // Continua o chunk
            buffer = newBuffer;
            endTime = item.endTime;

            collectedSubs.push({
                // index: i + 1,
                start: item.startTime,
                end: item.endTime,
                text: texto,
            });
        }
    }

    // Último chunk
    if (buffer.length > 0) {
        chunks.push({
            text: buffer.trim(),
            startTime,
            endTime,
            metadata: { subtitles: collectedSubs },
        });
    }

    return chunks;
}
