import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Globe, Award, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(200,25%,12%,0.80) 0%, hsla(200,25%,8%,0.95) 100%)" }} />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl" />
        <motion.div animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/6 w-56 h-56 rounded-full bg-secondary/8 blur-3xl" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-8 border border-primary/20"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary-foreground/90">Plateforme officielle de recrutement EDG</span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] mb-6 text-primary-foreground tracking-tight"
          >
            Construisez l'avenir{" "}
            <span className="gradient-text">énergétique</span>{" "}
            <br className="hidden sm:block" />
            de la Guinée
          </motion.h1>

          {/* Description */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/65 max-w-2xl mb-10 leading-relaxed font-medium"
          >
            Rejoignez Électricité de Guinée et participez à la transformation énergétique du pays. 
            Des opportunités uniques pour les talents locaux et internationaux.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/offres">
              <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto shadow-xl shadow-primary/20">
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 sm:gap-10 mt-16"
          >
            {[
              { icon: Users, value: "5 000+", label: "Collaborateurs" },
              { icon: Globe, value: "33", label: "Préfectures desservies" },
              { icon: Zap, value: "60+", label: "Années d'expertise" },
              { icon: Award, value: "N°1", label: "Employeur énergie en Guinée" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/15 backdrop-blur-sm border border-primary/10 flex items-center justify-center">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/45 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
