import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";

interface AppelOffreData {
  id?: number;
  title: string;
  reference: string;
  budget: string;
  deadline: string;
  description: string;
  lotissement: string;
  lieu: string;
  caution: string;
}

interface AppelOffreFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: AppelOffreData) => void;
  initialData?: AppelOffreData | null;
}

const emptyForm: AppelOffreData = {
  title: "", reference: "", budget: "", deadline: "", description: "", lotissement: "", lieu: "", caution: ""
};

export default function AppelOffreFormDialog({ open, onClose, onSave, initialData }: AppelOffreFormDialogProps) {
  const [form, setForm] = useState<AppelOffreData>(emptyForm);
  const isEdit = !!initialData?.id;

  useEffect(() => {
    if (open) setForm(initialData || emptyForm);
  }, [open, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-extrabold">
            {isEdit ? "Modifier l'appel d'offres" : "Nouvel appel d'offres"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Titre *</label>
            <Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required placeholder="Ex: Fourniture de câbles haute tension" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Référence *</label>
              <Input value={form.reference} onChange={e => setForm({ ...form, reference: e.target.value })} required placeholder="Ex: AO-2026-005" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Budget estimé *</label>
              <Input value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} required placeholder="Ex: 500M GNF" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Date limite *</label>
              <Input value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} required placeholder="Ex: 25 Mars 2026" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Lieu de livraison *</label>
              <Input value={form.lieu} onChange={e => setForm({ ...form, lieu: e.target.value })} required placeholder="Ex: Conakry" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Lotissement</label>
              <Input value={form.lotissement} onChange={e => setForm({ ...form, lotissement: e.target.value })} placeholder="Ex: Lot unique" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Caution</label>
              <Input value={form.caution} onChange={e => setForm({ ...form, caution: e.target.value })} placeholder="Ex: 5% du montant" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Description *</label>
            <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required rows={4} placeholder="Décrivez l'appel d'offres..." />
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">Annuler</Button>
            <Button type="submit" variant="default" className="w-full sm:w-auto gap-2">
              <Save className="h-4 w-4" />{isEdit ? "Mettre à jour" : "Créer l'appel d'offres"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
