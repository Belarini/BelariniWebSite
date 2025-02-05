'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function page() {

    gsap.registerPlugin(ScrollTrigger);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTasks(data);
            });
        gsap.to('.moveTitle', {
            y: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".moveTitle",
                start: "top -10%",
                // markers: true,
                end: "bottom 10%",
                scrub: .5,
            }
        })

    }, []);

    return (
        <div className="">
            <div className="fixed w-screen h-[45vh] -z-10">
                <Image className="opacity-80 object-cover" src={"/la_foret.jpg"} alt="la fôret" fill />
                <div className='moveTitle flex flex-col font-serif z-10 h-full w-full justify-center items-center text-3xl lg:text-5xl text-white'>
                    <h3 className="z-10 uppercase mt-20">Nos réalisation</h3>
                </div>
            </div>
            <div className="pt-[50vh] grid md:grid-cols-2 z-10">
                {tasks.map((task, index) => {
                    return (
                        <div key={index} className="w-full items-center gap-3 max-h-max p-4 bg-white min-h-[125%]">
                            <h2 className="font-serif max-w-max p-4 shadow-sm text-3xl border-b-2 border-black m-6">{task.title}</h2>
                            <div className="justify-self-center flex w-full lg:w-2/3 h-[30vh] rounded-xl shadow-[1px_1px_13px_black] my-4 relative box">
                                <Image
                                    src={`${task.imageUrl}`}
                                    className="rounded-xl object-cover"
                                    alt={task.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                                />
                            </div>
                            {task.description ?
                                <p className="font-serif min-h-[12%] p-4 justify-center text-center">{task.description}</p>
                                :
                                <div className="p-4 min-h-[12%] justify-center"></div>
                            }
                        </div>
                    )
                })}
            </div>

        </div>
    );
}