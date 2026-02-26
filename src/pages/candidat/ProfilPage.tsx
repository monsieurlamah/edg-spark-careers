import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Save, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CandidatLayout from "@/components/layouts/CandidatLayout";

export default function ProfilPage() {
  const [form, setForm] = useState({
    nom: "Diallo", prenom: "Mamadou", email: "mamadou@email.com",
    telephone: "+224 621 00 00 00", ville: "Conakry", adresse: "Quartier Almamya",
    titre: "Ingénieur Électricien", experience: "5 ans", formation: "Master Génie Électrique",
    bio: "Ingénieur passionné par le secteur de l'énergie avec une solide expérience dans la production et la distribution électrique en Guinée."
  });

  return (
    <CandidatLayout activeItem="Mon profil">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-foreground">Mon profil</h1>
          <p className="text-sm text-muted-foreground">Gérez vos informations personnelles</p>
        </div>
        <Button variant="default" className="gap-2"><Save className="h-4 w-4" />Enregistrer</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Photo */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card text-center">
          <div className="relative w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <User className="h-12 w-12 text-primary" />
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h3 className="font-bold text-foreground">{form.prenom} {form.nom}</h3>
          <p className="text-sm text-muted-foreground">{form.titre}</p>
          <p className="text-xs text-muted-foreground mt-1">{form.ville}</p>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2 space-y-6">
          <div className="glass-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><User className="h-4 w-4 text-primary" />Informations personnelles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Nom</label><Input value={form.nom} onChange={e => setForm({...form, nom: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Prénom</label><Input value={form.prenom} onChange={e => setForm({...form, prenom: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label><Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Téléphone</label><Input value={form.telephone} onChange={e => setForm({...form, telephone: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Ville</label><Input value={form.ville} onChange={e => setForm({...form, ville: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Adresse</label><Input value={form.adresse} onChange={e => setForm({...form, adresse: e.target.value})} /></div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><Briefcase className="h-4 w-4 text-primary" />Expérience professionnelle</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Titre du poste actuel</label><Input value={form.titre} onChange={e => setForm({...form, titre: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Années d'expérience</label><Input value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} /></div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" />Formation & Bio</h3>
            <div className="space-y-4">
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Formation</label><Input value={form.formation} onChange={e => setForm({...form, formation: e.target.value})} /></div>
              <div><label className="text-xs font-medium text-muted-foreground mb-1 block">Biographie</label><Textarea rows={4} value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} /></div>
            </div>
          </div>
        </motion.div>
      </div>
    </CandidatLayout>
  );
}
