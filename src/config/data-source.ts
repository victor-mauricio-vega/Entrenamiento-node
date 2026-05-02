import 'reflect-metadata';
import 'dotenv/config'
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'DB',
    port: Number(process.env.DB_PORT) || 5432,
    synchronize: false,
    entities: [User],
    migrations: ['src/migrations/*.ts'],
})

