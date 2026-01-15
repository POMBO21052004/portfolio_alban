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
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import ProjectNavigation from "@/components/ProjectNavigation";
import ImageLightbox from "@/components/ImageLightbox";

const projects = [
    {
        num: "01",
        category: "Frontend",
        title: "Le Bricoleur",
        description:
            "Une plateforme de mise en relation mettant en relation les utilisateurs avec des techniciens qualifiés au Cameroun pour des services de réparation et rénovation. Le service garantit des interventions rapides et des professionnels de confiance.",
        stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Mobile Apps" }],
        image: "/assets/work/lebricoleur1.png",
        images: ["/assets/work/lebricoleur6.png", "/assets/work/lebricoleur5.png", "/assets/work/lebricoleur4.png", "/assets/work/lebricoleur7.png"],
        live: "https://app.lebricoleur.cm/",
        github: "",
    },
    {
        num: "02",
        category: "fullstack",
        title: "Système de Présence",
        description:
            "Une solution ERP complète pour la gestion des ressources humaines, permettant un suivi précis des présences et des rapports automatisés pour optimiser la productivité interne.",
        stack: [{ name: "React" }, { name: "Django" }, { name: "PostgreSQL" }],
        image: "/assets/work/thumb1.png",
        images: ["/assets/work/thumb1.png"],
        live: "",
        github: "",
    },
    {
        num: "03",
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
        num: "04",
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSlideChange = (swiper: any) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
        setActiveIndex(currentIndex);
        setCurrentImageIndex(0); // Reset image index when changing projects
    }

    // Auto-play images every 15 seconds
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => {
                const maxIndex = project.images.length - 1;
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 15000);

        return () => clearInterval(timer);
    }, [project.images.length]);

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => {
            const maxIndex = project.images.length - 1;
            return prev <= 0 ? maxIndex : prev - 1;
        });
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => {
            const maxIndex = project.images.length - 1;
            return prev >= maxIndex ? 0 : prev + 1;
        });
    };

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

                            {/* title */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* category */}
                            <h3 className="text-2xl text-accent font-bold capitalize">
                                {project.category} project
                            </h3>
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
                                {project.live && (
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
                                )}
                                {/* github project button */}
                                {project.github && (
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
                                )}
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
                                        {/* overlay with zoom indicator */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 cursor-pointer group/zoom" onClick={() => setIsModalOpen(true)}>
                                            {/* Zoom icon - appears on hover */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/zoom:opacity-100 transition-opacity duration-300">
                                                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.images[currentImageIndex]} fill className="object-cover" alt={project.title} />
                                        </div>
                                        {/* Image navigation arrows - only show if project has multiple images */}
                                        {project.images.length > 1 && (
                                            <>
                                                {/* Left Arrow */}
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label="Image précédente"
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                {/* Right Arrow */}
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label="Image suivante"
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                                {/* Image indicator dots */}
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                                    {project.images.map((_, imgIndex) => (
                                                        <button
                                                            key={imgIndex}
                                                            onClick={() => setCurrentImageIndex(imgIndex)}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentImageIndex
                                                                ? 'bg-accent w-8'
                                                                : 'bg-white/40 hover:bg-white/60'
                                                                }`}
                                                            aria-label={`Aller à l'image ${imgIndex + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
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

            {/* Lightbox Modal */}
            <ImageLightbox
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                images={project.images}
                currentIndex={currentImageIndex}
                onPrevious={handlePrevImage}
                onNext={handleNextImage}
                projectTitle={project.title}
            />
        </motion.div>
    );
};

export default Work;
