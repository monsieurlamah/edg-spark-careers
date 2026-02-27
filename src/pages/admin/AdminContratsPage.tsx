import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Calendar, DollarSign, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import { toast } from "sonner";

const contrats = [
  { id: "CT-2026-001", title: "Câbles MT - Lot 1", fournisseur: "Entreprise ABC SARL", montant: "180M GNF", debut: "01 Jan 2026", fin: "30 Juin 2026", status: "active", progress: 65, description: "Fourniture de câbles moyenne tension pour le réseau de distribution de Conakry. Livraison en 3 tranches.", objet: "Câbles MT 33kV - 50km", contact: "M. Camara - +224 620 00 00 00" },
  { id: "CT-2026-002", title: "Compteurs monophasés - Phase 2", fournisseur: "GN Câbles International", montant: "320M GNF", debut: "15 Fév 2026", fin: "15 Août 2026", status: "active", progress: 30, description: "Fourniture de 10 000 compteurs monophasés intelligents pour le programme de modernisation.", objet: "Compteurs smart - 10 000 unités", contact: "Mme Diallo - +224 621 11 11 11" },
  { id: "CT-2025-015", title: "Transformateurs 10kV", fournisseur: "TransfoPlus", montant: "450M GNF", debut: "01 Mars 2025", fin: "30 Nov 2025", status: "completed", progress: 100, description: "Fourniture et installation de 15 transformateurs 10kV/400V pour les postes de distribution.", objet: "Transformateurs 10kV/400V - 15 unités", contact: "M. Barry - +224 623 33 33 33" },
  { id: "CT-2026-003", title: "Poteaux béton - Labé", fournisseur: "BTP Guinée", montant: "95M GNF", debut: "01 Avr 2026", fin: "30 Sep 2026", status: "pending", progress: 0, description: "Fabrication et livraison de 500 poteaux béton armé pour l'extension du réseau BT à Labé.", objet: "Poteaux béton 9m et 12m - 500 unités", contact: "M. Diallo - +224 624 44 44 44" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: "En cours", className: "bg-emerald-500/10 text-emerald-600" },
  completed: { label: "Terminé", className: "bg-muted text-muted-foreground" },
  pending: { label: "En attente", className: "bg-amber-500/10 text-amber-600" },
};

export default function AdminContratsPage() {
  const [search, setSearch] = useState("");
  const [viewItem, setViewItem] = useState<typeof contrats[0] | null>(null);

  const filtered = contrats.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.fournisseur.toLowerCase().includes(search.toLowerCase()));

  return (
    <AdminLayout activeItem="Contrats">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Gestion des contrats</h1>
        <p className="text-sm text-muted-foreground mb-8">{contrats.length} contrats enregistrés</p>

        <div className="glass-card p-3 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher par titre ou fournisseur..." className="pl-10 border-0 bg-muted/50" />
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((c, i) => {
            const st = statusConfig[c.status];
            return (
              <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="glass-card"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-sm">{c.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${st.className}`}>{st.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3">
                    <span>Réf : {c.id}</span>
                    <span className="flex items-center gap-1"><Building2 className="h-3 w-3" />{c.fournisseur}</span>
                    <span className="flex items-center gap-1"><DollarSign className="h-3 w-3" />{c.montant}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{c.debut} — {c.fin}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className={`h-2 rounded-full ${c.status === "completed" ? "bg-muted-foreground" : "bg-primary"}`} style={{ width: `${c.progress}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{c.progress}%</p>
                </div>
                <div className="flex gap-1 mt-3 pt-3 border-t border-border/50 justify-end">
                  <Button variant="ghost" size="sm" onClick={() => setViewItem(c)}><Eye className="h-4 w-4" /></Button>
                  <Button variant="outline" size="sm" onClick={() => toast.success("Contrat PDF téléchargé")}>PDF</Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={`Contrat ${viewItem?.id || ""}`}
        fields={viewItem ? [
          { label: "Titre", value: viewItem.title },
          { label: "Fournisseur", value: viewItem.fournisseur },
          { label: "Contact", value: viewItem.contact },
          { label: "Objet", value: viewItem.objet },
          { label: "Montant", value: viewItem.montant },
          { label: "Période", value: `${viewItem.debut} — ${viewItem.fin}` },
          { label: "Progression", value: `${viewItem.progress}%` },
          { label: "Statut", value: statusConfig[viewItem.status].label },
          { label: "Description", value: viewItem.description },
        ] : []}
        onDownload={() => toast.success("Contrat PDF téléchargé")}
      />
    </AdminLayout>
  );
}
