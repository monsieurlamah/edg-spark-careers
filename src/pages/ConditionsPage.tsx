import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">
              Conditions <span className="gradient-text">d'utilisation</span>
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">1. Objet</h2>
                <p>Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités d'accès et d'utilisation de la plateforme RECRUEDG, mise à disposition par Électricité de Guinée (EDG).</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">2. Accès à la plateforme</h2>
                <p>L'accès à RECRUEDG est gratuit pour les candidats. La création d'un compte est nécessaire pour postuler aux offres d'emploi et soumettre des candidatures spontanées. L'utilisateur s'engage à fournir des informations exactes et à jour.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">3. Obligations de l'utilisateur</h2>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Fournir des informations véridiques et complètes</li>
                  <li>Ne pas usurper l'identité d'un tiers</li>
                  <li>Ne pas transmettre de contenu illicite ou offensant</li>
                  <li>Respecter la confidentialité de ses identifiants de connexion</li>
                  <li>Ne pas tenter de perturber le fonctionnement de la plateforme</li>
                </ul>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">4. Processus de candidature</h2>
                <p>La soumission d'une candidature via RECRUEDG ne constitue pas une promesse d'embauche. EDG se réserve le droit de sélectionner les candidats selon ses propres critères et procédures de recrutement.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">5. Propriété intellectuelle</h2>
                <p>L'ensemble des éléments de la plateforme (design, textes, logos, algorithmes) sont protégés par le droit de la propriété intellectuelle. Toute utilisation non autorisée est strictement interdite.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">6. Suspension et résiliation</h2>
                <p>EDG se réserve le droit de suspendre ou de supprimer tout compte en cas de violation des présentes CGU, sans préavis ni indemnité.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">7. Modification des CGU</h2>
                <p>EDG peut modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification substantielle. L'utilisation continue de la plateforme après modification vaut acceptation des nouvelles conditions.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">8. Droit applicable</h2>
                <p>Les présentes CGU sont régies par le droit en vigueur en République de Guinée. Tout litige relatif à l'interprétation ou à l'exécution des présentes sera soumis aux juridictions compétentes de Conakry.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
