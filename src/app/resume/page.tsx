"use client";

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
            details: "Conception d'une application de gestion de stock en temps réel. Mise en place d'une API REST avec Django et intégration Frontend avec React. Optimisation des requêtes SQL pour réduire le temps de chargement de 40%."
        },
        {
            company: "PANZANI CAMEROUN S.A",
            position: "Stagiaire Analyste Info",
            duration: "Jan 2025 - Mar 2025",
            location: "https://maps.google.com/?q=PANZANI+CAMEROUN+Douala",
            details: "Analyse des besoins utilisateurs pour la digitalisation des processus internes. Développement de scripts Python pour l'automatisation des rapports hebdomadaires. Maintenance du parc informatique et support technique niveau 2."
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
            details: "Spécialisation en architectures micro-services et sécurité applicative. Projet de fin d'études sur l'IA appliquée à la maintenance prédictive."
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
            details: "Mention Bien. Excellence en Mathématiques et Physique."
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

const Resume = () => {
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
        </motion.div>
    );
};

export default Resume;
