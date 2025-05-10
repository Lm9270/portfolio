

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alfa_Slab_One, Manrope } from "next/font/google";

const alfa = Alfa_Slab_One({ weight: '400', subsets: ["latin"] });
const manrope = Manrope({subsets: ["latin"]});

const articles = [
  {
    title: "L'essor d'OpenAI : ChatGPT et ses usages innovants",
    description: "OpenAI continue de dominer le secteur avec ses avancées en NLP et la popularité de ChatGPT, transformant de nombreux secteurs économiques.",
    source: "OpenAI Blog",
    link: "https://openai.com/blog",
  },
  {
    title: "Gemini : La réponse de Google à OpenAI",
    description: "Gemini de Google entre dans la compétition avec des modèles multimodaux prometteurs, visant à concurrencer les leaders du marché.",
    source: "Google AI",
    link: "https://deepmind.google/technologies/gemini/",
  },
  {
    title: "Anthropic et Claude : Une nouvelle approche de l'IA",
    description: "Anthropic développe Claude, un concurrent direct de ChatGPT, avec une approche axée sur la sécurité et l'alignement des modèles.",
    source: "Anthropic",
    link: "https://www.anthropic.com/",
  },
  {
    title: "Mistral AI : L'ascension européenne",
    description: "Mistral AI, une startup française, propose des modèles open source puissants qui séduisent la communauté IA.",
    source: "Mistral",
    link: "https://mistral.ai/",
  },
  {
    title: "Meta et LLaMA : Le pari open source",
    description: "Meta mise sur l'open source avec LLaMA, un modèle performant qui démocratise l'accès aux grandes IA.",
    source: "Meta AI",
    link: "https://ai.meta.com/llama/",
  },
  {
    title: "L'IA en Chine : Baidu et ERNIE",
    description: "Baidu, avec son modèle ERNIE, investit massivement dans l'IA pour rattraper la concurrence mondiale.",
    source: "Baidu Research",
    link: "https://research.baidu.com/",
  },
];

function Articles() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className={`${alfa.className} text-5xl mb-12 text-center`}>
        📰 Dernières avancées de l'IA
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
