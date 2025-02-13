'use client';
import { useState, useEffect } from 'react';
import { FaCookieBite } from "react-icons/fa";

export default function GranularConsent() {
    // État initial pour chaque consentement (false = "denied", true = "granted")
    const [consentState, setConsentState] = useState({
        ad_storage: false,
        analytics_storage: true,
        ad_user_data: false,
        ad_personalization: false,
    });
    const [visible, setVisible] = useState(false);

    // Au montage, vérifier si un choix a déjà été effectué et stocké dans le localStorage
    useEffect(() => {
        const storedConsent = localStorage.getItem('granularCookieConsent');
        if (storedConsent) {
            setConsentState(JSON.parse(storedConsent));
        } else {
            setVisible(true);
        }
    }, []);

    // Fonction pour basculer la valeur d'un consentement
    let newState =consentState;
    const handleToggle = (key) => {
        setConsentState((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
        // newState = consentState;
        // console.log('DANS', newState);
        
    };

    // Fonction pour enregistrer le choix de l'utilisateur et mettre à jour Google Consent Mode
    const handleSave = (newState = consentState) => {
        // Convertir les booléens en chaînes "granted"/"denied"        
        const updatedConsent = {
            ad_storage: newState.ad_storage ? 'granted' : 'denied',
            analytics_storage: newState.analytics_storage ? 'granted' : 'denied',
            ad_user_data: newState.ad_user_data ? 'granted' : 'denied',
            ad_personalization: newState.ad_personalization ? 'granted' : 'denied',
            //   security_storage: 'granted', // Obligatoire pour le fonctionnement du site
        };
        // console.log("updatedConsent", updatedConsent);
        // console.log("consentState", consentState);
        window.gtag('consent', 'update', updatedConsent);
        localStorage.setItem('granularCookieConsent', JSON.stringify(updatedConsent));


        // Mise à jour du Consent Mode via gtag
        // Sauvegarde du choix dans le localStorage pour éviter de le redemander
        setVisible(false);
    };

    // Optionnel : Fonctions pour accepter ou refuser tous les consentements d'un seul coup
    const handleAcceptAll = () => {
        const newState = {
            ad_storage: true,
            analytics_storage: true,
            ad_user_data: true,
            ad_personalization: true,
        };
        setConsentState(newState);
        handleSave(newState);
    };

    const handleDenyAll = () => {
        const newState = {
            ad_storage: false,
            analytics_storage: false,
            ad_user_data: false,
            ad_personalization: false,
        };
        setConsentState(newState);
        handleSave(newState);
    };

    if (!visible) return null;

    return (
        <div className='fixed flex flex-col justify-between lg:w-1/2 lg:h-1/2 bg-white p-2 z-40 top-20 lg:top-[20%] lg:left-[25%] rounded-3xl border-4 shadow-[1px_1px_13px_black]'>
            <div className='flex justify-center'>
                <h3 className='font-bold text-3xl'>Gestion des Cookies</h3>
                <FaCookieBite className='text-amber-700 text-3xl mx-4' />
            </div>
            <p className='font-serif p-4'>Nous utilisons les Cookies dans le seul et unique but d'analyser l'audience du site web.<br /> Vous pouvez decidez de les accepter ou non.</p>
            <div className='flex flex-col items-center'>
                <div className="p-2 flex justify-around w-full">
                    <label className="text-gray-700 font-medium w-1/2">Analyse</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={consentState.analytics_storage}
                            onChange={() => handleToggle("analytics_storage")}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
                    </label>
                </div>
                <div className='p-2 flex justify-around w-full'>
                    <label className="text-gray-700 font-medium w-1/2">Publicité</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={consentState.ad_storage}
                            onChange={() => handleToggle('ad_storage')}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
                    </label>

                </div>
                <div className='p-2 flex justify-around w-full'>
                    <label className="text-gray-700 font-medium w-1/2">Fonctionnalités</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={consentState.ad_user_data}
                            onChange={() => handleToggle('ad_user_data')}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
                    </label>
                </div>
                <div className='p-2 flex justify-around w-full'>
                    <label className="text-gray-700 font-medium w-1/2">Personnalisation</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={consentState.ad_personalization}
                            onChange={() => handleToggle('ad_personalization')}
                            className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-500 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600"></div>
                    </label>
                </div>
            </div>
            <div className='m-4 flex flex-col lg:flex-row lg:justify-end items-end'>
                <button onClick={() => handleSave(newState)} className='m-4 bg-gray-300 rounded-lg p-2 hover:bg-gray-400 shadow-[1px_1px_13px_black] border-2'>Enregistrer</button>
                <button onClick={handleDenyAll} className='m-4 bg-red-300 rounded-lg p-2 hover:bg-red-400 shadow-[1px_1px_13px_black] border-2'>Tout refuser</button>
                <button onClick={handleAcceptAll} className='m-4 bg-green-300 rounded-lg p-2 hover:bg-green-400 shadow-[1px_1px_13px_black] border-2'>Tout accepter</button>
            </div>
        </div>
    );
}
