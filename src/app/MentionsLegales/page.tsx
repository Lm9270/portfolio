import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 pt-28 space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold">Mentions légales</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.
        </p>
      </div>

      <section className="max-w-4xl mx-auto space-y-6">
        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Éditeur du site</h2>
            <p>Nom : Liam Moriconi</p>
            <p>Email : contact@liamdev.fr</p>
            <p>Responsable de la publication : Liam Moriconi</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Hébergement</h2>
            <p>Nom de l&pos;hébergeur : Vercel Inc.</p>
            <p>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p>Site web : https://vercel.com</p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, code, etc.) est protégé par le droit d&apos;auteur. Toute reproduction non autorisée est interdite.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 shadow-lg">
          <CardContent className="p-6 space-y-4 text-white">
            <h2 className="text-2xl font-semibold">Cookies & données personnelles</h2>
            <p>
              Ce site ne collecte aucune donnée personnelle sans votre consentement explicite. Aucun cookie de suivi n&apos;est utilisé.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
