"use client"
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Header() {

  const ulRef = useRef(null);
  const ul2Ref = useRef(null);
  const ul3Ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.to('.moveTitle', {
      y: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".moveTitle",
        start: "top -5%",
        // markers: true,
        end: "bottom 10%",
        scrub: .5,
      }
    })
    // if (ulRef.current) {
    gsap.from(ulRef.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      // scrollTrigger: {
      //   trigger: ulRef.current,
      //   start: "top 80%",
      //   end: "bottom 20%",
      //   toggleActions: "play none none none",
      // },
    });
    // }
    // if (ul2Ref.current) {
    gsap.from(ul2Ref.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ulRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    // }


  }, []);


  return (
    <div className="flex items-center flex-col relative">
      <section className="pt-[18vh] z-10 w-full flex flex-col items-center">
        <h1 className="font-serif text-gray-900 font-bold text-4xl uppercase p-4 m-4 border-b-2 border-black">espaces verts</h1>
        <div className="w-full lg:pl-6 bg-white">
          <h4 className="font-serif font-bold p-4 m-2 text-xl border-b-2 border-black max-w-max">notre savoir faire :</h4>
          <div className="lg:flex flex-row-reverse lg:justify-around items-center p-4">
            <div className="m-2 rounded-lg shadow-[1px_1px_13px_black]">
              <Image
                className="opacity-80 object-cover rounded-lg"
                src={'/escalier_jardin.jpg'}
                alt="Espaces verts"
                width={800}
                height={400}
              />
            </div>
            <div className="text-center p-6 lg:text-start">
              <ul className="list-disc pl-6" ref={ulRef}>
                <li className="py-2 text-lg">démontage d’arbres🌴</li>
                <li className="py-2 text-lg">entretien de jardins ♻</li>
                <li className="py-2 text-lg">création de jardin</li>
                <li className="py-2 text-lg">broyage</li>
                <li className="py-2 text-lg">débroussaillage</li>
                <li className="py-2 text-lg">tonte de gazon</li>
                <li className="py-2 text-lg">élagage</li>
                <li className="py-2 text-lg">taille de haie</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="lg:flex flex-row-reverse">
              <h4 className="font-serif font-bold p-4 m-2 lg:mr-20 text-xl border-b-2 border-black max-w-max">Aménagements extérieurs 🏗</h4>
            </div>
            <div className="lg:flex lg:justify-around items-center">
              <div className="m-4 rounded-lg max-h-[400px] overflow-hidden shadow-[1px_1px_13px_black]">
                <Image
                  className="opacity-80 object-cover rounded-lg"
                  src={'/boulodrome_fini.jpg'}
                  alt="Boulodrome"
                  width={800}
                  height={400}
                />
              </div>
              <ul className="list-disc pl-6" ref={ul2Ref}>
                <li className="py-2 text-lg">Terrain de boules</li>
                <li className="py-2 text-lg">Enrochements</li>
                <li className="py-2 text-lg">Création chemin d'acces</li>
                <li className="py-2 text-lg">Enlevement de souches</li>
                <li className="py-2 text-lg">Piscine</li>
                <li className="py-2 text-lg">Pose de clôtures</li>
                <li className="py-2 text-lg">Mur en pierre sèche</li>
                <li className="py-2 text-lg">Pose de gazon</li>
                <li className="py-2 text-lg">Pose terrasse en bois</li>
                <li className="py-2 text-lg">Arrosage automatique</li>
                <li className="py-2 text-lg">Abris voiture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <h1 className="font-serif text-gray-900 font-bold text-4xl uppercase p-4 m-4 border-b-2 border-black">Terrassement</h1>
        <div className="lg:flex w-full justify-around lg:pl-6 bg-white">
          <div>
            {/* <h4 className="font-serif font-bold p-4 m-2 text-xl">notre savoir faire :</h4> */}
            <ul className="list-disc p-4 pl-6">
              <li className="py-2">Fondation habitation</li>
              <li className="py-2">Nivellement de terrain</li>
              <li className="py-2">Réalisation emplacement piscine</li>
              <li className="py-2">V.R.D</li>
              <li className="py-2">Fosse septique</li>
            </ul>
            <p className="text-lg font-serif pl-4">Evacuation :</p>
            <ul className="list-disc p-6">
              <li className="py-2">Végétaux</li>
              <li className="py-2">Terre</li>
              <li className="py-2">Gravats</li>
              <li className="py-2">D.I.B</li>
            </ul>
          </div>
          <div className="m-4 rounded-lg max-h-[400px] overflow-hidden shadow-[1px_1px_13px_black]">
            <Image
              className="opacity-80 object-cover rounded-lg"
              src={'/terrassement.webp'}
              alt="terrassement"
              width={800}
              height={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
