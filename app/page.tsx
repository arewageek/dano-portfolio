import { HeroSection } from "@/components/home/hero-section";
import ProjectsPage from "./projects/page";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProjectsPage />
      <ServicesPage />
    </main>
  );
}