import { createPool } from "mysql2";
import dotenv from 'dotenv'
dotenv.config()

export default createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'firm'
}).promise()