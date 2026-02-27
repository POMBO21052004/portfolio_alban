"use client";

import { usePathname, Link } from "@/i18n/routing";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "blog",
        path: "/blog",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("Nav");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav>
            {/* Trigger Button */}
            <button onClick={toggleMenu} className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </button>

            {/* Overlay & Content */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50">
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed right-0 top-0 bottom-0 w-[75%] md:w-[50%] bg-[#1c1c22] border-l border-white/10 p-8 flex flex-col justify-between"
                        >
                            <div className="flex flex-col h-full">
                                {/* Close Button */}
                                <div className="flex justify-end mb-12">
                                    <button onClick={toggleMenu} className="text-accent text-4xl">
                                        <IoMdClose />
                                    </button>
                                </div>

                                {/* Logo */}
                                <div className="mt-8 mb-20 text-center text-2xl">
                                    <Link href="/" onClick={toggleMenu}>
                                        <h1 className="text-4xl font-semibold">
                                            Alban<span className="text-accent">.</span>
                                        </h1>
                                    </Link>
                                </div>

                                {/* Nav Links */}
                                <div className="flex flex-col justify-center items-center gap-8">
                                    {links.map((link, index) => {
                                        return (
                                            <Link
                                                href={link.path}
                                                key={index}
                                                onClick={toggleMenu}
                                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"
                                                    } text-xl capitalize hover:text-accent transition-all`}
                                            >
                                                {t(link.name)}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default MobileNav;
