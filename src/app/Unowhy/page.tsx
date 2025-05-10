import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 space-y-8 pt-30">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Stage à UNOWHY</h1>
        <p className="text-lg max-w-2xl mx-auto">Une application complète de gestion pour le laboratoire Galaxy Swiss Bourdin, facilitant la gestion des visiteurs médicaux et des rapports de visite.</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              Le projet GSB est une application conçue pour répondre aux besoins spécifiques du laboratoire pharmaceutique Galaxy Swiss Bourdin. Elle permet la gestion des comptes visiteurs, la consultation et la saisie des rapports de visite, ainsi que le suivi des praticiens et des médicaments.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Authentification sécurisée des utilisateurs</li>
              <li>Gestion des visiteurs médicaux</li>
              <li>Saisie et consultation des rapports de visite</li>
              <li>Gestion des praticiens et des médicaments</li>
              <li>Tableau de bord dynamique</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg text-white">
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Wordpress</Badge>
              <Badge>Blockio</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d&apos;écran du site</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image src="/screenshots/screenshot1.png" alt="Capture d'écran 1" className="rounded-xl shadow-lg" />
          <Image src="/screenshots/screenshot2.png" alt="Capture d'écran 2" className="rounded-xl shadow-lg" />
          <Image src="/screenshots/screenshot3.png" alt="Capture d'écran 3" className="rounded-xl shadow-lg" />
          <Image src="/screenshots/screenshot4.png" alt="Capture d'écran 4" className="rounded-xl shadow-lg" />
        </div>
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <a href="Icgo"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></a>
        <a href="Portfolio#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></a>
        <a href="Portfolio#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></a>
      </div>
    </div>
  );
}
