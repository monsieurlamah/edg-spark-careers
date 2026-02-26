import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { User, FileText, Briefcase, Bell, Settings, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sidebarItems = [
  { icon: Briefcase, label: "Mes candidatures", href: "/espace-candidat" },
  { icon: User, label: "Mon profil", href: "/espace-candidat/profil" },
  { icon: FileText, label: "Mon CV", href: "/espace-candidat/cv" },
  { icon: Bell, label: "Notifications", href: "/espace-candidat/notifications" },
  { icon: Settings, label: "Paramètres", href: "/espace-candidat/parametres" },
];

export default function CandidatLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-2">
              <div className="glass-card text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Mamadou Diallo</h3>
                <p className="text-sm text-muted-foreground">mamadou@email.com</p>
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
      <Footer />
    </div>
  );
}
