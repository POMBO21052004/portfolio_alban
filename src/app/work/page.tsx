"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import ProjectNavigation from "@/components/ProjectNavigation";

const projects = [
    {
        num: "01",
        category: "fullstack",
        title: "Système de Présence",
        description:
            "Une solution ERP complète pour la gestion des ressources humaines, permettant un suivi précis des présences et des rapports automatisés pour optimiser la productivité interne.",
        stack: [{ name: "React" }, { name: "Django" }, { name: "PostgreSQL" }],
        image: "/assets/work/thumb1.png",
        // Multi-image support (placeholder)
        images: ["/assets/work/thumb1.png"],
        live: "",
        github: "",
    },
    {
        num: "02",
        category: "frontend",
        title: "Site Web Corporatif",
        description:
            "Vitrine numérique haute performance pour une entreprise technologique. Design minimaliste, navigation fluide et intégration d'animations interactives pour maximiser l'engagement utilisateur.",
        stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Framer Motion" }],
        image: "/assets/work/thumb2.png",
        images: ["/assets/work/thumb2.png"],
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "backend",
        title: "API E-Commerce",
        description:
            "Architecture backend scalable capable de gérer des milliers de transactions. Sécurité renforcée (JWT), gestion des stocks en temps réel et intégration de passerelles de paiement.",
        stack: [{ name: "Django REST" }, { name: "MySQL" }, { name: "Docker" }],
        images: ["/assets/work/thumb3.png"],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper: any) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
        setActiveIndex(currentIndex);
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none group">
                        <div className="flex flex-col gap-[20px] h-[50%]">
                            {/* outline num */}
                            <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* category */}
                            <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                Projet {project.category}
                            </h2>
                            {/* description */}
                            <p className="text-white/60 text-base leading-relaxed">
                                {project.description}
                            </p>
                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-lg text-accent">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Projet en direct</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-2xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Repo Github</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-zinc-900/50 border-2 border-transparent hover:border-accent/50 transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            {/* <Image src={project.images[0]} fill className="object-cover" alt="" /> */}
                                            {/* Placeholder for image since we don't have assets yet */}
                                            <div className="w-full h-full flex flex-col items-center justify-center text-white/20 ">
                                                <span className="text-4xl font-bold mb-4">{project.title}</span>
                                                <span className="text-sm uppercase tracking-widest text-accent/50">Aperçu du projet</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* Custom Project Navigation */}
                            <ProjectNavigation
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between items-center"
                                iconStyles="text-[30px]"
                                currentIndex={activeIndex}
                                totalProjects={projects.length}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
