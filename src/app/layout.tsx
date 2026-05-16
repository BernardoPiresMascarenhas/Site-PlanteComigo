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
  metadataBase: new URL("https://www.plantecomigo.com"),
  
  title: "Plante Comigo — Paisagismo & Design Verde",
  description: "A Plante Comigo é especialista em criar e cuidar de jardins. Projetos exclusivos e realizados sob medida — do plantio à manutenção. Belo Horizonte, MG.",
  keywords: "paisagismo, jardinagem, jardins internos, manutenção de jardins, Belo Horizonte, Automóvel Club, Casacor",
  
  openGraph: {
    title: "Plante Comigo — Paisagismo & Design Verde",
    description: "Um projeto paisagístico não muda apenas o espaço. Muda a forma como você vive dentro dele.",
    url: "https://www.plantecomigo.com",
    siteName: "Plante Comigo",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.plantecomigo.com/og-image.jpeg", 
        width: 1200,
        height: 630,
        alt: "Plante Comigo — Paisagismo & Design Verde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plante Comigo — Paisagismo & Design Verde",
    description: "Um projeto paisagístico não muda apenas o espaço. Muda a forma como você vive dentro dele.",
    images: ["https://www.plantecomigo.com/og-image.jpeg"],
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