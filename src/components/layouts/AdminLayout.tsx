import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings, LogOut, Building2, ShoppingCart, FileSignature, Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoEdg from "@/assets/logo-edg.png";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/admin" },
  { icon: Briefcase, label: "Offres d'emploi", href: "/admin/offres" },
  { icon: Users, label: "Candidatures", href: "/admin/candidatures" },
  { icon: FileText, label: "Candidatures spontanées", href: "/admin/spontanees" },
  { icon: Building2, label: "Fournisseurs", href: "/admin/fournisseurs" },
  { icon: ShoppingCart, label: "Appels d'offres", href: "/admin/appels-offres" },
  { icon: FileSignature, label: "Contrats", href: "/admin/contrats" },
  { icon: BarChart3, label: "Statistiques", href: "/admin/statistiques" },
  { icon: Settings, label: "Paramètres", href: "/admin/parametres" },
];

// Bottom nav shows first 5 items on mobile
const bottomNavItems = sidebarItems.slice(0, 5);

export default function AdminLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-24 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Desktop sidebar */}
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="hidden lg:block space-y-2">
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

      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="flex items-center justify-around px-2 py-2">
          {bottomNavItems.map((item) => (
            <Link key={item.href} to={item.href}
              className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg min-w-0 flex-1 transition-colors ${
                activeItem === item.label ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium truncate max-w-full">{item.label.split(" ")[0]}</span>
            </Link>
          ))}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg min-w-0 flex-1 text-muted-foreground transition-colors"
          >
            <Menu className="h-5 w-5" />
            <span className="text-[10px] font-medium">Plus</span>
          </button>
        </div>
      </div>

      {/* Mobile expanded menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="absolute bottom-0 left-0 right-0 bg-background border-t border-border rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground">Menu</h3>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link key={item.href} to={item.href} onClick={() => setMobileMenuOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeItem === item.label ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
              <Link to="/connexion" onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all"
              >
                <LogOut className="h-4 w-4" />
                Déconnexion
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}
