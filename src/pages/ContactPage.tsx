import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Nous <span className="gradient-text">contacter</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Une question ? Notre équipe est à votre écoute
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Formulaire */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="text-xl font-bold text-foreground mb-2">Envoyer un message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nom complet</Label>
                  <Input className="h-12 rounded-xl" placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" className="h-12 rounded-xl" placeholder="vous@exemple.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Sujet</Label>
                <Input className="h-12 rounded-xl" placeholder="Objet de votre message" />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea className="min-h-[140px] rounded-xl" placeholder="Décrivez votre demande..." />
              </div>
              <Button variant="default" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Envoyer
              </Button>
            </motion.form>

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {[
                { icon: MapPin, title: "Adresse", lines: ["Siège d'EDG", "Conakry, République de Guinée"] },
                { icon: Phone, title: "Téléphone", lines: ["+224 621 00 00 00", "+224 622 00 00 00"] },
                { icon: Mail, title: "Email", lines: ["recrutement@edg.gn", "contact@edg.gn"] },
                { icon: Clock, title: "Horaires", lines: ["Lundi - Vendredi : 8h00 - 17h00", "Samedi - Dimanche : Fermé"] },
              ].map((item, i) => (
                <div key={i} className="glass-card flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
