
export function getMediaType(contentType: string) {
    // A regex com um grupo de captura para 'audio' ou 'video'.
    // O grupo (1) capturado será exatamente 'audio' ou 'video'.
    const regex = /^(audio|video)\/.+$/i;

    // O método exec() retorna um array de correspondências ou null.
    const match = regex.exec(contentType);

    // Se houver uma correspondência (match não é null) e o grupo de captura (índice 1) existir:
    if (match && match[1]) {
        // Retorna o primeiro grupo capturado, que é 'audio' ou 'video', em letras minúsculas.
        return match[1].toLowerCase();
    }

    // Se não houver correspondência ou o formato estiver incorreto.
    return "video";
}