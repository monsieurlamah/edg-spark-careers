import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Trash2, Eye, Search, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import OffreFormDialog from "@/components/admin/OffreFormDialog";
import { toast } from "sonner";

const initialOffres = [
  { id: 1, title: "Ingénieur Électricien Senior", location: "Conakry", type: "CDI", department: "Production", deadline: "15 Mars 2026", candidatures: 23, status: "active", description: "Nous recherchons un ingénieur électricien senior avec 5+ ans d'expérience dans le domaine de la production d'énergie.", requirements: "Diplôme en génie électrique, 5 ans d'expérience minimum, maîtrise des normes IEC." },
  { id: 2, title: "Technicien de Maintenance", location: "Kankan", type: "CDI", department: "Maintenance", deadline: "20 Mars 2026", candidatures: 15, status: "active", description: "Technicien qualifié pour la maintenance des équipements de production et de distribution électrique.", requirements: "BTS/DUT en électromécanique, 3 ans d'expérience en maintenance industrielle." },
  { id: 3, title: "Chef de Projet Énergie Renouvelable", location: "Conakry", type: "CDI", department: "R&D", deadline: "10 Mars 2026", candidatures: 31, status: "active", description: "Pilotage des projets d'énergie renouvelable pour EDG, incluant solaire et hydroélectrique.", requirements: "Master en énergie, certification PMP appréciée, 7 ans d'expérience." },
  { id: 4, title: "Analyste Financier", location: "Conakry", type: "CDD", department: "Finance", deadline: "25 Fév 2026", candidatures: 8, status: "expired", description: "Analyse financière des projets d'investissement et reporting aux parties prenantes.", requirements: "Master en finance, maîtrise d'Excel avancé et SAP." },
];

export default function AdminOffresPage() {
  const [search, setSearch] = useState("");
  const [offres, setOffres] = useState(initialOffres);
  const [viewItem, setViewItem] = useState<typeof initialOffres[0] | null>(null);
  const [deleteItem, setDeleteItem] = useState<typeof initialOffres[0] | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<typeof initialOffres[0] | null>(null);

  const filtered = offres.filter(o => o.title.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = () => {
    if (deleteItem) {
      setOffres(prev => prev.filter(o => o.id !== deleteItem.id));
      toast.success(`Offre "${deleteItem.title}" supprimée`);
      setDeleteItem(null);
    }
  };

  const handleSave = (data: any) => {
    if (editItem) {
      setOffres(prev => prev.map(o => o.id === editItem.id ? { ...o, ...data } : o));
      toast.success("Offre mise à jour");
    } else {
      setOffres(prev => [...prev, { ...data, id: Date.now(), candidatures: 0, status: "active" }]);
      toast.success("Offre créée avec succès");
    }
    setFormOpen(false);
    setEditItem(null);
  };

  return (
    <AdminLayout activeItem="Offres d'emploi">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-foreground">Gestion des offres</h1>
          <p className="text-sm text-muted-foreground">{offres.length} offres au total</p>
        </div>
        <Button variant="default" className="gap-2 w-full sm:w-auto" onClick={() => { setEditItem(null); setFormOpen(true); }}>
          <Plus className="h-4 w-4" />Nouvelle offre
        </Button>
      </div>

      <div className="glass-card p-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher une offre..." className="pl-10 border-0 bg-muted/50" />
        </div>
      </div>

      {/* Desktop table */}
      <div className="glass-card overflow-x-auto hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-muted-foreground border-b border-border">
              <th className="pb-3 font-medium">Titre</th>
              <th className="pb-3 font-medium">Lieu</th>
              <th className="pb-3 font-medium">Type</th>
              <th className="pb-3 font-medium">Limite</th>
              <th className="pb-3 font-medium">Candidatures</th>
              <th className="pb-3 font-medium">Statut</th>
              <th className="pb-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-border/50 last:border-0">
                <td className="py-4 text-sm font-medium text-foreground">{o.title}</td>
                <td className="py-4 text-sm text-muted-foreground">{o.location}</td>
                <td className="py-4 text-sm text-muted-foreground">{o.type}</td>
                <td className="py-4 text-sm text-muted-foreground">{o.deadline}</td>
                <td className="py-4 text-sm text-muted-foreground">{o.candidatures}</td>
                <td className="py-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${o.status === "active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
                    {o.status === "active" ? "Active" : "Expirée"}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm" onClick={() => setViewItem(o)}><Eye className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" onClick={() => { setEditItem(o); setFormOpen(true); }}><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setDeleteItem(o)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {filtered.map((o, i) => (
          <motion.div key={o.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="glass-card"
          >
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
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
            <div className="flex gap-1 mt-3 pt-3 border-t border-border/50 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setViewItem(o)}><Eye className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => { setEditItem(o); setFormOpen(true); }}><Edit className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setDeleteItem(o)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </motion.div>
        ))}
      </div>

      <OffreFormDialog
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditItem(null); }}
        onSave={handleSave}
        initialData={editItem}
      />

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={viewItem?.title || ""}
        fields={viewItem ? [
          { label: "Localisation", value: viewItem.location },
          { label: "Type de contrat", value: viewItem.type },
          { label: "Département", value: viewItem.department },
          { label: "Date limite", value: viewItem.deadline },
          { label: "Candidatures reçues", value: `${viewItem.candidatures}` },
          { label: "Statut", value: viewItem.status === "active" ? "Active" : "Expirée" },
          { label: "Description", value: viewItem.description },
          { label: "Exigences", value: viewItem.requirements },
        ] : []}
      />

      <ConfirmDialog
        open={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Supprimer cette offre ?"
        description={`L'offre "${deleteItem?.title}" sera définitivement supprimée.`}
      />
    </AdminLayout>
  );
}
