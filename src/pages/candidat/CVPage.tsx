import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Upload, Download, Trash2, Eye, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CandidatLayout from "@/components/layouts/CandidatLayout";

const mockCVs = [
  { id: 1, name: "CV_Mamadou_Diallo_2026.pdf", size: "1.2 Mo", date: "20 Fév 2026", active: true },
  { id: 2, name: "CV_Mamadou_Diallo_2025.pdf", size: "980 Ko", date: "15 Jan 2025", active: false },
];

export default function CVPage() {
  const [cvs] = useState(mockCVs);

  return (
    <CandidatLayout activeItem="Mon CV">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Mon CV</h1>
          <p className="text-sm text-muted-foreground">Gérez vos documents</p>
        </div>
      </div>

      {/* Upload zone */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card mb-8">
        <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-bold text-foreground mb-2">Déposer votre CV ici</h3>
          <p className="text-sm text-muted-foreground mb-4">Format PDF uniquement – 5 Mo maximum</p>
          <Button variant="default" className="gap-2"><Upload className="h-4 w-4" />Parcourir</Button>
        </div>
      </motion.div>

      {/* CV list */}
      <div className="space-y-4">
        {cvs.map((cv, i) => (
          <motion.div key={cv.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-foreground text-sm truncate">{cv.name}</h3>
                {cv.active && <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center gap-1"><CheckCircle className="h-3 w-3" />Actif</span>}
              </div>
              <p className="text-xs text-muted-foreground">{cv.size} · Ajouté le {cv.date}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm"><Eye className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
            </div>
          </motion.div>
        ))}
      </div>
    </CandidatLayout>
  );
}
