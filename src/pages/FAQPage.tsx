import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Comment créer un compte sur RECRUEDG ?",
    answer: "Cliquez sur le bouton « S'inscrire » dans le menu principal. Remplissez le formulaire avec vos informations personnelles (nom, prénom, email, téléphone) et créez un mot de passe sécurisé. Votre compte sera activé immédiatement."
  },
  {
    question: "Comment postuler à une offre d'emploi ?",
    answer: "Après avoir créé votre compte et vous être connecté, rendez-vous sur la page « Offres ». Cliquez sur l'offre qui vous intéresse puis sur « Postuler ». Vous devrez compléter votre profil et joindre votre CV au format PDF."
  },
  {
    question: "Qu'est-ce qu'une candidature spontanée ?",
    answer: "Si aucune offre ne correspond à votre profil, vous pouvez soumettre une candidature spontanée via la page dédiée. Votre profil sera conservé dans notre base de données et consulté lorsque de nouvelles opportunités se présentent."
  },
  {
    question: "Comment suivre l'état de ma candidature ?",
    answer: "Connectez-vous à votre espace candidat via le bouton « Connexion ». Vous y trouverez le tableau de bord avec l'état de toutes vos candidatures : en cours, entretien programmé, acceptée ou rejetée."
  },
  {
    question: "Quels formats de fichiers sont acceptés pour le CV ?",
    answer: "Nous acceptons les fichiers au format PDF uniquement. La taille maximale autorisée est de 5 Mo. Assurez-vous que votre CV est à jour et lisible."
  },
  {
    question: "Comment modifier mon profil ?",
    answer: "Connectez-vous à votre espace candidat, puis accédez à la section « Mon profil ». Vous pouvez y modifier vos informations personnelles, votre expérience et mettre à jour votre CV."
  },
  {
    question: "Mes données personnelles sont-elles protégées ?",
    answer: "Oui, vos données sont strictement confidentielles et ne sont utilisées que dans le cadre du processus de recrutement d'EDG. Consultez notre politique de confidentialité pour plus de détails."
  },
  {
    question: "Comment contacter le service recrutement d'EDG ?",
    answer: "Vous pouvez nous contacter par email à recrutement@edg.gn ou par téléphone au +224 621 00 00 00. Notre équipe est disponible du lundi au vendredi de 8h à 17h."
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Questions <span className="gradient-text">fréquentes</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="glass-card border-0 px-6">
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-center mt-12 glass-card">
            <h3 className="text-lg font-bold text-foreground mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-sm text-muted-foreground mb-4">N'hésitez pas à contacter notre équipe</p>
            <Link to="/contact">
              <Button variant="default" className="gap-2">
                <Mail className="h-4 w-4" />
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
