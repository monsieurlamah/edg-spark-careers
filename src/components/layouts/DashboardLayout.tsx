import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import ThemeToggle from "@/components/ThemeToggle";
import logoEdg from "@/assets/logo-edg.png";

export interface SidebarItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeItem: string;
  sidebarItems: SidebarItem[];
  headerTitle: string;
  headerSubtitle: string;
  headerIcon: React.ElementType;
  userName?: string;
  userEmail?: string;
  userBadge?: string;
}

export default function DashboardLayout({
  children,
  activeItem,
  sidebarItems,
  headerTitle,
  headerSubtitle,
  headerIcon: HeaderIcon,
  userName = "Utilisateur",
  userEmail = "user@email.com",
  userBadge,
}: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Close mobile drawer on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const sidebarWidth = collapsed ? "w-[72px]" : "w-[260px]";

  const SidebarContent = ({ showLabels = true }: { showLabels?: boolean }) => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center gap-3 px-4 py-5 border-b border-sidebar-border ${collapsed && !isMobile ? "justify-center" : ""}`}>
        <img src={logoEdg} alt="EDG" className="h-9 w-auto shrink-0" />
        {showLabels && (
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-extrabold tracking-tight text-sidebar-foreground">
              RECRU<span className="text-sidebar-primary">EDG</span>
            </span>
            <span className="text-[10px] text-sidebar-foreground/50 -mt-0.5">Électricité de Guinée</span>
          </div>
        )}
      </div>

      {/* User card */}
      <div className={`px-3 py-4 border-b border-sidebar-border ${collapsed && !isMobile ? "flex justify-center" : ""}`}>
        {showLabels ? (
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-sidebar-primary/10 flex items-center justify-center shrink-0">
              <HeaderIcon className="h-5 w-5 text-sidebar-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-sidebar-foreground truncate">{userName}</p>
              <p className="text-xs text-sidebar-foreground/50 truncate">{userEmail}</p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-sidebar-primary/10 flex items-center justify-center mx-auto">
            <HeaderIcon className="h-5 w-5 text-sidebar-primary" />
          </div>
        )}
        {userBadge && showLabels && (
          <span className="inline-block mt-2 ml-2 px-3 py-1 rounded-full bg-sidebar-primary/10 text-sidebar-primary text-xs font-bold">
            {userBadge}
          </span>
        )}
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-3 py-3 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <Link
              key={item.href}
              to={item.href}
              title={collapsed && !isMobile ? item.label : undefined}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-primary/10 text-sidebar-primary shadow-sm"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              } ${collapsed && !isMobile ? "justify-center" : ""}`}
            >
              <item.icon className={`h-[18px] w-[18px] shrink-0 transition-colors ${isActive ? "text-sidebar-primary" : "text-sidebar-foreground/50 group-hover:text-sidebar-accent-foreground"}`} />
              {showLabels && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-3 border-t border-sidebar-border space-y-1">
        <div className={`flex ${collapsed && !isMobile ? "justify-center" : "px-3"}`}>
          <ThemeToggle />
        </div>
        <Link
          to="/connexion"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all ${
            collapsed && !isMobile ? "justify-center" : ""
          }`}
          title={collapsed && !isMobile ? "Déconnexion" : undefined}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {showLabels && <span>Déconnexion</span>}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col fixed top-0 left-0 bottom-0 z-40 ${sidebarWidth} transition-all duration-300 ease-in-out bg-sidebar-background border-r border-sidebar-border`}
        style={{ backdropFilter: "blur(20px) saturate(180%)" }}
      >
        <SidebarContent showLabels={!collapsed} />
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-sidebar-background border border-sidebar-border flex items-center justify-center shadow-sm hover:bg-sidebar-accent transition-colors z-50"
        >
          {collapsed ? <ChevronRight className="h-3 w-3 text-sidebar-foreground/70" /> : <ChevronLeft className="h-3 w-3 text-sidebar-foreground/70" />}
        </button>
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 z-[60] w-[280px] bg-sidebar-background border-r border-sidebar-border lg:hidden shadow-2xl"
            >
              <SidebarContent showLabels />
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
              >
                <X className="h-5 w-5 text-sidebar-foreground/70" />
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${collapsed ? "lg:ml-[72px]" : "lg:ml-[260px]"}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-14 flex items-center gap-3 px-4 sm:px-6 border-b border-border bg-background/80 backdrop-blur-xl">
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-bold text-foreground truncate">{headerTitle}</h1>
            <p className="text-xs text-muted-foreground truncate hidden sm:block">{headerSubtitle}</p>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
