"use client";

import { useState } from "react";
import { BsArrowRight, BsCodeSlash, BsDatabase, BsGraphUp, BsAndroid2, BsRobot } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ServiceModal";

const services = [
    {
        num: "01",
        title: "Développement Front-End",
        description:
            "Création d'interfaces utilisateur modernes, réactives et intuitives avec React et Next.js.",
        href: "",
        icon: <BsCodeSlash />,
        detailedExplanation: {
            whatIsIt: "Le développement Front-End, c'est tout ce que vous voyez et avec quoi vous interagissez sur un site web ou une application : les boutons, les menus, les formulaires, les animations... C'est la partie visible de l'iceberg ! Imaginez-le comme la décoration et l'aménagement d'une maison : c'est ce qui rend l'espace agréable, fonctionnel et facile à utiliser.",
            howItWorks: [
                "Je commence par comprendre vos besoins et ceux de vos utilisateurs",
                "Je crée des maquettes visuelles (design) pour vous montrer à quoi ressemblera votre site",
                "Je transforme ces maquettes en code fonctionnel avec React et Next.js (technologies modernes et performantes)",
                "Je m'assure que tout fonctionne parfaitement sur tous les appareils (ordinateur, tablette, smartphone)",
                "Je teste et j'optimise pour que votre site soit rapide et fluide"
            ],
            benefits: [
                "Une interface moderne et professionnelle qui inspire confiance",
                "Une navigation intuitive : vos visiteurs trouvent facilement ce qu'ils cherchent",
                "Un site qui s'adapte à tous les écrans (responsive design)",
                "Des temps de chargement rapides pour ne pas perdre vos visiteurs",
                "Un design unique qui reflète votre identité de marque"
            ],
            examples: [
                "Un site vitrine pour votre entreprise avec un design élégant et des animations fluides",
                "Une boutique en ligne avec un panier d'achat intuitif et un processus de commande simplifié",
                "Un tableau de bord pour gérer vos données avec des graphiques interactifs",
                "Une application web pour réserver des services en quelques clics"
            ]
        }
    },
    {
        num: "02",
        title: "Développement Back-End",
        description:
            "Conception d'architectures robustes, API sécurisées et gestion de données performantes avec Laravel et Django Rest Framework.",
        href: "",
        icon: <BsDatabase />,
        detailedExplanation: {
            whatIsIt: "Le développement Back-End, c'est la partie invisible mais essentielle d'un site ou d'une application. C'est le moteur qui fait tourner tout le système : gestion des données, traitement des informations, sécurité, connexion avec d'autres services... Si le Front-End est la décoration de la maison, le Back-End c'est la plomberie, l'électricité et les fondations !",
            howItWorks: [
                "J'analyse vos besoins en termes de données et de fonctionnalités",
                "Je conçois une architecture solide et évolutive pour votre système",
                "Je crée une base de données organisée pour stocker vos informations de manière sécurisée",
                "Je développe des API (points de connexion) pour que votre site communique avec d'autres services",
                "Je mets en place des systèmes de sécurité pour protéger vos données et celles de vos utilisateurs"
            ],
            benefits: [
                "Un système fiable qui fonctionne 24h/24 sans interruption",
                "Vos données sont sécurisées et protégées contre les attaques",
                "Une architecture évolutive : facile d'ajouter de nouvelles fonctionnalités plus tard",
                "Des performances optimales même avec beaucoup d'utilisateurs simultanés",
                "Une gestion automatisée de vos processus métier"
            ],
            examples: [
                "Un système de gestion de clients avec historique des commandes et facturation automatique",
                "Une API pour connecter votre site web à votre application mobile",
                "Un système d'authentification sécurisé avec gestion des rôles et permissions",
                "Une plateforme de réservation avec gestion des disponibilités en temps réel"
            ]
        }
    },
    {
        num: "03",
        title: "Analyse Technique",
        description:
            "Audit approfondi de vos systèmes et stratégie technologique pour optimiser vos performances.",
        href: "",
        icon: <BsGraphUp />,
        detailedExplanation: {
            whatIsIt: "L'analyse technique, c'est comme un bilan de santé pour votre site web ou votre application. Je passe en revue tous les aspects techniques pour identifier ce qui fonctionne bien, ce qui pourrait être amélioré, et les problèmes potentiels. C'est un diagnostic complet qui vous aide à prendre les bonnes décisions pour votre projet digital.",
            howItWorks: [
                "J'examine votre site ou application existante dans les moindres détails",
                "Je teste les performances : vitesse de chargement, temps de réponse, consommation de ressources",
                "J'analyse la sécurité pour détecter les vulnérabilités potentielles",
                "Je vérifie la qualité du code et l'architecture du système",
                "Je vous fournis un rapport détaillé avec des recommandations concrètes et priorisées"
            ],
            benefits: [
                "Vous savez exactement où en est votre projet et ce qui doit être amélioré",
                "Vous évitez les problèmes coûteux avant qu'ils ne surviennent",
                "Vous optimisez vos coûts en identifiant les gaspillages de ressources",
                "Vous prenez des décisions éclairées basées sur des données concrètes",
                "Vous améliorez l'expérience de vos utilisateurs grâce aux optimisations"
            ],
            examples: [
                "Audit de performance d'un site e-commerce qui charge lentement",
                "Analyse de sécurité avant le lancement d'une nouvelle application",
                "Évaluation technique d'un projet existant avant de le faire évoluer",
                "Diagnostic de problèmes récurrents sur une plateforme web"
            ]
        }
    },
    {
        num: "04",
        title: "Développement Android",
        description:
            "Réalisation d'applications mobiles natives et cross-platform performantes et ergonomiques à l'aide de Flutter.",
        href: "",
        icon: <BsAndroid2 />,
        detailedExplanation: {
            whatIsIt: "Le développement Android, c'est la création d'applications mobiles pour smartphones et tablettes. Avec Flutter, je peux créer une seule application qui fonctionne à la fois sur Android ET iOS, ce qui vous fait gagner du temps et de l'argent. C'est comme avoir votre entreprise dans la poche de vos clients !",
            howItWorks: [
                "Je définis avec vous les fonctionnalités de votre application mobile",
                "Je crée un design adapté aux petits écrans et à l'utilisation tactile",
                "Je développe l'application avec Flutter pour qu'elle fonctionne sur Android et iOS",
                "J'intègre les fonctionnalités natives du téléphone (caméra, GPS, notifications...)",
                "Je teste sur différents appareils et je publie sur les stores (Google Play, App Store)"
            ],
            benefits: [
                "Vos clients vous ont toujours à portée de main",
                "Une seule application pour Android ET iOS = économies importantes",
                "Accès aux fonctionnalités du téléphone (GPS, appareil photo, notifications push...)",
                "Possibilité de fonctionner hors ligne",
                "Présence sur les stores officiels renforce votre crédibilité"
            ],
            examples: [
                "Une application de livraison avec suivi GPS en temps réel",
                "Une app de fidélité avec scan de QR codes et notifications de promotions",
                "Une application de réservation de services avec paiement intégré",
                "Un outil de gestion pour vos équipes terrain avec synchronisation des données"
            ]
        }
    },
    {
        num: "05",
        title: "Optimisation IA",
        description:
            "Intégration d'intelligence artificielle pour automatiser vos processus et analyser vos données.",
        href: "",
        icon: <BsRobot />,
        detailedExplanation: {
            whatIsIt: "L'optimisation IA, c'est l'utilisation de l'intelligence artificielle pour rendre votre entreprise plus efficace. L'IA peut automatiser des tâches répétitives, analyser de grandes quantités de données, faire des prédictions, ou même discuter avec vos clients. C'est comme avoir un assistant super intelligent qui travaille 24h/24 sans se fatiguer !",
            howItWorks: [
                "J'identifie les tâches répétitives ou chronophages dans votre activité",
                "Je choisis les technologies IA les plus adaptées à vos besoins",
                "J'intègre des solutions d'IA dans vos systèmes existants",
                "Je forme l'IA avec vos données pour qu'elle comprenne votre contexte",
                "Je mets en place des tableaux de bord pour suivre les résultats"
            ],
            benefits: [
                "Gain de temps considérable sur les tâches répétitives",
                "Réduction des erreurs humaines",
                "Disponibilité 24h/24 pour vos clients (chatbots)",
                "Analyses et prédictions basées sur vos données",
                "Vous vous concentrez sur les tâches à forte valeur ajoutée"
            ],
            examples: [
                "Un chatbot intelligent pour répondre aux questions fréquentes de vos clients",
                "Un système de recommandation de produits basé sur les préférences des utilisateurs",
                "Une analyse automatique de documents pour extraire les informations importantes",
                "Un outil de prédiction des ventes pour mieux gérer vos stocks"
            ]
        }
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceClick = (service: typeof services[0]) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
    };

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="flex flex-col gap-8"
                >
                    {/* Header */}
                    <div className="flex flex-col gap-2 text-center items-center mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Solutions Numériques <span className="text-accent">Sur Mesure</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-[600px] leading-relaxed">
                            Des services technologiques avancés pour concrétiser vos idées en solutions numériques.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
                        {services.map((service, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex-1 flex flex-col justify-center gap-2 group rounded-xl px-6 py-5 bg-[#232329] hover:bg-[#232329]/80 transition-all duration-300"
                                >
                                    {/* top: Icon + Number */}
                                    <div className="w-full flex justify-between items-center">
                                        <div className="text-3xl text-accent group-hover:text-accent-hover transition-all duration-300">
                                            {service.icon}
                                        </div>
                                        <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                            {service.num}
                                        </div>
                                    </div>

                                    {/* content */}
                                    <h2 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60 leading-relaxed text-base">
                                        {service.description}
                                    </p>

                                    {/* border / link */}
                                    <div className="border-b border-white/20 w-full my-3"></div>
                                    <div className="w-full flex justify-start">
                                        <button
                                            onClick={() => handleServiceClick(service)}
                                            className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest hover:text-accent-hover transition-all cursor-pointer"
                                        >
                                            <span>En savoir plus</span>
                                            <BsArrowRight className="text-lg" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center justify-center gap-6 mt-12 py-8 border-t border-white/10">
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-white">
                            Vous avez un projet spécifique en tête ? Discutons-en !
                        </h3>
                        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-primary bg-accent hover:bg-accent-hover rounded-full transition-all duration-300">
                            Discutons de votre projet
                        </Link>
                    </div>
                </motion.div>
            </div>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </section>
    );
};

export default Services;