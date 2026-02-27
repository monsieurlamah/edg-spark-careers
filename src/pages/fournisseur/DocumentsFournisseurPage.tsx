import { useState } from "react";
import { motion } from "framer-motion";
import { FolderOpen, Upload, FileText, Image, File, Download, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";
import DetailDialog from "@/components/DetailDialog";
import ConfirmDialog from "@/components/ConfirmDialog";
import { toast } from "sonner";

const initialDocuments = [
  { name: "RCCM - Certificat d'immatriculation.pdf", type: "pdf", size: "2.4 MB", date: "12 Jan 2026", category: "Légal", description: "Registre du Commerce et du Crédit Mobilier - Certificat officiel d'immatriculation de l'entreprise auprès du tribunal de commerce." },
  { name: "Attestation fiscale 2025.pdf", type: "pdf", size: "1.1 MB", date: "05 Jan 2026", category: "Fiscal", description: "Attestation de régularité fiscale délivrée par la Direction Nationale des Impôts pour l'exercice 2025." },
  { name: "Catalogue produits 2026.pdf", type: "pdf", size: "8.7 MB", date: "20 Déc 2025", category: "Commercial", description: "Catalogue complet des produits et services proposés par l'entreprise pour l'année 2026." },
  { name: "Références clients.docx", type: "doc", size: "450 KB", date: "15 Nov 2025", category: "Commercial", description: "Liste des principaux clients et références de projets réalisés dans le secteur de l'énergie." },
  { name: "Certificat ISO 9001.pdf", type: "pdf", size: "3.2 MB", date: "01 Oct 2025", category: "Qualité", description: "Certification ISO 9001:2015 pour le système de management de la qualité." },
  { name: "Logo entreprise.png", type: "image", size: "120 KB", date: "01 Sep 2025", category: "Identité", description: "Logo officiel de l'entreprise en haute résolution." },
];

const typeIcons: Record<string, typeof FileText> = { pdf: FileText, doc: File, image: Image };

export default function DocumentsFournisseurPage() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [viewItem, setViewItem] = useState<typeof initialDocuments[0] | null>(null);
  const [deleteItem, setDeleteItem] = useState<typeof initialDocuments[0] | null>(null);

  const handleDelete = () => {
    if (deleteItem) {
      setDocuments(prev => prev.filter(d => d.name !== deleteItem.name));
      toast.success(`Document "${deleteItem.name}" supprimé`);
      setDeleteItem(null);
    }
  };

  return (
    <FournisseurLayout activeItem="Documents">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Documents</h1>
            <p className="text-sm text-muted-foreground">Gérez vos documents administratifs et commerciaux</p>
          </div>
          <Button variant="default" className="gap-2 w-full sm:w-auto" onClick={() => toast.info("Upload de document à venir avec le backend")}><Upload className="h-4 w-4" />Ajouter un document</Button>
        </div>

        <div className="space-y-3">
          {documents.map((d, i) => {
            const Icon = typeIcons[d.type] || File;
            return (
              <motion.div key={d.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                <div className="glass-card">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-foreground truncate">{d.name}</p>
                      <p className="text-xs text-muted-foreground">{d.category} • {d.size} • {d.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3 pt-3 border-t border-border/50 sm:border-0 sm:mt-0 sm:pt-0 justify-end">
                    <Button variant="ghost" size="sm" onClick={() => setViewItem(d)}><Eye className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" onClick={() => toast.success(`"${d.name}" téléchargé`)}><Download className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive" onClick={() => setDeleteItem(d)}><Trash2 className="h-4 w-4" /></Button>
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
        title={viewItem?.name || ""}
        fields={viewItem ? [
          { label: "Type", value: viewItem.type.toUpperCase() },
          { label: "Catégorie", value: viewItem.category },
          { label: "Taille", value: viewItem.size },
          { label: "Date d'ajout", value: viewItem.date },
          { label: "Description", value: viewItem.description },
        ] : []}
        onDownload={() => toast.success(`"${viewItem?.name}" téléchargé`)}
      />

      <ConfirmDialog
        open={!!deleteItem}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        title="Supprimer ce document ?"
        description={`Le document "${deleteItem?.name}" sera définitivement supprimé.`}
      />
    </FournisseurLayout>
  );
}
