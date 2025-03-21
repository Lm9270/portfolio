import Profil from "@/components/profil";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Accueil from "@/components/accueil";
import Contact from "@/components/contact";

export default function Page() {
  return (
    <div className="bg-custom-gradient4">
      <Navbar />
      <Accueil />
      <div className="flex flex-col">
        <div className="pt-22 mb-150">
          <Profil />
        </div>
        <div className="m-auto">
          <Projects />
        </div>
        <div className="m-auto mt-50 w-[65%]">
            <Contact/>
        </div>
      </div>
    </div>
  );
}
