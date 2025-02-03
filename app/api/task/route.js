import { NextResponse } from "next/server";
import pool from '../../lib/db'

export async function GET(req, res) {
    try {
        console.log('GET');
        const [rows] = await pool.query('SELECT * FROM task')
        // const [rows, fields] = await connection.query('SELECT * FROM posts');
        return NextResponse.json(rows)
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(err)
    }
}
// export async function POST(req, res) {
//     try {
//         const data = await req.json()
//         const query = 'INSERT INTO task (title) (url) (description) VALUES (?) (?) (?) '
//         // const query = 'INSERT INTO users (name, firstName) VALUES (?, ?)'
//         const values = [data.name]
//         // const values = [data.name, data.firstName]
//         const result = await connection.query(query, values);
//         return NextResponse.json({message: 'user created'}, {status: 201})
//     }
//     catch (err) {
//         console.log(err);
//         return NextResponse.json(err)
//     }
// }
// export async function DELETE(req, res) {
//     try {
//         const data = await req.json()
//         const userName = data.name
//         const query = 'DELETE FROM users WHERE name = ?';
//         const result = await connection.query(query, userName)
//         return NextResponse.json({message: 'user deleted'}, {status: 200})
//     }
//     catch (err) {
//         console.log(err);
//         return NextResponse.json(err)
//     }
// }