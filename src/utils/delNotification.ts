import redis from "@/db/redis"


export default async function delNotification(userId: string) {
    await redis.del(`notification:${userId}`)
    await redis.del(userId)
}