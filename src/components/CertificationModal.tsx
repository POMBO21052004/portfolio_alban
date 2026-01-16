"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CertificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    certification: {
        name: string;
        issuer: string;
        date: string;
        credentialId?: string;
        image: string;
        description?: string;
    } | null;
}

const CertificationModal = ({ isOpen, onClose, certification }: CertificationModalProps) => {
    if (!certification) return null;

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
                            className="bg-[#27272c] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-accent/20"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[#27272c] border-b border-white/10 p-6 flex items-center justify-between z-10">
                                <h3 className="text-2xl font-bold text-accent">{certification.name}</h3>
                                <button
                                    onClick={onClose}
                                    className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-6">
                                {/* Certificate Image */}
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-white/10 bg-white">
                                    <Image
                                        src={certification.image}
                                        alt={certification.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[#232329] p-4 rounded-lg">
                                        <p className="text-white/60 text-sm mb-1">Issuer</p>
                                        <p className="text-white font-semibold">{certification.issuer}</p>
                                    </div>
                                    <div className="bg-[#232329] p-4 rounded-lg">
                                        <p className="text-white/60 text-sm mb-1">Date</p>
                                        <p className="text-white font-semibold">{certification.date}</p>
                                    </div>
                                    {certification.description && (
                                        <div className="bg-[#232329] p-4 rounded-lg md:col-span-2">
                                            <p className="text-white/60 text-sm mb-1">Description</p>
                                            <p className="text-white/80 text-sm leading-relaxed">{certification.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CertificationModal;
