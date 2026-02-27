import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Search, Eye, CheckCircle, XCircle, MapPin, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";

const initialFournisseurs = [
  { id: 1, name: "Entreprise ABC SARL", sector: "Équipements électriques", location: "Conakry", phone: "+224 620 00 00 00", status: "approved", date: "12 Jan 2026", contracts: 3, email: "contact@abc-sarl.gn", rccm: "GN-CKY-2020-B-12345", description: "Fournisseur d'équipements électriques haute et moyenne tension pour les réseaux de distribution.", capital: "500 000 000 GNF", effectif: "45 employés" },
  { id: 2, name: "GN Câbles International", sector: "Câblerie", location: "Conakry", phone: "+224 621 11 11 11", status: "approved", date: "05 Jan 2026", contracts: 5, email: "info@gncables.com", rccm: "GN-CKY-2019-B-67890", description: "Fabricant et distributeur de câbles électriques pour réseaux HT/MT/BT.", capital: "1 200 000 000 GNF", effectif: "120 employés" },
  { id: 3, name: "SolTech Guinea", sector: "Énergie solaire", location: "Kankan", phone: "+224 622 22 22 22", status: "pending", date: "20 Fév 2026", contracts: 0, email: "info@soltech-gn.com", rccm: "GN-KKN-2024-B-11111", description: "Spécialiste en solutions solaires photovoltaïques pour installations résidentielles et industrielles.", capital: "200 000 000 GNF", effectif: "15 employés" },
  { id: 4, name: "TransfoPlus", sector: "Transformateurs", location: "Conakry", phone: "+224 623 33 33 33", status: "approved", date: "10 Nov 2025", contracts: 8, email: "commercial@transfoplus.gn", rccm: "GN-CKY-2018-B-22222", description: "Fabrication et maintenance de transformateurs de puissance et de distribution.", capital: "2 000 000 000 GNF", effectif: "200 employés" },
  { id: 5, name: "BTP Guinée", sector: "Génie civil", location: "Labé", phone: "+224 624 44 44 44", status: "rejected", date: "01 Fév 2026", contracts: 0, email: "contact@btpguinee.gn", rccm: "GN-LBE-2023-B-33333", description: "Travaux de génie civil pour infrastructure électrique : poteaux, fondations, canalisations.", capital: "800 000 000 GNF", effectif: "80 employés" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  approved: { label: "Agréé", className: "bg-emerald-500/10 text-emerald-600" },
  pending: { label: "En attente", className: "bg-amber-500/10 text-amber-600" },
  rejected: { label: "Rejeté", className: "bg-destructive/10 text-destructive" },
};

export default function AdminFournisseursPage() {
  const [search, setSearch] = useState("");
  const [fournisseurs, setFournisseurs] = useState(initialFournisseurs);
  const [viewItem, setViewItem] = useState<typeof initialFournisseurs[0] | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ id: number; action: "approve" | "reject" } | null>(null);

  const filtered = fournisseurs.filter(f => f.name.toLowerCase().includes(search.toLowerCase()) || f.sector.toLowerCase().includes(search.toLowerCase()));

  const handleAction = () => {
    if (!confirmAction) return;
    const newStatus = confirmAction.action === "approve" ? "approved" : "rejected";
    setFournisseurs(prev => prev.map(f => f.id === confirmAction.id ? { ...f, status: newStatus } : f));
    toast.success(confirmAction.action === "approve" ? "Fournisseur agréé avec succès" : "Fournisseur rejeté");
    setConfirmAction(null);
  };

  return (
    <AdminLayout activeItem="Fournisseurs">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
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
                className="glass-card"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
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
                </div>
                <div className="flex gap-1 pt-3 border-t border-border/50 justify-end">
                  <Button variant="ghost" size="sm" onClick={() => setViewItem(f)}><Eye className="h-4 w-4" /></Button>
                  {f.status === "pending" && (
                    <>
                      <Button variant="ghost" size="sm" className="text-emerald-600" onClick={() => setConfirmAction({ id: f.id, action: "approve" })}><CheckCircle className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setConfirmAction({ id: f.id, action: "reject" })}><XCircle className="h-4 w-4" /></Button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={viewItem?.name || ""}
        fields={viewItem ? [
          { label: "Secteur d'activité", value: viewItem.sector },
          { label: "Localisation", value: viewItem.location },
          { label: "Téléphone", value: viewItem.phone },
          { label: "Email", value: viewItem.email },
          { label: "RCCM", value: viewItem.rccm },
          { label: "Capital social", value: viewItem.capital },
          { label: "Effectif", value: viewItem.effectif },
          { label: "Statut", value: statusConfig[viewItem.status].label },
          { label: "Date d'inscription", value: viewItem.date },
          { label: "Contrats", value: `${viewItem.contracts} contrat(s)` },
          { label: "Description", value: viewItem.description },
        ] : []}
      />

      <ConfirmDialog
        open={!!confirmAction}
        onClose={() => setConfirmAction(null)}
        onConfirm={handleAction}
        title={confirmAction?.action === "approve" ? "Agréer ce fournisseur ?" : "Rejeter ce fournisseur ?"}
        description={confirmAction?.action === "approve" ? "Ce fournisseur sera agréé et pourra participer aux appels d'offres." : "Ce fournisseur sera rejeté et ne pourra pas participer aux appels d'offres."}
        confirmLabel={confirmAction?.action === "approve" ? "Agréer" : "Rejeter"}
        variant={confirmAction?.action === "approve" ? "default" : "destructive"}
      />
    </AdminLayout>
  );
}
