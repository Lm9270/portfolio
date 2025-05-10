import Profil from "@/components/profil";
import Projects from "@/components/projects";
import Accueil from "@/components/accueil";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <div>
        <Accueil />
      <main className="flex flex-col">
        <div className="pt-22 mb-380 md:mb-150">
          <Profil />
        </div>
        <div className="m-auto">
          <Projects />
        </div>
        <div className="w-[90%] m-auto mt-50 md:w-[65%]">
            <Contact/>
        </div>
      </main>
    </div>
  );
}
