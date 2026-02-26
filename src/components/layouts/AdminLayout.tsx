import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoEdg from "@/assets/logo-edg.png";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/admin" },
  { icon: Briefcase, label: "Offres d'emploi", href: "/admin/offres" },
  { icon: Users, label: "Candidatures", href: "/admin/candidatures" },
  { icon: FileText, label: "Candidatures spontanées", href: "/admin/spontanees" },
  { icon: BarChart3, label: "Statistiques", href: "/admin/statistiques" },
  { icon: Settings, label: "Paramètres", href: "/admin/parametres" },
];

export default function AdminLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
              <div className="glass-card text-center mb-6">
                <img src={logoEdg} alt="EDG" className="h-12 w-auto mx-auto mb-3" />
                <h3 className="font-bold text-foreground text-sm">Administration EDG</h3>
                <p className="text-xs text-muted-foreground">Espace recruteur</p>
              </div>

              {sidebarItems.map((item) => (
                <Link key={item.href} to={item.href}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeItem === item.label ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}

              <Link to="/connexion" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all mt-4">
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Link>
            </motion.aside>

            <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              {children}
            </motion.main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
