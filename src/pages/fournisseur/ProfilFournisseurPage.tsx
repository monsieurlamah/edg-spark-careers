import { Building2, MapPin, Phone, Mail, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

export default function ProfilFournisseurPage() {
  return (
    <FournisseurLayout activeItem="Mon profil">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Profil entreprise</h1>
        <p className="text-sm text-muted-foreground mb-8">Gérez les informations de votre entreprise</p>

        <div className="space-y-6">
          <div className="glass-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Informations générales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Raison sociale</label>
                <Input defaultValue="Entreprise ABC SARL" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">RCCM / NIF</label>
                <Input defaultValue="GN.CKY.2020.B.12345" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Secteur d'activité</label>
                <Input defaultValue="Équipements électriques" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Année de création</label>
                <Input defaultValue="2015" />
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Coordonnées
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Adresse</label>
                <Input defaultValue="Quartier Almamya, Conakry" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Téléphone</label>
                <Input defaultValue="+224 620 00 00 00" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                <Input defaultValue="contact@entreprise-abc.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Site web</label>
                <Input defaultValue="www.entreprise-abc.com" />
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Description
            </h2>
            <Textarea rows={4} defaultValue="Entreprise spécialisée dans la fourniture d'équipements électriques haute et moyenne tension. Partenaire de confiance pour les projets d'infrastructure énergétique en Afrique de l'Ouest." />
          </div>

          <div className="flex justify-end">
            <Button variant="default" size="lg">Enregistrer les modifications</Button>
          </div>
        </div>
      </div>
    </FournisseurLayout>
  );
}
