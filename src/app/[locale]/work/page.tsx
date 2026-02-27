"use client";

import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    SiReact,
    SiLaravel,
    SiMysql,
    SiTailwindcss,
    SiBootstrap,
    SiFlutter,
    SiSqlite,
    SiAlpinedotjs,
    SiFramer
} from "react-icons/si";

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
        stack: [{ name: "React", icon: SiReact }, { name: "Tailwind CSS", icon: SiTailwindcss }],
        image: "/assets/work/lebricoleur6.png",
        images: ["/assets/work/lebricoleur6.png", "/assets/work/lebricoleur5.png", "/assets/work/lebricoleur4.png", "/assets/work/lebricoleur7.png"],
        live: "https://app.lebricoleur.cm/",
        github: "",
        color: "#00ff99",
    },
    {
        num: "02",
        id: "02",
        stack: [
            { name: "React", icon: SiReact },
            { name: "Laravel", icon: SiLaravel },
            { name: "MySQL", icon: SiMysql },
            { name: "Bootstrap", icon: SiBootstrap }
        ],
        image: "/assets/work/GTP1.png",
        images: ["/assets/work/GTP1.png", "/assets/work/GTP2.png", "/assets/work/GTP3.png", "/assets/work/GTP4.png", "/assets/work/GTP5.png"],
        live: "",
        github: "",
        color: "#4f46e5",
    },
    {
        num: "03",
        id: "03",
        stack: [
            { name: "React", icon: SiReact },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "Laravel", icon: SiLaravel }
        ],
        image: "/assets/work/EduBullet1.png",
        images: ["/assets/work/EduBullet1.png", "/assets/work/EduBullet2.png", "/assets/work/EduBullet3.png"],
        live: "https://edubullet-pro.infinityfreeapp.com/",
        github: "",
        color: "#10b981",
    },
    {
        num: "04",
        id: "04",
        stack: [
            { name: "Flutter", icon: SiFlutter },
            { name: "SQLite", icon: SiSqlite }
        ],
        image: "/assets/work/StockMaster1.jpg",
        images: ["/assets/work/StockMaster1.jpg", "/assets/work/StockMaster8.jpg", "/assets/work/StockMaster2.jpg", "/assets/work/StockMaster3.jpg", "/assets/work/StockMaster4.jpg", "/assets/work/StockMaster5.jpg", "/assets/work/StockMaster6.jpg"],
        live: "",
        github: "",
        color: "#0ea5e9",
    },
    {
        num: "05",
        id: "05",
        stack: [
            { name: "Laravel", icon: SiLaravel },
            { name: "MySQL", icon: SiMysql },
            { name: "Alpine.js", icon: SiAlpinedotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ],
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
        live: "https://taskflowcamtel.infinityfreeapp.com",
        github: "",
        color: "#3b82f6",
    },
];

const Work = () => {
    const t = useTranslations("Work");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(projectsData.map(p => t(`items.${p.id}.category`))))];

    const translatedProjects = projectsData
        .map((project) => ({
            ...project,
            title: t(`items.${project.id}.title`),
            category: t(`items.${project.id}.category`),
            description: t(`items.${project.id}.description`),
        }))
        .filter(project => selectedCategory === "All" || project.category === selectedCategory);

    const [project, setProject] = useState(translatedProjects[0] || projectsData[0]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // 3D Tilt values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(translatedProjects[currentIndex]);
        setActiveIndex(currentIndex);
        setCurrentImageIndex(0);
    }

    // Reset project when category changes
    useEffect(() => {
        if (translatedProjects.length > 0) {
            setProject(translatedProjects[0]);
            setActiveIndex(0);
            setCurrentImageIndex(0);
        }
    }, [selectedCategory]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => {
                const maxIndex = project.images.length - 1;
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 15000);

        return () => clearInterval(timer);
    }, [project.images.length, activeIndex]);

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
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative overflow-hidden"
        >
            {/* Dynamic Background Glow */}
            <motion.div
                animate={{
                    backgroundColor: project.color,
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0"
            />

            <div className="container mx-auto z-10">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 uppercase tracking-widest text-xs font-bold ${selectedCategory === cat
                                ? "bg-accent border-accent text-primary shadow-[0_0_20px_rgba(0,255,153,0.3)]"
                                : "border-white/10 text-white/60 hover:border-accent/50 hover:text-accent"
                                }`}
                        >
                            {cat === "All" ? t("all") : cat}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col gap-[20px] h-[50%]"
                            >
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
                                <p className="text-white/60 text-base leading-relaxed max-w-xl">
                                    {project.description}
                                </p>
                                {/* stack icons */}
                                <div className="flex flex-wrap gap-x-8 gap-y-6 mt-2">
                                    {project.stack.map((item: any, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={index} className="flex flex-col items-center gap-2 group/icon min-w-[60px]">
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="text-4xl text-white/40 group-hover/icon:text-accent transition-all duration-300 group-hover/icon:scale-110">
                                                            <Icon />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="font-bold">{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                <span className="text-[11px] uppercase tracking-wider text-white/30 group-hover/icon:text-accent transition-colors duration-300 font-bold text-center whitespace-nowrap">
                                                    {item.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* border */}
                                <div className="border border-white/20 my-4"></div>
                                {/* buttons */}
                                <div className="flex items-center gap-4">
                                    {/* live project button */}
                                    {project.live && (
                                        <Link href={project.live} target="_blank">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group/btn border border-white/10 hover:border-accent">
                                                        <BsArrowUpRight className="text-white text-2xl group-hover/btn:text-accent transition-all" />
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
                                        <Link href={project.github} target="_blank">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/5 flex justify-center items-center group/btn border border-white/10 hover:border-accent">
                                                        <BsGithub className="text-white text-2xl group-hover/btn:text-accent transition-all" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{t("github")}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {translatedProjects.map((proj, index) => {
                                return <SwiperSlide key={proj.id} className="w-full">
                                    <motion.div
                                        style={{ rotateX, rotateY, perspective: 1000 }}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        className="h-[460px] relative group flex justify-center items-center bg-zinc-900/50 border-2 border-white/5 hover:border-accent/50 transition-all duration-500 rounded-xl overflow-hidden backdrop-blur-sm"
                                    >
                                        {/* Overlay with Zoom Icon */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 cursor-pointer group/zoom" onClick={() => setIsLightboxOpen(true)}>
                                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                                                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center backdrop-blur-sm shadow-lg transform scale-0 group-hover:scale-100 transition-transform">
                                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative w-full h-full p-4">
                                            <Image
                                                src={proj.images[currentImageIndex]}
                                                fill
                                                className="object-contain p-5 transition-transform duration-700 hover:scale-105"
                                                alt={proj.title}
                                            />
                                        </div>

                                        {/* Auto-play Progress Bar */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20">
                                            <motion.div
                                                key={`${activeIndex}-${currentImageIndex}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 15, ease: "linear" }}
                                                className="h-full bg-accent"
                                            />
                                        </div>

                                        {proj.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={handlePrevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label={t("prevImage")}
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={handleNextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/40 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group/arrow"
                                                    aria-label={t("nextImage")}
                                                >
                                                    <svg className="w-6 h-6 text-white group-hover/arrow:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </>
                                        )}
                                    </motion.div>
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
