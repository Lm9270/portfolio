import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "./ui/button";

interface CardProject {
  title: string;
  description: string;
  imageSrc: string;
  projectDescription: string;
  technologies: string[];
}

const CardProject: React.FC<CardProject> = ({
  title,
  description,
  imageSrc,
  projectDescription,
  technologies,
}) => {

  const[open, setOpen] = useState(false); 

  return (
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="relative block w-[500px] h-[400px]" onClick={() => setOpen(true)}>
            <div className="relative group w-full h-full border-2 border-blue-200 rounded-lg shadow-2xl shadow-blue-200">
                <Image
                src={imageSrc}
                width={300}
                height={300}
                alt={`Image de ${title}`}
                className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
                />
                <div className=" absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white drop-shadow-[0_0_2px_rgba(0,0,0,1)] font-semibold text-4xl rounded-lg">
                    VOIR
                </div>
            </div>
          </PopoverTrigger>
          <PopoverContent side="top" sideOffset={0} align="center" className="w-[500px] h-[400px] bg-custom-gradient2 p-4 shadow-lg border rounded-lg z-50 overflow-auto absolute top-0 left-[-250] flex flex-col" >
            <h3 className="text-2xl font-bold">{title}</h3>
            <i className="text-gray-700">{description}</i>

            <section className="mt-2">
              <h3 className="text-xl font-semibold mb-4">
                📌 Description
              </h3>
              <p className="">{projectDescription}</p>
            </section>

            {/* Langages & Technologies */}
            <section className="mt-2">
              <h3 className="text-xl font-semibol mb-4">
                🛠️ Langages & Technologies
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {technologies.map((tech, index) => (
                  <li key={index}>➡️ {tech}</li>
                ))}
              </ul>
            </section>

            <div className="mt-auto flex justify-center">
              <Button onClick={() => setOpen(false)}>
                Fermer
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
  );
};

export default CardProject;
