import { createClient } from "redis";

const redis = createClient({
    url : process.env.REDIS_URI
})

redis.on("error" , (error) => console.error("خطای ردس" , error))

await redis.connect()

export default redis