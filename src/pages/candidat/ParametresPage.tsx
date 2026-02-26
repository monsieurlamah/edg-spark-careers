import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Lock, Bell, Globe, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import CandidatLayout from "@/components/layouts/CandidatLayout";

export default function ParametresPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <CandidatLayout activeItem="Paramètres">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Paramètres</h1>
          <p className="text-sm text-muted-foreground">Gérez votre compte et vos préférences</p>
        </div>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Security */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Lock className="h-4 w-4 text-primary" />Sécurité</h3>
          <div className="space-y-4">
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Mot de passe actuel</label><Input type="password" placeholder="••••••••" /></div>
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Nouveau mot de passe</label><Input type="password" placeholder="••••••••" /></div>
            <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Confirmer le mot de passe</label><Input type="password" placeholder="••••••••" /></div>
            <Button variant="default" className="gap-2"><Save className="h-4 w-4" />Changer le mot de passe</Button>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Bell className="h-4 w-4 text-primary" />Notifications</h3>
          <div className="space-y-4">
            {[
              { label: "Notifications par email", desc: "Recevez les mises à jour par email", value: emailNotif, set: setEmailNotif },
              { label: "Notifications SMS", desc: "Recevez les alertes par SMS", value: smsNotif, set: setSmsNotif },
              { label: "Newsletter EDG", desc: "Recevez les dernières actualités d'EDG", value: newsletter, set: setNewsletter },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div><p className="text-sm font-medium text-foreground">{item.label}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                <Switch checked={item.value} onCheckedChange={item.set} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Language */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Globe className="h-4 w-4 text-primary" />Langue</h3>
          <p className="text-sm text-muted-foreground">Français (Guinée) — Langue par défaut</p>
        </motion.div>

        {/* Danger zone */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card border border-destructive/20">
          <h3 className="font-bold text-destructive mb-2 flex items-center gap-2"><Trash2 className="h-4 w-4" />Zone de danger</h3>
          <p className="text-sm text-muted-foreground mb-4">La suppression de votre compte est irréversible. Toutes vos candidatures seront supprimées.</p>
          <Button variant="destructive" size="sm">Supprimer mon compte</Button>
        </motion.div>
      </div>
    </CandidatLayout>
  );
}
