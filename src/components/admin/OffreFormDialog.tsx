import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save } from "lucide-react";

interface OffreData {
  id?: number;
  title: string;
  location: string;
  type: string;
  department: string;
  deadline: string;
  description: string;
  requirements: string;
  status?: string;
}

interface OffreFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: OffreData) => void;
  initialData?: OffreData | null;
}

const emptyForm: OffreData = {
  title: "", location: "", type: "CDI", department: "", deadline: "", description: "", requirements: ""
};

export default function OffreFormDialog({ open, onClose, onSave, initialData }: OffreFormDialogProps) {
  const [form, setForm] = useState<OffreData>(emptyForm);
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
            {isEdit ? "Modifier l'offre" : "Nouvelle offre d'emploi"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Titre du poste *</label>
            <Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required placeholder="Ex: Ingénieur Électricien Senior" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Localisation *</label>
              <Input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} required placeholder="Ex: Conakry" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Type de contrat *</label>
              <Select value={form.type} onValueChange={v => setForm({ ...form, type: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="CDI">CDI</SelectItem>
                  <SelectItem value="CDD">CDD</SelectItem>
                  <SelectItem value="Stage">Stage</SelectItem>
                  <SelectItem value="Intérim">Intérim</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Département *</label>
              <Input value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} required placeholder="Ex: Production" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Date limite *</label>
              <Input value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} required placeholder="Ex: 15 Mars 2026" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Description *</label>
            <Textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required rows={3} placeholder="Décrivez le poste..." />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Exigences *</label>
            <Textarea value={form.requirements} onChange={e => setForm({ ...form, requirements: e.target.value })} required rows={3} placeholder="Qualifications requises..." />
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">Annuler</Button>
            <Button type="submit" variant="default" className="w-full sm:w-auto gap-2">
              <Save className="h-4 w-4" />{isEdit ? "Mettre à jour" : "Créer l'offre"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
