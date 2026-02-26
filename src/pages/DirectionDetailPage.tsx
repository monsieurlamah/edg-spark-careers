import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Users, Briefcase, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { departmentsData } from "@/components/DepartmentsSection";

export default function DirectionDetailPage() {
  const { slug } = useParams();
  const dept = departmentsData.find(d => d.slug === slug);

  if (!dept) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-28 pb-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Direction introuvable</h1>
          <Link to="/"><Button variant="default">Retour à l'accueil</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = dept.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Hero */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card mb-10 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-10 w-10 lg:h-12 lg:w-12 text-primary" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
                  Direction <span className="gradient-text">{dept.name}</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{dept.desc}</p>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {dept.effectif} collaborateurs
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {dept.localisation}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Mission */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Notre mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{dept.mission}</p>
              </motion.div>

              {/* Objectifs */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Objectifs stratégiques</h2>
                </div>
                <div className="space-y-4">
                  {dept.objectifs.map((obj, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">{i + 1}</span>
                      </div>
                      <p className="text-foreground font-medium text-[15px] leading-relaxed">{obj}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Postes types */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Postes types</h2>
                </div>
                <div className="space-y-2">
                  {dept.postes.map((poste, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-primary/5 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">{poste}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="glass-card text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Rejoindre cette direction</h3>
                  <p className="text-sm text-muted-foreground mb-6">Consultez les offres disponibles dans la direction {dept.name}</p>
                  <Link to="/offres">
                    <Button variant="default" className="w-full gap-2 mb-3">
                      Voir les offres
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/candidature-spontanee">
                    <Button variant="outline" className="w-full gap-2">
                      Candidature spontanée
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Info card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card">
                <h3 className="font-bold text-foreground mb-4 text-sm">En bref</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Direction</span>
                    <span className="font-semibold text-foreground">{dept.name}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Effectif</span>
                    <span className="font-semibold text-foreground">{dept.effectif}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Localisation</span>
                    <span className="font-semibold text-foreground text-right max-w-[60%]">{dept.localisation}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Postes types</span>
                    <span className="font-semibold text-foreground">{dept.postes.length} métiers</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Other departments */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-extrabold text-foreground mb-8 text-center">Découvrir les autres directions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {departmentsData.filter(d => d.slug !== slug).slice(0, 4).map((d) => (
                <Link key={d.slug} to={`/directions/${d.slug}`} className="glass-card text-center group py-4 px-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                    <d.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{d.name}</h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
