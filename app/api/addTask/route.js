import { NextResponse } from 'next/server';
import pool from '../../lib/db';


export const config = {
  api: {
    bodyParser: false,
  },
};
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//---------------------------------FAIRE POSSIBILITE DE MODIFIER----------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------------------------------------
// Nouvelle route PUT pour mettre à jour une tâche existante
export async function PUT(req) {
  try {
    const formData = await req.formData();
    
    // Récupération des données du formulaire
    const taskId = formData.get('taskId');
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    
    // Vérification que l'ID de la tâche est fourni
    if (!taskId) {
      return NextResponse.json({
        success: false,
        message: 'Task ID is required'
      }, { status: 400 });
    }
    
    const connection = await pool.getConnection();
    console.log('Database connection established for update');
    
    // Construction de la requête SQL dynamique
    let updateQuery = 'UPDATE task SET ';
    const updateValues = [];
    const updateFields = [];
    
    if (title) {
      updateFields.push('title = ?');
      updateValues.push(title);
    }
    
    if (description) {
      updateFields.push('description = ?');
      updateValues.push(description);
    }
    
    if (imageUrl) {
      updateFields.push('imageUrl = ?');
      updateValues.push(imageUrl);
    }
    
    // Si aucun champ à mettre à jour n'est fourni
    if (updateFields.length === 0) {
      connection.release();
      return NextResponse.json({
        success: false,
        message: 'No fields to update provided'
      }, { status: 400 });
    }
    
    // Finalisation de la requête SQL
    updateQuery += updateFields.join(', ');
    updateQuery += ' WHERE id = ?';
    updateValues.push(taskId);
    
    // Exécution de la requête de mise à jour
    await connection.query(updateQuery, updateValues);
    connection.release();
    console.log('Task updated in database');
    
    return NextResponse.json({
      success: true,
      message: 'Task updated successfully',
      taskId: taskId
    });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({
      success: false,
      message: 'Task update failed'
    }, { status: 500 });
  }
}