import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConnexionPage from "./pages/ConnexionPage";
import InscriptionPage from "./pages/InscriptionPage";
import OffresPage from "./pages/OffresPage";
import JobDetailPage from "./pages/JobDetailPage";
import CandidatureSpontaneePage from "./pages/CandidatureSpontaneePage";
import CandidatDashboard from "./pages/CandidatDashboard";
import ProfilPage from "./pages/candidat/ProfilPage";
import CVPage from "./pages/candidat/CVPage";
import NotificationsPage from "./pages/candidat/NotificationsPage";
import ParametresPage from "./pages/candidat/ParametresPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminOffresPage from "./pages/admin/AdminOffresPage";
import AdminCandidaturesPage from "./pages/admin/AdminCandidaturesPage";
import AdminSpontaneesPage from "./pages/admin/AdminSpontaneesPage";
import AdminStatistiquesPage from "./pages/admin/AdminStatistiquesPage";
import AdminParametresPage from "./pages/admin/AdminParametresPage";
import AProposPage from "./pages/AProposPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import DirectionDetailPage from "./pages/DirectionDetailPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/offres" element={<OffresPage />} />
          <Route path="/offres/:id" element={<JobDetailPage />} />
          <Route path="/candidature-spontanee" element={<CandidatureSpontaneePage />} />
          {/* Candidat */}
          <Route path="/espace-candidat" element={<CandidatDashboard />} />
          <Route path="/espace-candidat/profil" element={<ProfilPage />} />
          <Route path="/espace-candidat/cv" element={<CVPage />} />
          <Route path="/espace-candidat/notifications" element={<NotificationsPage />} />
          <Route path="/espace-candidat/parametres" element={<ParametresPage />} />
          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/offres" element={<AdminOffresPage />} />
          <Route path="/admin/candidatures" element={<AdminCandidaturesPage />} />
          <Route path="/admin/spontanees" element={<AdminSpontaneesPage />} />
          <Route path="/admin/statistiques" element={<AdminStatistiquesPage />} />
          <Route path="/admin/parametres" element={<AdminParametresPage />} />
          {/* Directions */}
          <Route path="/directions/:slug" element={<DirectionDetailPage />} />
          {/* Institutional */}
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
