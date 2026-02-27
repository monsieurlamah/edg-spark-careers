import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Eye, Edit, Trash2, Calendar, MapPin, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";

const appels = [
  { id: 1, title: "Fourniture de câbles haute tension 225kV", reference: "AO-2026-001", budget: "500M GNF", deadline: "25 Mars 2026", soumissions: 8, status: "open" },
  { id: 2, title: "Transformateurs de puissance 30kV/225kV", reference: "AO-2026-002", budget: "1.2Md GNF", deadline: "30 Mars 2026", soumissions: 3, status: "open" },
  { id: 3, title: "Fourniture de compteurs intelligents", reference: "AO-2026-003", budget: "800M GNF", deadline: "15 Avr 2026", soumissions: 12, status: "open" },
  { id: 4, title: "Poteaux en béton pour réseau BT", reference: "AO-2026-004", budget: "350M GNF", deadline: "20 Fév 2026", soumissions: 6, status: "closed" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  open: { label: "Ouvert", className: "bg-emerald-500/10 text-emerald-600" },
  closed: { label: "Clôturé", className: "bg-muted text-muted-foreground" },
};

export default function AdminAppelsOffresPage() {
  const [search, setSearch] = useState("");
  const filtered = appels.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Appels d'offres">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Appels d'offres</h1>
            <p className="text-sm text-muted-foreground">{appels.length} appels d'offres</p>
          </div>
          <Button variant="default" className="gap-2"><Plus className="h-4 w-4" />Nouvel appel d'offres</Button>
        </div>

        <div className="glass-card p-3 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-10 border-0 bg-muted/50" />
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((a, i) => {
            const st = statusConfig[a.status];
            return (
              <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="glass-card flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-sm">{a.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${st.className}`}>{st.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Réf : {a.reference}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{a.budget}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Limite : {a.deadline}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{a.soumissions} soumissions</span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
}
