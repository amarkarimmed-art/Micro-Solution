import { Stethoscope, GraduationCap, Store, Check, FileEdit } from "lucide-react";

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
    <section className="w-full py-16 md:py-24 bg-surface border-t border-border-subtle" id="solutions">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Cas d&apos;Usage Sectoriels
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Des micro-solutions forgées pour votre réalité terrain
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Chaque métier a son propre point de blocage. Nous concevons la solution exacte qui supprime la friction sans bouleverser vos habitudes de travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SECTORS.map((sector) => {
            const IconComponent = sector.icon;

            return (
              <div
                key={sector.id}
                className="reveal-item revealed flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-surface-canvas border border-border-subtle shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs font-semibold">
                      {sector.badge}
                    </span>
                    <IconComponent className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div className="mb-4">
                    <div className="font-heading text-[26px] font-bold text-primary">{sector.stat}</div>
                    <div className="text-xs text-text-muted">{sector.statLabel}</div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                    {sector.title}
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary mb-6">
                    {sector.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-steel-blue shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-surface-elevated text-primary font-semibold text-sm hover:bg-steel-blue hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
                  href="#contact"
                >
                  Chiffrer ce cas d&apos;usage
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-text-muted italic mb-8">
          * Données issues de modélisations et simulations de cas d&apos;usage types (chiffres indicatifs à calibrer selon vos volumes réels lors du diagnostic).
        </p>

        {/* Callout Sur-mesure */}
        <div className="reveal-item revealed rounded-xl bg-surface-canvas border border-border-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl text-left">
            <span className="px-2 py-0.5 rounded bg-surface-container text-steel-blue text-[11px] font-bold uppercase tracking-wider mb-2 inline-block">
              Cas d&apos;usage sur-mesure
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-1">
              Votre métier a un workflow ou un outil particulier ?
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Tableurs sur-mesure, échanges WhatsApp récurrents, liaisons entre deux logiciels incompatibles... Nos micro-solutions s&apos;intègrent précisément dans vos pratiques sans vous forcer à tout réapprendre.
            </p>
          </div>
          <a
            className="shrink-0 inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white font-medium text-sm hover:bg-steel-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue"
            href="#contact"
          >
            <FileEdit className="w-4 h-4 mr-2" />
            Décrire votre processus
          </a>
        </div>
      </div>
    </section>
  );
}
