"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Accueil() {
  const { scrollYProgress } = useScroll();
  const [isReady, setIsReady] = useState(false);

  // Déplacement du titre vers la gauche et disparition progressive
  const x = useTransform(scrollYProgress, [0, 0.2], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const imgX = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, -600, -1000]); 
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]); 
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowName(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className={`${isReady ? "visible" : "hidden-until-loaded"} h-[200vh] flex flex-row-reverse relative`}>
      <motion.h1
        style={{ x, opacity }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 fixed top-3/7 left-1/3 -translate-x-1/2 text-6xl font-bold text-left text-white whitespace-nowrap"
      >
        Portfolio de
        <br />
        {showName && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="block text-white"
          >
            Liam
          </motion.span>
        )}
        {showName && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="block text-blue-300"
          >
            MORICONI
          </motion.span>
        )}
      </motion.h1>
      <motion.img
       style={{ x: imgX, opacity: imgOpacity }}
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
        src="/images/logoLM.png"
        alt="Logo"
        className="fixed top-1/4 left-2/3 -translate-x-1/2 h-[50%] w-[50%] object-contain"
      />
    </div>
  );
}

export default Accueil;
