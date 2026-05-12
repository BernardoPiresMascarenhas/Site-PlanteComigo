import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectDetail from "@/components/projetos/ProjectDetail";
import { getProjectBySlug, projects } from "@/lib/projects-data";

// 1. No Next.js 15, params é uma Promise
interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 2. Precisamos usar o "await" para ler o slug
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) return { title: "Projeto não encontrado — Plante Comigo" };
  
  return {
    title: `${project.title} — Plante Comigo`,
    description: project.description,
  };
}

// 3. A página agora é uma função "async"
export default async function ProjectPage({ params }: Props) {
  // 4. Aguardamos o params antes de buscar o projeto
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
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