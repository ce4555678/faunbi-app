export function fileSize(bytes: number, decimals = 2) {
    // 1. Caso especial para 0 bytes
    if (bytes === 0) {
        return '0 Bytes';
    }

    // 2. Fator de conversão e unidades
    const k = 1024; // O fator é 1024 para KB, MB, GB, etc.
    const dm = decimals < 0 ? 0 : decimals; // Garante que o número de decimais não é negativo
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    // 3. Calcula o índice (i) da unidade
    // Math.log(bytes) / Math.log(k) determina a qual potência de k (1024) o número de bytes pertence.
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    // 4. Converte e formata
    // (bytes / Math.pow(k, i)) -> Divide os bytes por k elevado ao índice da unidade, para obter o valor na unidade correspondente.
    // .toFixed(dm) -> Arredonda o número para o número de decimais especificado.
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}