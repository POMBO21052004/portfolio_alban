"use client";

import { useState } from "react";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaPython,
    FaPhp,
    FaUser,
    FaPhone,
    FaBriefcase,
    FaGlobe,
    FaEnvelope,
    FaUserTie,
    FaMapMarkerAlt,
    FaLanguage,
    FaGraduationCap,
    FaCode,
    FaUserCircle,
    FaCertificate,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango, SiLaravel, SiMysql, SiDocker } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import CertificationModal from "@/components/CertificationModal";

const about = {
    icon: <FaUserCircle />,
    title: "À propos de moi",
    description:
        "Développeur Full Stack passionné et rigoureux, je conçois des solutions digitales sur mesure alliant performance technique et esthétique soignée. Fort d'une double compétence en développement Front-end (React, Next.js) et Back-end (Django, Laravel), je m'engage à livrer un code propre, maintenable et évolutif. Toujours en veille technologique, je suis prêt à intégrer votre équipe pour relever des défis ambitieux.",
    info: [
        {
            fieldName: "Nom",
            fieldValue: "Pombo Mbe Alban",
            icon: <FaUser />,
        },
        {
            fieldName: "Téléphone",
            fieldValue: "(+237) 681 20 25 20",
            icon: <FaPhone />,
        },
        {
            fieldName: "Expérience",
            fieldValue: "3+ Ans",
            icon: <FaBriefcase />,
        },
        {
            fieldName: "Nationalité",
            fieldValue: "Camerounais",
            icon: <FaGlobe />,
        },
        {
            fieldName: "Email",
            fieldValue: "albanpombombe@gmail.com",
            icon: <FaEnvelope />,
        },
        {
            fieldName: "Freelance",
            fieldValue: "Disponible",
            icon: <FaUserTie />,
        },
        {
            fieldName: "Ville",
            fieldValue: "Douala, Cameroun",
            icon: <FaMapMarkerAlt />,
        },
        {
            fieldName: "Langues",
            fieldValue: "Français",
            icon: <FaLanguage />,
        },
    ],
};

const experience = {
    icon: <FaBriefcase />,
    title: "Mon expérience",
    description:
        "Un parcours riche en projets concrets et en collaborations techniques, démontrant ma capacité à m'adapter et à livrer de la valeur rapidement.",
    items: [
        {
            company: "Digiplus Consulting Sarl",
            position: "Stagiaire Développeur Web",
            duration: "Nov 2025 - Jan 2026",
            location: "https://maps.google.com/?q=Digiplus+Consulting+Douala",
            details: "Réalisation du projet 'Le Bricoleur', plateforme de mise en relation client-technicien. Développement Fullstack (React/Laravel), intégration de la géolocalisation et du système de paiement."
        },
        {
            company: "PANZANI CAMEROUN S.A",
            position: "Stagiaire Analyste Info",
            duration: "Jan 2025 - Mar 2025",
            location: "https://maps.google.com/?q=PANZANI+CAMEROUN+Douala",
            details: "Conception et déploiement de l'application 'GTP' (Gestion de Temps et Présence) pour optimiser le suivi RH. Automatisation des fiches de pointage et reporting des heures via Dashboard interactif."
        },
        {
            company: "CCN Technologies",
            position: "Stagiaire Full Stack",
            duration: "Mar 2024 - Mai 2024",
            location: "https://maps.google.com/?q=CCN+Technologies+Douala",
            details: "Participation au développement d'un site e-commerce. Intégration de maquettes Figma pixel-perfect. Gestion de l'authentification et des paiements en ligne via Stripe."
        },
    ],
};

const education = {
    icon: <FaGraduationCap />,
    title: "Ma formation",
    description:
        "Une base académique solide renforcée par une pratique intensive, assurant une compréhension profonde des principes du génie logiciel.",
    items: [
        {
            institution: "IUT Douala",
            degree: "Licence Génie Logiciel",
            duration: "2024 - 2025",
            location: "https://maps.google.com/?q=IUT+Douala",
            details: "Conception d'un SaaS de prise de rendez-vous pour les établissements de santé, intégrant Trello pour la communication lors de consultations à distance."
        },
        {
            institution: "IUT Douala",
            degree: "DUT en Génie Informatique",
            duration: "2023 - 2024",
            location: "https://maps.google.com/?q=IUT+Douala",
            details: "Fondamentaux du développement web et mobile. Algorithmique avancée et structures de données. Administration systèmes et réseaux (Linux, Cisco)."
        },
        {
            institution: "Institut Polyvalent Minfang",
            degree: "Baccalauréat C",
            duration: "2021 - 2022",
            location: "https://maps.google.com/?q=Institut+Polyvalent+Minfang+Douala",
            details: "Mention Bien. Excellence en Mathématiques et Informatiques."
        },
    ],
};

const skills = {
    icon: <FaCode />,
    title: "Mes compétences",
    description:
        "Maîtrise d'une stack technique complète allant du Front-end au Back-end. J'utilise des technologies modernes comme React et Next.js pour créer des interfaces dynamiques, couplées à des architectures robustes sous Django ou Laravel. Mon expertise inclut également la gestion de bases de données, la conteneurisation avec Docker et le design d'interfaces avec Figma.",
    categories: [
        {
            title: "Front-End",
            skillList: [
                {
                    icon: <FaHtml5 />,
                    name: "html 5",
                    level: "Avancé",
                },
                {
                    icon: <FaCss3 />,
                    name: "css 3",
                    level: "Avancé",
                },
                {
                    icon: <FaJs />,
                    name: "javascript",
                    level: "Intermédiaire",
                },
                {
                    icon: <FaReact />,
                    name: "react.js",
                    level: "Avancé",
                },
                {
                    icon: <SiNextdotjs />,
                    name: "next.js",
                    level: "Intermédiaire",
                },
                {
                    icon: <SiTailwindcss />,
                    name: "tailwind.css",
                    level: "Avancé",
                },
            ]
        },
        {
            title: "Back-End",
            skillList: [
                {
                    icon: <FaNodeJs />,
                    name: "node.js",
                    level: "Intermédiaire",
                },
                {
                    icon: <SiDjango />,
                    name: "django",
                    level: "Avancé",
                },
                {
                    icon: <SiLaravel />,
                    name: "laravel",
                    level: "Intermédiaire",
                },
                {
                    icon: <SiMysql />,
                    name: "mysql",
                    level: "Avancé",
                },
            ]
        },
        {
            title: "Outils & DevOps",
            skillList: [
                {
                    icon: <SiDocker />,
                    name: "docker",
                    level: "Basique",
                },
                {
                    icon: <FaGitAlt />,
                    name: "git",
                    level: "Intermédiaire",
                },
                {
                    icon: <FaGithub />,
                    name: "github",
                    level: "Intermédiaire",
                },
                {
                    icon: <FaFigma />,
                    name: "figma",
                    level: "Intermédiaire",
                },
            ]
        }
    ],
};

const certifications = {
    icon: <FaCertificate />,
    title: "Mes certifications",
    description:
        "Certifications professionnelles validant mes compétences techniques et mon engagement dans l'apprentissage continu.",
    items: [
        {
            name: "D-Clic",
            issuer: "Certification Professionnelle",
            date: "Novembre 2025",
            image: "/assets/certifications/Attestation_dclic_1.png",
            description: "Certification professionnelle D-Clic validant les compétences numériques et digitales."
        },
    ] as Array<{
        name: string;
        issuer: string;
        date: string;
        image: string;
        description?: string;
    }>,
};

const Resume = () => {
    const [selectedCertification, setSelectedCertification] = useState<typeof certifications.items[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCertificationClick = (cert: typeof certifications.items[0]) => {
        setSelectedCertification(cert);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedCertification(null), 300);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Expérience</TabsTrigger>
                        <TabsTrigger value="education">Formation</TabsTrigger>
                        <TabsTrigger value="skills">Compétences</TabsTrigger>
                        <TabsTrigger value="certifications">Certifications</TabsTrigger>
                        <TabsTrigger value="about">À propos</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-4 justify-center xl:justify-start">
                                    <div className="text-4xl text-accent">{experience.icon}</div>
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-full py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] text-center lg:text-left font-bold mb-1">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 font-medium">{item.company}</p>
                                                        {item.location && (
                                                            <a
                                                                href={item.location}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-accent/60 hover:text-accent transition-colors"
                                                                aria-label="Voir la localisation"
                                                            >
                                                                <FaMapMarkerAlt className="text-sm" />
                                                            </a>
                                                        )}
                                                    </div>
                                                    <p className="text-white/60 text-sm leading-snug text-center lg:text-left">
                                                        {item.details}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-4 justify-center xl:justify-start">
                                    <div className="text-4xl text-accent">{education.icon}</div>
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-full py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] text-center lg:text-left font-bold mb-1">
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 font-medium">{item.institution}</p>
                                                        {item.location && (
                                                            <a
                                                                href={item.location}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-accent/60 hover:text-accent transition-colors"
                                                                aria-label="Voir la localisation"
                                                            >
                                                                <FaMapMarkerAlt className="text-sm" />
                                                            </a>
                                                        )}
                                                    </div>
                                                    <p className="text-white/60 text-sm leading-snug text-center lg:text-left">
                                                        {item.details}
                                                    </p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                <ScrollArea className="h-[400px]">
                                    <div className="flex flex-col gap-10">
                                        {skills.categories.map((category, catIndex) => (
                                            <div key={catIndex} className="flex flex-col gap-4">
                                                <h4 className="text-2xl font-bold text-accent text-center xl:text-left">{category.title}</h4>
                                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                                    {category.skillList.map((skill, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <TooltipProvider delayDuration={100}>
                                                                    <Tooltip>
                                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-2 group">
                                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                                {skill.icon}
                                                                            </div>
                                                                            <p className="capitalize text-sm group-hover:text-white transition-all duration-300">{skill.name}</p>
                                                                        </TooltipTrigger>
                                                                        <TooltipContent>
                                                                            <div className="text-center">
                                                                                <p className="capitalize font-bold">{skill.name}</p>
                                                                                <p className="text-accent text-sm">{skill.level}</p>
                                                                            </div>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent value="certifications" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-4 justify-center xl:justify-start">
                                    <div className="text-4xl text-accent">{certifications.icon}</div>
                                    <h3 className="text-4xl font-bold">{certifications.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {certifications.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    {certifications.items.length > 0 ? (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                            {certifications.items.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() => handleCertificationClick(item)}
                                                        className="bg-[#232329] rounded-xl overflow-hidden cursor-pointer group hover:border-accent border border-transparent transition-all duration-300"
                                                    >
                                                        {/* Image */}
                                                        <div className="relative w-full aspect-[2/1] bg-white overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/90 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                                                    Voir les détails
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Info */}
                                                        <div className="p-4">
                                                            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                                                {item.name}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-white/60 text-sm mb-1">
                                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                                <p>{item.issuer}</p>
                                                            </div>
                                                            <p className="text-accent text-sm">{item.date}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-[300px] text-center">
                                            <div className="text-6xl text-white/20 mb-4">
                                                <FaCertificate />
                                            </div>
                                            <p className="text-white/60 text-lg">
                                                Aucune certification pour le moment.
                                            </p>
                                            <p className="text-white/40 text-sm mt-2">
                                                De nouvelles certifications seront ajoutées prochainement.
                                            </p>
                                        </div>
                                    )}
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex items-center gap-4 justify-center xl:justify-start">
                                    <div className="text-4xl text-accent">{about.icon}</div>
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] py-6 px-10 rounded-xl flex items-center gap-4"
                                            >
                                                <div className="text-4xl text-accent">
                                                    {item.icon}
                                                </div>
                                                <div className="flex-1 flex flex-col gap-1 min-w-0">
                                                    <span className="text-accent/60 text-sm">{item.fieldName}</span>
                                                    <span className="text-xl font-bold break-words">{item.fieldValue}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>

            <CertificationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                certification={selectedCertification}
            />
        </motion.div>
    );
};

export default Resume;
