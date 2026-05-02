import 'reflect-metadata';
import 'dotenv/config'
import app from './app';
import { AppDataSource } from './config/data-source';

async function main(){

    await AppDataSource.initialize()

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))
}

main();


