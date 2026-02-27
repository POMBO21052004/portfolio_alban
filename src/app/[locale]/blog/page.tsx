"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsArrowRight, BsCalendar4Event, BsTag, BsSearch } from "react-icons/bs";
import NextImage from "next/image";
import { useState } from "react";

const BlogList = () => {
    const t = useTranslations("Blog");
    const [searchQuery, setSearchQuery] = useState("");

    // Localized posts. t.raw is used to get the array of objects.
    const posts = t.raw("posts") as any[];

    // Filtering logic
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    <div className="flex flex-col gap-4 text-center items-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            {t("title")} <span className="text-accent">{t("titleAccent")}</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-[600px] leading-relaxed">
                            {t("description")}
                        </p>

                        {/* Search Bar */}
                        <div className="relative w-full max-w-[500px] mt-8">
                            <input
                                type="text"
                                placeholder={t("searchPlaceholder")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#232329] border border-white/10 rounded-full py-4 px-12 text-white outline-none focus:border-accent transition-all duration-300 shadow-xl"
                            />
                            <BsSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 text-xl" />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-accent hover:text-accent-hover transition-colors font-bold text-sm"
                                >
                                    CLEAR
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-7xl mx-auto min-h-[400px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.length > 0 ? (
                                filteredPosts.map((post, index) => (
                                    <motion.div
                                        key={post.slug}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                        className="group bg-[#232329] p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-500 overflow-hidden relative h-full"
                                    >
                                        <div className="flex flex-col gap-6 h-full">
                                            {/* Image Zone */}
                                            <div className="relative w-full h-[200px] rounded-lg overflow-hidden bg-[#1c1c22] shrink-0">
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

                                            <div className="flex flex-col gap-4 flex-grow">
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
                                                <p className="text-white/60 text-base leading-relaxed line-clamp-3 mb-4">
                                                    {post.excerpt}
                                                </p>

                                                {/* Read More Link */}
                                                <div className="mt-auto">
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
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                                >
                                    <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/20">
                                        <BsSearch className="text-5xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{t("noResults")}</h3>
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="text-accent hover:underline uppercase tracking-widest text-sm font-bold"
                                    >
                                        Clear search
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};


export default BlogList;
