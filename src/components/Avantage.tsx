import { X, Check, Calendar, Receipt, Lock, Zap, Clock, ShieldCheck } from "lucide-react";

export default function Avantage() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-canvas border-t border-border-subtle" id="avantage">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/15 text-accent-orange text-xs uppercase tracking-wider font-semibold mb-3">
            Badge : Garantie 4 jours
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl text-text-primary tracking-tight font-bold mb-3">
            Agence classique vs Approche Nomira
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Pourquoi les TPE et PME perdent souvent pied avec les projets informatiques traditionnels ? Voici ce qui change concrètement avec nos micro-solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Carte Agence classique */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-subtle border border-border-subtle">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-subtle">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary">Agence classique</h3>
                  <p className="text-xs text-text-muted">Modèle traditionnel à rallonge</p>
                </div>
                <Clock className="w-7 h-7 text-text-muted" />
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Délais : 2 à 6 mois</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Cahiers des charges exhaustifs, multiples comités de pilotage et lancements sans cesse repoussés.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Facturation au TJM fluctuant</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Devis indicatifs complétés par des avenants incessants pour imprévus techniques. Coût final toujours incertain.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Code lourd et captivité</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Dépendance à une pile technologique complexe, maintenance obligatoire payante et accès au code source restreint.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle text-error text-sm font-semibold flex items-center gap-2">
              <X className="w-4 h-4" />
              <span>Résultat : Budget explosé, délai non maîtrisé</span>
            </div>
          </div>

          {/* Carte Nomira */}
          <div className="reveal-item revealed flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-surface-canvas border-2 border-steel-blue shadow-lg relative">
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-steel-blue text-white text-[11px] font-bold uppercase tracking-wider">
              Modèle chirurgical
            </div>
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-subtle">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-primary">Nomira</h3>
                  <p className="text-xs text-accent-orange font-semibold">Micro-solutions ultra-ciblées</p>
                </div>
                <Zap className="w-7 h-7 text-accent-orange" />
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Déploiement en 4 jours ouvrés</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Focus exclusif sur votre goulet d&apos;étranglement numéro un. Mise en service opérationnelle immédiate pour vos équipes.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Forfait ferme au centime près</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Un prix clair, arrêté avant le premier commit. Zéro surcoût, aucun frais masqué, fin de l&apos;aléa budgétaire.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Code pérenne &amp; 100 % réversible</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Technologies ouvertes et standards web éprouvés. Vous possédez intégralement vos données et votre code.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-border-subtle text-steel-blue text-sm font-semibold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-steel-blue" />
              <span>Simulation : amortissement estimé dès le 2e mois</span>
            </div>
          </div>
        </div>

        {/* 3 Piliers de synthèse */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="reveal-item revealed p-5 rounded-lg bg-surface-subtle border border-border-subtle flex items-start gap-3.5">
            <Calendar className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-text-primary">Calendrier ferme</h4>
              <p className="text-xs text-text-secondary mt-1">Date de mise en service contractualisée dès la signature.</p>
            </div>
          </div>
          <div className="reveal-item revealed p-5 rounded-lg bg-surface-subtle border border-border-subtle flex items-start gap-3.5">
            <Receipt className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-text-primary">Zéro frais masqué</h4>
              <p className="text-xs text-text-secondary mt-1">Pas de redevance locative obligatoire pour continuer à tourner.</p>
            </div>
          </div>
          <div className="reveal-item revealed p-5 rounded-lg bg-surface-subtle border border-border-subtle flex items-start gap-3.5">
            <Lock className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-text-primary">Propriété intégrale</h4>
              <p className="text-xs text-text-secondary mt-1">Données clients et historiques restent sous votre contrôle exclusif.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
