import { User, FileText, Briefcase, Bell, Settings } from "lucide-react";
import DashboardLayout, { type SidebarItem } from "./DashboardLayout";

const sidebarItems: SidebarItem[] = [
  { icon: Briefcase, label: "Mes candidatures", href: "/espace-candidat" },
  { icon: User, label: "Mon profil", href: "/espace-candidat/profil" },
  { icon: FileText, label: "Mon CV", href: "/espace-candidat/cv" },
  { icon: Bell, label: "Notifications", href: "/espace-candidat/notifications" },
  { icon: Settings, label: "Paramètres", href: "/espace-candidat/parametres" },
];

export default function CandidatLayout({ children, activeItem }: { children: React.ReactNode; activeItem: string }) {
  return (
    <DashboardLayout
      activeItem={activeItem}
      sidebarItems={sidebarItems}
      headerTitle="Espace Candidat"
      headerSubtitle="Gérez vos candidatures"
      headerIcon={User}
      userName="Mamadou Diallo"
      userEmail="mamadou@email.com"
    >
      {children}
    </DashboardLayout>
  );
}
