import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">
              Mentions <span className="gradient-text">légales</span>
            </h1>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">1. Éditeur du site</h2>
                <p>Le site RECRUEDG est édité par <strong className="text-foreground">Électricité de Guinée (EDG)</strong>, société nationale de droit guinéen.</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li><strong className="text-foreground">Siège social :</strong> Conakry, République de Guinée</li>
                  <li><strong className="text-foreground">Téléphone :</strong> +224 621 00 00 00</li>
                  <li><strong className="text-foreground">Email :</strong> recrutement@edg.gn</li>
                  <li><strong className="text-foreground">Directeur de la publication :</strong> Direction Générale d'EDG</li>
                </ul>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">2. Hébergement</h2>
                <p>Le site est hébergé par des services cloud professionnels garantissant la disponibilité et la sécurité des données.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">3. Propriété intellectuelle</h2>
                <p>L'ensemble du contenu du site RECRUEDG (textes, images, logos, graphismes) est la propriété exclusive d'Électricité de Guinée. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation préalable écrite d'EDG est strictement interdite.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">4. Données personnelles</h2>
                <p>Les informations collectées via ce site sont destinées exclusivement au traitement des candidatures. Conformément à la réglementation applicable, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à : <span className="text-primary">recrutement@edg.gn</span></p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">5. Cookies</h2>
                <p>Ce site utilise des cookies techniques nécessaires au fonctionnement de la plateforme et des cookies analytiques pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>
              </section>

              <section className="glass-card">
                <h2 className="text-xl font-bold text-foreground mb-4">6. Limitation de responsabilité</h2>
                <p>EDG s'efforce de maintenir les informations à jour mais ne peut garantir l'exactitude ou l'exhaustivité des contenus. EDG ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
