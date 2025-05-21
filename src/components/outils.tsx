
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alfa_Slab_One, Manrope } from "next/font/google";

const alfa = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const manrope = Manrope({subsets: ['latin']});

const outils = [
  {
    name: "Feedly",
    description: "un agrégateur de flux RSS qui permet de centraliser les articles de différents sites web en un seul endroit. Il est très utile pour suivre les publications de blogs, sites spécialisés ou médias tech, et organiser sa veille par thématique.",
    link: "https://feedly.com/",
  },
  {
    name: "Google Alerts",
    description: "Service gratuit qui envoie des notifications par e-mail lorsqu’un mot-clé (ex. : intelligence artificielle, cybersécurité) apparaît sur le web. C’est un outil simple et automatique pour rester informé des dernières publications en ligne sur un sujet précis.",
    link: "https://www.google.com/alerts",
  },
  {
    name: "Reddit",
    description: "une plateforme communautaire où les utilisateurs partagent et commentent des contenus. Certains subreddits (ex. : r/MachineLearning, r/programming) sont d'excellentes sources pour découvrir des tendances, des projets innovants ou des discussions de fond sur les nouvelles technologies.",
    link: "https://www.reddit.com/",
  },
  {
    name: "X (anciennement Twitter)",
    description: "X est un réseau social où de nombreux experts, entreprises et journalistes partagent des informations en temps réel. Il est efficace pour repérer les nouveautés, annonces et discussions autour des technologies en suivant des hashtags ou des comptes spécialisés.",
    link: "https://x.com/?lang=fr",
  },
];

function Outils() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className={`${alfa.className} text-5xl mb-12 text-center`}>
        🛠️ Outils de Veille 
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
