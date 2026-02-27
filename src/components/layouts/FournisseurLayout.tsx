import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, FileText, ShoppingCart, FolderOpen, Settings, LogOut, LayoutDashboard, Menu, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/espace-fournisseur" },
  { icon: Building2, label: "Mon profil", href: "/espace-fournisseur/profil" },
  { icon: ShoppingCart, label: "Appels d'offres", href: "/espace-fournisseur/appels-offres" },
  { icon: FileText, label: "Mes contrats", href: "/espace-fournisseur/contrats" },
  { icon: FolderOpen, label: "Documents", href: "/espace-fournisseur/documents" },
  { icon: Settings, label: "Paramètres", href: "/espace-fournisseur/parametres" },
];

const bottomNavItems = sidebarItems.slice(0, 5);

export default function FournisseurLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
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
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Entreprise ABC</h3>
                <p className="text-sm text-muted-foreground">fournisseur@email.com</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">Fournisseur agréé</span>
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

              <Link to="/connexion" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all">
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
