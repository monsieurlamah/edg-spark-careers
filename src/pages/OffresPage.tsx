import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, Filter, ArrowRight, AlertTriangle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allJobs = [
  { id: 1, title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", urgent: true, isNew: true, posted: "Il y a 2 jours", description: "Superviser les opérations de production d'énergie." },
  { id: 2, title: "Technicien de Maintenance", location: "Kankan", type: "CDI", department: "Maintenance", urgent: false, isNew: true, posted: "Il y a 3 jours", description: "Assurer la maintenance préventive et corrective des installations." },
  { id: 3, title: "Chef de Projet Énergie Renouvelable", location: "Conakry", type: "CDI", department: "R&D", urgent: true, isNew: false, posted: "Il y a 5 jours", description: "Piloter les projets d'énergie renouvelable pour EDG." },
  { id: 4, title: "Analyste Financier", location: "Conakry", type: "CDD", department: "Finance", urgent: false, isNew: true, posted: "Il y a 1 jour", description: "Analyser les performances financières et préparer les rapports." },
  { id: 5, title: "Responsable RH", location: "Conakry", type: "CDI", department: "Ressources Humaines", urgent: false, isNew: false, posted: "Il y a 7 jours", description: "Gérer la politique de recrutement et de développement RH." },
  { id: 6, title: "Opérateur de Réseau", location: "Labé", type: "CDI", department: "Distribution", urgent: false, isNew: true, posted: "Il y a 4 jours", description: "Exploiter et surveiller le réseau de distribution électrique." },
  { id: 7, title: "Comptable Principal", location: "Conakry", type: "CDI", department: "Finance", urgent: false, isNew: false, posted: "Il y a 10 jours", description: "Tenir la comptabilité générale et analytique de l'entreprise." },
  { id: 8, title: "Ingénieur Réseaux IT", location: "Conakry", type: "CDI", department: "Informatique", urgent: true, isNew: true, posted: "Il y a 1 jour", description: "Concevoir et administrer les infrastructures réseau IT." },
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
            <div className="glass-card p-3 flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher par titre, département ou ville..."
                  className="pl-10 h-12 rounded-xl border-0 bg-muted/50"
                />
              </div>
              <Button variant="default" size="lg">
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
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      {job.isNew && (
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">Nouveau</span>
                      )}
                      {job.urgent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-edg-red/10 text-edg-red text-xs font-bold flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" />Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{job.type}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{job.posted}</span>
                      <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{job.department}</span>
                    </div>
                  </div>
                  <Link to={`/offres/${job.id}`}>
                    <Button variant="outline" className="shrink-0 gap-2">
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
