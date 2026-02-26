import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConnexionPage from "./pages/ConnexionPage";
import InscriptionPage from "./pages/InscriptionPage";
import OffresPage from "./pages/OffresPage";
import JobDetailPage from "./pages/JobDetailPage";
import CandidatureSpontaneePage from "./pages/CandidatureSpontaneePage";
import CandidatDashboard from "./pages/CandidatDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AProposPage from "./pages/AProposPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import ConfidentialitePage from "./pages/ConfidentialitePage";
import ConditionsPage from "./pages/ConditionsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/offres" element={<OffresPage />} />
          <Route path="/offres/:id" element={<JobDetailPage />} />
          <Route path="/candidature-spontanee" element={<CandidatureSpontaneePage />} />
          <Route path="/espace-candidat" element={<CandidatDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/confidentialite" element={<ConfidentialitePage />} />
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
