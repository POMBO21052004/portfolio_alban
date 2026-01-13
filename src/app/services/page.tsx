"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Développement Web",
        description:
            "Transformez vos idées en réalité numérique. Je conçois des sites web vitrines et des applications complexes sur mesure, optimisés pour le référencement (SEO) et la rapidité, garantissant une présence en ligne percutante.",
        href: "",
    },
    {
        num: "02",
        title: "Design UI/UX",
        description:
            "L'utilisateur au centre de tout. Je crée des interfaces (UI) modernes et des expériences (UX) fluides qui captivent vos visiteurs dès la première seconde. Maquettage précis sur Figma et prototypage interactif.",
        href: "",
    },
    {
        num: "03",
        title: "Développement Backend",
        description:
            "La puissance cachée de vos applications. Je développe des API RESTful sécurisées et performantes, gère vos bases de données et assure l'architecture serveur pour que votre business tourne 24/7 sans interruption.",
        href: "",
    },
    {
        num: "04",
        title: "Analyse Technique",
        description:
            "Audit et stratégie. J'analyse vos besoins techniques pour proposer les solutions les plus adaptées. De la conception de l'architecture logicielle à l'optimisation des processus existants.",
        href: "",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-4 group p-8 rounded-xl hover:bg-[#232329] transition-all duration-300 border border-transparent hover:border-accent/20"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-2xl" />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60 leading-relaxed text-base">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full group-hover:border-none"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
