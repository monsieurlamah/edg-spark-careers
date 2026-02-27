import { motion } from "framer-motion";
import { Building2, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  "Créez votre compte fournisseur",
  "Complétez votre profil entreprise",
  "Téléchargez vos documents (RCCM, NIF...)",
  "Attendez la validation par EDG",
  "Accédez aux appels d'offres",
];

export default function InscriptionFournisseurPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Devenir fournisseur <span className="gradient-text">EDG</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Rejoignez le réseau de fournisseurs d'Électricité de Guinée et accédez aux appels d'offres
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card mb-10">
            <h2 className="font-bold text-foreground mb-4">Comment ça marche ?</h2>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary">{i + 1}</div>
                  <p className="text-sm text-foreground">{s}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="glass-card">
              <h2 className="text-xl font-bold text-foreground mb-6">Formulaire d'inscription</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Raison sociale *</label>
                  <Input placeholder="Nom de l'entreprise" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">RCCM / NIF *</label>
                  <Input placeholder="Numéro d'immatriculation" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Secteur d'activité *</label>
                  <Input placeholder="Ex: Équipements électriques" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Téléphone *</label>
                  <Input placeholder="+224 6XX XX XX XX" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                  <Input type="email" placeholder="contact@entreprise.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Adresse</label>
                  <Input placeholder="Ville, quartier" />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-1 block">Mot de passe *</label>
                <Input type="password" placeholder="Créez un mot de passe sécurisé" />
              </div>
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-1 block">Description de l'entreprise</label>
                <Textarea rows={3} placeholder="Décrivez brièvement votre entreprise et vos domaines d'expertise..." />
              </div>
              <Button variant="default" size="lg" className="w-full gap-2">
                S'inscrire comme fournisseur <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Déjà inscrit ? <Link to="/connexion" className="text-primary hover:underline">Connectez-vous</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
