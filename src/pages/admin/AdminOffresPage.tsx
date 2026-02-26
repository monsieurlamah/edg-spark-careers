import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";

const offres = [
  { id: 1, title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", deadline: "15 Mars 2026", candidatures: 23, status: "active" },
  { id: 2, title: "Technicien de Maintenance", location: "Kankan", type: "CDI", department: "Maintenance", deadline: "20 Mars 2026", candidatures: 15, status: "active" },
  { id: 3, title: "Chef de Projet Énergie Renouvelable", location: "Conakry", type: "CDI", department: "R&D", deadline: "10 Mars 2026", candidatures: 31, status: "active" },
  { id: 4, title: "Analyste Financier", location: "Conakry", type: "CDD", department: "Finance", deadline: "25 Fév 2026", candidatures: 8, status: "expired" },
];

export default function AdminOffresPage() {
  const [search, setSearch] = useState("");
  const filtered = offres.filter(o => o.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Offres d'emploi">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Gestion des offres</h1>
          <p className="text-sm text-muted-foreground">{offres.length} offres au total</p>
        </div>
        <Button variant="default" className="gap-2"><Plus className="h-4 w-4" />Nouvelle offre</Button>
      </div>

      <div className="glass-card p-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une offre..." className="pl-10 border-0 bg-muted/50" />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((o, i) => (
          <motion.div key={o.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="glass-card flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground text-sm">{o.title}</h3>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${o.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
                  {o.status === "active" ? "Active" : "Expirée"}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{o.location}</span>
                <span>{o.type}</span>
                <span>{o.department}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Limite : {o.deadline}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" />{o.candidatures} candidatures</span>
              </div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
            </div>
          </motion.div>
        ))}
      </div>
    </AdminLayout>
  );
}
