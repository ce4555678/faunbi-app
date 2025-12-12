import db from "@/db";
import redis from "@/db/redis";
import { betterAuth, BASE_ERROR_CODES } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin, captcha, } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    plugins: [admin(), nextCookies(),
    captcha({
        provider: "cloudflare-turnstile",
        secretKey: process.env.TURNSTILE_SECRET_KEY!,
    }),
    ],
    secondaryStorage: {
        get: async (key: string) => {
            const prefix = "auth-secondary:";
            const item = await redis.get(`${prefix}${key}`);
            return item;
        },
        set: async (key: string, value: string, ttl?: number) => {
            const prefix = "auth-secondary:";
            if (ttl) {
                await redis.set(`${prefix}${key}`, value, {
                    ex: ttl,
                });
            } else {
                await redis.set(`${prefix}${key}`, value);
            }
        },
        delete: async (key: string) => {
            const prefix = "auth-secondary:";
            await redis.del(`${prefix}${key}`);
        },
    },
});