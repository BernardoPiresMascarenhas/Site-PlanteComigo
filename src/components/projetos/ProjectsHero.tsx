"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // <-- Adicionamos a importação da Imagem

export default function ProjectsHero() {
  return (
    <section className="bg-charcoal pt-40 pb-24 px-8 md:px-12 relative overflow-hidden">
      
      {/* --- INÍCIO DA MARCA D'ÁGUA DA LOGO --- */}
      {/* Substituímos o texto "PC" por esta div com a logo */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[45rem] h-[45rem] opacity-[0.03] pointer-events-none rotate-12 z-0"
        aria-hidden="true"
      >
        <Image
          src="/logo1.png"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>
      {/* --- FIM DA MARCA D'ÁGUA --- */}

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-16"
        >
          <Link
            href="/"
            className="text-[0.6rem] tracking-[0.22em] uppercase text-sand/40 hover:text-sand/70 transition-colors font-dm font-light"
          >
            Início
          </Link>
          <span className="text-sand/20 text-[0.5rem]">—</span>
          <span className="text-[0.6rem] tracking-[0.22em] uppercase text-sand/60 font-dm font-light">
            Projetos
          </span>
        </motion.div>

        {/* Title block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-light mb-5"
            >
              Portfólio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-cormorant font-light text-ice leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
            >
              Cada espaço,<br />
              uma história{" "}
              <em className="italic text-sand/70">viva.</em>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 md:pb-2"
          >
            <p className="text-[0.85rem] font-dm font-light text-ice/40 leading-[1.9]">
              Do paisagismo corporativo ao design de interiores verdes — projetos
              realizados com técnica, cuidado e olhar estético único.
            </p>
          </motion.div>
        </div>

        {/* Divider with count */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-16 pt-8 border-t border-white/6 flex justify-between items-center"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-sand/30 font-dm font-light">
            Projetos selecionados
          </span>
          <span className="font-cormorant font-light text-[1.2rem] text-sand/20">
            04
          </span>
        </motion.div>
      </div>
    </section>
  );
}