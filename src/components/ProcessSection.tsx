import { motion } from "framer-motion";
import { UserPlus, FileText, Search, Video, CheckCircle } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Créez votre profil", description: "Inscrivez-vous et complétez votre profil professionnel" },
  { icon: FileText, title: "Candidature", description: "Postulez aux offres ou soumettez une candidature spontanée" },
  { icon: Search, title: "Analyse", description: "Nos recruteurs analysent attentivement votre dossier" },
  { icon: Video, title: "Entretien", description: "Participez à un entretien avec notre équipe RH" },
  { icon: CheckCircle, title: "Intégration", description: "Bienvenue dans la famille EDG !" },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Processus de recrutement
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un parcours simple et transparent en 5 étapes
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-center gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card">
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Icon center */}
              <div className="hidden md:flex w-14 h-14 rounded-2xl gradient-energy-bg items-center justify-center z-10 shrink-0 shadow-lg edg-glow">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
