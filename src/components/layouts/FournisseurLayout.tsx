import { Building2, FileText, ShoppingCart, FolderOpen, Settings, LayoutDashboard } from "lucide-react";
import DashboardLayout, { type SidebarItem } from "./DashboardLayout";

const sidebarItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/espace-fournisseur" },
  { icon: Building2, label: "Mon profil", href: "/espace-fournisseur/profil" },
  { icon: ShoppingCart, label: "Appels d'offres", href: "/espace-fournisseur/appels-offres" },
  { icon: FileText, label: "Mes contrats", href: "/espace-fournisseur/contrats" },
  { icon: FolderOpen, label: "Documents", href: "/espace-fournisseur/documents" },
  { icon: Settings, label: "Paramètres", href: "/espace-fournisseur/parametres" },
];

export default function FournisseurLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  return (
    <DashboardLayout
      activeItem={activeItem}
      sidebarItems={sidebarItems}
      headerTitle="Espace Fournisseur"
      headerSubtitle="Gérez vos contrats et soumissions"
      headerIcon={Building2}
      userName="Entreprise ABC"
      userEmail="fournisseur@email.com"
      userBadge="Fournisseur agréé"
    >
      {children}
    </DashboardLayout>
  );
}
