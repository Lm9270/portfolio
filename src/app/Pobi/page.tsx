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
        <h1 className="text-5xl font-bold">Développement back-end et front-end d&apos;un progiciel</h1>
        <p className="text-lg max-w-2xl mx-auto">Mission dans le cadre de mon stage de première année chez l&apos;entreprise POBI Industrie</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              L&apos;entreprise POBI, travaillant dans le secteur de la construction de maisons préfabriquées et disposant d&apos;un service informatique gérant un progiciel (application en locale permettant d&apos;effectuer des devis ainsi que de passer des commandes)
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Prise en main de l&apos;application existante</li>
              <li>Développement d&apos;une fonctionnalité d&apos;optimisation </li>
              <li>Développement d&apos;une interface graphique pour les utilsateurs montrant l&apos;optimisation</li>
              <li>Intégration du code au sein de l&apos;application locale et débuggage</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg text-white flex flex-col justify-between">
          <CardContent className="p-4 flex-1">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <Badge>PHP</Badge>
                <Badge>SQL</Badge>
                <Badge>Bootstrap</Badge>
                <Badge>Photopea</Badge>
                <Badge>Javascript</Badge>
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
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
        <Screenshots images={['pobi1.jpg', 'pobi2.jpg', 'pobi3.jpg', 'pobi4.jpg']} />
      </section>

      <section className="max-w-5xl mx-auto text-center space-y-6 pt-8">
        <h3 className="text-3xl font-semibold mb-4">Documents</h3>
        <p className="text-white text-lg">Retrouvez ci-dessous les documents relatifs au projet à télécharger au format PDF :</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="/documents/RapportDeStagePobi.pdf"
            download
            className="bg-white/10 hover:bg-white hover:text-black transition-all px-6 py-3 rounded-lg shadow-lg text-white"
          >
            📘 Rapport de stage
          </a>
        </div>
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></Link>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></Link>
        <Link href="Unowhy"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></Link>
      </div>
    </div>
  );
}

