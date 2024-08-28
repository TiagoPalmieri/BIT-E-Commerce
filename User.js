import db from './config.js'
class User {

    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?')
        return rows[0];
    }

    static async createUser(email, password) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?')
        if (!rows.length) {
            const [results] = await db.execute('INSERT INTO users (email, password_) VALUES (?,?)')
        }
        console.log('No fue posible agregar este usuario')
    }
}
