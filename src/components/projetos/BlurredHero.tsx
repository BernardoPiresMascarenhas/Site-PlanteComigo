"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";

interface BlurredHeroProps {
  src: string;
  alt: string;
  parallaxY?: MotionValue<string>;
  priority?: boolean;
}

/**
 * BlurredHero — ocupa 100% do pai (que deve ser position:relative + ter altura).
 * Camada 1: mesma imagem borrada e escurecida como fundo (object-cover).
 * Camada 2: imagem nítida contida sem corte (object-contain).
 * Camada 3: gradiente escuro para legibilidade do texto.
 */
export default function BlurredHero({
  src,
  alt,
  parallaxY,
  priority = false,
}: BlurredHeroProps) {
  if (!src) return null;

  return (
    /* Wrapper de parallax — posição absoluta herdada do pai via inset-0 */
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        y: parallaxY,
      }}
    >
      {/* LAYER 1 — blur de fundo, cobre todo o espaço */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-15%",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(30px) saturate(1.4) brightness(0.45)",
            transform: "scale(1.05)",
          }}
        />
      </div>

      {/* LAYER 2 — imagem nítida contida */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* LAYER 3 — gradiente para legibilidade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, rgba(26,28,24,0.22) 0%, rgba(26,28,24,0.04) 30%, rgba(26,28,24,0.78) 100%)",
        }}
      />
    </motion.div>
  );
}
