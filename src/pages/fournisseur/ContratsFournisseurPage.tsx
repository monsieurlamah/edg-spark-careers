import { motion } from "framer-motion";
import { FileText, Calendar, DollarSign, CheckCircle, Clock, AlertTriangle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

const contrats = [
  { id: "CT-2026-001", title: "Fourniture de câbles MT - Lot 1", montant: "180 000 000 GNF", debut: "01 Jan 2026", fin: "30 Juin 2026", status: "active", progress: 65 },
  { id: "CT-2026-002", title: "Compteurs monophasés - Phase 2", montant: "320 000 000 GNF", debut: "15 Fév 2026", fin: "15 Août 2026", status: "active", progress: 30 },
  { id: "CT-2025-015", title: "Transformateurs 10kV - Conakry", montant: "450 000 000 GNF", debut: "01 Mars 2025", fin: "30 Nov 2025", status: "completed", progress: 100 },
  { id: "CT-2026-003", title: "Poteaux béton - Réseau BT Labé", montant: "95 000 000 GNF", debut: "01 Avr 2026", fin: "30 Sep 2026", status: "pending", progress: 0 },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: "En cours", className: "bg-emerald-500/10 text-emerald-600" },
  completed: { label: "Terminé", className: "bg-muted text-muted-foreground" },
  pending: { label: "En attente", className: "bg-amber-500/10 text-amber-600" },
};

export default function ContratsFournisseurPage() {
  return (
    <FournisseurLayout activeItem="Mes contrats">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Mes contrats</h1>
        <p className="text-sm text-muted-foreground mb-8">Suivi de vos contrats avec EDG</p>

        <div className="space-y-4">
          {contrats.map((c, i) => {
            const st = statusConfig[c.status];
            return (
              <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="glass-card">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${st.className}`}>{st.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">Réf : {c.id}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5" />{c.montant}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{c.debut} — {c.fin}</span>
                      </div>
                      {/* Progress bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${c.status === "completed" ? "bg-muted-foreground" : "bg-primary"}`}
                          style={{ width: `${c.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{c.progress}% d'exécution</p>
                    </div>
                    <div className="shrink-0 flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" /> Contrat PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </FournisseurLayout>
  );
}
