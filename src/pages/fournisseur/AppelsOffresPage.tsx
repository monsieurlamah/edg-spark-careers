import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Calendar, MapPin, DollarSign, Clock, ArrowRight, Search, CheckCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";
import DetailDialog from "@/components/DetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";

const initialAppels = [
  { id: 1, title: "Fourniture de câbles haute tension 225kV", reference: "AO-2026-001", location: "Conakry", budget: "500 000 000 GNF", deadline: "25 Mars 2026", status: "open", category: "Équipements", posted: "Il y a 3 jours", description: "Fourniture et livraison de câbles haute tension 225kV conformes aux normes IEC 60840.", lotissement: "Lot unique", caution: "5% du montant", documents: "Cahier des charges, spécifications techniques, formulaire de soumission" },
  { id: 2, title: "Transformateurs de puissance 30kV/225kV", reference: "AO-2026-002", location: "Kankan", budget: "1 200 000 000 GNF", deadline: "30 Mars 2026", status: "open", category: "Équipements", posted: "Il y a 1 jour", description: "Acquisition de transformateurs de puissance pour les postes sources.", lotissement: "2 lots", caution: "10% du montant", documents: "DAO complet, plans techniques, conditions générales" },
  { id: 3, title: "Fourniture de compteurs intelligents", reference: "AO-2026-003", location: "National", budget: "800 000 000 GNF", deadline: "15 Avr 2026", status: "open", category: "Comptage", posted: "Il y a 5 jours", description: "Compteurs intelligents pour la modernisation du réseau de distribution.", lotissement: "3 lots par zone", caution: "3% du montant", documents: "Spécifications fonctionnelles, protocoles de test, DAO" },
  { id: 4, title: "Poteaux en béton pour réseau BT", reference: "AO-2026-004", location: "Labé", budget: "350 000 000 GNF", deadline: "20 Fév 2026", status: "closed", category: "Infrastructure", posted: "Il y a 20 jours", description: "Poteaux en béton armé pour extension réseau BT.", lotissement: "Lot unique", caution: "5%", documents: "DAO, plans, spécifications" },
  { id: 5, title: "Maintenance préventive centrales thermiques", reference: "AO-2026-005", location: "Conakry", budget: "250 000 000 GNF", deadline: "10 Avr 2026", status: "submitted", category: "Services", posted: "Il y a 2 jours", description: "Services de maintenance préventive pour les centrales thermiques.", lotissement: "Lot unique", caution: "5%", documents: "Cahier des charges, planning prévisionnel" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  open: { label: "Ouvert", className: "bg-emerald-500/10 text-emerald-600" },
  submitted: { label: "Soumis", className: "bg-primary/10 text-primary" },
  closed: { label: "Clôturé", className: "bg-muted text-muted-foreground" },
};

export default function AppelsOffresPage() {
  const [search, setSearch] = useState("");
  const [appels, setAppels] = useState(initialAppels);
  const [viewItem, setViewItem] = useState<typeof initialAppels[0] | null>(null);
  const [submitItem, setSubmitItem] = useState<typeof initialAppels[0] | null>(null);

  const filtered = appels.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.reference.toLowerCase().includes(search.toLowerCase()));

  const handleSubmit = () => {
    if (submitItem) {
      setAppels(prev => prev.map(a => a.id === submitItem.id ? { ...a, status: "submitted" } : a));
      toast.success(`Soumission envoyée pour "${submitItem.reference}"`);
      setSubmitItem(null);
    }
  };

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
                <div className={`glass-card group ${a.status === "closed" ? "opacity-70" : ""}`}>
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
                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-border/50 justify-end">
                    <Button variant="ghost" size="sm" onClick={() => setViewItem(a)}><Eye className="h-4 w-4" /></Button>
                    {a.status === "open" && (
                      <Button variant="outline" size="sm" className="gap-2" onClick={() => setSubmitItem(a)}>
                        Soumissionner <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                    {a.status === "submitted" && (
                      <Button variant="ghost" size="sm" className="gap-2 text-primary" disabled>
                        <CheckCircle className="h-4 w-4" /> Soumis
                      </Button>
                    )}
                    {a.status === "closed" && (
                      <Button variant="ghost" size="sm" disabled>Clôturé</Button>
                    )}
                  </div>
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
          { label: "Catégorie", value: viewItem.category },
          { label: "Localisation", value: viewItem.location },
          { label: "Budget estimé", value: viewItem.budget },
          { label: "Date limite", value: viewItem.deadline },
          { label: "Statut", value: statusConfig[viewItem.status].label },
          { label: "Lotissement", value: viewItem.lotissement },
          { label: "Caution requise", value: viewItem.caution },
          { label: "Documents disponibles", value: viewItem.documents },
          { label: "Description", value: viewItem.description },
        ] : []}
        onDownload={() => toast.success("Cahier des charges téléchargé")}
      />

      <ConfirmDialog
        open={!!submitItem}
        onClose={() => setSubmitItem(null)}
        onConfirm={handleSubmit}
        title="Confirmer la soumission ?"
        description={`Vous allez soumettre votre offre pour "${submitItem?.reference}". Cette action sera enregistrée.`}
        confirmLabel="Soumettre"
        variant="default"
      />
    </FournisseurLayout>
  );
}
