"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
        setIsOpen(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-custom-gradient2 shadow-md w-full fixed top-0 z-1000 border-1 border-blue-200 transition-transform duration-700 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="Portfolio">
            <Image src="/images/logoLM.png" alt="Logo" className="h-14" width={90} height={90}/>
          </a>
          <span className="text-xl text-white font-semibold">
            Portfolio de Liam MORICONI
          </span>
        </div>

        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a
            href="/#profil"
            className="text-white hover:text-blue-300 transition"
          >
            Profil
          </a>
          <a
            href="/#projet"
            className="text-white hover:text-blue-300 transition"
          >
            Projets
          </a>
          <a
            href="Veille"
            className="text-white hover:text-blue-300 transition"
          >
            Veille
          </a>
          <a
            href="Documents"
            className="text-white hover:text-blue-300 transition whitespace-nowrap"
          >
            Diplômes / attestations
          </a>
          <a
            href="/#contact"
            className="text-white hover:text-blue-300 transition"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-white "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-custom-gradient2 border-t shadow-md p-4 flex flex-col items-center gap-4">
          <a
            href="/#profil"
            className="text-white hover:text-blue-300 active:text-blue-300 transition"
          >
            À propos de moi
          </a>
          <a
            href="/#projet"
            className="text-white hover:text-blue-300 active:text-blue-300 transition"
          >
            Projets
          </a>
          <a
            href="Veille"
            className="text-white hover:text-blue-300 active:text-blue-300 transition"
          >
            Veille Informationnelle
          </a>
          <a
            href="Documents"
            className="text-white hover:text-blue-300 active:text-blue-300 transition"
          >
            Diplômes / attestations
          </a>
          <a
            href="/#contact"
            className="text-white hover:text-blue-300 active:text-blue-300 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
