import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Nomira",
  description: "Engagement de conformité CNDP (Loi 09-08) et RGPD pour la protection des données personnelles sur www.nomira.ma",
};

export default function Confidentialite() {
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

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-[#FFA23C]/20 text-[#ED7410]">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2838]">
              Politique de Confidentialité
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Conformité Loi Marocaine 09-08 (CNDP) & RGPD (UE 2016/679) · Dernière révision : 29 octobre 2026
          </p>

          <div className="prose max-w-none text-[#1A2838]/85 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                1. Engagement et portée
              </h2>
              <p>
                Chez <strong>Nomira</strong>, nous attachons une importance primordiale à la protection et à la confidentialité de vos données professionnelles et personnelles.
                Cette politique explique comment vos données sont collectées, traitées et sécurisées lorsque vous naviguez sur <strong>www.nomira.ma</strong> ou sollicitez un diagnostic de 30 minutes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                2. Données collectées
              </h2>
              <p>
                Dans le cadre exclusif de la demande de diagnostic gratuit de 30 minutes, nous recueillons les informations suivantes fournies volontairement :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nom et prénom</li>
                <li>Numéro de téléphone ou contact WhatsApp</li>
                <li>Nom de l'entreprise et secteur d'activité</li>
                <li>Description sommaire de votre point de friction ou flux opérationnel</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Aucune donnée sensible (bancaire, médicale privée, etc.) n'est collectée via notre formulaire en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                3. Finalité et base légale du traitement
              </h2>
              <p>
                Vos données sont traitées pour les finalités strictes suivantes :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Étude de faisabilité de votre micro-solution logicielle ;</li>
                <li>Prise de contact pour convenir du créneau de diagnostic de 30 minutes ;</li>
                <li>Évaluation confidentielle de l'éligibilité aux subventions disponibles.</li>
              </ul>
              <p className="mt-2">
                Le traitement est fondé sur votre consentement explicite lors de la soumission du formulaire et sur l'exécution de mesures précontractuelles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                4. Durée de conservation & Sécurité
              </h2>
              <p>
                Les données de contact sont conservées pour une durée maximale de 24 mois suivant le dernier échange, après quoi elles sont définitivement purgées.
                Toutes les transmissions sont chiffrées de bout en bout via le protocole HTTPS/TLS 1.3.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                5. Vos droits (CNDP & RGPD)
              </h2>
              <p>
                Conformément à la loi 09-08 et au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Droit d'accès et de rectification de vos données ;</li>
                <li>Droit à l'effacement (« droit à l'oubli ») ;</li>
                <li>Droit à la limitation du traitement et d'opposition ;</li>
                <li>Droit à la portabilité des données.</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, vous pouvez contacter à tout moment notre délégué à la protection des données :<br />
                Par email : <a href="mailto:contact@nomira.ma" className="text-[#3A5C8A] font-semibold">contact@nomira.ma</a><br />
                Par courrier : Nomira — Casablanca / Paris.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                6. Cookies & Traceurs
              </h2>
              <p>
                Le site utilise uniquement des traceurs de mesure d'audience anonymisés exempts d'intrusivité publicitaire.
                Vous pouvez accepter ou refuser ces traceurs à tout moment via notre bandeau de consentement.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

