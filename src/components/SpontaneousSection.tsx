import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

export default function SpontaneousSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-3xl gradient-gold-bg flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Heart className="h-9 w-9 text-secondary-foreground" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Même sans offre disponible,{" "}
            <span className="gradient-text">votre talent compte</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Soumettez votre candidature spontanée et laissez-nous découvrir vos compétences. 
            Nous vous contacterons dès qu'une opportunité correspondra à votre profil.
          </p>

          <Link to="/candidature-spontanee">
            <Button variant="hero" size="xl" className="gap-3">
              Soumettre ma carrière
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
