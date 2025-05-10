"use client";

import React from "react";
import { motion } from "framer-motion";
import { Alfa_Slab_One, Manrope } from "next/font/google";
import Articles from "@/components/articles";
import Outils from "@/components/outils";
import Image from "next/image";

const alfa = Alfa_Slab_One({ weight: '400' , subsets: ['latin'],});
const manrope = Manrope({subsets: ['latin']});

function Page() {
  return (
    <div className="min-h-screen text-white relative mt-10">
      <Image
        width={100}
        height={100}
        src="/images/gifs/fondVeille.gif"
        alt="fond-écrans"
        className="w-full h-full fixed object-cover z-[-10]"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center gap-20">
        <h2 className={`${alfa.className} text-6xl`}>
          📡 Veille Technologique
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 2 }}
          className={`${manrope.className} text-4xl `}
        >
          Les évolutions et la concurrence du secteur de
         
          <p className="font-bold text-5xl text-yellow-200 mt-10">l&apos;intelligence artificielle</p>

        </motion.div>

        <motion.a
          href="#articles"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-70 px-6 py-3 rounded-2xl text-white border-2 border-white font-semibold shadow-lg hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out"
        >
          Voir la suite
        </motion.a>
      </section>

      {/* Section outils de veille */}
      <section id="outils" className="bg-black m-50 p-5 border-2 rounded-3xl">
        <Outils/>
      </section>

      {/* Articles Section */}
      <section id="articles" className="bg-black m-50 p-5 border-2 rounded-3xl ">
        <Articles />
      </section>
    </div>
  );
}

export default Page;
