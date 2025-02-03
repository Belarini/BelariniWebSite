"use client"
import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


export default function Header() {

  const refImg = useRef(null);
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

    gsap.from(".box", {
      y: 150,
      opacity: 0,
      duration: 1,
    });

    let st_box1 = ScrollTrigger.create({
      trigger: ".box1",
      start: "top 70%",
      end: "bottom 80%",
      // markers: true,
      // toggleActions: "play reverse play reverse"
    });
    gsap.from(".box1", {
      y: 150,
      opacity: 0,
      duration: .5,
      opacity: 1,
      scrollTrigger: st_box1
    });

    let st_box2 = ScrollTrigger.create({
      trigger: ".box2",
      start: "top 70%",
      end: "bottom 80%",
      // markers: true,
      // toggleActions: "play reverse play reverse"
    });
    gsap.fromTo(".box2", { y: -150, opacity: 0 }, { y: 0, opacity: 1, scrollTrigger: st_box2 });

    let st_box3 = ScrollTrigger.create({
      trigger: ".box3",
      start: "top 90%",
      end: "bottom 80%",
      // markers: true,
    });

    gsap.fromTo(".box3", { y: -150, opacity: 0 }, { y: 0, opacity: 1, scrollTrigger: st_box3 });
    gsap.fromTo(".box4", { y: -150, opacity: 0 }, { y: 0, opacity: 1, scrollTrigger: st_box3 });
  }, []);


  return (
    <div className="flex items-center flex-col">
      <div className="fixed w-screen h-[50vh] -z-10">
        <Image className="opacity-80" src={"/la_foret.jpg"} alt="la fôret" objectFit="cover" layout="fill" />
        <div className='moveTitle flex flex-col font-serif z-10 h-full w-full justify-center items-center text-3xl lg:text-5xl text-white'>
          <h3 className="z-10 uppercase mt-20">Nos réalisation</h3>
        </div>
      </div>
      <section className="mt-[50vh] bg-white z-20 w-full flex flex-col items-center">
        <div className="sm:px-6 sm:w-[80vw] w-screen sm:my-4">
          {/* <h3 className="font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6">PEYPIN</h3> */}
          <div className="flex justify-between">
            <h3 className="font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6">AVANT</h3>
            <h3 className="hidden lg:block font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6">APRES</h3>
          </div>
          <article className="lg:flex lg:justify-between gap-3 h-[30%] p-4">
            {/* <div className="sm:w-1/2">Texte un peu long mais le lorem ipsum ne marche plus ca casse les couilles ....</div> */}
            <div className="lg:w-2/4 h-[30vh] shadow-[1px_1px_13px_black] my-4 rounded-xl box">
              <Image
                src={"/avant.jpg"}
                alt="escalier bois jardin"
                className="rounded-xl"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="font-serif p-4 m-4 justify-center text-center">
              Réfection d'un <br /> chemin d'accès
            </div>
            <div className="lg:hidden flex justify-between">
              <h3 className="lg:hidden self-end font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6">APRES</h3>
            </div>
            <div className="lg:w-2/4 h-[30vh] shadow-[1px_1px_13px_black] my-4 rounded-xl box1">
              <Image
                src={"/apres.jpg"}
                alt="escalier bois jardin"
                className="rounded-xl"
                objectFit="cover"
                layout="fill"
              />
            </div>
            {/* <div className="relative sm:w-1/2 h-[30vh] shadow-[1px_1px_13px_black] my-4 rounded-xl box overflow-x-hidden">
              <Image
                src={"/escalier_jardin.jpg"}
                alt="escalier bois jardin"
                className="rounded-xl"
                objectFit="cover"
                layout="fill"
              />
            </div> */}
          </article>
        </div>
        <div className="flex flex-col sm:px-6 sm:w-[80vw] sm:my-4">
          <h3 className="font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6 text-end uppercase">boulodrome</h3>
          <article className="lg:flex justify-center items-center gap-3 h-[30%] p-4">
            <div className="lg:w-2/4 h-[30vh] rounded-xl shadow-[1px_1px_13px_black] my-4 box2">
              <Image
                src={"/pelle_boulodrome.jpg"}
                alt="boulodrome jardin"
                className="rounded-xl"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="lg:w-1/5 m-4">Aménagement de jardin, réalisation de murs en pierre seches, boulodrome, piscine...</div>
            <div className="lg:w-2/4 h-[30vh] rounded-xl shadow-[1px_1px_13px_black] my-4 box3">
              <Image
                src={"/boulodrome_fini.jpg"}
                alt="boulodrome jardin"
                className="rounded-xl"
                objectFit="cover"
                objectPosition="top"
                layout="fill"
              />
            </div>
          </article>
        </div>
        <div className="sm:px-6 sm:w-[80vw] sm:my-4">
          <h3 className="font-serif p-4 shadow-sm text-3xl border-b-2 border-black m-6">AUBAGNE</h3>
          <article className="lg:flex justify-center items-center gap-3 h-[30%] p-4">
            <div className="lg:w-1/2">Texte un peu long mais le lorem ipsum ne marche plus ca casse les couilles ....</div>
            <div className="relative lg:w-1/2 h-[30vh] shadow-[1px_1px_13px_black] my-4 rounded-xl box4">
              <Image
                src={"/terrassement.webp"}
                alt="engin réalisant un terrassement"
                className="rounded-xl"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
