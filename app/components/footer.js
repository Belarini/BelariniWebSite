'use client'
import Image from "next/image";
import Link from "next/link";

export default function footer() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="">
            <ul className="flex justify-around items-center font-serif text-sm">
                <li><Link href={'/rgpd'}>CGV & RGPD</Link></li>
                <li>
                    <Image
                        src={'/belariniLogo.png'}
                        alt="logo entreprise"
                        className="cursor-pointer"
                        width={100}
                        height={100}
                        onClick={handleScrollToTop}
                    />
                </li>
            </ul>

        </footer>
    );
}