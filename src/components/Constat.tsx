import { Copy, ClockAlert, BadgePercent, Layers, Calculator } from "lucide-react";

const FRICTIONS = [
  {
    icon: Copy,
    badge: "14 h / mois",
    badgeType: "danger",
    sublabel: "perdues par collaborateur*",
    title: "Ressaisies manuelles et doubles saisies",
    description:
      "Copier-coller incessant entre tableurs Excel, devis papier, boîtes emails et logiciels comptables. Une perte d'énergie continue, source d'erreurs et de retards de livraison.",
    footerText: "Friction humaine critique",
    footerColor: "bg-[#D8412A]",
  },
  {
    icon: ClockAlert,
    badge: "Factures en souffrance",
    badgeType: "danger",
    sublabel: "retards de trésorerie",
    title: "Relances clients inexistantes ou tardives",
    description:
      "Faute de temps, les relances de paiement sont faites au coup par coup. Vos liquidités restent bloquées chez vos clients sans justification ni scénario cadencé.",
    footerText: "Impact direct sur le BFR",
    footerColor: "bg-[#D8412A]",
  },
  {
    icon: BadgePercent,
    badge: "−8 % de revenus",
    badgeType: "danger",
    sublabel: "devis oubliés non convertis*",
    title: "Opportunités perdues sans suivi systématique",
    description:
      "Des devis envoyés sans rappel programmé, des demandes de rendez-vous non confirmées. Du chiffre d'affaires direct laissé à la concurrence faute d'automates fiables.",
    footerText: "Manque à gagner mensuel",
    footerColor: "bg-[#D8412A]",
  },
  {
    icon: Layers,
    badge: "Empilement SaaS",
    badgeType: "warning",
    sublabel: "abonnements sous-exploités",
    title: "Outils trop lourds et abonnements captifs",
    description:
      "Des logiciels généralistes coûteux (CRM, ERP complexes) dont vous n'utilisez que 10 % des fonctions, accompagnés d'abonnements mensuels récurrents sans fin.",
    footerText: "Coûts fixes évitables",
    footerColor: "bg-[#ED7410]",
  },
];

export default function Constat() {
  return (
    <section id="constat" className="w-full py-16 lg:py-24 bg-white border-t border-[#E2E9F3]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Le Constat Opérationnel
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Où s'évaporent votre temps et votre trésorerie ?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            Dans la majorité des TPE et PME, les journées sont absorbées par des tâches répétitives à faible valeur ajoutée. Des frictions silencieuses qui pèsent lourdement sur votre marge.
          </p>
        </div>

        {/* Grille des 4 cartes de friction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FRICTIONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F3F6FA] hover:bg-white p-6 rounded-xl border border-[#E2E9F3] hover:border-[#93A9C7] transition-all duration-300 flex flex-col justify-between hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#1A2838] border border-[#E2E9F3] group-hover:text-[#ED7410] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                        item.badgeType === "danger"
                          ? "bg-[#FBE9E6] text-[#A82D18]"
                          : "bg-[#FFE6C6] text-[#6E3406]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6784B0] uppercase font-semibold tracking-wider mb-1">
                    {item.sublabel}
                  </p>
                  <h3 className="text-base font-bold text-[#1A2838] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#405C82] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E2E9F3] flex items-center gap-1.5 text-[#6784B0] text-[12px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.footerColor}`} />
                  <span>{item.footerText}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#6784B0] mt-5 italic">
          * Ordres de grandeur représentatifs des audits préliminaires (chiffres indicatifs à valider lors du diagnostic de cadrage).
        </p>

        {/* Bannière d'appel au calcul de gain */}
        <div className="mt-10 bg-[#1A2838] rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
          <div className="space-y-1 text-center md:text-left z-10">
            <h4 className="text-lg font-bold text-white">
              Vous reconnaissez l'une de ces situations dans votre structure ?
            </h4>
            <p className="text-xs sm:text-sm text-[#8FB0DC]">
              Un diagnostic rapide de 30 minutes permet de chiffrer précisément le temps et l'argent récupérables.
            </p>
          </div>
          <a
            href="#contact"
            className="z-10 shrink-0 inline-flex items-center gap-2 bg-[#ED7410] hover:bg-[#d86507] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg transition-transform duration-150 hover:scale-105 shadow-sm"
          >
            <span>Chiffrer mon gain potentiel</span>
            <Calculator className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
