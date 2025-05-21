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
        <h1 className="text-5xl font-bold">Projet ICGO</h1>
        <p className="text-lg max-w-2xl mx-auto">Une application complète de gestion pour l&apos;Institut Claude Gaston Octave, facilitant la gestion des formateurs, des stagiaires ainsi que des formations.</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              L&apos;ICGO (Institut Claude Gaston Octave) dispose d&apos;une application bureau C# afin de gérer leurs formations, stagiaires et formateurs. Cependant, cette application ayant été jugée incomplète, a dû être amélioré et avec de nouvelles fonctionnalités permettant la gestion des agences, modules, 
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Authentification sécurisée des utilisateurs (formateurs)</li>
              <li>Opérations de création mise à jour et suppression </li>
              <li>Saisie et consultation des rapports de visite</li>
              <li>Gestion des praticiens et des médicaments</li>
              <li>Tableau de bord dynamique</li>
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
                <Badge>SQL</Badge>
                <Badge>PhpMyAdmin</Badge>
                <Badge>Visual Studio 2022</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Compétences mobilisées</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Répondre aux incidents et aux demandes d&apos;assistance et d&apos;évolution</li>
                <li>Travailler en mode projet</li>
                <li>Mettre à disposition des utilisateurs un service informatique</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d&apos;écran</h3>
        <Screenshots images={['icgo5.png', 'icgo1.jpg', 'icgo2.jpg', 'icgo6.png', 'icgo9.png']} />
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <Link href="Gsb"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></Link>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></Link>
        <Link href="Wordpress"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></Link>
      </div>
    </div>
  );
}
