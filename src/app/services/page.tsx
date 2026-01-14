"use client";

import { BsArrowRight, BsCodeSlash, BsDatabase, BsGraphUp, BsAndroid2, BsRobot } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Développement Front-End",
        description:
            "Création d'interfaces utilisateur modernes, réactives et intuitives avec React et Next.js.",
        href: "",
        icon: <BsCodeSlash />,
    },
    {
        num: "02",
        title: "Développement Back-End",
        description:
            "Conception d'architectures robustes, API sécurisées et gestion de données performantes avec Laravel et Django Rest Framework.",
        href: "",
        icon: <BsDatabase />,
    },
    {
        num: "03",
        title: "Analyse Technique",
        description:
            "Audit approfondi de vos systèmes et stratégie technologique pour optimiser vos performances.",
        href: "",
        icon: <BsGraphUp />,
    },
    {
        num: "04",
        title: "Développement Android",
        description:
            "Réalisation d'applications mobiles natives et cross-platform performantes et ergonomiques à l'aide de Flutter.",
        href: "",
        icon: <BsAndroid2 />,
    },
    {
        num: "05",
        title: "Optimisation IA",
        description:
            "Intégration d'intelligence artificielle pour automatiser vos processus et analyser vos données.",
        href: "",
        icon: <BsRobot />,
    },
];

const Services = () => {
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
                                        <Link href={service.href} className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest hover:text-accent-hover transition-all">
                                            <span>En savoir plus</span>
                                            <BsArrowRight className="text-lg" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
