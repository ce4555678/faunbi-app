import getFileSigned from "@/utils/getFileSigned";
import { logger, schemaTask } from "@trigger.dev/sdk/v3";
import ffmpeg from "fluent-ffmpeg";
import { z } from "zod";

export const durationFileTask = schemaTask({
    id: "duration-file",
    machine: "micro",
    schema: z.object({
        file: z.string(),
    }),
    // Set an optional maxDuration to prevent tasks from running indefinitely
    maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
    // ... imports e setup da task ...
    run: async (payload, { ctx }) => {
        logger.log("vendo duração", { payload, ctx });

        const file = await getFileSigned(payload.file, 60 * 60 * 12);

        // // 🛑 CORREÇÃO: Envolver a chamada ffprobe em uma Promise
        const duration = await new Promise<number>((resolve, reject) => {
            ffmpeg.ffprobe(file, (error, metadata) => {
                if (error) {
                    // Rejeita a Promise se houver um erro
                    logger.error("Erro no ffprobe:", error);
                    return reject(
                        new Error("Erro ao pegar duração desse arquivo com ffprobe")
                    );
                }

                logger.info(JSON.stringify(metadata));

                const durationValue = metadata.format?.duration ?? 0;

                // Resolve a Promise com o valor da duração
                resolve(durationValue);
            });
        }); // Fim da Promise

        // O código só chega aqui DEPOIS que a Promise for resolvida/rejeitada
        return {
            duration: Math.round(duration),
        };
    },
});
