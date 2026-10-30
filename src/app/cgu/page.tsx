import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation (CGU) — Nomira",
  description: "Conditions générales d'utilisation du site www.nomira.ma (document provisoire à valider)",
};

export default function CGUPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-28 pb-16 md:pb-24">
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
              <FileText className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2838]">
              Conditions Générales d'Utilisation (CGU)
            </h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-8">
            <span>Document contractuel provisoire — Texte à valider par la direction Nomira</span>
          </div>

          <div className="prose max-w-none text-[#1A2838]/85 space-y-8 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                1. Objet du service
              </h2>
              <p>
                Le site <strong>www.nomira.ma</strong> a pour objet de présenter les services de micro-solutions logicielles proposées par Nomira et de permettre aux entreprises intéressées de solliciter un diagnostic d'optimisation opérationnelle de 30 minutes sans engagement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                2. Accès au site et utilisation
              </h2>
              <p>
                L'accès au site est gratuit pour tout utilisateur disposant d'une connexion internet. Nomira met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au site, sans obligation d'y parvenir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                3. Diagnostic gratuit de 30 minutes
              </h2>
              <p>
                La demande de diagnostic réalisée via le formulaire en ligne ne constitue aucunement un engagement contractuel ou financier pour l'utilisateur. Elle initie un échange d'évaluation de faisabilité technique et d'opportunité d'automatisation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                4. Propriété intellectuelle
              </h2>
              <p>
                Tous les logos, textes, éléments graphiques et logiciels associés à la marque Nomira demeurent la propriété exclusive de Nomira. Toute reproduction non autorisée constitue une contrefaçon sanctionnée par la réglementation en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1A2838] mb-3">
                5. Droit applicable et juridiction compétente
              </h2>
              <p>
                Les présentes conditions sont régies par le droit en vigueur. Tout litige relatif à leur interprétation ou exécution relève de la compétence des tribunaux compétents de Casablanca et de Paris, sous réserve des dispositions légales impératives.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

