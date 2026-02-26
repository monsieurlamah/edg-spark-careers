import { motion } from "framer-motion";
import { Bell, CheckCircle, Clock, Briefcase, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import CandidatLayout from "@/components/layouts/CandidatLayout";

const notifications = [
  { id: 1, type: "success", title: "Candidature reçue", message: "Votre candidature pour Ingénieur Électricien Senior a bien été enregistrée.", date: "Il y a 2 heures", read: false },
  { id: 2, type: "info", title: "Entretien programmé", message: "Un entretien est planifié pour le poste Chef de Projet Énergie Renouvelable le 5 Mars 2026 à 10h.", date: "Il y a 1 jour", read: false },
  { id: 3, type: "warning", title: "Profil incomplet", message: "Complétez votre profil pour augmenter vos chances d'être sélectionné.", date: "Il y a 3 jours", read: true },
  { id: 4, type: "info", title: "Nouvelle offre disponible", message: "Une nouvelle offre Ingénieur Réseaux IT vient d'être publiée.", date: "Il y a 5 jours", read: true },
];

const iconMap: Record<string, any> = { success: CheckCircle, info: Info, warning: Clock };
const colorMap: Record<string, string> = { success: "text-primary bg-primary/10", info: "text-blue-500 bg-blue-500/10", warning: "text-orange-500 bg-orange-500/10" };

export default function NotificationsPage() {
  return (
    <CandidatLayout activeItem="Notifications">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground">Restez informé de l'avancement de vos candidatures</p>
        </div>
        <Button variant="outline" size="sm">Tout marquer comme lu</Button>
      </div>

      <div className="space-y-3">
        {notifications.map((n, i) => {
          const Icon = iconMap[n.type] || Info;
          return (
            <motion.div key={n.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className={`glass-card flex items-start gap-4 ${!n.read ? 'ring-1 ring-primary/20' : 'opacity-75'}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colorMap[n.type]}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-sm">{n.title}</h3>
                  {!n.read && <span className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{n.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </CandidatLayout>
  );
}
