import { motion } from "framer-motion";
import { Zap, Wrench, Network, Lightbulb, Landmark, Users, Monitor, Factory } from "lucide-react";

const departments = [
  { icon: Factory, name: "Production", desc: "Gère les centrales thermiques et hydrauliques pour assurer la production continue d'électricité sur tout le territoire guinéen." },
  { icon: Network, name: "Transport", desc: "Responsable du réseau haute tension qui achemine l'électricité des centrales vers les centres de distribution régionaux." },
  { icon: Zap, name: "Distribution", desc: "Assure la livraison de l'électricité aux foyers, entreprises et institutions à travers le réseau basse et moyenne tension." },
  { icon: Wrench, name: "Maintenance", desc: "Garantit le bon fonctionnement et la longévité des équipements grâce à la maintenance préventive et corrective." },
  { icon: Lightbulb, name: "R&D", desc: "Pilote les projets d'innovation, d'énergie renouvelable et de modernisation du réseau pour un avenir durable." },
  { icon: Landmark, name: "Finance", desc: "Gère la comptabilité, les budgets et la stratégie financière pour soutenir la croissance et les investissements d'EDG." },
  { icon: Users, name: "Ressources Humaines", desc: "Recrute, forme et accompagne les talents pour bâtir une équipe performante au service de la nation." },
  { icon: Monitor, name: "Informatique", desc: "Développe l'infrastructure numérique et les systèmes d'information pour moderniser les opérations d'EDG." },
];

export default function DepartmentsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            Nos directions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Les directions d'<span className="gradient-text">EDG</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les différentes directions qui composent Électricité de Guinée et trouvez celle qui correspond à vos compétences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((d, i) => (
            <motion.div key={d.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="glass-card text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <d.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
