import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Screenshots from '@/components/screenshots';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 space-y-8 pt-30">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Projet GSB</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Une application PHP pour le laboratoire Galaxy Swiss Bourdin, facilitant la gestion des fiches de frais et leur contrôle par les comptables de l&apos;entreprise
        </p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              Le projet GSB - AppliFrais a consisté au développement d&apos;une application web destinée au laboratoire Galaxy Swiss Bourdin afin de faciliter la gestion des fiches de frais des visiteurs médicaux travaillant au sein de l&apos;entreprise. 
              Cette application, développée en PHP selon le modèle MVC (Modèle Vue Contrôlleur) doit permettre, entre autres, la saisie et la consultation des fiches de frais des visiteurs et le contrôle et la validation de ces fiches par les comptables.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Authentification sécurisée des utilisateurs selon leur rôle</li>
              <li>Saisie et consultation des fiches de frais des visiteurs</li>
              <li>Contrôle, modification et validation des fiches de frais par les comptables</li>
              <li>Calcul des montants validés</li>
              <li>Tableau de bord dynamique</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg text-white flex flex-col justify-between">
          <CardContent className="p-4 flex-1">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <Badge>PHP</Badge>
                <Badge>Laragon</Badge>
                <Badge>SQL</Badge>
                <Badge>PhpMyAdmin</Badge>
                <Badge>architecture MVC</Badge>
                <Badge>Bootstrap</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Compétences mobilisées</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Répondre aux incidents, demandes d&apos;assistance et d&apos;évolution</li>
                <li>Travailler en mode projet</li>
                <li>Mettre à disposition des utilisateurs un service informatique</li>
                <li>Organiser son développement professionnel</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ✅ Nouvelle section : Autres outils utilisés */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-center">Autres outils utilisés</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Outil 1 : Gantt Project */}
          <Card className="bg-white/10 shadow-lg text-white flex flex-col items-center p-4">
            <Image
              src="/images/icones/gantt.png" // Place ici le chemin vers ton logo
              alt="Gantt Project Logo"
              width={80}
              height={80}
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold mb-2">Gantt Project</h4>
            <p className="text-sm text-center">
              Utilisé pour la gestion du planning du projet avec des diagrammes de Gantt afin de visualiser l&apos;avancement et les jalons clés.
            </p>
          </Card>

          {/* Outil 2 : GitHub */}
          <Card className="bg-white/10 shadow-lg text-white flex flex-col items-center p-4">
            <Image
              src="/images/icones/github.png"
              alt="GitHub Logo"
              width={80}
              height={80}
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold mb-2">GitHub</h4>
            <p className="text-sm text-center">
              Plateforme utilisée pour le versioning du code source, le suivi des modifications et la collaboration en équipe.
            </p>
          </Card>

          {/* Outil 3 : OpenClassrooms */}
          <Card className="bg-white/10 shadow-lg text-white flex flex-col items-center p-4">
            <Image
              src="/images/icones/openClassroom.png"
              alt="OpenClassrooms Logo"
              width={80}
              height={80}
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold mb-2">OpenClassrooms</h4>
            <p className="text-sm text-center">
              Plateforme utilisée pour l&apos;autoformation, permettant d&apos;acquérir des compétences complémentaires tout au long du projet.
            </p>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d&apos;écran</h3>
        <Screenshots images={['gsb6.jpg', 'gsb2.jpg', 'gsb1.jpg', 'gsb3.jpg', 'gsb4.jpg']} />
      </section>


      <div className='flex justify-center gap-4 pt-8'>
        <a href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></a>
        <a href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></a>
        <a href="Icgo"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></a>
      </div>
    </div>
  );
}
