const getFileExtension = (filename: string) => {
    // Encontra a posição do último ponto
    const lastDotIndex = filename.lastIndexOf(".");

    // Se não houver ponto ou for a última posição, retorna string vazia
    if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
        return "";
    }

    // Retorna a substring do último ponto em diante (incluindo o ponto)
    return filename.substring(lastDotIndex);
};

export default getFileExtension;
