import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Briefcase, Clock, CheckCircle } from "lucide-react";
import AdminLayout from "@/components/layouts/AdminLayout";

const stats = [
  { icon: Briefcase, label: "Offres publiées", value: "24", trend: "+8 ce trimestre", color: "bg-primary/10 text-primary" },
  { icon: Users, label: "Total candidatures", value: "412", trend: "+67 ce mois", color: "bg-blue-500/10 text-blue-500" },
  { icon: CheckCircle, label: "Recrutements finalisés", value: "18", trend: "+5 ce trimestre", color: "bg-primary/10 text-primary" },
  { icon: Clock, label: "Délai moyen", value: "21j", trend: "-3j vs trimestre précédent", color: "bg-orange-500/10 text-orange-500" },
];

const topPosts = [
  { poste: "Ingénieur Électricien", candidatures: 45, pourcentage: 100 },
  { poste: "Technicien Maintenance", candidatures: 38, pourcentage: 84 },
  { poste: "Chef de Projet", candidatures: 31, pourcentage: 69 },
  { poste: "Analyste Financier", candidatures: 22, pourcentage: 49 },
  { poste: "Opérateur de Réseau", candidatures: 18, pourcentage: 40 },
];

export default function AdminStatistiquesPage() {
  return (
    <AdminLayout activeItem="Statistiques">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-foreground">Statistiques</h1>
        <p className="text-sm text-muted-foreground">Analyse des performances de recrutement</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass-card">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon className="h-5 w-5" />
            </div>
            <p className="text-2xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-xs text-primary mt-1">{s.trend}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-6 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" />Top postes demandés</h3>
          <div className="space-y-4">
            {topPosts.map((p, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">{p.poste}</span>
                  <span className="text-muted-foreground">{p.candidatures} candidatures</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${p.pourcentage}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-6 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" />Répartition par statut</h3>
          <div className="space-y-4">
            {[
              { label: "En cours d'analyse", value: 34, pct: 45, cls: "bg-primary" },
              { label: "Entretien planifié", value: 12, pct: 16, cls: "bg-yellow-500" },
              { label: "Acceptées", value: 18, pct: 24, cls: "bg-emerald-500" },
              { label: "Rejetées", value: 11, pct: 15, cls: "bg-destructive" },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">{s.label}</span>
                  <span className="text-muted-foreground">{s.value} ({s.pct}%)</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className={`h-full rounded-full ${s.cls}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
