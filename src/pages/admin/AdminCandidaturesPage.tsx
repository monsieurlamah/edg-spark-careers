import { motion } from "framer-motion";
import { Eye, Download, CheckCircle, XCircle, Clock, Filter, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import { toast } from "sonner";

const initialCandidatures = [
  { id: 1, nom: "Aïssatou Bah", poste: "Ingénieur Électricien", date: "25 Fév 2026", statut: "en_cours", score: 92, email: "aissatou.bah@email.com", tel: "+224 620 12 34 56", experience: "8 ans en génie électrique, spécialisation haute tension", formation: "Master Génie Électrique - Université de Conakry", motivation: "Passionnée par le développement énergétique de la Guinée, je souhaite contribuer à la modernisation du réseau électrique national." },
  { id: 2, nom: "Ibrahima Sow", poste: "Technicien Maintenance", date: "24 Fév 2026", statut: "entretien", score: 87, email: "ibrahima.sow@email.com", tel: "+224 621 22 33 44", experience: "5 ans en maintenance industrielle", formation: "BTS Électromécanique - ISAV Faranah", motivation: "Fort de mon expérience en maintenance industrielle, je suis prêt à relever les défis techniques d'EDG." },
  { id: 3, nom: "Fatou Camara", poste: "Chef de Projet", date: "23 Fév 2026", statut: "acceptee", score: 95, email: "fatou.camara@email.com", tel: "+224 622 33 44 55", experience: "10 ans en gestion de projets énergie", formation: "MBA - ISG Paris, Ingénieur ENSAM", motivation: "Mon parcours international me permet d'apporter une vision stratégique aux projets d'énergie renouvelable." },
  { id: 4, nom: "Mohamed Keita", poste: "Analyste Financier", date: "22 Fév 2026", statut: "rejetee", score: 78, email: "mohamed.keita@email.com", tel: "+224 623 44 55 66", experience: "3 ans en analyse financière", formation: "Licence Finance - UGANC", motivation: "Je souhaite mettre mes compétences analytiques au service d'EDG." },
  { id: 5, nom: "Mariama Diallo", poste: "Responsable RH", date: "21 Fév 2026", statut: "en_cours", score: 85, email: "mariama.diallo@email.com", tel: "+224 624 55 66 77", experience: "6 ans en ressources humaines", formation: "Master RH - Université Sonfonia", motivation: "Expérience confirmée en gestion du capital humain dans le secteur énergétique." },
];

const statusConfig: Record<string, { label: string; icon: any; cls: string }> = {
  en_cours: { label: "En cours", icon: Clock, cls: "bg-primary/10 text-primary" },
  entretien: { label: "Entretien", icon: CheckCircle, cls: "bg-yellow-500/10 text-yellow-600" },
  acceptee: { label: "Acceptée", icon: CheckCircle, cls: "bg-primary/10 text-primary" },
  rejetee: { label: "Rejetée", icon: XCircle, cls: "bg-destructive/10 text-destructive" },
};

export default function AdminCandidaturesPage() {
  const [search, setSearch] = useState("");
  const [candidatures, setCandidatures] = useState(initialCandidatures);
  const [viewItem, setViewItem] = useState<typeof initialCandidatures[0] | null>(null);

  const filtered = candidatures.filter(c => c.nom.toLowerCase().includes(search.toLowerCase()) || c.poste.toLowerCase().includes(search.toLowerCase()));

  const handleStatusChange = (id: number, newStatus: string) => {
    setCandidatures(prev => prev.map(c => c.id === id ? { ...c, statut: newStatus } : c));
    const labels: Record<string, string> = { acceptee: "acceptée", rejetee: "rejetée", entretien: "convoquée en entretien" };
    toast.success(`Candidature ${labels[newStatus] || "mise à jour"}`);
  };

  return (
    <AdminLayout activeItem="Candidatures">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Candidatures</h1>
          <p className="text-sm text-muted-foreground">{candidatures.length} candidatures reçues</p>
        </div>
        <Button variant="outline" className="gap-2 w-full sm:w-auto"><Filter className="h-4 w-4" />Filtrer</Button>
      </div>

      <div className="glass-card p-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher par nom ou poste..." className="pl-10 border-0 bg-muted/50" />
        </div>
      </div>

      {/* Desktop table */}
      <div className="glass-card overflow-x-auto hidden md:block">
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
            {filtered.map((c) => {
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
                      <Button variant="ghost" size="sm" onClick={() => setViewItem(c)}><Eye className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm" onClick={() => toast.success("CV téléchargé")}><Download className="h-4 w-4" /></Button>
                      {c.statut === "en_cours" && (
                        <>
                          <Button variant="ghost" size="sm" className="text-emerald-600" onClick={() => handleStatusChange(c.id, "acceptee")}><CheckCircle className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="sm" className="text-destructive" onClick={() => handleStatusChange(c.id, "rejetee")}><XCircle className="h-4 w-4" /></Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {filtered.map((c, i) => {
          const s = statusConfig[c.statut];
          return (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {c.nom.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-sm">{c.nom}</h3>
                  <p className="text-xs text-muted-foreground">{c.poste} · {c.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${c.score >= 90 ? "bg-primary/10 text-primary" : c.score >= 80 ? "bg-yellow-500/10 text-yellow-600" : "bg-muted text-muted-foreground"}`}>
                  {c.score}%
                </span>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${s.cls}`}>
                  <s.icon className="h-3 w-3" />{s.label}
                </span>
              </div>
              <div className="flex gap-1 pt-3 border-t border-border/50 justify-end">
                <Button variant="ghost" size="sm" onClick={() => setViewItem(c)}><Eye className="h-4 w-4" /></Button>
                <Button variant="ghost" size="sm" onClick={() => toast.success("CV téléchargé")}><Download className="h-4 w-4" /></Button>
                {c.statut === "en_cours" && (
                  <>
                    <Button variant="ghost" size="sm" className="text-emerald-600" onClick={() => handleStatusChange(c.id, "acceptee")}><CheckCircle className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => handleStatusChange(c.id, "rejetee")}><XCircle className="h-4 w-4" /></Button>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={`Candidature - ${viewItem?.nom || ""}`}
        fields={viewItem ? [
          { label: "Nom complet", value: viewItem.nom },
          { label: "Email", value: viewItem.email },
          { label: "Téléphone", value: viewItem.tel },
          { label: "Poste visé", value: viewItem.poste },
          { label: "Date de candidature", value: viewItem.date },
          { label: "Score", value: `${viewItem.score}%` },
          { label: "Statut", value: statusConfig[viewItem.statut].label },
          { label: "Formation", value: viewItem.formation },
          { label: "Expérience", value: viewItem.experience },
          { label: "Motivation", value: viewItem.motivation },
        ] : []}
        onDownload={() => toast.success("CV téléchargé")}
      />
    </AdminLayout>
  );
}
