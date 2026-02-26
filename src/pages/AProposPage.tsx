import { motion } from "framer-motion";
import { Zap, Target, Heart, Users, Globe, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoEdg from "@/assets/logo-edg.png";
import heroBg from "@/assets/hero-bg.jpg";

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <img src={logoEdg} alt="EDG" className="h-24 w-auto mx-auto mb-8" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Électricité de <span className="gradient-text">Guinée</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acteur majeur du secteur énergétique guinéen, EDG œuvre chaque jour pour fournir 
              une énergie fiable et accessible à l'ensemble du territoire national.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
              <div className="w-14 h-14 rounded-2xl gradient-energy-bg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Produire, transporter et distribuer l'énergie électrique sur l'ensemble du territoire 
                guinéen, en garantissant un service de qualité, fiable et accessible à tous les citoyens.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card">
              <div className="w-14 h-14 rounded-2xl gradient-gold-bg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Nos Valeurs</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><Zap className="h-4 w-4 text-primary shrink-0" />Excellence et innovation</li>
                <li className="flex items-center gap-3"><Users className="h-4 w-4 text-primary shrink-0" />Engagement envers nos collaborateurs</li>
                <li className="flex items-center gap-3"><Globe className="h-4 w-4 text-primary shrink-0" />Responsabilité sociale et environnementale</li>
                <li className="flex items-center gap-3"><Award className="h-4 w-4 text-primary shrink-0" />Intégrité et transparence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Pourquoi travailler chez <span className="gradient-text">EDG</span> ?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Impact national", desc: "Contribuez directement au développement énergétique de la Guinée" },
              { title: "Formation continue", desc: "Programmes de développement professionnel et certifications" },
              { title: "Stabilité d'emploi", desc: "Un employeur solide avec une vision à long terme" },
              { title: "Avantages sociaux", desc: "Couverture santé, primes et avantages compétitifs" },
              { title: "Diversité des métiers", desc: "Ingénierie, finance, IT, management et plus encore" },
              { title: "Innovation", desc: "Participez aux projets d'énergie renouvelable de demain" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
              >
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
