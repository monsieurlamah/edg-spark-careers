import { motion } from "framer-motion";
import { Shield, Eye, Globe, Cpu, Award, HeartHandshake, TrendingUp, Clock } from "lucide-react";

const features = [
  { icon: Shield, title: "Sécurité maximale", description: "Vos données personnelles sont protégées par les dernières technologies de cryptage et hébergées en conformité avec les standards internationaux." },
  { icon: Eye, title: "Transparence totale", description: "Suivez chaque étape de votre candidature en temps réel sur votre tableau de bord personnel. Aucune zone d'ombre dans le processus." },
  { icon: Globe, title: "Portée internationale", description: "Accédez à des postes stratégiques à travers toute la Guinée et à l'international. EDG recrute les meilleurs talents sans frontières." },
  { icon: Cpu, title: "100% digitalisé", description: "Candidatez en quelques clics grâce à notre plateforme intuitive. Plus de paperasse, plus d'attente inutile." },
];

export default function WhyRecruedgSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Nos engagements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Pourquoi <span className="gradient-text">RECRUEDG</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une plateforme pensée pour les talents qui veulent faire la différence au sein d'EDG
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-energy-bg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                <feat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
