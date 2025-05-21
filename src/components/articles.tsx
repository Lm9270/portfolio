

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alfa_Slab_One, Manrope } from "next/font/google";

const alfa = Alfa_Slab_One({ weight: '400', subsets: ['latin'] });
const manrope = Manrope({subsets: ['latin']});

const articles = [
  {
    title: "DeepSeek, cette start-up chinoise qui fait mieux qu'OpenAI",
    description: "Qui a dit qu'il fallait dépenser des milliards pour faire de l'IA générative ? Le modèle DeepSeek-R1 atteint des performances comparables à celles du modèle o1 d'OpenAI pour les tâches de mathématiques, de code et de raisonnement. Pour soutenir la communauté, la start-up a mis en libre accès DeepSeek-R1-Zero, DeepSeek-R1 et six modèles denses distillés à partir de DeepSeek-R1, basés sur Llama et Qwen.",
    source: "l'Usine Digitale",
    link: "https://www.usine-digitale.fr/article/deepseek-cette-start-up-chinoise-qui-fait-mieux-qu-openai-pour-96-moins-cher.N2226172",
  },
  {
    title: "Mistral AI, la pépite française de l’intelligence artificielle open source",
    description: "Mistral AI, start-up française dans le domaine de l'IA générative, s'est rapidement fait connaître grâce à ses modèles de langage open source et commerciaux. Ce dossier vous dit tout sur cette pépite : son histoire, sa technologie et ses applications concrètes.",
    source: "lesnumeriques.com",
    link: "https://www.lesnumeriques.com/intelligence-artificielle/ce-qu-il-faut-vraiment-savoir-sur-mistral-ai-la-pepite-francaise-de-l-intelligence-artificielle-open-source-a235428.html",
  },
  {
    title: "Sora, l'outil d'IA vidéo d'OpenAI, enfin accessible en Europe ",
    description: "Les abonnés payants à ChatGPT pourront désormais essayer l'outil vidéo annoncé il y a plus d'un an. La concurrence est de plus en plus sérieuse sur ces outils ultraréalistes, mais aussi particulièrement coûteux.",
    source: "Les Echos",
    link: "https://www.lesechos.fr/tech-medias/intelligence-artificielle/sora-loutil-dia-video-dopenai-enfin-accessible-en-europe-2151330",
  },
  {
    title: "Le nouvel outil de génération d'images de ChatGPT désormais accessible gratuitement",
    description: "OpenAI a annoncé que son nouveau générateur d’images basé sur GPT-4o est maintenant accessible également aux utilisateurs gratuits.",
    source: "lesnumeriques.com",
    link: "https://www.lesnumeriques.com/intelligence-artificielle/le-nouvel-outil-de-generation-d-images-de-chatgpt-desormais-accessible-gratuitement-n235086.html",
  },
];

function Articles() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className={`${alfa.className} text-5xl mb-12 text-center`}>
        📰 Articles 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block"
          >
            <Card className="bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 h-full flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col gap-4">
                <h2 className={`${manrope.className} text-2xl font-bold`}>
                  {article.title}
                </h2>
                <p className="text-gray-300 text-sm flex-1">
                  {article.description}
                </p>
                <p className="text-yellow-400 text-sm font-medium mt-4">
                  Source : {article.source}
                </p>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Articles;
