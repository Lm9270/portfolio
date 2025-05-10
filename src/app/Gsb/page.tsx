import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 space-y-8 pt-30">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Projet GSB</h1>
        <p className="text-lg max-w-2xl mx-auto">Une application PHP pour le laboratoire Galaxy Swiss Bourdin, facilitant la gestion des fiches de frais et leur contrôle par les comptables de l'entreprise</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              Le projet GSB est une application conçue pour répondre aux besoins spécifiques du laboratoire pharmaceutique Galaxy Swiss Bourdin. Elle permet la gestion des comptes visiteurs, la consultation et la saisie des rapports de visite, ainsi que le suivi des praticiens et des médicaments. Ce projet met l'accent sur la sécurité, l'ergonomie et l'efficacité.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
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

        <Card className="bg-white/10 shadow-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>PHP</Badge>
              <Badge>Laragon</Badge>
              <Badge>SQL</Badge>
              <Badge>PhpMyAdmin</Badge>
              <Badge>architecture MVC</Badge>
              <Badge>Bootstrap</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d'écran du site</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img loading="lazy" src="images/projets/gsb2.jpg" alt="Capture d'écran 1" className="rounded-xl shadow-lg h-full w-full hover:scale-105 animation duration-200 ease-in-out" />
          <img loading="lazy" src="images/projets/gsb1.jpg" alt="Capture d'écran 2" className="rounded-xl shadow-lg h-full w-full hover:scale-105 animation duration-200 ease-in-out" />
          <img loading="lazy" src="images/projets/gsb3.jpg" alt="Capture d'écran 3" className="rounded-xl shadow-lg h-full w-full hover:scale-105 animation duration-200 ease-in-out" />
          <img loading="lazy" src="images/projets/gsb4.jpg" alt="Capture d'écran 4" className="rounded-xl shadow-lg h-full w-full hover:scale-105 animation duration-200 ease-in-out" />
        </div>
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <a href="Portfolio#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></a>
        <a href="Portfolio#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l'accueil</Button></a>
        <a href="Icgo"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></a>
      </div>
    </div>
  );
}
