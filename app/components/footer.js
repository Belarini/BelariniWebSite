import Image from "next/image";
import Link from "next/link";

export default function footer() {

    return (
        <footer className="">
            <ul className="flex justify-around items-center font-serif text-sm">
                <li><Link href={'/rgpd'}>CGV & RGPD</Link></li>
                <li><Image src={'/belariniLogo.png'} alt="logo entreprise" width={100} height={100} /></li>
            </ul>

        </footer>
    );
}