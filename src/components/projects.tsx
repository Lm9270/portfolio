"use client";
import React from "react";
import CardProject from "./cardProject";

function Projects() {
  return (
    <div>
      <h2 className="font-bold text-5xl text-center mb-20 mt-20 text-white">
        <div id="projet" className="inline-block">🚀</div> Mes projets
      </h2>

      <div className="grid grid-cols-1 gap-10 place-items-center justify-center md:grid-cols-2 md:gap-20">
        {[
          {
            title: "GSB",
            imageSrc: "/images/cardCover/cardGSB2.jpg",
            href: "Gsb",
          },
          {
            title: "ICGO",
            imageSrc: "/images/cardCover/cardICGO.jpg",
            href: "Icgo",
          },
          {
            title: "Ami des animaux",
            imageSrc: "/images/cardCover/cardAmis.jpg",
            href: "Wordpress",
          },
          {
            title: "Unowhy",
            imageSrc: "/images/cardCover/cardUnowhy.jpg",
            href: "Unowhy",
          },
          {
            title: "Pobi",
            imageSrc: "/images/cardCover/cardPobi.jpg",
            href: "Pobi",
          },
          {
            title: "Maui",
            imageSrc: "/images/cardCover/cardMaui.jpg",
            href: "Maui",
          },
        ].map((project, index) => (
          <div key={index} className="mt-0">
            <CardProject {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
