"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

function Profil() {
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll();
  const [isFixed, setIsFixed] = useState(true);

  const x = useTransform(scrollYProgress, [0, 0.2, 0.3], [500, 0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/CV.pdf";
    link.download = "CV_Liam_MORICONI.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {      
      if (window.scrollY > window.innerHeight * 1.52) {
        setIsFixed(false); // Après 40% du scroll, le titre devient normal
      } else {
        setIsFixed(true); // Sinon, il reste en position fixe
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Eviter que les éléments réaparaissent lors d'un refresh
  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div
      className={` ${
        isReady ? "visible" : "hidden-until-loaded"
      } relative min-h-[1300px]`}
    >
      <div className="absolute top-0 left-0 w-full">
        <motion.h1
          style={{ x, opacity }}
          className={`hidden md:block text-white font-bold text-3xl md:text-6xl whitespace-nowrap ${
            isFixed ? "fixed top-2/4 left-2/4" : "absolute left-2/4 top-[-70]"
          } object-contain`}
        >
          🙋‍♂️ À Propos de Moi..
        </motion.h1>

        <h1 className="md:hidden text-white text-3xl text-center font-bold">🙋‍♂️ À Propos de Moi..</h1>

        <div id="profil" className="max-w-5xl mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-custom-gradient2 p-6 rounded-xl shadow-2xl shadow-white border-2 border-white">
            <Image
              src="/images/Liam.jpg"
              alt="Photo de profil"
              width={100}
              height={100}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover"
            />
            <div>
              <h2 className="text-xl md:text-3xl text-custom-blue font-semibold mb-8">
                👤 Informations Personnelles
              </h2>
              <div className="md:text-xl flex flex-col gap-2">
                <p>
                  <strong>Nom :</strong> Liam MORICONI
                </p>
                <p>
                  <strong>Âge :</strong> 20 ans
                </p>
                <p>
                  <strong>Localisation :</strong>{" "}
                  <FaMapMarkerAlt className="inline" /> Paris{" "}
                </p>
                <p>
                  <strong>Email :</strong> <FaEnvelope className="inline" />{" "}
                  moriconiliam@gmail
                </p>
                <p>
                  <strong>Téléphone :</strong> <FaPhone className="inline" /> 07
                  84 68 95 25
                </p>
              <Link href="/#contact" className="not-md:self-center">
                <Button className="text-xl font-blod mt-4 bg-gray-200 text-black border-1 border-black hover:text-blue-500 hover:border-blue-500 hover:bg-gray-200 active:bg-gray-600">
                  Me contacter
                </Button>
              </Link>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-12 bg-custom-gradient2 md:pl-30 p-8 rounded-xl shadow-2xl shadow-white border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 not-md:text-center">
              🎓 Études & Formation
            </h2>
            <div className="relative border-l-4 border-blue-500 pl-6">
              {[
                {
                  year: "2023 - 2025",
                  title: "BTS SIO - Lycée Raoul Follereau",
                  description:
                    "BTS Services Informatiques aux Organisations avec l'option SLAM - Solutions Logicielles et Applications métiers.",
                },
                {
                  year: "2019 - 2022",
                  title: "Baccalauréat Général - Lycée Darius Milhaud",
                  description:
                    "Spécialités : Mathématiques et Histoire-Géographie et Géopolotique.",
                },
                {
                  year: "2015 - 2019",
                  title: "Brevet - Collège Albert-Cron",
                  description: "Obtention du brevet des collèges.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-6 relative"
                >
                  <div className="absolute -left-11 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
                    <FaGraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expériences professionnelles */}
          <div className="mt-12  bg-custom-gradient2 md:pl-30 p-8 rounded-xl shadow-2xl shadow-white border-2 border-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 not-md:text-center">
              👔 Expériences professionnelles
            </h2>
            <div className="relative border-l-4 border-green-500 pl-6">
              {[
                {
                  year: "2025",
                  title: "Stage en entreprise - UNOWHY",
                  description:
                    "Développement de solutions logicielles et gestion de bases de données.",
                },
                {
                  year: "2024",
                  title: "Stage en entreprise - POBI",
                  description:
                    "Participation à la conception et au développement d’applications.",
                },
                {
                  year: "2022 / 2023",
                  title: "CDD - OTESSA",
                  description:
                    "Agent d'accueil en aéroport, gestion des flux de passagers.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-6 relative"
                >
                  <div className="absolute -left-11 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full">
                    <FaBriefcase size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {item.year} - {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12  bg-custom-gradient2 p-8 rounded-xl shadow-2xl shadow-white border-2 border-white">
            <h2 className="text-2xl md:text-3xl md:pl-30 font-semibold mb-10 not-md:text-center">
              🧑‍💻 Technologies maîtrisées
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
              {[
                {
                  src: "/images/icones/php.png",
                  alt: "PHP",
                  description:
                    "PHP est un langage de programmation côté serveur utilisé pour le développement web. Il permet de créer des sites dynamiques et interagir avec des bases de données.",
                },
                {
                  src: "/images/icones/sql.png",
                  alt: "SQL",
                  description:
                    "SQL (Structured Query Language) est un langage utilisé pour interroger et manipuler des bases de données relationnelles.",
                },
                {
                  src: "/images/icones/html.png",
                  alt: "HTML",
                  description:
                    "HTML (HyperText Markup Language) est le langage standard utilisé pour structurer le contenu des pages web.",
                },
                {
                  src: "/images/icones/css.png",
                  alt: "CSS",
                  description:
                    "CSS (Cascading Style Sheets) est utilisé pour styliser les pages web, gérer les couleurs, les polices et la mise en page.",
                },
                {
                  src: "/images/icones/js.png",
                  alt: "JavaScript",
                  description:
                    "JavaScript est un langage de programmation permettant d'ajouter des interactions dynamiques aux sites web.",
                },
                {
                  src: "/images/icones/python.png",
                  alt: "Python",
                  description:
                    "Python est un langage polyvalent utilisé en développement web, data science, intelligence artificielle et bien plus.",
                },
                {
                  src: "/images/icones/github.png",
                  alt: "GitHub",
                  description:
                    "GitHub est une plateforme de gestion de versions et de collaboration pour les développeurs utilisant Git.",
                },
                {
                  src: "/images/icones/cs.png",
                  alt: "C#",
                  description:
                    "C# est un langage de programmation développé par Microsoft, largement utilisé pour les applications web, desktop et jeux vidéo avec Unity.",
                },
                {
                  src: "/images/icones/symfony.png",
                  alt: "Symfony",
                  description:
                    "Symfony est un framework PHP robuste et flexible, utilisé pour créer des applications web performantes et évolutives.",
                },
                {
                  src: "/images/icones/react.png",
                  alt: "React",
                  description:
                    "React est une bibliothèque JavaScript permettant de construire des interfaces utilisateur interactives et réactives.",
                },
                {
                  src: "/images/icones/linux.png",
                  alt: "Linux",
                  description:
                    "Linux est un système d'exploitation open source utilisé dans les serveurs, le cloud et le développement logiciel.",
                },
                {
                  src: "/images/icones/bootstrap.png",
                  alt: "Bootstrap",
                  description:
                    "Bootstrap est un framework CSS facilitant la création d'interfaces web responsives et modernes.",
                },
              ].map((tech, index) => (
                <Popover key={index}>
                  <PopoverTrigger className="w-[140%] md:w-30 md:h-30 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:opacity-50 ">
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="p-4 shadow-xl border-2 border-black rounded-lg bg-blue-200 max-w-xs text-center z-100">
                    <h3 className="text-lg font-bold">
                      {tech.alt}
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      {tech.description}
                    </p>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>

          {/* CV */}
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-10">
            <div className="text-4xl animate-bounce mt-2 hidden md:block">👉</div>
            <div className="text-4xl animate-bounce mt-2 self-center md:hidden">👇</div>
            <Button
              onClick={handleDownloadCV}
              className="p-6 text-xl bg-white text-black border-2 border-black hover:border-blue-500 hover:text-blue-500 hover:bg-white active:opacity-80"
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
