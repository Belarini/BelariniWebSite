import { NextResponse } from 'next/server';
import pool from '../../lib/db';


export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {

  try {
    const formData = await req.formData()
    // const file = formData.get('file')

    const title = formData.get('title')
    const description = formData.get('description')
    const imageUrl = formData.get('imageUrl')
    const connection = await pool.getConnection();
    console.log('Database connection established');
    await connection.query('INSERT INTO task (title, description, imageUrl) VALUES (?, ?, ?)', [title, description, imageUrl]);
    connection.release();
    console.log('Task inserted into database');

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      imageUrl: imageUrl
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({
      success: false,
      message: 'File upload failed'
    }, { status: 500 })
  }
}
