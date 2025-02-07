'use client'
import AddTask from "../components/addtask";
import { doAdmin } from "../api/addTask/action";
import { use, useEffect, useState } from 'react'

export default function page() {
    const [userAdmin, setUserAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [tasks, setTasks] = useState([]);
    // -----------------------------------------
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [confirmationText, setConfirmationText] = useState('');
    // -----------------------------------------

    useEffect(() => {
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            });
    }, [])

    const handleChange = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('password', password);

        const response = await doAdmin({ password })

        if (response === true) {
            console.log('ok');
            setUserAdmin(true);
            setPassword("");
        } else {
            console.log('non');
            alert("Mauvais mot de passe");
        }
    };

    const handleQuit = () => {
        setUserAdmin(false);
    };
    // -----------------------------------------
    const handleDelete = async () => {
        const textToConfirm = confirmationText.trim().toUpperCase();
        if (textToConfirm !== 'SUPPRIMER') {
            alert('Le texte de confirmation est incorrect.');
            return;
        }

        try {
            // Supprimer l'image de Cloudinary
            const public_id_rework = taskToDelete.imageUrl.split('image')
            const public_id = public_id_rework[1].split('/')

            let fileName = public_id[4].replace(/(\.jpg)+$/, ".jpg")
            const result = `${public_id[3]}/${fileName}`

            
            await fetch('/api/upload', {
                method: 'DELETE',
                body: JSON.stringify({ public_id: result }),
            });

            // Supprimer la tâche de la base de données
            // -----------------------------------------
            await fetch('/api/task', {
                method: 'DELETE',
                body: JSON.stringify({ id: taskToDelete.id }),
            });

            // Mettre à jour l'état des tâches
            setTasks(tasks.filter(task => task.id !== taskToDelete.id));

            setIsModalOpen(false);
            setConfirmationText('');
        } catch (error) {
            console.error('Erreur lors de la suppression de la tâche:', error);
        }
    };
    // -----------------------------------------
    return (
        <>
            {userAdmin === false ?
                <div className="flex flex-col justify-center items-center pl-4 pt-[18vh] h-[82vh]">
                    <form className="flex flex-col" onSubmit={handleChange}>
                        <label className="font-serif p-4 m-2">Mdp Admin :</label>
                        <input
                            className="border-2 p-2 ml-4 rounded-lg"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            required
                        />
                        <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" type="submit" >Espace réservé</button>
                    </form>
                </div>
                :
                <>
                    <div className="flex flex-col justify-center items-center pl-4 pt-[18vh] h-[82vh]">
                        <div className="border-t-2 border-black w-[80vw]">
                            <h3 className="text-3xl">Ajouter un chantier :</h3>
                        </div>
                        <AddTask />
                        <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" onClick={handleQuit}>Quitter</button>
                    </div>
                    <div className="flex flex-col justify-center items-center pl-4">
                        {tasks.map((task, index) => {
                            return (
                                <div key={index} className="flex gap-2 justify-around items-center min-h-10 border-b-black border-2 lg:max-w-[30vw] lg:min-w-[30vw]">
                                    <div>{index + 1}</div>
                                    <div className="w-1/3">
                                        {task.title}
                                    </div>
                                    <div className="w-1/3 border-x-2 border-black p-2">
                                        {task.description}
                                    </div>
                                    <button
                                        className="bg-gray-300 rounded-full p-2 hover:bg-gray-400"
                                        onClick={() => {
                                            setTaskToDelete(task);
                                            setIsModalOpen(true);
                                        }}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    {/*  */}
                    {isModalOpen && (
                        <div
                            className="modal"
                            style={{
                                position: "fixed", top: 30, left: 0, width: "100vw", height: "100vh",
                                background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <div className="modal-content text-3xl text-white flex flex-col p-4">
                                <h2 className="p-4">Confirmer la suppression</h2>
                                <p className="p-4">Veuillez taper "SUPPRIMER" pour confirmer.</p>
                                <input
                                    className="p-4 w-1/2 self-center text-black"
                                    type="text"
                                    value={confirmationText}
                                    onChange={(e) => setConfirmationText(e.target.value)}
                                />
                                <div className="self-center m-2">
                                    <button className="p-4 rounded-full hover:bg-gray-200 hover:text-black" onClick={handleDelete}>Confirmer</button>
                                    <button className="p-4 rounded-full hover:bg-gray-200 hover:text-black" onClick={() => setIsModalOpen(false)}>Annuler</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/*  */}
                </>
            }
        </>
    );
}