import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectsHero from "@/components/projetos/ProjectsHero";
import FeaturedProject from "@/components/projetos/FeaturedProject";
import OtherProjects from "@/components/projetos/OtherProjects";
import ProjectsCTA from "@/components/projetos/ProjectsCTA";

export default function ProjetosPage() {
  return (
    <main>
      <Navbar />
      <ProjectsHero />
      <FeaturedProject />
      <OtherProjects />
      <ProjectsCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
