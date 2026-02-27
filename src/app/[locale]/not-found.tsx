"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsArrowLeft, BsExclamationTriangle } from "react-icons/bs";

const NotFound = () => {
    const t = useTranslations("NotFound");

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Icon with Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            transition: { duration: 0.5, ease: "easeOut" }
                        }}
                        className="text-accent text-8xl md:text-9xl mb-4"
                    >
                        <BsExclamationTriangle />
                    </motion.div>

                    {/* 404 Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.5 }
                        }}
                    >
                        <h1 className="text-8xl md:text-[180px] font-extrabold text-white/5 leading-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]">
                            {t("title")}
                        </h1>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wider">
                            {t("subtitle")}
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.4, duration: 0.5 }
                        }}
                        className="text-white/60 text-lg md:text-xl max-w-[600px] leading-relaxed"
                    >
                        {t("description")}
                    </motion.p>

                    {/* Action Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.6, duration: 0.5 }
                        }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-hover transition-all group shadow-lg shadow-accent/20"
                        >
                            <BsArrowLeft className="text-xl group-hover:-translate-x-2 transition-transform" />
                            {t("backHome")}
                        </Link>
                    </motion.div>

                    {/* Floating Particles (Premium touch) */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-accent/20 rounded-full z-[-1] hidden md:block"
                            initial={{
                                x: Math.random() * 400 - 200,
                                y: Math.random() * 400 - 200,
                                opacity: 0
                            }}
                            animate={{
                                y: [0, -40, 0],
                                opacity: [0, 0.5, 0],
                                transition: {
                                    delay: i * 0.2,
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${30 + Math.random() * 40}%`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotFound;
