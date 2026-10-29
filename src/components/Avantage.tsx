import { Check, X, Shield, Calendar, Database } from "lucide-react";

export default function Avantage() {
  return (
    <section id="avantage" className="py-16 md:py-24 bg-[#8FB0DC]/10 border-t border-b border-[#3A5C8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          {/* Badge Garantie */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFA23C]/20 border border-[#FFA23C]/50 text-xs sm:text-sm font-semibold text-[#1A2838] mb-4">
            <Shield className="w-4 h-4 text-[#ED7410]" />
            <span>Badge : Garantie 4 jours</span>
          </div>

          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-2">
            La Différence Nomira
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Agence classique vs Approche Nomira
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Pourquoi les TPE et PME perdent souvent pied avec les projets informatiques traditionnels ?
            Voici ce qui change concrètement avec nos micro-solutions.
          </p>
        </div>

        {/* Tableau Comparatif Responsive */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#405C82]/20 shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Colonne Agence Classique */}
            <div className="p-6 sm:p-8 bg-gray-50/70">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wide">
                  Agence classique
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-gray-200 text-gray-700">
                  Modèle traditionnel
                </span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Délais : 2 à 6 mois</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Cahiers des charges à rallonge, comités interminables, lancements sans cesse repoussés.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Facturation au TJM fluctuant</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Devis indicatifs complétés par de fréquents avenants pour imprévus techniques. Coût final incertain.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Code lourd et captivité</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Dépendance à une pile technologique complexe, maintenance obligatoire et accès restreints.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne Nomira */}
            <div className="p-6 sm:p-8 bg-white relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3A5C8A]/20">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-[#1A2838] uppercase tracking-wide">
                    Nomira
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#ED7410]" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FFA23C]/20 text-[#1A2838] border border-[#FFA23C]/40">
                  Micro-solutions ciblées
                </span>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Déploiement en 4 jours ouvrés</h4>
                    <p className="text-xs text-[#1A2838]/75 mt-0.5 leading-relaxed">
                      Focus exclusif sur votre goulet d'étranglement numéro un. Mise en service opérationnelle immédiate.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Forfait ferme au centime près</h4>
                    <p className="text-xs text-[#1A2838]/75 mt-0.5 leading-relaxed">
                      Un prix clair, négocié avant le premier commit. Aucun surcoût, aucun frais masqué, fin de l'aléa.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A2838]">Code pérenne & 100 % réversible</h4>
                    <p className="text-xs text-[#1A2838]/75 mt-0.5 leading-relaxed">
                      Technologies ouvertes et robustes. Vous possédez intégralement vos données et votre code.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Blocs d'engagements fermes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-5 border border-[#405C82]/15 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[#3A5C8A]/10 text-[#3A5C8A] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838] mb-1">Calendrier ferme</h4>
              <p className="text-xs text-[#1A2838]/75 leading-relaxed">
                Date de mise en service contractualisée dès la signature du cadrage.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#405C82]/15 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[#FFA23C]/20 text-[#ED7410] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838] mb-1">Zéro frais masqué</h4>
              <p className="text-xs text-[#1A2838]/75 leading-relaxed">
                Pas de redevance locative mensuelle obligatoire pour continuer à tourner.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#405C82]/15 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[#3A5C8A]/10 text-[#3A5C8A] shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1A2838] mb-1">Propriété intégrale</h4>
              <p className="text-xs text-[#1A2838]/75 leading-relaxed">
                Toutes vos données clients et historiques restent sous votre contrôle exclusif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

