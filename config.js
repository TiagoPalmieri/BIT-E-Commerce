import dotenv from 'dotenv';
import mysql from 'mysql2';
import app from './app';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Conexion a la db

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

app.listen(PORT, ()=>{
    console.log(`Serbidor corriendo en http://localhost:${PORT}`);
});

module.exports = db;
