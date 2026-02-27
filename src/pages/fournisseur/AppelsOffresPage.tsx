import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Calendar, MapPin, DollarSign, Clock, ArrowRight, Search, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

const appels = [
  { id: 1, title: "Fourniture de câbles haute tension 225kV", reference: "AO-2026-001", location: "Conakry", budget: "500 000 000 GNF", deadline: "25 Mars 2026", status: "open", category: "Équipements", posted: "Il y a 3 jours" },
  { id: 2, title: "Transformateurs de puissance 30kV/225kV", reference: "AO-2026-002", location: "Kankan", budget: "1 200 000 000 GNF", deadline: "30 Mars 2026", status: "open", category: "Équipements", posted: "Il y a 1 jour" },
  { id: 3, title: "Fourniture de compteurs intelligents", reference: "AO-2026-003", location: "National", budget: "800 000 000 GNF", deadline: "15 Avr 2026", status: "open", category: "Comptage", posted: "Il y a 5 jours" },
  { id: 4, title: "Poteaux en béton pour réseau BT", reference: "AO-2026-004", location: "Labé", budget: "350 000 000 GNF", deadline: "20 Fév 2026", status: "closed", category: "Infrastructure", posted: "Il y a 20 jours" },
  { id: 5, title: "Maintenance préventive centrales thermiques", reference: "AO-2026-005", location: "Conakry", budget: "250 000 000 GNF", deadline: "10 Avr 2026", status: "submitted", category: "Services", posted: "Il y a 2 jours" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  open: { label: "Ouvert", className: "bg-emerald-500/10 text-emerald-600" },
  submitted: { label: "Soumis", className: "bg-primary/10 text-primary" },
  closed: { label: "Clôturé", className: "bg-muted text-muted-foreground" },
};

export default function AppelsOffresPage() {
  const [search, setSearch] = useState("");
  const filtered = appels.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.reference.toLowerCase().includes(search.toLowerCase()));

  return (
    <FournisseurLayout activeItem="Appels d'offres">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Appels d'offres</h1>
        <p className="text-sm text-muted-foreground mb-6">Consultez et répondez aux appels d'offres d'EDG</p>

        <div className="glass-card p-3 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher par titre ou référence..." className="pl-10 border-0 bg-muted/50" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{filtered.length} appel(s) d'offres</p>

        <div className="space-y-4">
          {filtered.map((a, i) => {
            const st = statusConfig[a.status];
            return (
              <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className={`glass-card flex flex-col lg:flex-row lg:items-center gap-4 group ${a.status === "closed" ? "opacity-70" : ""}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{a.title}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${st.className}`}>{st.label}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">Réf : {a.reference} • {a.category}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{a.location}</span>
                      <span className="flex items-center gap-1.5"><DollarSign className="h-3.5 w-3.5" />{a.budget}</span>
                      <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{a.posted}</span>
                      <span className="flex items-center gap-1.5 font-semibold text-destructive/80"><Calendar className="h-3.5 w-3.5" />Limite : {a.deadline}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    {a.status === "open" && (
                      <Button variant="outline" className="gap-2 w-full lg:w-auto">
                        Soumissionner <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                    {a.status === "submitted" && (
                      <Button variant="ghost" className="gap-2 w-full lg:w-auto text-primary" disabled>
                        <CheckCircle className="h-4 w-4" /> Soumis
                      </Button>
                    )}
                    {a.status === "closed" && (
                      <Button variant="ghost" className="gap-2 w-full lg:w-auto" disabled>Clôturé</Button>
                    )}
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
