import redis from "@/db/redis";

export async function uploadExpiresToken(token: string) {
    await redis.set(`token-upload:${token}`, true, {
        ex: 60 * 60,
    });
}
export async function isUploadExpiresToken(token: string) {
    const isTokenExpires = (await redis.get(`token-upload:${token}`)) as boolean;

    if (isTokenExpires) return true;

    return false;
}
