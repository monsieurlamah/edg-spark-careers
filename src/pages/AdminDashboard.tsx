import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings, LogOut,
  Plus, Eye, Trash2, Edit, Filter, Download, TrendingUp, UserCheck, Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoEdg from "@/assets/logo-edg.png";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", active: true },
  { icon: Briefcase, label: "Offres d'emploi", active: false },
  { icon: Users, label: "Candidatures", active: false },
  { icon: FileText, label: "Candidatures spontanées", active: false },
  { icon: BarChart3, label: "Statistiques", active: false },
  { icon: Settings, label: "Paramètres", active: false },
];

const recentApplications = [
  { name: "Aïssatou Bah", poste: "Ingénieur Électricien", date: "25 Fév 2026", score: 92 },
  { name: "Ibrahima Sow", poste: "Technicien Maintenance", date: "24 Fév 2026", score: 87 },
  { name: "Fatou Camara", poste: "Chef de Projet", date: "23 Fév 2026", score: 95 },
  { name: "Mohamed Keita", poste: "Analyste Financier", date: "22 Fév 2026", score: 78 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-2"
            >
              <div className="glass-card text-center mb-6">
                <img src={logoEdg} alt="EDG" className="h-12 w-auto mx-auto mb-3" />
                <h3 className="font-bold text-foreground text-sm">Administration EDG</h3>
                <p className="text-xs text-muted-foreground">Espace recruteur</p>
              </div>

              {sidebarItems.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-all mt-4">
                <LogOut className="h-4 w-4" />
                Déconnexion
              </button>
            </motion.aside>

            {/* Main content */}
            <motion.main initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Tableau de bord</h1>
                  <p className="text-sm text-muted-foreground">Vue d'ensemble du recrutement EDG</p>
                </div>
                <Button variant="default" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Nouvelle offre
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Briefcase, label: "Offres actives", value: "8", trend: "+2 ce mois" },
                  { icon: Users, label: "Candidatures", value: "156", trend: "+23 cette semaine" },
                  { icon: UserCheck, label: "Entretiens planifiés", value: "12", trend: "4 cette semaine" },
                  { icon: Clock, label: "En attente", value: "34", trend: "À traiter" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-xs text-primary mt-1">{stat.trend}</p>
                  </div>
                ))}
              </div>

              {/* Recent applications */}
              <div className="glass-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-foreground">Candidatures récentes</h2>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filtrer
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-muted-foreground border-b border-border">
                        <th className="pb-3 font-medium">Candidat</th>
                        <th className="pb-3 font-medium">Poste</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Score</th>
                        <th className="pb-3 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentApplications.map((app, i) => (
                        <tr key={i} className="border-b border-border/50 last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                {app.name.split(" ").map(n => n[0]).join("")}
                              </div>
                              <span className="font-medium text-foreground text-sm">{app.name}</span>
                            </div>
                          </td>
                          <td className="py-4 text-sm text-muted-foreground">{app.poste}</td>
                          <td className="py-4 text-sm text-muted-foreground">{app.date}</td>
                          <td className="py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              app.score >= 90 ? "bg-primary/10 text-primary" : app.score >= 80 ? "bg-edg-yellow/20 text-secondary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                              {app.score}%
                            </span>
                          </td>
                          <td className="py-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              </button>
                              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                                <Download className="h-4 w-4 text-muted-foreground" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
