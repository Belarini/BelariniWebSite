"use client"
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function page() {
    gsap.registerPlugin(ScrollTrigger);
    const imgRef = useRef(null);
    const img0Ref = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    useEffect(() => {
        gsap.to('.moveTitle', {
            y: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".moveTitle",
                start: "top 10%",
                end: "bottom 30%",
                // markers: true,
                scrub: 1,
            }
        })
        gsap.from(imgRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });
        gsap.from(img0Ref.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: img0Ref.current,
                start: "top 110%",
                end: "bottom 90%",
                // markers: true,
                scrub: 2,
            },
        });
        gsap.from(img1Ref.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: img1Ref.current,
                start: "top 110%",
                end: "bottom 90%",
                // markers: true,
                scrub: 2,
            },
        });
        gsap.from(img2Ref.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: img2Ref.current,
                start: "top 110%",
                end: "bottom 90%",
                // markers: true,
                scrub: 2,
            },
        });
        gsap.from(img3Ref.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: img3Ref.current,
                start: "top 110%",
                end: "bottom 80%",
                // markers: true,
                scrub: 2,
            },
        });
    }, []);

    return (
        <div className="flex flex-col items-center text-lg">
            <div className="mt-[18vh] relative w-full">
                <div className="w-full h-[30vh] -z-10">
                    <Image
                        className="object-cover"
                        src={'/qui_foret.jpg'}
                        alt='chemin en forêt'
                        fill
                    />
                    <div className='moveTitle flex flex-col font-serif z-10 h-full w-full text-center justify-center items-center text-4xl sm:text-7xl text-white'>
                        <h2 className='z-10 uppercase mb-2'>Qui Sommes nous</h2>
                        <p className='z-10 text-2xl'>Contactez nous.</p>
                    </div>
                </div>
            </div>
            <section className="z-10 md:w-[80%] flex flex-col items-center">
                <div className="p-2">
                    <p>
                        <span className="font-bold border-b-2 border-black mb-4 p-4 inline-block text-xl">Notre zone d'intervention dans le Var et les Bouches-du-Rhône</span>< br/>
                        La société
                        <span className="font-serif font-bold text-xl p-2"> Belarini </span>
                        intervient principalement sur Aubagne, Saint-Maximin-la-Sainte-Baume, Aix-en-Provence et dans les communes alentours, dans un rayon de 50 kilomètres autour de Belcodène.<br />
                        Nous nous déplaçons dans le Var (83)
                        du côté de Saint-Maximin-la-Sainte-Baume ou les Bouches-du-Rhône (13) pour réaliser tous vos travaux.
                    </p>
                </div>
                <div className="p-2">
                    <div className="lg:flex gap-3">
                        <h1 className="lg:self-center">Parmi les villes dans lesquelles nous intervenons régulièrement, nous pouvons citer :</h1>
                        <Image
                            ref={imgRef}
                            src={'/deplacement.png'}
                            alt="mini pelle dans benne pour déplacement en véhicule"
                            className="rounded-xl shadow-[1px_1px_13px_black] my-4"
                            height={400}
                            width={500}
                        />
                    </div>
                    <ul className="m-4 list-disc">
                        <li className="pt-4">
                            La Destrousse, Belcodène, Fuveau, Gréasque, Géménos, Roquevaire, Aubagne
                        </li>
                        <li className="pt-4">
                            Marseille, Saint-Savournin, Trets, Peynier, Peypin, Allauch, Plan de Cuques
                        </li>
                        <li className="pt-4">
                            Aix-en-Provence, Beaurecueil, Chateauneuf-le-Rouge, Cadolive, Mimet, Bouc-Bel-Air, Simiane, Nans-les-Pins, Saint-Zacharie
                        </li>
                    </ul>
                </div>
                <div className="p-2">
                    N'hésitez pas à nous contacter même si vous n'apparaissez pas dans cette liste.<br/> Nous étudierons la faisabilité du chantier et pourront certainement nous déplacer sans frais supplémentaires.
                </div>
                <div className="p-2">
                    <h2 className="py-6 font-bold text-xl inline-block border-b-2 border-black mb-4">Nos prestations d'élagage et services associés</h2>
                    <p>
                        En tant que professionnels de l'élagage et de l'entretien des arbres, nous vous proposons une gamme complète de services pour répondre à tous vos besoins.<br/> Nous adaptons nos techniques et notre matériel à chaque situation pour une prestation sur-mesure et de qualité.<br/>
                        Élagage et taille douce des arbres
                        L'élagage est une intervention régulière indispensable pour préserver la santé, la beauté et la sécurité de vos arbres.
                    </p>
                    <div className="flex flex-col lg:items-center">
                        <h3 className="font-bold  border-b-2 border-black mb-4 py-4">
                            Notre équipe procède à différents types de tailles en fonction de vos objectifs :
                        </h3>
                        <ul className="grid grid-cols-1 m-4">
                            <li className="py-4">
                                <div className="lg:flex flex-row-reverse gap-10">
                                    <p className="lg:w-1/2 self-center"><span className="font-bold  border-b-2 border-black mb-4 pt-4 inline-block">Taille de formation :</span><br/> pour donner une forme harmonieuse aux jeunes arbres</p>
                                    <Image
                                        ref={img0Ref}
                                        src={'/tailleHarmonie.png'}
                                        alt="taille harmonieuse"
                                        className="rounded-xl shadow-[1px_1px_13px_black] my-4 flex-1"
                                        height={400}
                                        width={500}
                                    />
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="lg:flex gap-10">
                                    <p className="lg:w-1/2 self-center"><span className="font-bold  border-b-2 border-black mb-4 pt-4 inline-block">Taille d'entretien :</span><br/> pour supprimer les branches mortes, malades ou mal orientées</p>
                                    <Image
                                        ref={img1Ref}
                                        src={'/tailleEntretien.png'}
                                        alt="taille d'une haie"
                                        className="rounded-xl shadow-[1px_1px_13px_black] my-4 flex-1"
                                        height={400}
                                        width={500}
                                    />
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="lg:flex flex-row-reverse gap-10">
                                    <p className="lg:w-1/2 self-center"><span className="font-bold  border-b-2 border-black mb-4 pt-4 inline-block">Taille d'éclaircissage :</span><br/> pour alléger la couronne de l'arbre en supprimant certaines branches</p>
                                    <Image
                                        ref={img2Ref}
                                        src={'/altitude.png'}
                                        alt="taille d'arbre en altitude"
                                        className="rounded-xl shadow-[1px_1px_13px_black] my-4 flex-1"
                                        height={400}
                                        width={500}
                                    />
                                </div>
                            </li>
                            <li className="py-4">
                                <div className="lg:flex gap-10">
                                    <p className="lg:w-1/2 self-center"><span className="font-bold  border-b-2 border-black mb-4 pt-4 inline-block">Taille douce :</span><br/> une méthode respectueuse de l'arbre visant à réduire la prise au vent et le poids des branches</p>
                                    <Image
                                        ref={img3Ref}
                                        src={'/tailleDouce.png'}
                                        alt="taille douce"
                                        className="rounded-xl shadow-[1px_1px_13px_black] my-4 flex-1"
                                        height={400}
                                        width={500}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}