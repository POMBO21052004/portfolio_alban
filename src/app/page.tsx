"use client";

import { Download } from "lucide-react";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:justify-start xl:gap-[100px] xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg text-white/80">Développeur Full Stack</span>
            <h1 className="text-5xl xl:text-7xl font-bold mb-6">
              Bonjour, je suis <br /> <span className="text-accent">Pombo Mbe Alban</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/70 text-base font-light leading-relaxed">
              Développeur Web Full-Stack agé de 22 ans, passionné par la création d’application
              moderne et intuitives, je transforme des idées complexes en code élégant. curieux et créatif,
              j’ai acquis de solides compétences en développement front-end et back-end, me permettant de
              concevoir des solutions complètes et performantes.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/file/CV_pombo_mbe_alban_update.pdf"
                download="CV_pombo_mbe_alban_update.pdf"
                className="uppercase flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500 px-8 py-3 rounded-full font-semibold tracking-wider shadow-[0_0_20px_rgba(0,255,153,0.2)] hover:shadow-[0_0_30px_rgba(0,255,153,0.4)]"
              >
                <span>Télécharger CV</span>
                <Download className="text-xl" />
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
