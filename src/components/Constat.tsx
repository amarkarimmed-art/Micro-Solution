import { FileSpreadsheet, AlertTriangle, TrendingDown, Layers } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: FileSpreadsheet,
    stat: "14 h / mois",
    statNote: "perdues par collaborateur*",
    title: "Ressaisies manuelles et doubles saisies",
    description:
      "Copier-coller entre tableurs Excel, devis papier, emails et logiciels comptables. Une perte d'énergie continue, source récurrente d'erreurs et de retards.",
  },
  {
    icon: AlertTriangle,
    stat: "Factures en souffrance",
    statNote: "retards de trésorerie",
    title: "Relances clients inexistantes ou tardives",
    description:
      "Faute de temps, les relances de paiement sont faites au coup par coup. Vos liquidités restent bloquées chez vos clients sans justification.",
  },
  {
    icon: TrendingDown,
    stat: "−8 % de revenus",
    statNote: "devis oubliés non convertis*",
    title: "Opportunités perdues sans suivi systématique",
    description:
      "Des devis envoyés sans relance programmée, des demandes de rendez-vous non confirmées. Du chiffre d'affaires direct laissé à la concurrence.",
  },
  {
    icon: Layers,
    stat: "Empilement SaaS",
    statNote: "abonnements sous-exploités",
    title: "Outils trop lourds et abonnements captifs",
    description:
      "Des logiciels généralistes coûteux (CRM, ERP complexes) dont vous n'utilisez que 10 % des fonctions, avec des coûts mensuels récurrents.",
  },
];

export default function Constat() {
  return (
    <section id="constat" className="py-16 md:py-24 bg-[#8FB0DC]/10 border-t border-b border-[#3A5C8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Le Constat Opérationnel
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Où s'évaporent votre temps et votre trésorerie ?
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Dans la majorité des TPE et PME, les journées sont absorbées par des tâches répétitives
            à faible valeur ajoutée. Des frictions silencieuses qui pèsent sur votre rentabilité.
          </p>
        </div>

        {/* Grille des 4 Cartes Douleur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#405C82]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#3A5C8A]/10 flex items-center justify-center text-[#3A5C8A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="mb-3">
                    <div className="text-xl font-bold text-[#1A2838]">
                      {item.stat}
                    </div>
                    <div className="text-xs font-medium text-[#ED7410]">
                      {item.statNote}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-[#1A2838] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1A2838]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note de bas de section pour les chiffres */}
        <div className="mt-8 text-center text-xs text-[#405C82]">
          * Ordres de grandeur représentatifs des audits préliminaires (chiffres indicatifs à valider lors du diagnostic de cadrage).
        </div>

        {/* Bannière de transition */}
        <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-[#3A5C8A]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="text-lg font-bold text-[#1A2838] mb-1">
              Vous reconnaissez l'une de ces situations dans votre structure ?
            </h4>
            <p className="text-sm text-[#1A2838]/75">
              Un diagnostic rapide de 30 minutes permet de chiffrer précisément le temps et l'argent récupérables.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary text-sm px-6 py-3 whitespace-nowrap shadow-sm shrink-0"
          >
            Chiffrer mon gain potentiel
          </a>
        </div>
      </div>
    </section>
  );
}

