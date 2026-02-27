import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Eye, Edit, Trash2, Calendar, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";

const initialAppels = [
  { id: 1, title: "Fourniture de câbles haute tension 225kV", reference: "AO-2026-001", budget: "500M GNF", deadline: "25 Mars 2026", soumissions: 8, status: "open", description: "Fourniture et livraison de câbles haute tension 225kV pour le renforcement du réseau de transport. Les câbles doivent être conformes aux normes IEC 60840.", lotissement: "Lot unique", lieu: "Conakry - Siège EDG", caution: "5% du montant de la soumission" },
  { id: 2, title: "Transformateurs de puissance 30kV/225kV", reference: "AO-2026-002", budget: "1.2Md GNF", deadline: "30 Mars 2026", soumissions: 3, status: "open", description: "Acquisition de transformateurs de puissance 30kV/225kV pour les postes sources de Conakry et Kindia.", lotissement: "2 lots", lieu: "Conakry et Kindia", caution: "10% du montant" },
  { id: 3, title: "Fourniture de compteurs intelligents", reference: "AO-2026-003", budget: "800M GNF", deadline: "15 Avr 2026", soumissions: 12, status: "open", description: "Fourniture de compteurs intelligents (smart meters) pour le programme de modernisation du réseau de distribution.", lotissement: "3 lots par zone géographique", lieu: "National", caution: "3% du montant" },
  { id: 4, title: "Poteaux en béton pour réseau BT", reference: "AO-2026-004", budget: "350M GNF", deadline: "20 Fév 2026", soumissions: 6, status: "closed", description: "Fourniture de poteaux en béton armé pour l'extension du réseau basse tension dans la région de Labé.", lotissement: "Lot unique", lieu: "Labé", caution: "5% du montant" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  open: { label: "Ouvert", className: "bg-emerald-500/10 text-emerald-600" },
  closed: { label: "Clôturé", className: "bg-muted text-muted-foreground" },
};

export default function AdminAppelsOffresPage() {
  const [search, setSearch] = useState("");
  const [appels, setAppels] = useState(initialAppels);
  const [viewItem, setViewItem] = useState<typeof initialAppels[0] | null>(null);
  const [deleteItem, setDeleteItem] = useState<typeof initialAppels[0] | null>(null);

  const filtered = appels.filter(a => a.title.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = () => {
    if (deleteItem) {
      setAppels(prev => prev.filter(a => a.id !== deleteItem.id));
      toast.success(`Appel d'offres "${deleteItem.reference}" supprimé`);
      setDeleteItem(null);
    }
  };

  return (
    <AdminLayout activeItem="Appels d'offres">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Appels d'offres</h1>
            <p className="text-sm text-muted-foreground">{appels.length} appels d'offres</p>
          </div>
          <Button variant="default" className="gap-2 w-full sm:w-auto"><Plus className="h-4 w-4" />Nouvel appel d'offres</Button>
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
                className="glass-card"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
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
                <div className="flex gap-1 mt-3 pt-3 border-t border-border/50 sm:border-0 sm:mt-0 sm:pt-0 justify-end">
                  <Button variant="ghost" size="sm" onClick={() => setViewItem(a)}><Eye className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" onClick={() => toast.info("Formulaire d'édition à venir avec le backend")}><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setDeleteItem(a)}><Trash2 className="h-4 w-4" /></Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={viewItem?.title || ""}
        fields={viewItem ? [
          { label: "Référence", value: viewItem.reference },
          { label: "Budget estimé", value: viewItem.budget },
          { label: "Date limite", value: viewItem.deadline },
          { label: "Soumissions reçues", value: `${viewItem.soumissions}` },
          { label: "Statut", value: statusConfig[viewItem.status].label },
          { label: "Lieu de livraison", value: viewItem.lieu },
          { label: "Lotissement", value: viewItem.lotissement },
          { label: "Caution", value: viewItem.caution },
          { label: "Description", value: viewItem.description },
        ] : []}
      />

      <ConfirmDialog
        open={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Supprimer cet appel d'offres ?"
        description={`L'appel d'offres "${deleteItem?.reference}" sera définitivement supprimé.`}
      />
    </AdminLayout>
  );
}
