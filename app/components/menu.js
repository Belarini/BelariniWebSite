"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import gsap from "gsap";
import { RiAdminFill } from "react-icons/ri";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        gsap.from('.animated', {
            width: 0,
            duration: .3,
        })
    }, [isOpen]);

    return (
        <nav className="fixed h-[18vh] z-30 bg-white flex lg:justify-around justify-between items-center w-screen font-serif font-extrabold uppercase text-lg">
            <Link className="w-[200px] text-center p-3" href={'/'}>
                <Image src={"/belariniLogo.png"} alt="belarini Logo" width={150} height={100} />
            </Link>
            <ul className="hidden md:flex gap-10">
                <Link className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/'}>Accueil</Link>
                <Link className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/task'}>Travaux</Link>
                <Link className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/contact'}>Contact</Link>
                <div className="flex items-center">
                    <Link aria-label="menu admin" className=" text-center p-3 border-[3px] border-transparent hover:border-black" href={'/admin'}><RiAdminFill /></Link>
                </div>
            </ul>
            <button aria-label="menu" className="md:hidden p-6 mr-4" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w.org/http/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} w-full absolute top-[15vh] bg-white animated`}>
                <ul className="flex flex-col left-0 items-center border-x-2 border-b-2">
                    <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/'}>Accueil</Link>
                    <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/task'}>Travaux</Link>
                    <Link onClick={() => setIsOpen(false)} className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/contact'}>Contact</Link>
                    <div>
                        <Link onClick={() => setIsOpen(false)} aria-label="menu admin" className="w-[150px] text-center p-3 border-[3px] border-transparent hover:border-black" href={'/admin'}><RiAdminFill /></Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
}