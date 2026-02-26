import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CandidatureSpontaneePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="w-20 h-20 rounded-3xl gradient-gold-bg flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="h-9 w-9 text-secondary-foreground" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Candidature <span className="gradient-text">spontanée</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Même sans offre disponible, soumettez votre profil et nous vous contacterons
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Prénom</Label>
                <Input className="h-12 rounded-xl" placeholder="Votre prénom" />
              </div>
              <div className="space-y-2">
                <Label>Nom</Label>
                <Input className="h-12 rounded-xl" placeholder="Votre nom" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" className="h-12 rounded-xl" placeholder="vous@exemple.com" />
            </div>

            <div className="space-y-2">
              <Label>Téléphone</Label>
              <Input className="h-12 rounded-xl" placeholder="+224 6XX XX XX XX" />
            </div>

            <div className="space-y-2">
              <Label>Domaine de compétence</Label>
              <Input className="h-12 rounded-xl" placeholder="Ex: Ingénierie électrique, Finance, IT..." />
            </div>

            <div className="space-y-2">
              <Label>Lettre de motivation</Label>
              <Textarea className="min-h-[120px] rounded-xl" placeholder="Décrivez votre parcours et vos motivations pour rejoindre EDG..." />
            </div>

            <div className="space-y-2">
              <Label>CV (PDF)</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
                <p className="text-sm text-muted-foreground">Glissez votre CV ici ou cliquez pour parcourir</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, max 5 Mo</p>
              </div>
            </div>

            <Button variant="hero" size="lg" className="w-full gap-2">
              <Send className="h-4 w-4" />
              Soumettre ma candidature
            </Button>
          </motion.form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
