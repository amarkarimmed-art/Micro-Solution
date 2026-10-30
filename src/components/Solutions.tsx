import { Stethoscope, GraduationCap, Store, CheckCircle2, Sliders } from "lucide-react";

const SECTORS = [
  {
    id: "sante",
    icon: Stethoscope,
    badge: "Santé & Médical",
    title: "Cabinets & Cliniques",
    stat: "Simulation : −75 %",
    statLabel: "de no-show constaté (cas d'usage simulé)*",
    features: [
      "Rappels automatiques WhatsApp & SMS à J-2 et H-3 avec confirmation en 1 clic",
      "Collecte et classement sécurisé des pièces justificatives avant la consultation",
      "Synchronisation agenda et liste d'attente pour réattribuer les créneaux annulés",
    ],
  },
  {
    id: "formation",
    icon: GraduationCap,
    badge: "Éducation & Formation",
    title: "Établissements & OF",
    stat: "Simulation : 100 %",
    statLabel: "dématérialisé conventions & attestations (cas simulé)*",
    features: [
      "Création instantanée des conventions, convocations et attestations de présence",
      "Émargement dématérialisé et consolidation automatique des feuilles de présence",
      "Suivi automatisé des prises en charge financières et facturation tiers-payeurs",
    ],
  },
  {
    id: "commerces",
    icon: Store,
    badge: "B2B & Commerces",
    title: "Commerces & Prestataires",
    stat: "Simulation : Divisé par 2",
    statLabel: "délai moyen d'encaissement créances (cas simulé)*",
    features: [
      "Génération immédiate de factures depuis vos bons de commande ou devis acceptés",
      "Scénarios gradués de relances d'impayés automatiques (WhatsApp & Email)",
      "Vision directe de votre trésorerie et des échéances clients sans ressaisie",
    ],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full py-16 lg:py-24 bg-[#F7FAFE]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest text-[#ED7410] font-semibold block mb-2">
            Cas d'Usage Sectoriels
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight">
            Des micro-solutions forgées pour votre réalité terrain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#405C82] leading-relaxed">
            Chaque métier a son propre point de blocage. Nous concevons la solution exacte qui supprime la friction sans bouleverser vos habitudes de travail.
          </p>
        </div>

        {/* 3 Cartes Sectorielles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-xl border border-[#E2E9F3] p-6 flex flex-col justify-between hover:border-[#93A9C7] transition-all duration-200 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#F3F6FA] text-[#1A2838] text-xs font-semibold">
                      {sector.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#6784B0]" />
                  </div>

                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-bold text-[#ED7410]">
                      {sector.stat}
                    </span>
                    <p className="text-xs text-[#6784B0] font-medium mt-0.5">
                      {sector.statLabel}
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A2838] mb-4">
                    {sector.title}
                  </h3>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#405C82]">
                    {sector.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#ED7410] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E9F3]">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-[#F3F6FA] hover:bg-[#FFF6EA] text-[#1A2838] hover:text-[#ED7410] font-semibold text-xs sm:text-sm transition-colors border border-[#C3D0E2] hover:border-[#FFA23C]"
                  >
                    Chiffrer ce cas d'usage
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#6784B0] mt-5 italic">
          * Données issues de modélisations et simulations de cas d'usage types (chiffres indicatifs à calibrer selon vos volumes réels lors du diagnostic).
        </p>

        {/* Bannière sur-mesure */}
        <div className="mt-12 bg-[#1A2838] rounded-xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2A3F5E] shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[#FFA23C] text-xs font-semibold uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Cas d'usage sur-mesure</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Votre métier a un workflow ou un outil particulier ?
            </h3>
            <p className="text-xs sm:text-sm text-[#C3D0E2] max-w-2xl leading-relaxed">
              Tableurs sur-mesure, échanges WhatsApp récurrents, liaisons entre deux logiciels incompatibles... Nos micro-solutions s'intègrent précisément dans vos pratiques sans vous forcer à tout réapprendre.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#ED7410] hover:bg-[#d86507] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg transition-transform duration-150 hover:scale-105 shadow-sm"
          >
            <span>Décrire votre processus</span>
          </a>
        </div>
      </div>
    </section>
  );
}
