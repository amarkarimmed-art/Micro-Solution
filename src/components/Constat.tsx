import { Calculator } from "lucide-react";

export default function Constat() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-canvas border-t border-border-subtle" id="constat">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Le Constat Opérationnel
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Où s&apos;évaporent votre temps et votre trésorerie ?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Dans la majorité des TPE et PME, les journées sont absorbées par des tâches répétitives à faible valeur ajoutée. Des frictions silencieuses qui pèsent lourdement sur votre marge.
          </p>
        </div>

        {/* Grille de 4 cartes de frictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Carte 1 */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle shadow-sm hover:border-soft-ice hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-heading text-[32px] sm:text-[36px] font-bold text-accent-orange leading-tight">14 h / mois</div>
                  <div className="text-sm text-text-secondary">perdues par collaborateur*</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-error-container text-error text-[11px] font-semibold uppercase tracking-wider">
                  Friction humaine critique
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                Ressaisies manuelles et doubles saisies
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Copier-coller incessant entre tableurs Excel, devis papier, boîtes emails et logiciels comptables. Une perte d&apos;énergie continue, source d&apos;erreurs et de retards de livraison.
              </p>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle shadow-sm hover:border-soft-ice hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-heading text-[26px] sm:text-[28px] font-bold text-primary leading-tight">Factures en souffrance</div>
                  <div className="text-sm text-accent-orange font-semibold">retards de trésorerie</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary text-[11px] font-semibold uppercase tracking-wider">
                  Impact direct sur le BFR
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                Relances clients inexistantes ou tardives
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Faute de temps, les relances de paiement sont faites au coup par coup. Vos liquidités restent bloquées chez vos clients sans justification ni scénario cadencé.
              </p>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle shadow-sm hover:border-soft-ice hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-heading text-[32px] sm:text-[36px] font-bold text-accent-orange leading-tight">−8 % de revenus</div>
                  <div className="text-sm text-text-secondary">devis oubliés non convertis*</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-elevated text-text-primary text-[11px] font-semibold uppercase tracking-wider">
                  Manque à gagner mensuel
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                Opportunités perdues sans suivi systématique
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Des devis envoyés sans rappel programmé, des demandes de rendez-vous non confirmées. Du chiffre d&apos;affaires direct laissé à la concurrence faute d&apos;automates fiables.
              </p>
            </div>
          </div>

          {/* Carte 4 */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle shadow-sm hover:border-soft-ice hover:shadow-md transition-all duration-200">
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="font-heading text-[26px] sm:text-[28px] font-bold text-primary leading-tight">Empilement SaaS</div>
                  <div className="text-sm text-text-muted">abonnements sous-exploités</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-steel-blue text-[11px] font-semibold uppercase tracking-wider">
                  Coûts fixes évitables
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-2">
                Outils trop lourds et abonnements captifs
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Des logiciels généralistes coûteux (CRM, ERP complexes) dont vous n&apos;utilisez que 10 % des fonctions, accompagnés d&apos;abonnements mensuels récurrents sans fin.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-text-muted italic mb-8">
          * Ordres de grandeur représentatifs des audits préliminaires (chiffres indicatifs à valider lors du diagnostic de cadrage).
        </p>

        {/* Callout bandeau */}
        <div className="reveal-item revealed rounded-xl bg-surface-elevated border border-border-subtle p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-text-primary mb-1">
              Vous reconnaissez l&apos;une de ces situations dans votre structure ?
            </h4>
            <p className="text-sm sm:text-base text-text-secondary">
              Un diagnostic rapide de 30 minutes permet de chiffrer précisément le temps et l&apos;argent récupérables.
            </p>
          </div>
          <a
            className="shrink-0 inline-flex items-center justify-center h-11 px-6 rounded-lg bg-accent-orange text-white font-medium text-sm shadow-md hover:bg-accent-orange-hover transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-orange"
            href="#contact"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Chiffrer mon gain potentiel
          </a>
        </div>
      </div>
    </section>
  );
}
