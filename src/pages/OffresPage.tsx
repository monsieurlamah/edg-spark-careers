import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, Filter, ArrowRight, AlertTriangle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allJobs = [
  { id: 1, title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", urgent: true, isNew: true, posted: "Il y a 2 jours", deadline: "15 Mars 2026", description: "Pilotez la production d'énergie dans les centrales d'EDG. Poste stratégique avec évolution rapide." },
  { id: 2, title: "Technicien de Maintenance", location: "Kankan", type: "CDI", department: "Maintenance", urgent: false, isNew: true, posted: "Il y a 3 jours", deadline: "20 Mars 2026", description: "Assurez la continuité du réseau électrique. Formation continue et équipements de pointe." },
  { id: 3, title: "Chef de Projet Énergie Renouvelable", location: "Conakry", type: "CDI", department: "R&D", urgent: true, isNew: false, posted: "Il y a 5 jours", deadline: "10 Mars 2026", description: "Transformez l'avenir énergétique de la Guinée avec des projets solaires et hydrauliques innovants." },
  { id: 4, title: "Analyste Financier", location: "Conakry", type: "CDD", department: "Finance", urgent: false, isNew: true, posted: "Il y a 1 jour", deadline: "25 Mars 2026", description: "Participez aux décisions financières stratégiques d'une entreprise nationale en pleine croissance." },
  { id: 5, title: "Responsable RH", location: "Conakry", type: "CDI", department: "Ressources Humaines", urgent: false, isNew: false, posted: "Il y a 7 jours", deadline: "18 Mars 2026", description: "Façonnez la politique RH et attirez les meilleurs talents pour EDG." },
  { id: 6, title: "Opérateur de Réseau", location: "Labé", type: "CDI", department: "Distribution", urgent: false, isNew: true, posted: "Il y a 4 jours", deadline: "22 Mars 2026", description: "Surveillez et optimisez le réseau de distribution pour des milliers de foyers guinéens." },
  { id: 7, title: "Comptable Principal", location: "Conakry", type: "CDI", department: "Finance", urgent: false, isNew: false, posted: "Il y a 10 jours", deadline: "12 Mars 2026", description: "Tenez les comptes d'une entreprise stratégique et contribuez à la transparence financière." },
  { id: 8, title: "Ingénieur Réseaux IT", location: "Conakry", type: "CDI", department: "Informatique", urgent: true, isNew: true, posted: "Il y a 1 jour", deadline: "28 Mars 2026", description: "Concevez l'infrastructure numérique de demain pour la modernisation d'EDG." },
];

export default function OffresPage() {
  const [search, setSearch] = useState("");

  const filtered = allJobs.filter(
    (j) =>
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.department.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
              Offres d'emploi <span className="gradient-text">EDG</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Trouvez le poste qui correspond à vos ambitions
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="glass-card p-3 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher par titre, département ou ville..."
                  className="pl-10 h-12 rounded-xl border-0 bg-muted/50"
                />
              </div>
              <Button variant="default" size="lg" className="shrink-0">
                <Filter className="h-4 w-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} offre(s) trouvée(s)</p>

          {/* Job list */}
          <div className="space-y-4">
            {filtered.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="glass-card flex flex-col lg:flex-row lg:items-center gap-4 group">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      {job.isNew && (
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">Nouveau</span>
                      )}
                      {job.urgent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 shrink-0" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 shrink-0" />{job.type}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 shrink-0" />{job.posted}</span>
                      <span className="flex items-center gap-1.5 font-semibold text-destructive/80"><Calendar className="h-3.5 w-3.5 shrink-0" />Limite : {job.deadline}</span>
                      <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{job.department}</span>
                    </div>
                  </div>
                  <Link to={`/offres/${job.id}`} className="shrink-0">
                    <Button variant="outline" className="gap-2 w-full lg:w-auto">
                      Voir l'offre
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
