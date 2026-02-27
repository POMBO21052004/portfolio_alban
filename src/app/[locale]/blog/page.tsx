"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsCalendar4Event, BsTag } from "react-icons/bs";
import NextImage from "next/image";

const BlogList = () => {
    const t = useTranslations("Blog");

    // Localized posts. t.raw is used to get the array of objects.
    const posts = t.raw("posts") as any[];

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
                    <div className="flex flex-col gap-2 text-center items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-[600px] leading-relaxed">
                            {t("description")}
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[1000px] mx-auto">
                        {posts.map((post, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 2.6 + index * 0.1, duration: 0.4 }
                                    }}
                                    className="group bg-[#232329] p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="flex flex-col gap-6">
                                        {/* Image Zone */}
                                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-[#1c1c22]">
                                            {post.image ? (
                                                <NextImage
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-white/5">
                                                    <BsTag className="text-6xl" />
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            {/* Category & Date */}
                                            <div className="flex justify-between items-center text-accent text-sm">
                                                <div className="flex items-center gap-2">
                                                    <BsTag />
                                                    <span className="uppercase tracking-wider">{post.category}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-white/40">
                                                    <BsCalendar4Event />
                                                    <span>{post.date}</span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-all duration-500 leading-tight h-[60px] line-clamp-2">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-white/60 text-base leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Read More Link */}
                                            <div className="mt-2">
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all group/link"
                                                >
                                                    <span className="font-semibold uppercase text-sm tracking-widest">{t("readMore")}</span>
                                                    <BsArrowRight className="text-xl group-hover/link:translate-x-2 transition-transform duration-300" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorator */}
                                    <div className="absolute -right-4 -bottom-4 text-white/5 text-8xl font-bold group-hover:text-accent/10 transition-all duration-500 pointer-events-none">
                                        0{index + 1}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogList;
