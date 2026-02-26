import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, Clock, Calendar, ArrowLeft, Send, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const jobDetails: Record<string, any> = {
  "1": { title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", posted: "Il y a 2 jours", deadline: "15 Mars 2026", description: "Superviser les opérations de production d'énergie électrique dans les centrales d'EDG.", responsibilities: ["Superviser les équipes de production", "Assurer la qualité de l'énergie produite", "Optimiser les processus de production", "Rédiger les rapports techniques"], requirements: ["Bac+5 en Génie Électrique", "5 ans d'expérience minimum", "Maîtrise des normes IEC", "Leadership et gestion d'équipe"] },
};

const defaultJob = {
  title: "Offre d'emploi EDG",
  location: "Conakry",
  type: "CDI",
  department: "EDG",
  posted: "Récemment",
  deadline: "À déterminer",
  description: "Rejoignez l'équipe d'Électricité de Guinée pour contribuer au développement énergétique du pays.",
  responsibilities: ["Contribuer aux objectifs du département", "Collaborer avec les équipes", "Innover et proposer des améliorations"],
  requirements: ["Diplôme pertinent", "Expérience dans le domaine", "Esprit d'équipe"],
};

export default function JobDetailPage() {
  const { id } = useParams();
  const job = jobDetails[id || ""] || defaultJob;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link to="/offres" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour aux offres
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="glass-card mb-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{job.type}</span>
                    <span className="flex items-center gap-1.5"><Building className="h-4 w-4" />{job.department}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{job.posted}</span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="gap-2 shrink-0">
                  <Send className="h-4 w-4" />
                  Postuler maintenant
                </Button>
              </div>
            </div>

            <div className="glass-card mb-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Description du poste</h2>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card">
                <h2 className="text-lg font-bold text-foreground mb-4">Responsabilités</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((r: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card">
                <h2 className="text-lg font-bold text-foreground mb-4">Prérequis</h2>
                <ul className="space-y-3">
                  {job.requirements.map((r: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card mt-6 flex items-center gap-4">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Date limite :</span> {job.deadline}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
