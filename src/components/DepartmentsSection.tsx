import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Wrench, Network, Lightbulb, Landmark, Users, Monitor, Factory } from "lucide-react";

export const departmentsData = [
  { 
    slug: "production", icon: Factory, name: "Production", 
    desc: "Gère les centrales thermiques et hydrauliques pour assurer la production continue d'électricité sur tout le territoire guinéen.",
    mission: "La Direction de la Production est le cœur battant d'EDG. Elle supervise l'exploitation de l'ensemble des centrales de production d'énergie — thermiques, hydrauliques et solaires — réparties sur le territoire national. Sa mission principale est de garantir une production stable, efficiente et durable d'électricité pour répondre aux besoins croissants de la population guinéenne et du tissu économique.",
    objectifs: ["Maximiser la disponibilité des unités de production", "Optimiser le rendement énergétique des centrales", "Réduire les coûts de production tout en maintenant la qualité", "Intégrer progressivement les énergies renouvelables dans le mix énergétique"],
    postes: ["Ingénieur de production", "Opérateur de centrale", "Chef de quart", "Technicien thermicien", "Responsable HSE"],
    effectif: "1 200+",
    localisation: "Conakry, Kindia, Kankan, Labé"
  },
  { 
    slug: "transport", icon: Network, name: "Transport", 
    desc: "Responsable du réseau haute tension qui achemine l'électricité des centrales vers les centres de distribution régionaux.",
    mission: "La Direction du Transport gère le réseau haute tension (HT) et très haute tension (THT) qui constitue l'épine dorsale du système électrique guinéen. Elle assure le transit fiable de l'énergie produite par les centrales vers les postes de transformation et les centres de distribution à travers tout le pays.",
    objectifs: ["Maintenir un taux de disponibilité optimal du réseau HT/THT", "Développer de nouvelles lignes de transport pour desservir les zones rurales", "Moderniser les postes de transformation existants", "Réduire les pertes techniques sur le réseau de transport"],
    postes: ["Ingénieur réseau HT", "Technicien de ligne", "Responsable poste source", "Chef de district transport", "Ingénieur planification"],
    effectif: "800+",
    localisation: "Ensemble du territoire national"
  },
  { 
    slug: "distribution", icon: Zap, name: "Distribution", 
    desc: "Assure la livraison de l'électricité aux foyers, entreprises et institutions à travers le réseau basse et moyenne tension.",
    mission: "La Direction de la Distribution est l'interface directe entre EDG et ses clients. Elle gère le réseau de moyenne et basse tension qui alimente les foyers, commerces, industries et institutions publiques. Son rôle est crucial pour garantir la qualité du service et la satisfaction des usagers sur l'ensemble du territoire.",
    objectifs: ["Améliorer la qualité de la fourniture d'électricité", "Réduire les interruptions et les délais de rétablissement", "Étendre la couverture du réseau aux zones non desservies", "Lutter contre les pertes non techniques et les fraudes"],
    postes: ["Ingénieur de distribution", "Technicien de réseau BT/MT", "Chef d'agence", "Agent de relève", "Responsable clientèle"],
    effectif: "1 500+",
    localisation: "33 préfectures de Guinée"
  },
  { 
    slug: "maintenance", icon: Wrench, name: "Maintenance", 
    desc: "Garantit le bon fonctionnement et la longévité des équipements grâce à la maintenance préventive et corrective.",
    mission: "La Direction de la Maintenance veille à la fiabilité et à la durabilité de l'ensemble du parc d'équipements d'EDG. Elle met en œuvre des stratégies de maintenance préventive, prédictive et corrective pour minimiser les pannes, prolonger la durée de vie des installations et assurer la sécurité des personnels et des usagers.",
    objectifs: ["Implémenter un plan de maintenance préventive systématique", "Réduire le temps moyen de réparation (MTTR)", "Former les équipes aux nouvelles technologies", "Constituer un stock stratégique de pièces de rechange"],
    postes: ["Ingénieur maintenance", "Technicien électromécanique", "Soudeur haute pression", "Responsable planning maintenance", "Inspecteur qualité"],
    effectif: "600+",
    localisation: "Conakry et ateliers régionaux"
  },
  { 
    slug: "r-d", icon: Lightbulb, name: "R&D", 
    desc: "Pilote les projets d'innovation, d'énergie renouvelable et de modernisation du réseau pour un avenir durable.",
    mission: "La Direction Recherche & Développement est le moteur de l'innovation chez EDG. Elle explore les technologies émergentes, pilote les projets d'énergie renouvelable (solaire, éolien, biomasse) et conçoit les solutions de demain pour moderniser le réseau électrique guinéen et réduire l'empreinte carbone de la production.",
    objectifs: ["Développer des projets solaires et éoliens à grande échelle", "Étudier les solutions de stockage d'énergie", "Piloter la digitalisation du réseau (smart grid)", "Nouer des partenariats avec les universités et centres de recherche"],
    postes: ["Chef de projet énergie renouvelable", "Ingénieur R&D", "Data scientist énergie", "Analyste innovation", "Responsable partenariats"],
    effectif: "150+",
    localisation: "Conakry (siège innovation)"
  },
  { 
    slug: "finance", icon: Landmark, name: "Finance", 
    desc: "Gère la comptabilité, les budgets et la stratégie financière pour soutenir la croissance et les investissements d'EDG.",
    mission: "La Direction Financière assure la solidité économique d'EDG en gérant les ressources financières avec rigueur et transparence. Elle supervise la comptabilité générale, le contrôle de gestion, la trésorerie et la politique d'investissement, contribuant ainsi directement à la pérennité et au développement de l'entreprise.",
    objectifs: ["Assurer l'équilibre financier de l'entreprise", "Optimiser la gestion de trésorerie et le recouvrement", "Mettre en place des outils de reporting performants", "Accompagner les projets d'investissement stratégiques"],
    postes: ["Analyste financier", "Comptable principal", "Contrôleur de gestion", "Responsable trésorerie", "Auditeur interne"],
    effectif: "200+",
    localisation: "Conakry (siège)"
  },
  { 
    slug: "ressources-humaines", icon: Users, name: "Ressources Humaines", 
    desc: "Recrute, forme et accompagne les talents pour bâtir une équipe performante au service de la nation.",
    mission: "La Direction des Ressources Humaines est le pilier social d'EDG. Elle définit et met en œuvre la politique RH de l'entreprise : recrutement des meilleurs talents, formation continue, gestion des carrières, dialogue social et bien-être au travail. Elle veille à ce que chaque collaborateur dispose des moyens de s'épanouir professionnellement.",
    objectifs: ["Attirer et retenir les talents les plus qualifiés", "Développer un plan de formation ambitieux et continu", "Garantir un environnement de travail sûr et épanouissant", "Promouvoir la diversité et l'égalité des chances"],
    postes: ["Responsable RH", "Chargé de recrutement", "Responsable formation", "Gestionnaire paie", "Chargé des affaires sociales"],
    effectif: "180+",
    localisation: "Conakry (siège) et antennes régionales"
  },
  { 
    slug: "informatique", icon: Monitor, name: "Informatique", 
    desc: "Développe l'infrastructure numérique et les systèmes d'information pour moderniser les opérations d'EDG.",
    mission: "La Direction Informatique et Systèmes d'Information est l'architecte de la transformation digitale d'EDG. Elle conçoit, déploie et maintient l'ensemble des infrastructures IT, des logiciels métier et des systèmes de communication qui permettent à EDG de fonctionner efficacement à l'ère du numérique.",
    objectifs: ["Moderniser l'infrastructure IT de bout en bout", "Déployer un ERP intégré pour toutes les directions", "Renforcer la cybersécurité des systèmes critiques", "Développer des applications métier sur mesure"],
    postes: ["Ingénieur réseaux IT", "Développeur logiciel", "Administrateur systèmes", "Responsable cybersécurité", "Chef de projet digital"],
    effectif: "120+",
    localisation: "Conakry (data center principal)"
  },
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
          {departmentsData.map((d, i) => (
            <motion.div key={d.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={`/directions/${d.slug}`} className="block h-full">
                <div className="glass-card text-center group h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300">
                    <d.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{d.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{d.desc}</p>
                  <div className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
