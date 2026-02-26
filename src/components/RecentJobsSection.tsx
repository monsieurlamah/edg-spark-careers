import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight, Sparkles, AlertTriangle, Calendar, Ban } from "lucide-react";

function parseDeadline(d: string): Date {
  const months: Record<string, number> = { "Jan": 0, "Fév": 1, "Mars": 2, "Avr": 3, "Mai": 4, "Juin": 5, "Juil": 6, "Août": 7, "Sep": 8, "Oct": 9, "Nov": 10, "Déc": 11 };
  const parts = d.split(" ");
  return new Date(parseInt(parts[2]), months[parts[1]] ?? 0, parseInt(parts[0]));
}
function isExpired(deadline: string): boolean { return parseDeadline(deadline) < new Date(); }

const mockJobs = [
  { id: 1, title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", urgent: true, isNew: true, posted: "Il y a 2 jours", deadline: "15 Mars 2026", description: "Pilotez la production d'énergie dans les centrales d'EDG. Poste stratégique avec évolution rapide." },
  { id: 2, title: "Technicien de Maintenance", location: "Kankan", type: "CDI", department: "Maintenance", urgent: false, isNew: true, posted: "Il y a 3 jours", deadline: "20 Mars 2026", description: "Assurez la continuité du réseau électrique. Formation continue et équipements de pointe." },
  { id: 3, title: "Chef de Projet Énergie Renouvelable", location: "Conakry", type: "CDI", department: "R&D", urgent: true, isNew: false, posted: "Il y a 5 jours", deadline: "10 Mars 2026", description: "Transformez l'avenir énergétique de la Guinée avec des projets solaires et hydrauliques innovants." },
  { id: 4, title: "Analyste Financier", location: "Conakry", type: "CDD", department: "Finance", urgent: false, isNew: true, posted: "Il y a 1 jour", deadline: "25 Mars 2026", description: "Participez aux décisions financières stratégiques d'une entreprise nationale en pleine croissance." },
  { id: 5, title: "Responsable RH", location: "Conakry", type: "CDI", department: "Ressources Humaines", urgent: false, isNew: false, posted: "Il y a 7 jours", deadline: "18 Mars 2026", description: "Façonnez la politique RH et attirez les meilleurs talents pour EDG." },
  { id: 6, title: "Opérateur de Réseau", location: "Labé", type: "CDI", department: "Distribution", urgent: false, isNew: true, posted: "Il y a 4 jours", deadline: "22 Mars 2026", description: "Surveillez et optimisez le réseau de distribution pour des milliers de foyers guinéens." },
];

export default function RecentJobsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Offres récentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Opportunités en cours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les dernières offres d'emploi chez Électricité de Guinée
          </p>
        </motion.div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockJobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/offres/${job.id}`} className="block h-full">
                <div className="glass-card h-full flex flex-col group cursor-pointer">
                  {/* Badges */}
                  <div className="flex gap-2 mb-3">
                    {isExpired(job.deadline) && (
                      <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center gap-1">
                        <Ban className="h-3 w-3" />
                        Clôturée
                      </span>
                    )}
                    {!isExpired(job.deadline) && job.isNew && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        Nouveau
                      </span>
                    )}
                    {!isExpired(job.deadline) && job.urgent && (
                      <span className="px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-bold flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Urgent
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mb-2">{job.department}</p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  {/* Info */}
                  <div className="flex flex-wrap gap-3 mb-3 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {job.posted}
                    </span>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-destructive/80 mb-4">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    Date limite : {job.deadline}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Voir l'offre & Postuler
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/offres">
            <Button variant="default" size="lg" className="gap-2">
              Voir toutes les offres
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
