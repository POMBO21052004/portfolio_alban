"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsDownload, BsX } from "react-icons/bs";

const InstallPWA = () => {
    const t = useTranslations("PWA");
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if already dismissed in this session
        const sessionDismissed = sessionStorage.getItem("pwa_install_dismissed");
        if (sessionDismissed) {
            setIsDismissed(true);
            return;
        }

        const handleBeforeInstallPrompt = (e: any) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);
            // Show the custom install UI
            if (!isDismissed) {
                setIsVisible(true);
            }
        };

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        // Check if app is already installed
        window.addEventListener('appinstalled', () => {
            setIsVisible(false);
            setDeferredPrompt(null);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        };
    }, [isDismissed]);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the PWA install prompt');
        } else {
            console.log('User dismissed the PWA install prompt');
        }

        // We've used the prompt, and can't use it again
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    const handleDismiss = () => {
        setIsVisible(false);
        setIsDismissed(true);
        sessionStorage.setItem("pwa_install_dismissed", "true");
    };

    if (!isVisible || isDismissed) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 100 }}
                className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end gap-3"
            >
                {/* Custom Tooltip/Notification */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#232329] border border-accent/20 p-4 rounded-2xl shadow-2xl max-w-[280px] relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <button
                        onClick={handleDismiss}
                        className="absolute top-2 right-2 text-white/40 hover:text-white transition-colors p-1"
                    >
                        <BsX className="text-xl" />
                    </button>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <BsDownload className="text-xl animate-bounce" />
                            </div>
                            <span className="font-bold text-white text-sm uppercase tracking-wider">App Mobile</span>
                        </div>
                        <p className="text-white/60 text-xs leading-relaxed">
                            {t("installDescription")}
                        </p>
                    </div>
                </motion.div>

                {/* Main Floating Button */}
                <motion.button
                    onClick={handleInstallClick}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-accent text-primary flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,255,153,0.3)] hover:shadow-[0_0_50px_rgba(0,255,153,0.5)] transition-all duration-300 relative group"
                >
                    <BsDownload />

                    {/* Ripple animation */}
                    <span className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping" />

                    {/* Particle stars */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
};

export default InstallPWA;
