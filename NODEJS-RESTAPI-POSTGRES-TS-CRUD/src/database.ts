import { Pool } from "pg";

export const pool = new Pool({
    user: 'vats',
    host: 'localhost',
    password: '325577',
    database: 'firstapi',
    port: 5432}
)