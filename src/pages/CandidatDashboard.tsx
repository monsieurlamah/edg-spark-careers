import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Clock, CheckCircle, XCircle, Loader2
} from "lucide-react";
import CandidatLayout from "@/components/layouts/CandidatLayout";

const candidatures = [
  { id: 1, poste: "Ingénieur Électricien Senior", date: "20 Fév 2026", statut: "en_cours", departement: "Production" },
  { id: 2, poste: "Chef de Projet Énergie Renouvelable", date: "15 Fév 2026", statut: "entretien", departement: "R&D" },
  { id: 3, poste: "Analyste Financier", date: "10 Fév 2026", statut: "rejetee", departement: "Finance" },
];

const statusConfig: Record<string, { label: string; icon: any; className: string }> = {
  en_cours: { label: "En cours", icon: Loader2, className: "bg-primary/10 text-primary" },
  entretien: { label: "Entretien", icon: CheckCircle, className: "bg-yellow-500/10 text-yellow-600" },
  rejetee: { label: "Rejetée", icon: XCircle, className: "bg-destructive/10 text-destructive" },
  acceptee: { label: "Acceptée", icon: CheckCircle, className: "bg-primary/10 text-primary" },
};

export default function CandidatDashboard() {
  return (
    <CandidatLayout activeItem="Mes candidatures">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Mes candidatures</h1>
          <p className="text-sm text-muted-foreground">Suivez l'avancement de vos candidatures</p>
        </div>
        <Link to="/offres">
          <Button variant="default" size="sm" className="gap-2"><Briefcase className="h-4 w-4" />Voir les offres</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total", value: "3", color: "bg-primary/10 text-primary" },
          { label: "En cours", value: "1", color: "bg-primary/10 text-primary" },
          { label: "Entretien", value: "1", color: "bg-yellow-500/10 text-yellow-600" },
          { label: "Rejetée", value: "1", color: "bg-destructive/10 text-destructive" },
        ].map((stat, i) => (
          <div key={i} className="glass-card text-center py-4">
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

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
                <status.icon className="h-3.5 w-3.5" />{status.label}
              </span>
            </div>
          );
        })}
      </div>
    </CandidatLayout>
  );
}
