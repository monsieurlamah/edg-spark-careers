import { motion } from "framer-motion";
import { Eye, Download, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/layouts/AdminLayout";
import DetailDialog from "@/components/DetailDialog";
import { toast } from "sonner";

const spontanees = [
  { id: 1, nom: "Oumar Barry", domaine: "Génie Électrique", ville: "Conakry", date: "24 Fév 2026", experience: "7 ans", email: "oumar.barry@email.com", tel: "+224 620 11 22 33", formation: "Ingénieur ESIE Conakry", motivation: "Passionné par le secteur énergétique, je souhaite apporter mon expertise en génie électrique pour améliorer le réseau de distribution.", competences: "AutoCAD, ETAP, protection des réseaux HT/MT" },
  { id: 2, nom: "Kadiatou Sylla", domaine: "Finance", ville: "Conakry", date: "22 Fév 2026", experience: "4 ans", email: "kadiatou.sylla@email.com", tel: "+224 621 22 33 44", formation: "Master Finance UGANC", motivation: "Mon expérience en audit et contrôle de gestion serait un atout pour la direction financière d'EDG.", competences: "SAP, Excel avancé, audit financier, contrôle budgétaire" },
  { id: 3, nom: "Alpha Bah", domaine: "Informatique", ville: "Kankan", date: "20 Fév 2026", experience: "3 ans", email: "alpha.bah@email.com", tel: "+224 622 33 44 55", formation: "Licence Informatique UGLC-SC", motivation: "Développeur full-stack, je souhaite contribuer à la digitalisation des processus d'EDG.", competences: "React, Node.js, PostgreSQL, Python" },
  { id: 4, nom: "Fatoumata Condé", domaine: "Ressources Humaines", ville: "Conakry", date: "18 Fév 2026", experience: "6 ans", email: "fatoumata.conde@email.com", tel: "+224 623 44 55 66", formation: "Master GRH - Université Sonfonia", motivation: "Spécialiste en développement des compétences, je veux accompagner la transformation RH d'EDG.", competences: "Gestion des talents, formation, GPEC, droit du travail" },
];

export default function AdminSpontaneesPage() {
  const [search, setSearch] = useState("");
  const [viewItem, setViewItem] = useState<typeof spontanees[0] | null>(null);

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
            className="glass-card"
          >
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                {s.nom.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-sm">{s.nom}</h3>
                <p className="text-xs text-muted-foreground">{s.domaine} · {s.experience} · {s.ville} · {s.date}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-3 pt-3 border-t border-border/50 sm:border-0 sm:mt-0 sm:pt-0 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setViewItem(s)}><Eye className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => toast.success("CV téléchargé")}><Download className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" onClick={() => toast.success(`Email envoyé à ${s.email}`)}><Mail className="h-4 w-4" /></Button>
            </div>
          </motion.div>
        ))}
      </div>

      <DetailDialog
        open={!!viewItem}
        onClose={() => setViewItem(null)}
        title={`Candidature spontanée - ${viewItem?.nom || ""}`}
        fields={viewItem ? [
          { label: "Nom complet", value: viewItem.nom },
          { label: "Email", value: viewItem.email },
          { label: "Téléphone", value: viewItem.tel },
          { label: "Domaine", value: viewItem.domaine },
          { label: "Ville", value: viewItem.ville },
          { label: "Expérience", value: viewItem.experience },
          { label: "Formation", value: viewItem.formation },
          { label: "Compétences", value: viewItem.competences },
          { label: "Motivation", value: viewItem.motivation },
        ] : []}
        onDownload={() => toast.success("CV téléchargé")}
      />
    </AdminLayout>
  );
}
