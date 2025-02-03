'use client'
import { useState } from 'react';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', image);


    // Vérifiez le contenu de FormData
    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    const userResponse = await fetch('/api/addTask', {
      method: 'POST',
      body: formData,
    });
    console.log('userResponse', userResponse.body);
    
    if (userResponse.ok) {
      alert('Tâche ajoutée avec succès !');
    } else {
      alert('Une erreur est survenue.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" type="submit">Soumettre</button>
    </form>
  );
}
