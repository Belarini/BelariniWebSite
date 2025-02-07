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
export async function DELETE(req) {
    try {
        const { id } = await req.json();

        const query = 'DELETE FROM task WHERE id = ?';
        await pool.query(query, [id]);

        return NextResponse.json({ message: 'Tâche supprimée' }, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de la suppression de la tâche:', error);
        return NextResponse.json({ message: 'Échec de la suppression de la tâche' }, { status: 500 });
    }
}