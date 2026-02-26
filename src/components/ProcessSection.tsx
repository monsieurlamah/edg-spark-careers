import { motion } from "framer-motion";
import { UserPlus, FileText, Search, Video, CheckCircle, ArrowDown } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Créez votre profil", description: "Inscrivez-vous et complétez votre profil professionnel avec vos compétences et votre parcours." },
  { icon: FileText, title: "Candidature", description: "Postulez aux offres qui vous intéressent ou soumettez une candidature spontanée en joignant votre CV." },
  { icon: Search, title: "Analyse", description: "Nos recruteurs analysent attentivement votre dossier et évaluent la correspondance avec le poste." },
  { icon: Video, title: "Entretien", description: "Participez à un entretien avec notre équipe RH pour démontrer vos compétences et votre motivation." },
  { icon: CheckCircle, title: "Intégration", description: "Bienvenue dans la famille EDG ! Votre parcours d'intégration personnalisé commence." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ArrowDown className="h-4 w-4" />
            Notre processus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Processus de <span className="gradient-text">recrutement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un parcours simple, transparent et digitalisé en 5 étapes
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.3), transparent)" }} />

          {steps.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-center gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-2 justify-start md:justify-center">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Étape {i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              <div className="hidden md:flex w-14 h-14 rounded-2xl gradient-energy-bg items-center justify-center z-10 shrink-0 shadow-lg edg-glow">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
