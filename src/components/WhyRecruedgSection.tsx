import { motion } from "framer-motion";
import { Shield, Eye, Globe, Cpu } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "Vos données personnelles sont protégées par les dernières technologies de cryptage.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description: "Suivez chaque étape de votre candidature en temps réel sur votre tableau de bord.",
  },
  {
    icon: Globe,
    title: "Opportunités locales & internationales",
    description: "Accédez à des postes à travers toute la Guinée et à l'international avec EDG.",
  },
  {
    icon: Cpu,
    title: "Processus digitalisé",
    description: "Candidatez en quelques clics grâce à notre plateforme intuitive et moderne.",
  },
];

export default function WhyRecruedgSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Pourquoi <span className="gradient-text">RECRUEDG</span> ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une plateforme pensée pour les talents qui veulent faire la différence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card text-center group"
            >
              <div className="w-16 h-16 rounded-2xl gradient-energy-bg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
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
