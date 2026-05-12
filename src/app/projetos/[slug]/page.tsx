import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectDetail from "@/components/projetos/ProjectDetail";
import { getProjectBySlug, projects } from "@/lib/projects-data";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projeto não encontrado — Plante Comigo" };
  return {
    title: `${project.title} — Plante Comigo`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
