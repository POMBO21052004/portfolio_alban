"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { BsArrowLeft, BsCalendar4Event, BsTag, BsHouse, BsShare, BsLinkedin, BsTwitterX, BsWhatsapp, BsLink45Deg, BsCheck2 } from "react-icons/bs";
import NextImage from "next/image";
import { useState, useEffect } from "react";

interface BlogPostClientProps {
    post: any;
}

const BlogPostClient = ({ post }: BlogPostClientProps) => {
    const t = useTranslations("Blog");
    const [isCopied, setIsCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    const shareMessage = t("shareMessage", {
        title: post?.title || "",
        excerpt: post?.excerpt || ""
    }) + currentUrl;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleNativeShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post?.title,
                text: shareMessage,
                url: currentUrl,
            }).catch(console.error);
        }
    };

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareMessage)}`,
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`,
    };

    return (
        <section className="min-h-[80vh] py-12 xl:py-24">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="max-w-[900px] mx-auto"
                >
                    {/* Navigation */}
                    <div className="mb-12 flex justify-between items-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-all group"
                        >
                            <BsArrowLeft className="text-xl group-hover:-translate-x-2 transition-transform" />
                            <span className="font-semibold uppercase text-sm tracking-widest">{t("backToList")}</span>
                        </Link>

                        {/* Mobile Share Button */}
                        <button
                            onClick={handleNativeShare}
                            className="md:hidden w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                            title={t("share")}
                        >
                            <BsShare />
                        </button>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-4 mb-8 items-center">
                        <div className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-1 rounded-full text-sm font-medium">
                            <BsTag />
                            <span>{post.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <BsCalendar4Event />
                            <span className="font-semibold tracking-wide">{post.date}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>


                    {/* Intro / Excerpt */}
                    <p className="text-xl text-white/80 italic border-l-4 border-accent pl-6 mb-12 leading-relaxed bg-white/5 py-6 pr-6 rounded-r-lg">
                        {post.excerpt}
                    </p>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none mb-12">
                        <p className="text-white/60 text-lg leading-relaxed whitespace-pre-wrap">
                            {post.content}
                        </p>
                    </div>

                    {/* Image at the bottom */}
                    {post.image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full h-[300px] md:h-[500px] mb-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <NextImage
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    )}

                    {/* Share Section */}
                    <div className="bg-[#232329] p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                        <div className="flex flex-col gap-1">
                            <h4 className="text-xl font-bold text-white uppercase tracking-wider">{t("shareTitle")}</h4>
                            <p className="text-white/40 text-sm italic">Soutenez mon travail en partageant cet article !</p>
                        </div>
                        <div className="flex items-center gap-4">
                            {/* Copy Link */}
                            <button
                                onClick={handleCopyLink}
                                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl hover:bg-accent hover:text-primary transition-all relative group"
                                title={t("copyLink")}
                            >
                                {isCopied ? <BsCheck2 className="text-2xl" /> : <BsLink45Deg className="text-2xl" />}
                                {isCopied && (
                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold py-1 px-2 rounded opacity-100 transition-opacity">
                                        {t("linkCopied")}
                                    </span>
                                )}
                            </button>

                            {/* Social Buttons */}
                            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl hover:bg-[#0077b5] transition-all">
                                <BsLinkedin />
                            </a>
                            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl hover:bg-black transition-all">
                                <BsTwitterX />
                            </a>
                            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white text-xl hover:bg-[#25d366] transition-all">
                                <BsWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white/40 hover:text-accent transition-all group"
                        >
                            <BsHouse className="group-hover:scale-120 transition-transform" />
                            <span className="font-bold tracking-widest uppercase text-sm">Alban.</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogPostClient;
