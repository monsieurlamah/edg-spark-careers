import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(200,25%,12%,0.75) 0%, hsla(200,25%,12%,0.92) 100%)" }} />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/6 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Zap className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground/90">Plateforme officielle de recrutement EDG</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 text-primary-foreground"
          >
            Construisez l'avenir{" "}
            <span className="gradient-text">énergétique</span>{" "}
            de la Guinée
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed"
          >
            Rejoignez Électricité de Guinée et participez à la transformation énergétique du pays. 
            Des opportunités uniques pour les talents locaux et internationaux.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/offres">
              <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto">
                Voir les offres
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/candidature-spontanee">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto text-primary-foreground">
                Créer ma carrière
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { icon: Users, value: "5 000+", label: "Collaborateurs" },
              { icon: Globe, value: "33", label: "Préfectures desservies" },
              { icon: Zap, value: "60+", label: "Années d'expertise" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/50">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
