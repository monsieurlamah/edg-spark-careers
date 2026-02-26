import { motion } from "framer-motion";
import { Eye, Download, CheckCircle, XCircle, Clock, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";

const candidatures = [
  { id: 1, nom: "Aïssatou Bah", poste: "Ingénieur Électricien", date: "25 Fév 2026", statut: "en_cours", score: 92 },
  { id: 2, nom: "Ibrahima Sow", poste: "Technicien Maintenance", date: "24 Fév 2026", statut: "entretien", score: 87 },
  { id: 3, nom: "Fatou Camara", poste: "Chef de Projet", date: "23 Fév 2026", statut: "acceptee", score: 95 },
  { id: 4, nom: "Mohamed Keita", poste: "Analyste Financier", date: "22 Fév 2026", statut: "rejetee", score: 78 },
  { id: 5, nom: "Mariama Diallo", poste: "Responsable RH", date: "21 Fév 2026", statut: "en_cours", score: 85 },
];

const statusConfig: Record<string, { label: string; icon: any; cls: string }> = {
  en_cours: { label: "En cours", icon: Clock, cls: "bg-primary/10 text-primary" },
  entretien: { label: "Entretien", icon: CheckCircle, cls: "bg-yellow-500/10 text-yellow-600" },
  acceptee: { label: "Acceptée", icon: CheckCircle, cls: "bg-primary/10 text-primary" },
  rejetee: { label: "Rejetée", icon: XCircle, cls: "bg-destructive/10 text-destructive" },
};

export default function AdminCandidaturesPage() {
  const [search, setSearch] = useState("");
  const filtered = candidatures.filter(c => c.nom.toLowerCase().includes(search.toLowerCase()) || c.poste.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Candidatures">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Candidatures</h1>
          <p className="text-sm text-muted-foreground">{candidatures.length} candidatures reçues</p>
        </div>
        <Button variant="outline" className="gap-2"><Filter className="h-4 w-4" />Filtrer</Button>
      </div>

      <div className="glass-card p-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher par nom ou poste..." className="pl-10 border-0 bg-muted/50" />
        </div>
      </div>

      <div className="glass-card overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-muted-foreground border-b border-border">
              <th className="pb-3 font-medium">Candidat</th>
              <th className="pb-3 font-medium">Poste</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Score</th>
              <th className="pb-3 font-medium">Statut</th>
              <th className="pb-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const s = statusConfig[c.statut];
              return (
                <tr key={c.id} className="border-b border-border/50 last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                        {c.nom.split(" ").map(n => n[0]).join("")}
                      </div>
                      <span className="font-medium text-foreground text-sm">{c.nom}</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{c.poste}</td>
                  <td className="py-4 text-sm text-muted-foreground">{c.date}</td>
                  <td className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${c.score >= 90 ? "bg-primary/10 text-primary" : c.score >= 80 ? "bg-yellow-500/10 text-yellow-600" : "bg-muted text-muted-foreground"}`}>
                      {c.score}%
                    </span>
                  </td>
                  <td className="py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${s.cls}`}>
                      <s.icon className="h-3 w-3" />{s.label}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
