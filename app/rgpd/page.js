import Link from "next/link";

export default function page() {
    return (
        <div className="pt-[18vh] sm:flex">
            <article className="sm:w-1/2 p-4">
                <h4 className="font-bold font-serif text-xl">PROTECTION DES DONNÉES</h4>
                <ul>
                    <li>
                        <h6 className="font-serif font-bold p-3">Site concerné</h6>
                        <p className="text-gray-500 p-2">
                            <span className="text-red-500">SIRET :</span><br />
                            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, article 6, III, B, nous vous informons que la poursuite de la navigation sur ce site vaut acceptation sans réserve des dispositions et conditions d’utilisation qui suivent. La version actuellement en ligne de ces conditions d’utilisation est la seule opposable pendant toute la durée d’utilisation du site et jusqu’à ce qu’une nouvelle version la remplace. Nous nous réservons la possibilité de modifier celles-ci et demandons par conséquent à l’utilisateur de s’y reporter régulièrement. Le Site (ci-après « le site») est un service de la société <span className="font-serif text-gray-700">BELARINI</span> immatriculée auprès de la chambre des métiers et l’artisanat sous le n° 89427705200011 ayant son siège social sis chemin des Barreliers 13720 Belcodène.
                            <br />Mail : <spans className="text-gray-700 underline font-bold">belariniespacesverts@gmail.com</spans>
                        </p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold p-3">Utilisatation des données personnelles renseignées</h6>
                        <p className="text-gray-500 p-2">- Formulaire de contact<br />
                            Les informations (nom, adresse email, et message) envoyées via le formulaire de la page contact sont utilisées dans l’unique but de répondre aux messages envoyés par les utilisateurs. Elles ne sauraient être utilisées de quelque autre manière.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold p-3">transmission de vos données personnelles</h6>
                        <p className="text-gray-500 p-2">Aucune information collectée via le formulaire de la page contact n’est transmise à des fins commerciales à des tiers. Les informations (nom, adresse email, et message) sont envoyées à l'adresse mail de <span className="font-serif text-gray-700">BELARINI</span>, ceci permet au site <span className="font-serif text-gray-700">BELARINI</span> de consulter et répondre aux messages envoyés. Les messages reçus peuvent être stockés pour une durée indéterminée tant que le site <span className="font-serif text-gray-700">BELARINI</span> est opérationnel.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold p-3">durée de stockage de vos données personnelles</h6>
                        <p className="text-gray-500 p-2">Si vous envoyez un email via le formulaire contact, le site <span className="font-serif text-gray-700">BELARINI</span> s'engage à conserver votre adresse le temps necessaire à vous répondre</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold p-3">informations de contact</h6>
                        <p className="text-gray-500 p-2">Pour toute information relative à vos données personnelles, vous pouvez envoyer un message via ce <Link className="cursor-pointer font-bold text-red-500" href={'/contact'}>formulaire de contact</Link>.</p>
                    </li>

                </ul>
            </article>
            <article className="sm:w-1/2 p-4">
                <h4 className="font-bold font-serif text-lg">CONDITIONS GENERALES DE VENTE</h4>
                <ul>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 1 - Objet</h6>
                        <p className="p-2 text-gray-500">
                            Les présentes conditions générales de vente déterminent les droits et obligations des parties dans le cadre de la vente en ligne de prestations de services proposées par <span className="font-serif text-gray-700">BELARINI</span> au client. Les présentes conditions générales de vente (CGV) s’appliquent à toutes les ventes de prestations de services conclues par <span className="font-serif text-gray-700">BELARINI</span> auprès de ses clients. Toute commande passée auprès de <span className="font-serif text-gray-700">BELARINI</span> implique l’acceptation sans réserve des présentes conditions générales de vente par le client. Les présentes conditions générales de vente prévaudront sur toutes autres conditions générales ou particulières non expressément agréées par <span className="font-serif text-gray-700">BELARINI</span>. <span className="font-serif text-gray-700">BELARINI</span> se réserve le droit de modifier les présentes conditions générales de vente à tout moment. Dans ce cas, les conditions applicables seront celles en vigueur à la date de la commande par le client.
                        </p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 2 - Lieux</h6>
                        <p>Les prestations prévues à l’article n°2 pourront être sur site (chez le particulier, ou en entreprise) ou à distance, après accord de chacun.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 3 - Réalisation</h6>
                        <p className="p-2 text-gray-500"><span className="font-serif text-gray-700">BELARINI</span> s’engage à assurer les prestations de services demandées par le client et à lui restituer les documents et travaux effectués pour son compte par l’un des différents moyens retenus lors de l’acceptation du devis : remise en main propre, mail, courrier postal ou coursier (frais d’expédition à la charge du client). Les ventes de prestations ne sont conclues qu’après acceptation d’un devis et des présentes conditions générales de ventes par le client. Les prestations demandées par le client seront fournies dans un délai raisonnable à compter de la réception par <span className="font-serif text-gray-700">BELARINI</span> du devis signé, accompagné de l’acompte exigible (voir article « Paiement ») Dans la limite du possible, <span className="font-serif text-gray-700">BELARINI</span> prendra en compte les éventuelles modifications de la commande demandées par le client à condition qu’elles soient notifiées par écrit au maximum 2 jours avant la date prévue pour la fourniture des prestations. Ces modifications pourront donner lieu à des modifications de tarifs. En cas d’annulation de la commande par le client après son acceptation, pour quelque raison que ce soit hormis la force majeure, l’acompte versé à la commande, tel que défini à l’article « Paiement » des présentes Conditions Générales de Vente sera de plein droit acquis à <span className="font-serif text-gray-700">BELARINI</span> et ne pourra donner lieu à un quelconque remboursement.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 4 - Exécution des Prestations et Livraison</h6>
                        <p className="p-2 text-gray-500">Les délais de livraison indiqués pour l’envoi postal lors de la prise de la commande avec le client ne sont donnés qu’à titre indicatif et ne sont aucunement garantis dans la mesure où ils ne dépendent pas de <span className="font-serif text-gray-700">BELARINI</span>, mais du transporteur choisi par le client. Par conséquence, tout retard dans la livraison des travaux ne pourra donner lieu au profit du client à l’annulation de la commande ou au bénéfice de dommages et intérêts. La date à retenir est soit celle du cachet de la poste soit la date de remise aux transporteurs. Le choix du transport par voie postale et les risques induits sont supportés en totalité par le client, y compris en cas de colis manquant ou détérioré lors de l’acheminement postal.</p>
                        <ul className="p-2 text-gray-500">
                            <li>
                                <h4 className="font-serif font-bold text-gray-600">4.1. Délais d’exécution des prestations</h4>
                                <p className="p-2">
                                Les délais d’intervention pour les prestations d’élagage, d’entretien de jardin et de terrassement, tels qu’indiqués lors de la prise de commande, sont fournis à titre indicatif. Ils ne constituent pas un engagement ferme de la part de <span className="font-serif text-gray-700">BELARINI</span> et peuvent être modifiés en fonction de contraintes techniques, d’accès au site, de conditions météorologiques ou de tout autre événement indépendant de notre volonté. Par conséquent, aucun retard dans l’exécution des prestations ne pourra donner lieu à l’annulation de la commande ou à l’octroi de dommages et intérêts.
                                </p>
                            </li>
                            <li>
                                <h4 className="font-serif font-bold text-gray-600">4.2. Livraison des produits</h4>
                                <p className="p-2">
                                En ce qui concerne la vente de bois, les délais de livraison indiqués au moment de la commande sont également donnés à titre indicatif et dépendent du mode de livraison choisi par le client ainsi que du transporteur mandaté. La date à retenir est celle figurant sur le bon de livraison, correspondant soit à la date de remise des marchandises au transporteur, soit à la date d’expédition. Le choix du mode de livraison et les risques inhérents (notamment en cas de colis manquant, endommagé ou incomplet) sont entièrement supportés par le client.
                                </p>
                            </li>
                            <li>
                                <h4 className="font-serif font-bold text-gray-600">4.3. Acceptation des risques et vérification à réception</h4>
                                <p className="p-2">
                                En validant une commande, le client reconnaît et accepte que les risques liés à la livraison des produits ou à l’exécution des prestations, y compris ceux pouvant survenir durant le transport, ne sauraient engager la responsabilité de <span className="font-serif text-gray-700">BELARINI</span>. Il incombe au client de procéder à une vérification immédiate de la conformité et de l’état des produits ou des prestations à leur réception et de signaler sans délai tout dysfonctionnement ou dommage constaté.
                                </p>
                            </li>
                            <li>
                                <h4 className="font-serif font-bold text-gray-600">4.4. Cas de force majeure</h4>
                                <p className="p-2">
                                <span className="font-serif text-gray-700">BELARINI</span> ne pourra être tenue responsable des retards ou de la non-exécution totale ou partielle des prestations et livraisons qui résulteraient d’événements de force majeure (notamment conditions climatiques extrêmes, grèves, interruptions de service des transporteurs, etc.), lesquels échappent au contrôle de l’entreprise.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n°5 - Règlement</h6>
                        <div>
                            <ul>
                                <li>
                                    <p className="font-bold font-serif text-gray-800">- Tarifs</p>
                                    <p className="p-2 text-gray-500">La TVA n'est pas applicable.
                                        Les tarifs sont révisables chaque année au 1er janvier</p>
                                </li>
                                <li>
                                    <p className="font-bold font-serif text-gray-800">- Paiement</p>
                                    <p className="p-2 text-gray-500">Aucun escompte ne sera consenti en cas de paiement anticipé. Sauf stipulation contraire, les prix sont payables à <span className="font-serif text-gray-700">BELARINI</span> à réception de la facture par virement, espèces ou PayPal UNIQUEMENT, le paiement par chèque n'est pas accepté
                                        Lors de l'enregistrement de la commande, <span className="font-serif text-gray-700">BELARINI</span> ne débutera ses prestations qu'à réception :</p>
                                    <ul className="p-6">
                                        <li className="p-2 font-bold list-decimal">du devis signé précédé de la mention « bon pour accord »</li>
                                        <li className="p-2 font-bold list-decimal">des conditions générales de vente signées</li>
                                        <li className="p-2 font-bold list-decimal">d’un virement correspondant soit au montant total de la préstation soit un accompte de 50%</li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="font-bold">- Retard de paiement</p>
                                    <p className="p-2 text-gray-500">En cas de défaut de paiement total ou partiel des services livrés au jour de la réception, l’acheteur doit verser à la société <span className="font-serif text-gray-700">BELARINI</span> à titre d’indemnité une clause pénale d’un montant de 15 % sur le principal dû, conformément aux dispositions des articles 1 152 et 1 226 du Code Civil. Un intérêt contractuel de 10% sera appliqué sur les montants restants dus. Enfin, conformément à l’article L.441-6 du code du commerce une indemnité forfaitaire de 40€ sera due au titre des frais de recouvrement. Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à compter de la date d’échéance du prix sans qu’aucune mise en demeure préalable ne soit nécessaire. En sus des indemnités de retard, toute somme, y compris l’acompte, non payée à sa date d’exigibilité produira de plein droit le paiement d’une indemnité forfaitaire de 40 euros due au titre des frais de recouvrement. Articles 441-6, I alinéa 12 et D. 441-5 du code de commerce.</p>
                                </li>
                                <li>
                                    <p className="font-bold">- Clause résolutoire</p>
                                    <p className="p-2 text-gray-500">Si dans les quinze jours qui suivent la mise en œuvre de la clause « Retard de paiement », le client ne s’est pas acquitté des sommes restant dues, la vente sera résolue de plein droit et pourra ouvrir droit à l’allocation de dommages et intérêts au profit de <span className="font-serif text-gray-700">BELARINI</span>.</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 6 - Confidentialité</h6>
                        <p className="p-2 text-gray-500">Chaque partie s’engage à conserver strictement confidentiels les données, informations et documents concernant l’autre partie, de quelque nature qu’ils soient dont elle pourrait avoir connaissance à l’occasion du présent contrat. Tout document confié par le client, inhérent à la mission, sera détruit s’il est de format numérique, ou rendu au client s’il est de format papier, sauf demande contraire écrite dudit client pour une éventuelle utilisation future. Aucune information n’est transmise ou vendue à des tiers, sauf pour une raison juridiquement contraignant <span className="font-serif text-gray-700">BELARINI</span>.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 7 - Force majeure</h6>
                        <p className="p-2 text-gray-500">La responsabilité de la société <span className="font-serif text-gray-700">BELARINI</span> ne pourra pas être mise en oeuvre si la non-exécution ou le retard dans l’exécution de l’une de ses obligations décrites dans les présentes conditions générales de service découle d’un cas de force majeure. À ce titre, la force majeure s’entend de tout événement extérieur, imprévisible et irrésistible au sens de l’article 1148 du Code civil.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 8 - Collaboration</h6>
                        <p className="p-2 text-gray-500">Le client s’engage à remettre à <span className="font-serif text-gray-700">BELARINI</span> toutes les informations nécessaires à la bonne réalisation des prestations. En cas d’annulation d’une commande en cours de réalisation par le client ou de non transmission des informations demandées, quelle qu’en soit la cause, le client s’engage à régler la totalité de la prestation déjà effectuée. Cette annulation doit être confirmée par écrit.</p>
                    </li>
                    <li>
                        <h6 className="font-serif font-bold text-lg p-3">Article n° 9 - Loi et juridiction</h6>
                        <p className="p-2 text-gray-500">Les présentes Conditions Générales de Vente et les relations contractuelles y afférentes sont régies par le droit français. Tout litige directement ou indirectement relatif aux relations contractuelles de <span className="font-serif text-gray-700">BELARINI</span> avec le client est de la compétence exclusive du Tribunal de Commerce d'Aix en Provence.</p>
                    </li>
                </ul>
            </article>
        </div>
    );
}