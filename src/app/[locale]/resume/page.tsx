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
import { useTranslations } from "next-intl";

const Resume = () => {
    const t = useTranslations("Resume");
    const [selectedCertification, setSelectedCertification] = useState<any | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dynamic Data from Translations
    const aboutData = {
        icon: <FaUserCircle />,
        title: t("about.title"),
        description: t("about.description"),
        info: [
            { fieldName: t("about.fields.name"), fieldValue: "Pombo Mbe Alban", icon: <FaUser /> },
            { fieldName: t("about.fields.phone"), fieldValue: "(+237) 681 20 25 20", icon: <FaPhone /> },
            { fieldName: t("about.fields.experience"), fieldValue: t("about.values.experience"), icon: <FaBriefcase /> },
            { fieldName: t("about.fields.nationality"), fieldValue: t("about.values.nationality"), icon: <FaGlobe /> },
            { fieldName: t("about.fields.email"), fieldValue: "albanpombombe@gmail.com", icon: <FaEnvelope /> },
            { fieldName: t("about.fields.freelance"), fieldValue: t("about.values.freelance"), icon: <FaUserTie /> },
            { fieldName: t("about.fields.city"), fieldValue: t("about.values.city"), icon: <FaMapMarkerAlt /> },
            { fieldName: t("about.fields.languages"), fieldValue: t("about.values.languages"), icon: <FaLanguage /> },
        ],
    };

    const experienceData = {
        icon: <FaBriefcase />,
        title: t("experience.title"),
        description: t("experience.description"),
        items: t.raw("experience.items").map((item: any, index: number) => ({
            ...item,
            location: [
                "https://maps.google.com/?q=Digiplus+Consulting+Douala",
                "https://maps.google.com/?q=PANZANI+CAMEROUN+Douala",
                "https://maps.google.com/?q=CCN+Technologies+Douala"
            ][index]
        })),
    };

    const educationData = {
        icon: <FaGraduationCap />,
        title: t("education.title"),
        description: t("education.description"),
        items: t.raw("education.items").map((item: any, index: number) => ({
            ...item,
            location: [
                "https://maps.google.com/?q=IUT+Douala",
                "https://maps.google.com/?q=IUT+Douala",
                "https://maps.google.com/?q=Institut+Polyvalent+Minfang+Douala"
            ][index]
        })),
    };

    const skillsData = {
        icon: <FaCode />,
        title: t("skills.title"),
        description: t("skills.description"),
        categories: [
            {
                title: t("skills.categories.frontend"),
                skillList: [
                    { icon: <FaHtml5 />, name: "html 5", level: t("skills.level.advanced") },
                    { icon: <FaCss3 />, name: "css 3", level: t("skills.level.advanced") },
                    { icon: <FaJs />, name: "javascript", level: t("skills.level.intermediate") },
                    { icon: <FaReact />, name: "react.js", level: t("skills.level.advanced") },
                    { icon: <SiNextdotjs />, name: "next.js", level: t("skills.level.intermediate") },
                    { icon: <SiTailwindcss />, name: "tailwind.css", level: t("skills.level.advanced") },
                ]
            },
            {
                title: t("skills.categories.backend"),
                skillList: [
                    { icon: <FaNodeJs />, name: "node.js", level: t("skills.level.intermediate") },
                    { icon: <SiDjango />, name: "django", level: t("skills.level.advanced") },
                    { icon: <SiLaravel />, name: "laravel", level: t("skills.level.intermediate") },
                    { icon: <SiMysql />, name: "mysql", level: t("skills.level.advanced") },
                ]
            },
            {
                title: t("skills.categories.tools"),
                skillList: [
                    { icon: <SiDocker />, name: "docker", level: t("skills.level.beginner") },
                    { icon: <FaGitAlt />, name: "git", level: t("skills.level.intermediate") },
                    { icon: <FaGithub />, name: "github", level: t("skills.level.intermediate") },
                    { icon: <FaFigma />, name: "figma", level: t("skills.level.intermediate") },
                ]
            }
        ],
    };

    const certificationsData = {
        icon: <FaCertificate />,
        title: t("certifications.title"),
        description: t("certifications.description"),
        items: t.raw("certifications.items").map((item: any, index: number) => ({
            ...item,
            image: [
                "/assets/certifications/Attestation_dclic_1.png",
                "/assets/certifications/Attestation_de_formation_niveau_intermédiaire.png"
            ][index]
        })),
    };

    const handleCertificationClick = (cert: any) => {
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
                        <TabsTrigger value="experience">{t("tabs.experience")}</TabsTrigger>
                        <TabsTrigger value="education">{t("tabs.education")}</TabsTrigger>
                        <TabsTrigger value="skills">{t("tabs.skills")}</TabsTrigger>
                        <TabsTrigger value="certifications">{t("tabs.certifications")}</TabsTrigger>
                        <TabsTrigger value="about">{t("tabs.about")}</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center gap-4 justify-center xl:justify-start">
                                    <div className="text-4xl text-accent">{experienceData.icon}</div>
                                    <h3 className="text-4xl font-bold">{experienceData.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experienceData.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {experienceData.items.map((item: any, index: number) => {
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
                                    <div className="text-4xl text-accent">{educationData.icon}</div>
                                    <h3 className="text-4xl font-bold">{educationData.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {educationData.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {educationData.items.map((item: any, index: number) => {
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
                                    <h3 className="text-4xl font-bold">{skillsData.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skillsData.description}
                                    </p>
                                </div>

                                <ScrollArea className="h-[400px]">
                                    <div className="flex flex-col gap-10">
                                        {skillsData.categories.map((category, catIndex) => (
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
                                    <div className="text-4xl text-accent">{certificationsData.icon}</div>
                                    <h3 className="text-4xl font-bold">{certificationsData.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {certificationsData.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    {certificationsData.items.length > 0 ? (
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                            {certificationsData.items.map((item: any, index: number) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() => handleCertificationClick(item)}
                                                        className="bg-[#232329] rounded-xl overflow-hidden cursor-pointer group hover:border-accent border border-transparent transition-all duration-300"
                                                    >
                                                        <div className="relative w-full aspect-[2/1] bg-white overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.name}
                                                                fill
                                                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                                                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/90 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                                                    {t("certifications.viewDetails")}
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                {t("certifications.noCertifications")}
                                            </p>
                                            <p className="text-white/40 text-sm mt-2">
                                                {t("certifications.upcomingCerts")}
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
                                    <div className="text-4xl text-accent">{aboutData.icon}</div>
                                    <h3 className="text-4xl font-bold">{aboutData.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {aboutData.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mx-auto xl:mx-0">
                                    {aboutData.info.map((item, index) => {
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
