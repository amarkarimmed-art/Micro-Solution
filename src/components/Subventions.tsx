import { CheckCircle2, FileText, PiggyBank, FileCheck } from "lucide-react";

export default function Subventions() {
  return (
    <section id="subventions" className="py-16 md:py-24 bg-[#8FB0DC]/10 border-t border-b border-[#3A5C8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Accompagnement & Financement
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Financez votre digitalisation avec les aides publiques
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            De nombreux dispositifs territoriaux et nationaux (Maroc PME / programmes d'aide à la transition numérique en France)
            soutiennent l'informatisation ciblée des entreprises. Nous vous aidons à les activer.
          </p>
        </div>

        {/* 3 Blocs Subventions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {/* Bloc 1 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#3A5C8A]/10 text-[#3A5C8A] flex items-center justify-center mb-5">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A2838] mb-2">
              Éligibilité vérifiée
            </h3>
            <p className="text-sm text-[#1A2838]/75 leading-relaxed">
              Nous vérifions en 15 minutes les aides auxquelles votre statut, votre effectif et votre localisation (Maroc ou France) vous donnent droit.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#FFA23C]/20 text-[#ED7410] flex items-center justify-center mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A2838] mb-2">
              Dossier clé en main
            </h3>
            <p className="text-sm text-[#1A2838]/75 leading-relaxed">
              Nous rédigeons pour vous l'argumentaire technique et fournissons les devis normalisés exigés par les commissions d'attribution.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="bg-white rounded-xl p-6 sm:p-7 border border-[#405C82]/15 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#3A5C8A]/10 text-[#3A5C8A] flex items-center justify-center mb-5">
              <PiggyBank className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1A2838] mb-2">
              Zéro avance lourde
            </h3>
            <p className="text-sm text-[#1A2838]/75 leading-relaxed">
              Prise en charge pouvant couvrir jusqu'à 70 %* de votre budget et échéancier aligné sur les validations du projet.
            </p>
          </div>
        </div>

        {/* Mention obligatoire */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#3A5C8A]/20 shadow-sm text-sm font-semibold text-[#1A2838]">
            <CheckCircle2 className="w-4 h-4 text-[#ED7410]" />
            <span>Étude confidentielle, sans obligation.</span>
          </div>
          <div className="mt-3 text-xs text-[#405C82]">
            * Le taux de subvention dépend des critères d'éligibilité légaux propres à chaque organisme payeur.
          </div>
        </div>
      </div>
    </section>
  );
}

