"use client"; 
import React from "react";
import { motion } from "framer-motion";
import { Alfa_Slab_One, Manrope } from "next/font/google";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

const alfa = Alfa_Slab_One({ weight: '400', subsets: ['latin'], });
const manrope = Manrope({subsets: ['latin']});

const documents = [
  {
    title: "Convention de Stage - UNOWHY",
    description: "Convention signée pour le stage chez UNOWHY (2025).",
    file: "/documents/Stage2.pdf",
  },
  {
    title: "Convention de Stage - POBI",
    description: "Convention signée pour le stage chez POBI (2024).",
    file: "/documents/Stage1.pdf",
  },
  {
    title: "Tableau de synthèse",
    description: "Tableau de synthèse de l'épreuve E5 du BTS SIO",
    file: "/documents/TableauSynthese.pdf",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <h1 className={`${alfa.className} text-5xl mt-20 mb-12 text-center`}>
        📄 Mes Documents Importants
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col justify-between h-full"
          >
            <Card className="bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-700 transition-all duration-300 h-full flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col gap-4 flex-1">
                <h2 className={`${manrope.className} text-2xl font-bold`}>
                  {doc.title}
                </h2>
                <p className="text-gray-300 text-sm flex-1">{doc.description}</p>
                <motion.a
                  href={doc.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-yellow-500 text-black font-semibold shadow hover:bg-yellow-400 transition-all duration-300"
                >
                  <Download size={20} />
                  Télécharger
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

