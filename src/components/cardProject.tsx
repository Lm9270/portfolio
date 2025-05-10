import Image from "next/image";

interface CardProject {
  title: string;
  imageSrc: string;
  href: string;
}

const CardProject: React.FC<CardProject> = ({
  title,
  imageSrc,
  href,

}) => {
  return (
    <div>
          <div className="relative group w-100 h-80 border-2 border-blue-200 rounded-lg shadow-2xl shadow-blue-200">
            <a href={href}>
              <Image
                src={imageSrc}
                width={500}
                height={400}
                alt={`Image de ${title}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white drop-shadow-[0_0_2px_rgba(0,0,0,1)] font-semibold text-4xl rounded-lg">
                VOIR
              </div>
            </a>
          </div>

        </div>
  );
};

export default CardProject;
