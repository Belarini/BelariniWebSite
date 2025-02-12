'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function footer() {
    const refFoot = useRef(null);
    const refBorder = useRef(null);
    useEffect(() => {
        gsap.from(refFoot.current.querySelectorAll("span"), {
            opacity: 0,
            y: -150,
            color: 'red',
            stagger: 0.8,
            scrollTrigger: {
                trigger: refFoot.current,
                // markers: true,
                start: "top 110%",
                end: "bottom 100%",
                // toggleActions: "play none none none",
                scrub: 2,
            },
        });
        gsap.from(refBorder.current, {
            opacity: 0,
            border: '0px solid red',
            scrollTrigger: {
                trigger: refBorder.current,
                start: "top 110%",
                end: "bottom 100%",
                // toggleActions: "play none none none",
                scrub: 2,
            },
        });
    }, []);
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="flex flex-col bg-white">
            <div ref={refFoot} className="flex justify-center font-serif text-center text-4xl lg:text-7xl p-[5vh]">
                <div ref={refBorder} className="border-4 border-black px-4 py-4 w-max">
                    <span className="inline-block">B</span>
                    <span className="inline-block">E</span>
                    <span className="inline-block">L</span>
                    <span className="inline-block">A</span>
                    <span className="inline-block">R</span>
                    <span className="inline-block">I</span>
                    <span className="inline-block">N</span>
                    <span className="inline-block">I</span>
                </div>
            </div>
            <ul className="flex flex-col font-serif text-sm">
                <li onClick={handleScrollToTop} className="self-end p-4 mx-4 text-white bg-gray-300 rounded-full cursor-pointer">
                    <FaArrowUp />
                </li>
                <li>
                    <div className="flex items-center justify-between p-4">
                        <Link href={'/rgpd'}>CGV & RGPD</Link>
                        <ul className="flex gap-3 text-2xl cursor-pointer">
                            <li><FaInstagram /></li>
                            <li><FaFacebook /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </li>
            </ul>

        </footer>
    );
}