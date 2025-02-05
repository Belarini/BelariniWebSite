'use client'
import AddTask from "../components/addtask";
import { doAdmin } from "../api/addTask/action";
import { useState } from 'react'

export default function page() {
    const [userAdmin, setUserAdmin] = useState(false);
    const [password, setPassword] = useState("");

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
                <div className="flex flex-col justify-center items-center pl-4 pt-[18vh] h-[82vh]">
                    <div className="border-t-2 border-black w-[80vw]">
                        <h3 className="text-3xl">Ajouter un chantier :</h3>
                    </div>
                    <AddTask />
                    <button className="m-6 p-2 bg-gray-200 hover:bg-gray-300 rounded-xl" onClick={handleQuit}>Quitter</button>
                </div>
            }
        </>
    );
}