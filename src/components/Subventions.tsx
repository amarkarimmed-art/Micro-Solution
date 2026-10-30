import { FileCheck, FileText, PiggyBank, Check } from "lucide-react";

export default function Subventions() {
  return (
    <section id="financement" className="w-full py-16 lg:py-24 bg-white border-t border-[#E2E9F3]">
      {/* Ancre de repli pour compatibilité */}
      <div id="subventions" className="sr-only" />

      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Accompagnement &amp; Financement
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Financez votre digitalisation avec les aides publiques
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            De nombreux dispositifs territoriaux et nationaux (Maroc PME / programmes d'aide à la transition numérique en France) soutiennent l'informatisation ciblée des entreprises. Nous vous aidons à les activer sans tracas.
          </p>
        </div>

        {/* 3 Cartes de Financement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Carte 1 */}
          <div className="p-6 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] mb-5">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A2838] mb-2">
                Éligibilité vérifiée
              </h3>
              <p className="text-xs sm:text-sm text-[#405C82] leading-relaxed">
                Nous vérifions en 15 minutes les aides auxquelles votre statut, votre effectif et votre localisation (Maroc ou France) vous donnent droit.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C3D0E2] text-xs text-[#6784B0] font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1D9E75]" />
              <span>Audit gratuit &amp; instantané</span>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="p-6 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A2838] mb-2">
                Dossier clé en main
              </h3>
              <p className="text-xs sm:text-sm text-[#405C82] leading-relaxed">
                Nous rédigeons pour vous l'argumentaire technique et fournissons les devis normalisés exigés par les commissions d'attribution.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C3D0E2] text-xs text-[#6784B0] font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1D9E75]" />
              <span>Zéro formalité lourde pour vous</span>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="p-6 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] mb-5">
                <PiggyBank className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1A2838] mb-2">
                Zéro avance lourde
              </h3>
              <p className="text-xs sm:text-sm text-[#405C82] leading-relaxed">
                Prise en charge pouvant couvrir jusqu'à 70 %* de votre budget et échéancier aligné sur les validations d'étapes de votre projet.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#C3D0E2] text-xs text-[#6784B0] font-medium flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#1D9E75]" />
              <span>Trésorerie préservée</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-[#6784B0]">
          <p className="font-semibold text-[#1A2838]">Étude confidentielle, sans obligation.</p>
          <p className="text-[11px] mt-1">* Le taux de subvention dépend des critères d'éligibilité légaux propres à chaque organisme payeur.</p>
        </div>
      </div>
    </section>
  );
}
