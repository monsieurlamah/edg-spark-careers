import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  User, FileText, Briefcase, Clock, Bell, Settings, LogOut,
  ChevronRight, CheckCircle, XCircle, Loader2, Upload, Edit
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const candidatures = [
  { id: 1, poste: "Ingénieur Électricien Senior", date: "20 Fév 2026", statut: "en_cours", departement: "Production" },
  { id: 2, poste: "Chef de Projet Énergie Renouvelable", date: "15 Fév 2026", statut: "entretien", departement: "R&D" },
  { id: 3, poste: "Analyste Financier", date: "10 Fév 2026", statut: "rejetee", departement: "Finance" },
];

const statusConfig: Record<string, { label: string; icon: any; className: string }> = {
  en_cours: { label: "En cours", icon: Loader2, className: "bg-primary/10 text-primary" },
  entretien: { label: "Entretien", icon: CheckCircle, className: "bg-edg-yellow/20 text-secondary-foreground" },
  rejetee: { label: "Rejetée", icon: XCircle, className: "bg-destructive/10 text-destructive" },
  acceptee: { label: "Acceptée", icon: CheckCircle, className: "bg-primary/10 text-primary" },
};

export default function CandidatDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <div className="glass-card text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Mamadou Diallo</h3>
                <p className="text-sm text-muted-foreground">mamadou@email.com</p>
              </div>

              {[
                { icon: Briefcase, label: "Mes candidatures", active: true },
                { icon: User, label: "Mon profil", active: false },
                { icon: FileText, label: "Mon CV", active: false },
                { icon: Bell, label: "Notifications", active: false },
                { icon: Settings, label: "Paramètres", active: false },
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all">
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            </motion.aside>

            {/* Main */}
            <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Mes candidatures</h1>
                  <p className="text-sm text-muted-foreground">Suivez l'avancement de vos candidatures</p>
                </div>
                <Link to="/offres">
                  <Button variant="default" size="sm" className="gap-2">
                    <Briefcase className="h-4 w-4" />
                    Voir les offres
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Total", value: "3", color: "bg-primary/10 text-primary" },
                  { label: "En cours", value: "1", color: "bg-primary/10 text-primary" },
                  { label: "Entretien", value: "1", color: "bg-edg-yellow/20 text-secondary-foreground" },
                  { label: "Rejetée", value: "1", color: "bg-destructive/10 text-destructive" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card text-center py-4">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Candidatures list */}
              <div className="space-y-4">
                {candidatures.map((c) => {
                  const status = statusConfig[c.statut];
                  return (
                    <div key={c.id} className="glass-card flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground">{c.poste}</h3>
                        <p className="text-sm text-muted-foreground">{c.departement} · Candidature du {c.date}</p>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${status.className}`}>
                        <status.icon className="h-3.5 w-3.5" />
                        {status.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
