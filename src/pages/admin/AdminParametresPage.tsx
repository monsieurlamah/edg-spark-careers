import { motion } from "framer-motion";
import { Settings, Mail, Bell, Shield, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function AdminParametresPage() {
  const [autoNotify, setAutoNotify] = useState(true);
  const [emailCopy, setEmailCopy] = useState(false);

  return (
    <AdminLayout activeItem="Paramètres">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-foreground">Paramètres</h1>
        <p className="text-sm text-muted-foreground">Configuration de l'espace administrateur</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />Email de contact</h3>
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Email principal</label><Input defaultValue="recrutement@edg.gn" /></div>
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Email secondaire</label><Input defaultValue="rh@edg.gn" /></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Bell className="h-4 w-4 text-primary" />Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div><p className="text-sm font-medium text-foreground">Notification automatique</p><p className="text-xs text-muted-foreground">Notifier les candidats automatiquement</p></div>
              <Switch checked={autoNotify} onCheckedChange={setAutoNotify} />
            </div>
            <div className="flex items-center justify-between py-2">
              <div><p className="text-sm font-medium text-foreground">Copie email</p><p className="text-xs text-muted-foreground">Recevoir une copie de chaque candidature</p></div>
              <Switch checked={emailCopy} onCheckedChange={setEmailCopy} />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Sécurité</h3>
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Mot de passe administrateur</label><Input type="password" placeholder="••••••••" /></div>
            <Button variant="default" className="gap-2"><Save className="h-4 w-4" />Enregistrer</Button>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
}
