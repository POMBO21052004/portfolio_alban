"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [command, setCommand] = useState("");

    // Simulate typing compilation command
    useEffect(() => {
        const cmd = `>  compiling ${pathname === "/" ? "home" : pathname.replace("/", "")}...`;
        setCommand("");
        let i = 0;
        const interval = setInterval(() => {
            if (i < cmd.length) {
                setCommand((prev) => prev + cmd.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 30); // Typing speed

        return () => clearInterval(interval);
    }, [pathname]);

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                {/* Terminal Overlay */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1.0, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="fixed inset-0 z-40 flex items-center justify-center bg-primary pointer-events-none font-mono"
                >
                    <div className="text-accent text-2xl xl:text-4xl">
                        {command}<span className="animate-pulse">_</span>
                    </div>
                </motion.div>

                {/* Content Fade */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.0, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="h-full w-full"
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PageTransition;
