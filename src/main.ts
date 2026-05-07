import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./config/data-source";
import { connectRedis } from "./config/redis.config";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Base de datos conectada");

    await connectRedis();

    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`Servidor corriendo en http://localhost:${port}`),
    );
  } catch (error: any) {
    console.error("Error al iniciar la aplicación:", error.mesage);
    process.exit(1);
  }
}

main();
