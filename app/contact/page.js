"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useState, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
// import LeafletMapComponent from "../components/leafletMaps";

const LeafletMapComponentNoSSR = dynamic(
    () => import('../components/leafletMaps'),
    { ssr: false }
  )
    
export default function page() {
    let i = 0;
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.to('.moveTitle', {
            y: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".moveTitle",
                start: "top 10%",
                end: "bottom 30%",
                scrub: .5,
            }
        })
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        setStatus("Envoi en cours...");
        try {
            const response = await fetch("/api/contact", {
            // const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message envoyé avec succès !");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Erreur lors de l'envoi du message.");
            }
        } catch (error) {
            setStatus("Erreur de réseau.");
        }
    };

    return (
        <div>
            <div className="pt-[18vh]">
                <div className="relative">
                    <div className="fixed w-screen h-[50vh] -z-10">
                        <Image className="opacity-80" src={'/foret_contact.jpg'} alt='chemin en forêt' layout='fill' objectFit='cover' />
                        <div className='moveTitle flex flex-col font-serif z-10 h-full w-full justify-center items-center text-5xl sm:text-7xl text-white'>
                            <h2 className='z-10 uppercase mb-4'>contact</h2>
                            <p className='z-10 text-2xl'>Votre cas est particulier ?</p>
                            <p className='z-10 text-2xl'>Contactez nous.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-[50vh] bg-white z-20 text-xl p-6">
                    <div className="p-2"><Image src={'/belariniLogo.png'} alt="logo entreprise" width={200} height={200} /></div>
                    <div className="p-2">06 65 30 03 55</div>
                    <div className="p-2">belariniespacesverts@gmail.com</div>
                </div>
                <div className="self-start p-2 text-sm border-b-2 bg-white z-20 font-serif"></div>
                <div className='flex flex-col sm:flex-row bg-white z-20'>
                    <div className="flex flex-col  sm:w-1/2 sm:p-20 p-10">
                        <form className="flex gap-3 flex-col text-xl" action={handleSubmit}>
                            <label htmlFor="name" className="font-bold">Nom <span className="text-red-500">*</span></label>
                            <input
                                className="border-2 pl-4 md:w-2/3"
                                required
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="email" className="font-bold">e-mail <span className="text-red-500">*</span></label>
                            <input
                                className="border-2 pl-4 md:w-2/3"
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="message" className="font-bold">Message <span className="text-red-500">*</span></label>
                            <textarea className="border-2 pl-4"
                                required
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <button className="w-max py-2 px-4 m-4 rounded-full bg-gray-100 hover:bg-gray-200" type="submit">Envoyer</button>
                        </form>
                        {status && <p className="mt-4 text-sm">{status}</p>}
                    </div>
                    <div className="flex flex-col sm:w-1/2">
                        <LeafletMapComponentNoSSR />
                    </div>
                </div>
            </div>
        </div>
    );
}
