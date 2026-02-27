"use client";

import { useState } from "react";
import { BsArrowRight, BsCodeSlash, BsDatabase, BsGraphUp, BsAndroid2, BsRobot, BsPalette } from "react-icons/bs";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import ServiceModal from "@/components/ServiceModal";
import { useTranslations } from "next-intl";

const servicesData = [
    { num: "01", icon: <BsCodeSlash />, id: "01" },
    { num: "02", icon: <BsDatabase />, id: "02" },
    { num: "03", icon: <BsGraphUp />, id: "03" },
    { num: "04", icon: <BsAndroid2 />, id: "04" },
    { num: "05", icon: <BsRobot />, id: "05" },
    { num: "06", icon: <BsPalette />, id: "06" },
];

const Services = () => {
    const t = useTranslations("Services");

    const translatedServices = servicesData.map((service) => ({
        ...service,
        title: t(`items.${service.id}.title`),
        description: t(`items.${service.id}.description`),
        detailedExplanation: {
            whatIsIt: t(`items.${service.id}.detailedExplanation.whatIsIt`),
            howItWorks: t.raw(`items.${service.id}.detailedExplanation.howItWorks`) as string[],
            benefits: t.raw(`items.${service.id}.detailedExplanation.benefits`) as string[],
            examples: t.raw(`items.${service.id}.detailedExplanation.examples`) as string[],
        }
    }));

    const [selectedService, setSelectedService] = useState<typeof translatedServices[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceClick = (service: typeof translatedServices[0]) => {
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
                            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-[600px] leading-relaxed">
                            {t("description")}
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
                        {translatedServices.map((service, index) => {
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
                                            <span>{t("learnMore")}</span>
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
                            {t("ctaTitle")}
                        </h3>
                        <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-primary bg-accent hover:bg-accent-hover rounded-full transition-all duration-300">
                            {t("ctaButton")}
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