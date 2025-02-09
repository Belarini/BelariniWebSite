"use client"
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Header() {

  const ulRef = useRef(null);
  const ul2Ref = useRef(null);
  const ul3Ref = useRef(null);
  const ulHRef = useRef(null);
  const ul4Ref = useRef(null);
  const imgRef = useRef(null);
  const img0Ref = useRef(null);
  const img1Ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.to('.moveTitle', {
      y: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".moveTitle",
        start: "top -5%",
        end: "bottom 10%",
        scrub: .5,
      }
    })
    gsap.from(ulRef.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(ul2Ref.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ul2Ref.current,
        start: "top 110%",
        end: "bottom 90%",
        // markers: true,
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
    gsap.from(ul3Ref.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ul3Ref.current,
       start: "top 110%",
        end: "bottom 90%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
    gsap.from(ulHRef.current, {
      opacity: 0,
      y: 150,
      scrollTrigger: {
        trigger: ulHRef.current,
       start: "top 110%",
        end: "bottom 90%",
        toggleActions: "play none none none",
        scrub: 2,
      },
    });
    gsap.from(ul4Ref.current.querySelectorAll("li"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ul4Ref.current,
        // markers: true,
       start: "top 110%",
        end: "bottom 90%",
        // toggleActions: "play none none none",
        scrub: 2,
      },
    });
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
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: img1Ref.current,
       start: "top 110%",
        end: "bottom 90%",
        // markers: true,
        // scrub: 0,
      },
    });



  }, []);


  return (
    <div className="flex items-center flex-col relative font-roboto font-sans">
      <section className="pt-[18vh] z-10 w-full flex flex-col items-center">
        <h1 className="font-serif text-gray-900 font-bold text-3xl uppercase p-4 m-4 border-b-2 border-black">espaces verts</h1>
        <div className="w-full lg:pl-6 bg-white">
          <h4 className="font-serif font-bold p-4 m-2 text-xl border-b-2 border-black max-w-max">notre savoir faire :</h4>
          <div className="lg:flex flex-row-reverse lg:justify-around items-center p-4">
            <div ref={imgRef} className="m-2 rounded-lg shadow-[1px_1px_13px_black]">
              <Image
                className="opacity-90 object-cover rounded-lg"
                src={'/escalier_jardin.jpg'}
                alt="Espaces verts"
                width={800}
                height={400}
              />
            </div>
            <div className="text-start">
              <ul className="pl-2 text-start" ref={ulRef}>
                <li className="py-2 text-lg">Démontage d’arbres</li>
                <li className="py-2 text-lg">Entretien de jardins</li>
                <li className="py-2 text-lg">Création de jardin</li>
                <li className="py-2 text-lg">Broyage</li>
                <li className="py-2 text-lg">Débroussaillage</li>
                <li className="py-2 text-lg">Tonte de gazon</li>
                <li className="py-2 text-lg">Élagage</li>
                <li className="py-2 text-lg">Taille de haie</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="lg:flex flex-row-reverse">
              <h4 className="font-serif font-bold p-4 m-2 lg:mr-20 text-xl border-b-2 border-black max-w-max">Aménagements extérieurs</h4>
            </div>
            <div className="lg:flex lg:justify-around items-center">
              <div ref={img0Ref} className="m-4 rounded-lg max-h-[400px] overflow-hidden shadow-[1px_1px_13px_black]">
                <Image
                  className="opacity-100 object-cover rounded-lg"
                  src={'/boulodrome_fini.jpg'}
                  alt="Boulodrome"
                  width={800}
                  height={400}
                />
              </div>
              <ul className="text-center" ref={ul2Ref}>
                <li className="py-2 text-lg">Terrain de boules</li>
                <li className="py-2 text-lg">Enrochement</li>
                <li className="py-2 text-lg">Création chemin d'accès</li>
                <li className="py-2 text-lg">Enlèvement de souches</li>
                <li className="py-2 text-lg">Piscine</li>
                <li className="py-2 text-lg">Pose de clôtures</li>
                <li className="py-2 text-lg">Mur en pierres sèches</li>
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
        <h1 className="font-serif text-gray-900 font-bold text-3xl uppercase p-4 m-4 border-b-2 border-black">Terrassement</h1>
        <div className="lg:flex w-full justify-around lg:pl-6 bg-white">
          <div className="">
            <ul className="p-4 pl-6" ref={ul3Ref}>
              <li className="py-2 text-lg">Fondation habitation</li>
              <li className="py-2 text-lg">Nivellement de terrain</li>
              <li className="py-2 text-lg">Réalisation emplacement piscine</li>
              <li className="py-2 text-lg">V.R.D.</li>
              <li className="py-2 text-lg">Fosse septique</li>
            </ul>
            <p ref={ulHRef} className="text-lg font-serif font-semibold text-center">Évacuation :</p>
            <ul className="p-6" ref={ul4Ref}>
              <li className="py-2 text-lg">Végétaux</li>
              <li className="py-2 text-lg">Terre</li>
              <li className="py-2 text-lg">Gravats</li>
              <li className="py-2 text-lg">D.I.B</li>
            </ul>
          </div>
          <div ref={img1Ref} className="m-4 rounded-lg max-w-[full]  max-h-[395px] overflow-hidden shadow-[1px_1px_13px_black]">
            <Image
              className="opacity-100 object-cover rounded-lg"
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
