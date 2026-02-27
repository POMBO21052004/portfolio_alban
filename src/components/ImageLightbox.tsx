"use client";

import Image from "next/image";
import React from "react";

interface ImageLightboxProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    currentIndex: number;
    onPrevious: () => void;
    onNext: () => void;
    projectTitle: string;
}

import { useTranslations } from "next-intl";

const ImageLightbox: React.FC<ImageLightboxProps> = ({
    isOpen,
    onClose,
    images,
    currentIndex,
    onPrevious,
    onNext,
    projectTitle,
}) => {
    const t = useTranslations("Work");
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 z-50"
                onClick={onClose}
                aria-label={t("close")}
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Full image */}
            <div
                className="relative w-[90vw] h-[90vh] max-w-7xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={images[currentIndex]}
                    fill
                    className="object-contain"
                    alt={projectTitle}
                />
            </div>

            {/* Image navigation in modal */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrevious();
                        }}
                        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                        aria-label={t("prevImage")}
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
                        aria-label={t("nextImage")}
                    >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
};

export default ImageLightbox;
