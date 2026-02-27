import { LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings, Building2, ShoppingCart, FileSignature } from "lucide-react";
import DashboardLayout, { type SidebarItem } from "./DashboardLayout";

const sidebarItems: SidebarItem[] = [
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

export default function AdminLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  return (
    <DashboardLayout
      activeItem={activeItem}
      sidebarItems={sidebarItems}
      headerTitle="Administration EDG"
      headerSubtitle="Espace recruteur"
      headerIcon={LayoutDashboard}
      userName="Admin EDG"
      userEmail="admin@edg.gn"
    >
      {children}
    </DashboardLayout>
  );
}
