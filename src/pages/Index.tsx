import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RecentJobsSection from "@/components/RecentJobsSection";
import WhyRecruedgSection from "@/components/WhyRecruedgSection";
import ProcessSection from "@/components/ProcessSection";
import SpontaneousSection from "@/components/SpontaneousSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RecentJobsSection />
      <DepartmentsSection />
      <WhyRecruedgSection />
      <ProcessSection />
      <SpontaneousSection />
      <Footer />
    </div>
  );
};

export default Index;
