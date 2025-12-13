export function horasTranscritas(duration: number): string {
    // 1. Calcula as horas inteiras
    const horas = Math.floor(duration / 3600);

    // 2. Calcula os minutos inteiros restantes
    const segundosRestantes = duration % 3600;
    const minutos = Math.floor(segundosRestantes / 60);

    // 3. Formata os minutos para sempre ter 2 dígitos (Ex: 1 -> "01")
    const minutosFormatados = String(minutos).padStart(2, '0');

    // 4. Lógica de Retorno
    if (horas === 0) {
        // Caso A: Duração MENOR que 1 hora. Retorna SOMENTE os minutos.
        return `${minutosFormatados} min`;
    } else {
        // Caso B: Duração MAIOR que 1 hora. 
        // A variável 'horas' já é um número (Ex: 2 ou 10), então basta converter para string.
        return `${horas}h ${minutosFormatados} min`;
    }
}