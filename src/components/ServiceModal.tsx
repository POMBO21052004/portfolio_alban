"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        num: string;
        title: string;
        description: string;
        icon: ReactNode;
        detailedExplanation: {
            whatIsIt: string;
            howItWorks: string[];
            benefits: string[];
            examples: string[];
        };
    } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#27272c] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-accent/20"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[#27272c] border-b border-white/10 p-6 flex items-center justify-between z-10">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl text-accent">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                                        <p className="text-white/60 text-sm">{service.description}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* What is it? */}
                                <div>
                                    <h4 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <span className="text-2xl">🤔</span>
                                        C'est quoi exactement ?
                                    </h4>
                                    <p className="text-white/80 leading-relaxed">
                                        {service.detailedExplanation.whatIsIt}
                                    </p>
                                </div>

                                {/* How it works */}
                                <div>
                                    <h4 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <span className="text-2xl">⚙️</span>
                                        Comment ça marche ?
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.detailedExplanation.howItWorks.map((step, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-accent font-bold mt-1">{index + 1}.</span>
                                                <span className="text-white/80 leading-relaxed">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h4 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <span className="text-2xl">✨</span>
                                        Les avantages pour vous
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.detailedExplanation.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span className="text-accent text-xl">•</span>
                                                <span className="text-white/80 leading-relaxed">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Examples */}
                                <div>
                                    <h4 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                                        <span className="text-2xl">💡</span>
                                        Exemples concrets
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.detailedExplanation.examples.map((example, index) => (
                                            <li key={index} className="bg-[#232329] p-4 rounded-lg">
                                                <span className="text-white/80 leading-relaxed">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;