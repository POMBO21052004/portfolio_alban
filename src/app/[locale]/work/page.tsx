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

import { Link } from "@/i18n/routing";
import Image from "next/image";
import ProjectNavigation from "@/components/ProjectNavigation";
import ImageLightbox from "@/components/ImageLightbox";
import { useTranslations } from "next-intl";

const projectsData = [
    {
        num: "01",
        id: "01",
        stack: [{ name: "React" }, { name: "Tailwind CSS" }],
        image: "/assets/work/lebricoleur6.png",
        images: ["/assets/work/lebricoleur6.png", "/assets/work/lebricoleur5.png", "/assets/work/lebricoleur4.png", "/assets/work/lebricoleur7.png"],
        live: "https://app.lebricoleur.cm/",
        github: "",
    },
    {
        num: "02",
        id: "02",
        stack: [{ name: "React" }, { name: "Laravel" }, { name: "MySQL" }, { name: "Bootstrap" }],
        image: "/assets/work/GTP1.png",
        images: ["/assets/work/GTP1.png", "/assets/work/GTP2.png", "/assets/work/GTP3.png", "/assets/work/GTP4.png", "/assets/work/GTP5.png"],
        live: "",
        github: "",
    },
    {
        num: "03",
        id: "03",
        stack: [{ name: "React" }, { name: "Bootstrap" }, { name: "Laravel" }],
        image: "/assets/work/EduBullet1.png",
        images: ["/assets/work/EduBullet1.png", "/assets/work/EduBullet2.png", "/assets/work/EduBullet3.png"],
        live: "https://edubullet-pro.infinityfreeapp.com/",
        github: "",
    },
    {
        num: "04",
        id: "04",
        stack: [{ name: "Flutter" }, { name: "SQLite" }, { name: "Provider" }],
        image: "/assets/work/StockMaster1.jpg",
        images: ["/assets/work/StockMaster1.jpg", "/assets/work/StockMaster8.jpg", "/assets/work/StockMaster2.jpg", "/assets/work/StockMaster3.jpg", "/assets/work/StockMaster4.jpg", "/assets/work/StockMaster5.jpg", "/assets/work/StockMaster6.jpg"],
        live: "",
        github: "",
    },
    {
        num: "05",
        id: "05",
        stack: [{ name: "Laravel" }, { name: "MySQL" }, { name: "Alpine.js" }, { name: "Tailwind CSS" }],
        image: "/assets/work/camtel_dashboard.png",
        images: [
            "/assets/work/camtel_dashboard.png",
            "/assets/work/camtel_login.png",
            "/assets/work/camtel_management_project.png",
            "/assets/work/camtel_manadgement_tache.png",
            "/assets/work/camtel_management_user.png",
            "/assets/work/camtel_audit.png",
            "/assets/work/camtel_verify_otp.png",
            "/assets/work/camtel_password_reset.png"
        ],
        live: "",
        github: "",
    },
];

const Work = () => {
    const t = useTranslations("Work");

    const translatedProjects = projectsData.map((project) => ({
        ...project,
        title: t(`items.${project.id}.title`),
        category: t(`items.${project.id}.category`),
        description: t(`items.${project.id}.description`),
    }));

    const [project, setProject] = useState(translatedProjects[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(translatedProjects[currentIndex]);
        setActiveIndex(currentIndex);
        setCurrentImageIndex(0);
    }

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
                                {project.category}
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
                                                    <p>{t("live")}</p>
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
                                                    <p>{t("github")}</p>
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
                            className="h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {translatedProjects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-zinc-900/50 border-2 border-transparent hover:border-accent/50 transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 cursor-pointer group/zoom" onClick={() => setIsLightboxOpen(true)}>
                                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                                                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm shadow-lg">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-full h-full">
                                            <Image src={project.images[currentImageIndex]} fill className="object-contain p-5" alt={project.title} />
                                        </div>
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label={t("prevImage")}
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label={t("nextImage")}
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                                    {project.images.map((_, imgIndex) => (
                                                        <button
                                                            key={imgIndex}
                                                            onClick={() => setCurrentImageIndex(imgIndex)}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIndex === currentImageIndex
                                                                ? 'bg-accent w-8'
                                                                : 'bg-white/40 hover:bg-white/60'
                                                                }`}
                                                            aria-label={`Image ${imgIndex + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </SwiperSlide>
                            })}
                            <ProjectNavigation
                                containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between items-center"
                                iconStyles="text-[30px]"
                                currentIndex={activeIndex}
                                totalProjects={translatedProjects.length}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>

            <ImageLightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
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
