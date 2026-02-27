import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface DetailField {
  label: string;
  value: string;
}

interface DetailDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  fields: DetailField[];
  onDownload?: () => void;
  children?: React.ReactNode;
}

export default function DetailDialog({ open, onClose, title, fields, onDownload, children }: DetailDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg font-extrabold">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          {fields.map((f, i) => (
            <div key={i}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{f.label}</p>
              <p className="text-sm text-foreground mt-0.5">{f.value}</p>
            </div>
          ))}
          {children}
          {onDownload && (
            <Button variant="outline" className="gap-2 w-full mt-4" onClick={onDownload}>
              <Download className="h-4 w-4" /> Télécharger le document
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
