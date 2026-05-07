import { createClient, RedisClientType } from "redis";

const clientRedis: RedisClientType = createClient({
  url: "redis://127.0.0.1:6379",
});

clientRedis.on("error", (err: Error) => {
  console.error("Redis connection error:", err);
});

export async function connectRedis() {
  await clientRedis.connect();

  console.log("Redis conectado");
}

export default clientRedis;
