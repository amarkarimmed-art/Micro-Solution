import { Check, X, Shield, Calendar, PiggyBank, Database, Zap, Hourglass, CreditCard, Lock, Key } from "lucide-react";

export default function Avantage() {
  return (
    <section id="avantage" className="w-full py-16 lg:py-24 bg-white border-t border-[#E2E9F3]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF6EA] text-[#ED7410] text-xs sm:text-sm font-semibold mb-3">
            <Shield className="w-4 h-4" />
            <span>Badge : Garantie 4 jours</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Agence classique vs Approche Nomira
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            Pourquoi les TPE et PME perdent souvent pied avec les projets informatiques traditionnels ? Voici ce qui change concrètement avec nos micro-solutions.
          </p>
        </div>

        {/* Matrice de comparaison duel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Agence Classique */}
          <div className="bg-[#F3F6FA] rounded-2xl p-6 sm:p-9 border border-[#C3D0E2] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C3D0E2]">
                <div>
                  <h3 className="text-xl font-bold text-[#2A3F5E]">Agence classique</h3>
                  <span className="text-xs text-[#6784B0]">Modèle traditionnel à rallonge</span>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#FBE9E6] text-[#A82D18] flex items-center justify-center">
                  <X className="w-5 h-5" />
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3.5">
                  <Hourglass className="w-5 h-5 text-[#D8412A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Délais : 2 à 6 mois</h4>
                    <p className="text-xs sm:text-sm text-[#405C82] mt-0.5 leading-relaxed">
                      Cahiers des charges exhaustifs, multiples comités de pilotage et lancements sans cesse repoussés.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CreditCard className="w-5 h-5 text-[#D8412A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Facturation au TJM fluctuant</h4>
                    <p className="text-xs sm:text-sm text-[#405C82] mt-0.5 leading-relaxed">
                      Devis indicatifs complétés par des avenants incessants pour imprévus techniques. Coût final toujours incertain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Lock className="w-5 h-5 text-[#D8412A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Code lourd et captivité</h4>
                    <p className="text-xs sm:text-sm text-[#405C82] mt-0.5 leading-relaxed">
                      Dépendance à une pile technologique complexe, maintenance obligatoire payante et accès au code source restreint.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#C3D0E2] text-center">
              <span className="text-xs text-[#6784B0] font-semibold uppercase tracking-wider">
                Résultat : Budget explosé, délai non maîtrisé
              </span>
            </div>
          </div>

          {/* Approche Nomira */}
          <div className="bg-[#1A2838] rounded-2xl p-6 sm:p-9 border border-[#2A3F5E] text-white flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3.5 right-8 px-3 py-1 rounded-full bg-[#ED7410] text-white text-xs font-semibold uppercase tracking-wider">
              Modèle chirurgical
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#2A3F5E]">
                <div>
                  <h3 className="text-xl font-bold text-white">Nomira</h3>
                  <span className="text-xs text-[#FFA23C]">Micro-solutions ultra-ciblées</span>
                </div>
                <span className="w-10 h-10 rounded-full bg-[#ED7410]/20 text-[#FFA23C] flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3.5">
                  <Zap className="w-5 h-5 text-[#ED7410] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Déploiement en 4 jours ouvrés</h4>
                    <p className="text-xs sm:text-sm text-[#C3D0E2] mt-0.5 leading-relaxed">
                      Focus exclusif sur votre goulet d'étranglement numéro un. Mise en service opérationnelle immédiate pour vos équipes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Shield className="w-5 h-5 text-[#ED7410] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Forfait ferme au centime près</h4>
                    <p className="text-xs sm:text-sm text-[#C3D0E2] mt-0.5 leading-relaxed">
                      Un prix clair, arrêté avant le premier commit. Zéro surcoût, aucun frais masqué, fin de l'aléa budgétaire.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Key className="w-5 h-5 text-[#ED7410] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Code pérenne &amp; 100 % réversible</h4>
                    <p className="text-xs sm:text-sm text-[#C3D0E2] mt-0.5 leading-relaxed">
                      Technologies ouvertes et standards web éprouvés. Vous possédez intégralement vos données et votre code.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2A3F5E] text-center">
              <span className="text-xs text-[#FFA23C] font-semibold uppercase tracking-wider">
                Simulation : amortissement estimé dès le 2e mois
              </span>
            </div>
          </div>
        </div>

        {/* 3 Piliers Clés */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3]">
            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] shrink-0">
              <Calendar className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838]">Calendrier ferme</h4>
              <p className="text-xs text-[#405C82]">Date de mise en service contractualisée dès la signature.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3]">
            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] shrink-0">
              <PiggyBank className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838]">Zéro frais masqué</h4>
              <p className="text-xs text-[#405C82]">Pas de redevance locative obligatoire pour continuer à tourner.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3]">
            <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#ED7410] border border-[#E2E9F3] shrink-0">
              <Database className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838]">Propriété intégrale</h4>
              <p className="text-xs text-[#405C82]">Données clients et historiques restent sous votre contrôle exclusif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
