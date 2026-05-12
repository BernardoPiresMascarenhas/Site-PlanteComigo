import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plante Comigo — Paisagismo & Design Verde",
  description:
    "A Plante Comigo é especialista em criar e cuidar de jardins. Projetos exclusivos e realizados sob medida — do plantio à manutenção. Belo Horizonte, MG.",
  keywords: "paisagismo, jardinagem, jardins internos, manutenção de jardins, Belo Horizonte, Automóvel Club, Casacor",
  openGraph: {
    title: "Plante Comigo — Paisagismo & Design Verde",
    description: "Nossa missão é levar o verde até você. Projetos sob medida, do plantio à manutenção.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
