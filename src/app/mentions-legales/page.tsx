import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales — Nomira",
  description: "Mentions légales, informations éditeur et hébergement du site www.nomira.ma",
};

export default function MentionsLegales() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A5C8A] hover:text-[#1A2838] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2838] mb-6">
            Mentions Légales
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Dernière mise à jour : 29 octobre 2026
          </p>

          <div className="prose max-w-none text-[#1A2838]/85 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                1. Éditeur du site
              </h2>
              <p>
                Le site internet accessible à l'adresse <strong>www.nomira.ma</strong> est édité par la société <strong>Nomira</strong>,
                spécialisée dans la conception et le déploiement de micro-solutions logicielles ciblées pour les TPE et PME.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Marque :</strong> Nomira</li>
                <li><strong>Slogan :</strong> Regagnez vos ressources</li>
                <li><strong>Implantation :</strong> Casablanca (Maroc) · Paris (France)</li>
                <li><strong>Téléphone :</strong> +212 6 61 57 42 47</li>
                <li><strong>Courrier électronique :</strong> contact@nomira.ma</li>
                <li><strong>Directeur de publication :</strong> Direction Nomira</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé sur l'infrastructure cloud de :
              </p>
              <p className="mt-1">
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#3A5C8A] underline">vercel.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                3. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des éléments graphiques, textuels, logos (notamment le logotype Nomira et ses déclinaisons officielles),
                marques et illustrations présents sur le site sont la propriété exclusive de Nomira.
                Toute reproduction, représentation, diffusion ou exploitation totale ou partielle sans accord préalable écrit est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                4. Protection des données et conformité
              </h2>
              <p>
                Nomira s'engage à respecter les réglementations en vigueur applicables au traitement de données à caractère personnel, notamment :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>La <strong>loi marocaine n° 09-08</strong> relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel sous le contrôle de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (<strong>CNDP</strong>).</li>
                <li>Le <strong>Règlement Général sur la Protection des Données (RGPD 2016/679)</strong> de l'Union Européenne pour les utilisateurs et clients situés dans l'espace européen.</li>
              </ul>
              <p className="mt-3">
                Pour plus d'informations, veuillez consulter notre{" "}
                <Link href="/confidentialite" className="text-[#3A5C8A] font-semibold underline">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                5. Contact
              </h2>
              <p>
                Pour toute question ou demande d'information concernant les mentions légales du site :<br />
                Email : <a href="mailto:contact@nomira.ma" className="text-[#3A5C8A] font-semibold">contact@nomira.ma</a><br />
                Téléphone : <a href="tel:+212661574247" className="text-[#3A5C8A] font-semibold">+212 6 61 57 42 47</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

