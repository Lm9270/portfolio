import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Screenshots from '@/components/screenshots';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 space-y-8 pt-30">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Développement d&apos;un jeu mobile de type Quiz</h1>
        <p className="text-lg max-w-2xl mx-auto">Projet donné au cours de la deuxième année</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              L&apos;entreprise POBI, travaillant dans le secteur de la construction de maisons préfabriquées et disposant d'un service informatique gérant un progiciel (application en locale permettant d'effectuer des devis ainsi que de passer des commandes)
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Création de machines virtuelles windows et linux</li>
              <li>Configuration de ses machines virtuelles</li>
              <li>Gestion des comptes utilisateurs et des permissions</li>
              <li>Test du bon fonctionnement des machines virtuelles</li>
              <li>Corrections des anomalies raportées</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg text-white flex flex-col justify-between">
          <CardContent className="p-4 flex-1">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <Badge>C#</Badge>
                <Badge>.NET Framework</Badge>
                <Badge>MAUI</Badge>
                <Badge>Json</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Compétences mobilisées</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Répondre aux incidents et aux demandes d&apos;assitance et d&apos;évolution</li>
                <li>Travailler en mode projet</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d&apos;écran</h3>
        <Screenshots images={['unowhy1.jpg', 'unowhy2.jpg', 'unowhy3.jpg', 'unowhy4.jpeg']} />
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <Link href="Wordpress"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></Link>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></Link>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></Link>
      </div>
    </div>
  );
}
