import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Send, Building2, Info } from "lucide-react";

const navItems = [
  { icon: Home, label: "Accueil", href: "/" },
  { icon: Briefcase, label: "Offres", href: "/offres" },
  { icon: Send, label: "Candidature", href: "/candidature-spontanee" },
  { icon: Building2, label: "Fournisseurs", href: "/inscription-fournisseur" },
  { icon: Info, label: "À propos", href: "/a-propos" },
];

// Routes that already have their own bottom nav (dashboard layouts)
const excludedPrefixes = ["/espace-candidat", "/espace-fournisseur", "/admin"];

export default function MobileBottomNav() {
  const location = useLocation();
  const isExcluded = excludedPrefixes.some((p) => location.pathname.startsWith(p));

  if (isExcluded) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around px-1 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg min-w-0 flex-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium truncate max-w-full">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
