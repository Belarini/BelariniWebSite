'use client';
import { useState, useContext } from 'react';
import { TaskContext } from './taskContext';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = '';

    // 1️⃣ Vérifier si une image est sélectionnée
    if (image) {
      const imageData = new FormData();
      imageData.append('file', image);
      imageData.append('upload_preset', 'mon_preset'); // 🔥 Remplace par ton preset Cloudinary
      console.log(imageData);
      
      // 2️⃣ Envoyer l’image à Cloudinary
      const cloudinaryResponse = await fetch(

        `/api/upload`,
        {
          method: 'POST',
          body: imageData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();
      imageUrl = cloudinaryData.imageUrl; // 🔗 Récupère l'URL sécurisée de l'image
    }

    // 3️⃣ Envoyer les données à notre API
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('imageUrl', imageUrl);

    const response = await fetch('/api/addTask', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Tâche ajoutée avec succès !');
      setTitle('');
      setDescription('');
      setImage(null);
      //---------------MAJ de TASKS-----------
      try {
        const res = await fetch("/api/task"); // Remplace par ton endpoint réel
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des tâches", error);
      }
      //-----------------------------------------
    } else {
      console.log(response);
      alert('Erreur lors de l’ajout de la tâche.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className='flex flex-col'>
        <label className='font-serif text-xl w-[100px]'>Localisation</label>
        <input className="border-2 p-2 rounded-lg" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className='flex flex-col'>
        <label className='font-serif text-xl w-[100px]'>Description</label>
        <input className="border-2 p-2 rounded-lg" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='flex flex-col'>
        <label className='font-serif text-xl w-[100px]'>Photo</label>
        <input id='image' type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" type="submit" disabled={loading}>
        {loading ? 'Envoi...' : 'Soumettre'}
      </button>
    </form>
  );
}
