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
        <h1 className="text-5xl font-bold">Site web l&apos;ami des animaux</h1>
        <p className="text-lg max-w-2xl mx-auto">Un site web réalisé avec Wordpress afin de développer la présence en ligne de l&apos;entreprise l&apos;ami des animaux.</p>
      </div>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-white/10 shadow-xl">
          <CardContent className="p-6">
            <h2 className="text-white text-3xl font-semibold mb-4">Description du projet</h2>
            <p className='text-white'>
              Une entreprise fictive du nom de l&apos;ami des animaux souhaite développer sa présence en ligne via la création d&apos;un site web vitrine permettant d&apos;afficher ses prestations et leur prix, d&apos;obtenir plus d&apos;informations sur l&apos;entreprise et enfin de prendre contact pour un rendez-vous
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 text-white">
            <h3 className="text-2xl font-semibold mb-3">Fonctionnalités principales</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Site esthétique et responsive</li>
              <li>Présentation de l&apos;entreprise</li>
              <li>Informations sur les tarifications des prestations</li>
              <li>Page des mentions légales du site</li>
              <li>Formulaire de contact pour faciliter la prise de rendez-vous</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg text-white flex flex-col justify-between">
          <CardContent className="p-4 flex-1">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <Badge>Wordpress</Badge>
                <Badge>Blockio</Badge>
                <Badge>Laragon</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 mt-4">Compétences mobilisées</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Développer la présence en ligne d&apos;une entreprise</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto text-center space-y-6">
        <h3 className="text-3xl font-semibold mb-4">Captures d&apos;écran</h3>
        <Screenshots images={['wordpress1.jpg', 'wordpress2.jpg', 'wordpress3.jpg', 'wordpress4.jpg']} />
      </section>

      <div className='flex justify-center gap-4 pt-8'>
        <Link href="Icgo"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Précédent</Button></Link>
        <Link href="/#projet"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Retour à l&apos;accueil</Button></Link>
        <Link href="Maui"><Button className='transition-all duration-500 hover:text-black hover:bg-white '>Suivant</Button></Link>
      </div>
    </div>
  );
}
