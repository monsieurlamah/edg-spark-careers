import { motion } from "framer-motion";
import { Eye, Download, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";

const spontanees = [
  { id: 1, nom: "Oumar Barry", domaine: "Génie Électrique", ville: "Conakry", date: "24 Fév 2026", experience: "7 ans" },
  { id: 2, nom: "Kadiatou Sylla", domaine: "Finance", ville: "Conakry", date: "22 Fév 2026", experience: "4 ans" },
  { id: 3, nom: "Alpha Bah", domaine: "Informatique", ville: "Kankan", date: "20 Fév 2026", experience: "3 ans" },
  { id: 4, nom: "Fatoumata Condé", domaine: "Ressources Humaines", ville: "Conakry", date: "18 Fév 2026", experience: "6 ans" },
];

export default function AdminSpontaneesPage() {
  const [search, setSearch] = useState("");
  const filtered = spontanees.filter(s => s.nom.toLowerCase().includes(search.toLowerCase()) || s.domaine.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Candidatures spontanées">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-foreground">Candidatures spontanées</h1>
        <p className="text-sm text-muted-foreground">{spontanees.length} candidatures spontanées reçues</p>
      </div>

      <div className="glass-card p-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher..." className="pl-10 border-0 bg-muted/50" />
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="glass-card flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
              {s.nom.split(" ").map(n => n[0]).join("")}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground text-sm">{s.nom}</h3>
              <p className="text-xs text-muted-foreground">{s.domaine} · {s.experience} · {s.ville} · {s.date}</p>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Mail className="h-4 w-4" /></Button>
            </div>
          </motion.div>
        ))}
      </div>
    </AdminLayout>
  );
}
