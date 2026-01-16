"use client";

import { useState, useEffect } from "react";
import { X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactInfoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        let showTimer: NodeJS.Timeout;
        let reappearTimer: NodeJS.Timeout;

        if (!isClosed) {
            // Show popup 5 seconds after mounting (or resetting)
            showTimer = setTimeout(() => {
                setIsVisible(true);
            }, 5000);
        } else {
            // If closed, wait 2 minutes (120000ms) before resetting logic
            reappearTimer = setTimeout(() => {
                setIsClosed(false);
                // After resetting isClosed, the first effect branch will run on next render/dependency change if structured correctly,
                // but here we simply reset state. faster approach:
                // actually, if we set isClosed to false, the component re-renders but the effect needs to trigger again.
            }, 120000);
        }

        return () => {
            clearTimeout(showTimer);
            clearTimeout(reappearTimer);
        };
    }, [isClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setIsClosed(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 50, x: 50 }}
                    className="fixed bottom-6 right-6 z-50 max-w-xs bg-[#27272c] border border-accent rounded-xl shadow-2xl p-4 flex flex-col gap-3"
                >
                    <button
                        onClick={handleClose}
                        className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>

                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-accent/10 rounded-full text-accent">
                            <Info size={20} />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-accent mb-1">Comment ça marche ?</h4>
                            <p className="text-white/80 text-xs leading-relaxed mb-2">
                                Remplissez le formulaire avec votre demande.
                            </p>
                            <p className="text-white/80 text-xs leading-relaxed">
                                ✅ Un <strong>email de confirmation</strong> vous sera envoyé instantanément.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactInfoPopup;
