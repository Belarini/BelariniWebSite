import { NextResponse } from 'next/server';
import pool from '../../lib/db';
import multer from 'multer';
import path from 'path';
// 
import { writeFile } from 'fs/promises'
import { join } from 'path';
import { promises as fs } from 'fs';

// Crée un dossier d'uploads si nécessaire
const uploadDir = path.join(process.cwd(), 'public/uploads');
await fs.mkdir(uploadDir, { recursive: true });

// Configuration de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const uniqueName = `${timestamp}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  // limits: { fileSize: 5 * 1024 * 1024 }, // Limite : 5 MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
      return cb(new Error('Seuls les fichiers images sont autorisés'));
    }
    cb(null, true);
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {

  try {
    const formData = await req.formData()
    const file = formData.get('file')

    const title = formData.get('title')
    const description = formData.get('description')
    const filenameDb = `${Date.now()}-${file.name}`
    // console.log('formData', formData);
    const connection = await pool.getConnection();
    console.log('Database connection established');
    await connection.query('INSERT INTO task (title, description, imageUrl) VALUES (?, ?, ?)', [title, description, filenameDb]);
    connection.release();
    console.log('Task inserted into database');


    if (!file) {
      return NextResponse.json({
        success: false,
        message: 'No file uploaded'
      }, { status: 400 })
    }

    // Convert File to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    // const filename = `${Date.now()}-${file.name}`
    const path = join(process.cwd(), 'public', 'uploads', filenameDb)

    // Write file
    await writeFile(path, buffer)

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      filename: filenameDb
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({
      success: false,
      message: 'File upload failed'
    }, { status: 500 })
  }
}
