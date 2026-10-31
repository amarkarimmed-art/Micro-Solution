import { FileCheck, FolderCheck, PiggyBank } from "lucide-react";

export default function Subventions() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-canvas border-t border-border-subtle" id="financement">
      {/* Ancre de repli pour compatibilité */}
      <div id="subventions" className="sr-only" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated text-steel-blue text-xs uppercase tracking-wider font-semibold mb-3">
            Accompagnement &amp; Financement
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Financez votre digitalisation avec les aides publiques
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            De nombreux dispositifs territoriaux et nationaux (Maroc PME / programmes d&apos;aide à la transition numérique en France) soutiennent l&apos;informatisation ciblée des entreprises. Nous vous aidons à les activer sans tracas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Pilier 1 */}
          <div className="reveal-item revealed p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-6 text-accent-orange">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-3">Éligibilité vérifiée</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Nous vérifions en 15 minutes les aides auxquelles votre statut, votre effectif et votre localisation (Maroc ou France) vous donnent droit.
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle text-steel-blue text-xs font-semibold">
              Audit gratuit &amp; instantané
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="reveal-item revealed p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-6 text-accent-orange">
                <FolderCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-3">Dossier clé en main</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Nous rédigeons pour vous l&apos;argumentaire technique et fournissons les devis normalisés exigés par les commissions d&apos;attribution.
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle text-steel-blue text-xs font-semibold">
              Zéro formalité lourde pour vous
            </div>
          </div>

          {/* Pilier 3 */}
          <div className="reveal-item revealed p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-6 text-accent-orange">
                <PiggyBank className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary mb-3">Zéro avance lourde</h3>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                Prise en charge pouvant couvrir jusqu&apos;à 70 %* de votre budget et échéancier aligné sur les validations d&apos;étapes de votre projet.
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle text-steel-blue text-xs font-semibold">
              Trésorerie préservée
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-xs pt-2">
          <span>Étude confidentielle, sans obligation.</span>
          <span className="italic">* Le taux de subvention dépend des critères d&apos;éligibilité légaux propres à chaque organisme payeur.</span>
        </div>
      </div>
    </section>
  );
}
