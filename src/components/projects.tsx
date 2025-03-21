"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardProject from "./cardProject";

function Projects() {
  const { scrollYProgress } = useScroll();
  const [isFixed, setIsFixed] = useState(true);

  const titleX = useTransform(scrollYProgress, [0.6, 0.7], [500, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const topX = useTransform(scrollYProgress, [0.65, 0.75], [-500, 0]);
  const topOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  const bottomX = useTransform(scrollYProgress, [0.75, 0.85], [500, 0]);
  const bottomOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.52) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.h2
        style={{ x: titleX, opacity: titleOpacity }}
        className="font-bold text-6xl text-center mb-40 text-white"
      >
        <div id="projet" className="inline-block animate-bounce">🚀</div> Mes projets
      </motion.h2>

      {/* Conteneur des projets en quinconce */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-60">
        <motion.div style={{x: topX, opacity: topOpacity}} className="mt-0">
          <CardProject
            title="GSB - AppliFrais"
            description="Appli de frais"
            imageSrc="/images/cardGSB.jpg"
            projectDescription="lorem ipum sit dlor amet lorem ipum sit dlor amet  lorem ipum sit dlor amet lorem ipum sit dlor amet lorem ipum sit dlor amet lorem ipum sit dlor amet lorem ipum sit dlor amet lorem ipum sit dlor amet  "
            technologies={["TypeScript", "React"]}
          />
        </motion.div>

        <motion.div style={{x: topX, opacity: topOpacity }} className="mt-0">
          <CardProject
            title="YebQuizz"
            description="Jeu mobile de type quiz"
            imageSrc="/images/cardDEF.jpg"
            projectDescription="Gestion de H"
            technologies={[".NET", "C#", "XML", "JSON"]}
          />
        </motion.div>

        <motion.div style={{x: bottomX, opacity: bottomOpacity }} className="mt-0">
          <CardProject
            title="ICGO - Formations"
            description="Application de gestion de formations / stages"
            imageSrc="/images/cardICGO.jpg"
            projectDescription="nanananana"
            technologies={["C#", "SQL", "POO"]}
          />
        </motion.div>

        <motion.div style={{x: bottomX, opacity: bottomOpacity }} className="mt-0">
          <CardProject
            title="GSB - Gestion d'événements"
            description="Gestion d'événements en Symfony"
            imageSrc="/images/cardGSB2.jpg"
            projectDescription="nanananananananan"
            technologies={["Symfony", "PHP", "Doctrine", "HTML"]}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
