import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos — Plante Comigo",
  description:
    "Conheça os projetos realizados pela Plante Comigo — do Automóvel Club ao Casacor 2019. Paisagismo contemporâneo e jardins sob medida em Belo Horizonte.",
};

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
