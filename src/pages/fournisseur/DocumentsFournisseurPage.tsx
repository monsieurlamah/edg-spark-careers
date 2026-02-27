import { motion } from "framer-motion";
import { FolderOpen, Upload, FileText, Image, File, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

const documents = [
  { name: "RCCM - Certificat d'immatriculation.pdf", type: "pdf", size: "2.4 MB", date: "12 Jan 2026", category: "Légal" },
  { name: "Attestation fiscale 2025.pdf", type: "pdf", size: "1.1 MB", date: "05 Jan 2026", category: "Fiscal" },
  { name: "Catalogue produits 2026.pdf", type: "pdf", size: "8.7 MB", date: "20 Déc 2025", category: "Commercial" },
  { name: "Références clients.docx", type: "doc", size: "450 KB", date: "15 Nov 2025", category: "Commercial" },
  { name: "Certificat ISO 9001.pdf", type: "pdf", size: "3.2 MB", date: "01 Oct 2025", category: "Qualité" },
  { name: "Logo entreprise.png", type: "image", size: "120 KB", date: "01 Sep 2025", category: "Identité" },
];

const typeIcons: Record<string, typeof FileText> = { pdf: FileText, doc: File, image: Image };

export default function DocumentsFournisseurPage() {
  return (
    <FournisseurLayout activeItem="Documents">
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-foreground mb-1">Documents</h1>
            <p className="text-sm text-muted-foreground">Gérez vos documents administratifs et commerciaux</p>
          </div>
          <Button variant="default" className="gap-2"><Upload className="h-4 w-4" />Ajouter un document</Button>
        </div>

        <div className="space-y-3">
          {documents.map((d, i) => {
            const Icon = typeIcons[d.type] || File;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                <div className="glass-card flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground truncate">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.category} • {d.size} • {d.date}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="sm" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </FournisseurLayout>
  );
}
