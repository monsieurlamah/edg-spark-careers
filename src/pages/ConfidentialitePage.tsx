import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">
              Politique de <span className="gradient-text">confidentialité</span>
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">1. Collecte des données</h2>
                <p>Dans le cadre de l'utilisation de RECRUEDG, nous collectons les données personnelles suivantes :</p>
                <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
                  <li>Nom, prénom, adresse email et numéro de téléphone</li>
                  <li>Curriculum Vitae et documents professionnels</li>
                  <li>Informations sur votre parcours professionnel et académique</li>
                  <li>Données de connexion et d'utilisation du site</li>
                </ul>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">2. Finalité du traitement</h2>
                <p>Vos données personnelles sont collectées et traitées pour :</p>
                <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
                  <li>La gestion de votre compte candidat</li>
                  <li>Le traitement de vos candidatures</li>
                  <li>La mise en relation avec les recruteurs d'EDG</li>
                  <li>L'envoi de notifications relatives aux offres d'emploi</li>
                  <li>L'amélioration de nos services</li>
                </ul>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">3. Conservation des données</h2>
                <p>Vos données sont conservées pendant une durée maximale de 24 mois à compter de votre dernière connexion. Passé ce délai, vos données seront supprimées sauf obligation légale contraire.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">4. Partage des données</h2>
                <p>Vos données personnelles ne sont partagées qu'avec les services de recrutement d'EDG. Elles ne sont en aucun cas vendues, louées ou transmises à des tiers sans votre consentement explicite.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">5. Sécurité</h2>
                <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">6. Vos droits</h2>
                <p>Vous disposez des droits suivants :</p>
                <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
                  <li><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> corriger vos informations</li>
                  <li><strong className="text-foreground">Droit de suppression :</strong> demander l'effacement de vos données</li>
                  <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                </ul>
                <p className="mt-3">Pour exercer ces droits, contactez-nous à : <span className="text-primary font-medium">recrutement@edg.gn</span></p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">7. Contact</h2>
                <p>Pour toute question relative à la protection de vos données personnelles :</p>
                <p className="mt-2 text-sm">
                  <strong className="text-foreground">Électricité de Guinée (EDG)</strong><br />
                  Direction des Ressources Humaines<br />
                  Conakry, République de Guinée<br />
                  Email : <span className="text-primary">recrutement@edg.gn</span>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
