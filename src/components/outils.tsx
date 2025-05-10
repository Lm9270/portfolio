
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alfa_Slab_One, Manrope } from "next/font/google";

const alfa = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const manrope = Manrope({subsets: ['latin']});

const outils = [
  {
    name: "Feedly",
    description: "Un agrégateur de flux RSS populaire pour suivre facilement les actualités et les tendances du web.",
    link: "https://feedly.com/",
  },
  {
    name: "Google Alerts",
    description: "Service gratuit qui vous envoie des notifications par mail lorsqu'un nouveau contenu est publié sur un sujet donné.",
    link: "https://www.google.com/alerts",
  },
  {
    name: "Talkwalker Alerts",
    description: "Alternative à Google Alerts qui surveille les mentions sur le web, les blogs et Twitter.",
    link: "https://www.talkwalker.com/alerts",
  },
  {
    name: "Mention",
    description: "Outil puissant pour suivre vos mentions sur les réseaux sociaux, les forums et les sites web.",
    link: "https://mention.com/",
  },
  {
    name: "Scoop.it",
    description: "Plateforme de curation qui permet de collecter, organiser et partager des contenus pertinents.",
    link: "https://www.scoop.it/",
  },
  {
    name: "Pocket",
    description: "Permet d'enregistrer des articles et vidéos pour les lire plus tard, même hors connexion.",
    link: "https://getpocket.com/",
  },
];

function Outils() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className={`${alfa.className} text-5xl mb-12 text-center`}>
        🛠️ Outils de Veille Technologique
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {outils.map((outil, index) => (
          <motion.a
            key={index}
            href={outil.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block"
          >
            <Card className="bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 h-full flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col gap-4">
                <h2 className={`${manrope.className} text-2xl font-bold`}>
                  {outil.name}
                </h2>
                <p className="text-gray-300 text-sm flex-1">
                  {outil.description}
                </p>
                <p className="text-yellow-400 text-sm font-medium mt-4">
                  🔗 Visiter le site
                </p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Outils;
