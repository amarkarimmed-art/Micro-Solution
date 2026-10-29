import { Stethoscope, GraduationCap, Store, Check, ArrowRight, Sparkles } from "lucide-react";

const SECTORS = [
  {
    id: "sante",
    icon: Stethoscope,
    badge: "Santé & Médical",
    title: "Santé & Cabinets médicaux",
    stat: "−75 % de no-show",
    statLabel: "taux de rendez-vous non honorés*",
    features: [
      "Rappels automatiques WhatsApp & SMS à J-2 et H-3 avec confirmation en 1 clic",
      "Collecte et classement sécurisé des pièces justificatives avant la consultation",
      "Synchronisation agenda et liste d'attente pour réattribuer les créneaux annulés",
    ],
    ctaQuery: "Santé & Cabinets médicaux",
  },
  {
    id: "formation",
    icon: GraduationCap,
    badge: "Éducation & Formation",
    title: "Formation & Établissements",
    stat: "100 % automatisé",
    statLabel: "génération conventions & attestations*",
    features: [
      "Création instantanée des conventions, convocations et attestations de présence",
      "Émargement dématérialisé et consolidation automatique des feuilles de présence",
      "Suivi automatisé des prises en charge financières et facturation tiers-payeurs",
    ],
    ctaQuery: "Formation & Établissements",
  },
  {
    id: "commerces",
    icon: Store,
    badge: "B2B & Commerces",
    title: "Commerces & Prestataires",
    stat: "Divisé par 2",
    statLabel: "délai moyen d'encaissement des créances*",
    features: [
      "Génération immédiate de factures depuis vos bons de commande ou devis acceptés",
      "Scénarios gradués de relances d'impayés automatiques (WhatsApp & Email)",
      "Vision directe de votre trésorerie et des échéances clients sans ressaisie",
    ],
    ctaQuery: "Commerces & Prestataires",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#3A5C8A] mb-3">
            Cas d'Usage Sectoriels
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mb-4">
            Des micro-solutions forgées pour votre réalité terrain
          </p>
          <p className="text-base sm:text-lg text-[#1A2838]/80 leading-relaxed">
            Chaque métier a son propre point de blocage. Nous concevons la solution exacte
            qui supprime la friction sans bouleverser vos outils de travail.
          </p>
        </div>

        {/* 3 Cartes Sectorielles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-7 border border-[#405C82]/15 shadow-sm hover:shadow-lg hover:border-[#3A5C8A]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#3A5C8A]/10 text-[#3A5C8A] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#8FB0DC]/20 text-[#1A2838]">
                      {sector.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A2838] mb-4">
                    {sector.title}
                  </h3>

                  {/* Chiffre sectoriel */}
                  <div className="p-4 rounded-xl bg-[#8FB0DC]/10 border border-[#8FB0DC]/25 mb-6">
                    <div className="text-2xl font-bold text-[#ED7410]">
                      {sector.stat}
                    </div>
                    <div className="text-xs font-medium text-[#1A2838]/80">
                      {sector.statLabel}
                    </div>
                  </div>

                  {/* 3 Fonctionnalités */}
                  <ul className="space-y-3 mb-8">
                    {sector.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A2838]/80 leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#FFA23C]/20 text-[#ED7410] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`#contact?sector=${encodeURIComponent(sector.ctaQuery)}`}
                  className="btn-secondary w-full py-2.5 text-sm font-semibold justify-center gap-1.5"
                >
                  Chiffrer ce cas d'usage
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center text-xs text-[#405C82] mb-12">
          * Résultats constatés chez nos clients pilotes (chiffres indicatifs à confirmer selon vos volumes).
        </div>

        {/* Encart transversal : Votre métier a un workflow particulier ? */}
        <div className="bg-[#1A2838] text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded bg-[#FFA23C]/20 text-[#FFA23C] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Cas d'usage sur-mesure</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Votre métier a un workflow ou un outil particulier ?
              </h3>
              <p className="text-sm text-[#8FB0DC] leading-relaxed">
                Tableurs sur-mesure, échanges WhatsApp récurrents, liaisons entre deux logiciels incompatibles...
                Nos micro-solutions s'intègrent précisément dans vos pratiques sans vous forcer à tout réapprendre.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap px-7 py-3.5 text-sm font-semibold shadow-md shrink-0"
            >
              Décrire votre processus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

