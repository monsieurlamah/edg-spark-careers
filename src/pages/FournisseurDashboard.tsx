import { motion } from "framer-motion";
import { ShoppingCart, FileText, CheckCircle, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

const stats = [
  { label: "Appels d'offres disponibles", value: "5", icon: ShoppingCart, color: "text-primary" },
  { label: "Soumissions en cours", value: "3", icon: Clock, color: "text-amber-500" },
  { label: "Contrats actifs", value: "2", icon: FileText, color: "text-emerald-500" },
  { label: "Contrats terminés", value: "7", icon: CheckCircle, color: "text-muted-foreground" },
];

const recentActivity = [
  { text: "Soumission envoyée pour « Fourniture de câbles HT »", time: "Il y a 2 heures", type: "success" },
  { text: "Nouvel appel d'offres : Transformateurs 30kV", time: "Il y a 1 jour", type: "info" },
  { text: "Contrat #CT-2026-003 en attente de signature", time: "Il y a 2 jours", type: "warning" },
  { text: "Paiement reçu pour contrat #CT-2026-001", time: "Il y a 5 jours", type: "success" },
];

export default function FournisseurDashboard() {
  return (
    <FournisseurLayout activeItem="Tableau de bord">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Tableau de bord</h1>
        <p className="text-sm text-muted-foreground mb-8">Bienvenue dans votre espace fournisseur</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="glass-card text-center"
            >
              <s.icon className={`h-8 w-8 mx-auto mb-2 ${s.color}`} />
              <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass-card">
          <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Activité récente
          </h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-muted/30"
              >
                <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${
                  a.type === "success" ? "bg-emerald-500" : a.type === "warning" ? "bg-amber-500" : "bg-primary"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </FournisseurLayout>
  );
}
