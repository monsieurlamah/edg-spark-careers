import { Settings, Bell, Lock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import FournisseurLayout from "@/components/layouts/FournisseurLayout";

export default function ParametresFournisseurPage() {
  return (
    <FournisseurLayout activeItem="Paramètres">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground mb-1">Paramètres</h1>
        <p className="text-sm text-muted-foreground mb-8">Gérez votre compte fournisseur</p>

        <div className="space-y-6">
          <div className="glass-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              Sécurité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Mot de passe actuel</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nouveau mot de passe</label>
                <Input type="password" placeholder="••••••••" />
              </div>
            </div>
            <Button variant="outline" className="mt-4">Changer le mot de passe</Button>
          </div>

          <div className="glass-card">
            <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </h2>
            <div className="space-y-4">
              {[
                "Nouveaux appels d'offres",
                "Résultats des soumissions",
                "Mises à jour des contrats",
                "Rappels de deadlines",
              ].map(n => (
                <div key={n} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{n}</span>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FournisseurLayout>
  );
}
