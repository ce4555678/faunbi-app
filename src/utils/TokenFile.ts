import jwt from "jsonwebtoken";

const key = process.env.KEY_JWT as string;

export function genTokenFile({
    filename,
    file,
    size,
    userId,
    type
}: {
    filename: string;
    file: string;
    size: number;
    userId: string;
    type: string
}) {
    return jwt.sign(
        { userId, filename, key: file, size, type },
        key,
        { expiresIn: "15m" } // 15 minutos
    );
}

export function decodeTokenFile(token: string) {
    try {
        const decoded = jwt.verify(token, key) as {
            filename: string;
            key: string;
            userId: string;
            size: number;
            type: "audio" | "video"
        };

        return decoded;
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            console.error("Token inválido:", error.message);
            return null;
        }
        throw error;
    }
}
