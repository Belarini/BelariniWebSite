import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Script from 'next/script';
import CookieConsent from './components/cookieCosent';
import { TaskProvider } from "./components/taskContext";

const GA_MEASUREMENT_ID = 'G-VZ0GRT9TK4'; // Remplacez par votre ID, GT-T5R83JRW

const jetBrainsMono = JetBrains_Mono({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "BELARINI",
  description: "la société belarini vous propose ses services dans plusieurs domaines notamment l’espace vert ainsi que le terrasement",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* --------------------------------- */}
      <head>
        {/* Chargement du script Google */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      {/* --------------------------------- */}

      <body
        className={`${jetBrainsMono.className} antialiased dark:bg-white dark:text-black`}
      >
        <Menu />
        <TaskProvider>{children}</TaskProvider>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
