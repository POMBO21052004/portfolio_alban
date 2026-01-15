"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface ProjectNavigationProps {
    containerStyles: string;
    iconStyles?: string;
    currentIndex: number;
    totalProjects: number;
}

const ProjectNavigation = ({ containerStyles, iconStyles, currentIndex, totalProjects }: ProjectNavigationProps) => {
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            {/* Prev Button */}
            <button className="group flex items-center justify-center gap-2 text-white hover:text-accent transition-all" onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyles} />
                <span className="text-base font-medium xl:text-lg">Projet précédent</span>
            </button>

            {/* Counter */}
            <div className="text-white/60 font-medium text-base xl:text-lg">
                {currentIndex + 1} / {totalProjects < 10 ? `${totalProjects}` : totalProjects}
            </div>

            {/* Next Button */}
            <button className="group flex items-center justify-center gap-2 text-white hover:text-accent transition-all" onClick={() => swiper.slideNext()}>
                <span className="text-base font-medium xl:text-lg">Projet suivant</span>
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    );
};

export default ProjectNavigation;
