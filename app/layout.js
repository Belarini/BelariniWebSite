import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BELARINI",
  description: "la société belarini vous propose ses services dans plusieurs domaines notamment l’espace vert ainsi que le terrasement",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-white dark:text-black`}
      >
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
