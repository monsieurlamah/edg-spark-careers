import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Search, Eye, CheckCircle, XCircle, MapPin, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";

const fournisseurs = [
  { id: 1, name: "Entreprise ABC SARL", sector: "Équipements électriques", location: "Conakry", phone: "+224 620 00 00 00", status: "approved", date: "12 Jan 2026", contracts: 3 },
  { id: 2, name: "GN Câbles International", sector: "Câblerie", location: "Conakry", phone: "+224 621 11 11 11", status: "approved", date: "05 Jan 2026", contracts: 5 },
  { id: 3, name: "SolTech Guinea", sector: "Énergie solaire", location: "Kankan", phone: "+224 622 22 22 22", status: "pending", date: "20 Fév 2026", contracts: 0 },
  { id: 4, name: "TransfoPlus", sector: "Transformateurs", location: "Conakry", phone: "+224 623 33 33 33", status: "approved", date: "10 Nov 2025", contracts: 8 },
  { id: 5, name: "BTP Guinée", sector: "Génie civil", location: "Labé", phone: "+224 624 44 44 44", status: "rejected", date: "01 Fév 2026", contracts: 0 },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  approved: { label: "Agréé", className: "bg-emerald-500/10 text-emerald-600" },
  pending: { label: "En attente", className: "bg-amber-500/10 text-amber-600" },
  rejected: { label: "Rejeté", className: "bg-destructive/10 text-destructive" },
};

export default function AdminFournisseursPage() {
  const [search, setSearch] = useState("");
  const filtered = fournisseurs.filter(f => f.name.toLowerCase().includes(search.toLowerCase()) || f.sector.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Fournisseurs">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Gestion des fournisseurs</h1>
            <p className="text-sm text-muted-foreground">{fournisseurs.length} fournisseurs enregistrés</p>
          </div>
        </div>

        <div className="glass-card p-3 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un fournisseur..." className="pl-10 border-0 bg-muted/50" />
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((f, i) => {
            const st = statusConfig[f.status];
            return (
              <motion.div key={f.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="glass-card flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-sm">{f.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${st.className}`}>{st.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>{f.sector}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{f.location}</span>
                    <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{f.phone}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />Inscrit le {f.date}</span>
                    <span>{f.contracts} contrat(s)</span>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                  {f.status === "pending" && (
                    <>
                      <Button variant="ghost" size="sm" className="text-emerald-600"><CheckCircle className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" className="text-destructive"><XCircle className="h-4 w-4" /></Button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
}
