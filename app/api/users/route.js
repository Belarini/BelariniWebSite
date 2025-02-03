import { NextResponse } from "next/server";
import pool from '../../lib/db'

export async function GET(req, res) {
    try {
        console.log('GET');
        const [rows] = await pool.query('SELECT * FROM users')
        // const [rows, fields] = await connection.query('SELECT * FROM posts');
        return NextResponse.json(rows)
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(err)
    }
}