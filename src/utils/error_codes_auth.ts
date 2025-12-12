export const BASE_ERROR_CODES = {
    // --- Erros relacionados a Usuário e Conta ---
    USER_NOT_FOUND: "Usuário não encontrado",
    ACCOUNT_NOT_FOUND: "Conta não encontrada",
    USER_ALREADY_EXISTS: "Usuário já existe.",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Usuário já existe. Use outro e-mail.",
    USER_EMAIL_NOT_FOUND: "E-mail do usuário não encontrado",
    EMAIL_CAN_NOT_BE_UPDATED: "Não foi possível atualizar o e-mail",
    CREDENTIAL_ACCOUNT_NOT_FOUND: "Conta de credenciais não encontrada",

    // --- Erros relacionados a Autenticação e Senha ---
    INVALID_PASSWORD: "Senha inválida",
    INVALID_EMAIL: "E-mail inválido",
    INVALID_EMAIL_OR_PASSWORD: "E-mail ou senha inválidos",
    PASSWORD_TOO_SHORT: "Senha muito curta",
    PASSWORD_TOO_LONG: "Senha muito longa",
    EMAIL_NOT_VERIFIED: "E-mail não verificado",
    USER_ALREADY_HAS_PASSWORD: "O usuário já possui uma senha. Forneça-a para excluir a conta.",

    // --- Erros de Sessão e Token ---
    SESSION_EXPIRED: "A sessão expirou. Autentique-se novamente para realizar esta ação.",
    INVALID_TOKEN: "Token inválido",
    ID_TOKEN_NOT_SUPPORTED: "Token de identificação não suportado",
    FAILED_TO_CREATE_SESSION: "Falha ao criar a sessão",
    FAILED_TO_GET_SESSION: "Falha ao obter a sessão",

    // --- Erros de Operações/Falhas Gerais ---
    FAILED_TO_CREATE_USER: "Falha ao criar o usuário",
    FAILED_TO_UPDATE_USER: "Falha ao atualizar o usuário",
    FAILED_TO_GET_USER_INFO: "Falha ao obter informações do usuário",

    // --- Erros de Provedor e Social ---
    PROVIDER_NOT_FOUND: "Provedor não encontrado",
    SOCIAL_ACCOUNT_ALREADY_LINKED: "Conta social já vinculada",
    FAILED_TO_UNLINK_LAST_ACCOUNT: "Não foi possível desvincular sua última conta",
} as const; // <--- O 'as const' é a chave para a tipagem estrita