"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { fadeUpChildVariants, staggerContainerVariants } from "@/lib/animations";

const stats = [
  { num: "8+", label: "Anos no mercado" },
  { num: "100%", label: "Projetos sob medida" },
  { num: "∞", label: "Amor pelo verde" },
];

const pillars = [
  {
    label: "Projeto",
    text: "Projetos exclusivos, desenhados para a sua forma de viver.",
  },
  {
    label: "Do plantio à manutenção",
    text: "Cuidamos de cada detalhe para que seu jardim cresça saudável e vigoroso.",
  },
  {
    label: "Desenvolvimento",
    text: "Execução planejada com precisão, transparência e previsibilidade.",
  },
  {
    label: "Fornecedores",
    text: "Seleção criteriosa para resultados extraordinários.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sobre" className="bg-cream py-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        {/* AJUSTE NO GRID: Alterado de items-center para md:items-stretch para alinhar alturas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center md:items-stretch">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[520px] md:h-[765px] md:mt-[20px]"
          >
            <Image
              src="/sobre.jpeg"
              alt="Espaço verde contemporâneo projetado pela PlanteComigo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* O quadrado (Accent border) foi removido daqui */}
          </motion.div>

          {/* Text column */}
          <motion.div
            ref={ref}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center py-4"
          >
            <motion.p
              variants={fadeUpChildVariants}
              className="text-[0.65rem] tracking-[0.3em] uppercase text-sage font-dm font-normal mb-2"
            >
              Nossa história
            </motion.p>

            <motion.h2
              variants={fadeUpChildVariants}
              className="font-cormorant font-light text-charcoal tracking-[-0.01em] leading-[1.15] mb-8 w-full"
              style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.8rem)" }}
            >
              O equilíbrio entre o espaço urbano <br className="hidden md:block" />
              e um ambiente <em className="italic text-olive font-normal">sustentável.</em>
            </motion.h2>

            <motion.p
              variants={fadeUpChildVariants}
              className="text-[0.9rem] font-dm font-light text-warm-gray leading-[1.9] w-full text-justify mb-10"
            >
              A Plante Comigo, transforma paisagismo em experiências vivas. Sob a curadoria detalhada do arquiteto e paisagista Chico, cada projeto é assinado com foco em sofisticação, elegância e autenticidade, buscando sempre valorizar a nossa biodiversidade nativa. Nossa missão é criar refúgios exclusivos onde espécies brasileiras e ornamentais, se encontram em perfeito equilíbrio, trazendo mais vida, conexão e permanência para cada ambiente.
            </motion.p>

            {/* Pillars */}
            <motion.div
              variants={fadeUpChildVariants}
              className="grid grid-cols-2 gap-x-8 gap-y-6 max-w-[460px] mb-10"
            >
              {pillars.map((p) => (
                <div key={p.label}>
                  <span className="block text-[0.6rem] tracking-[0.2em] uppercase text-olive font-dm font-normal mb-1">
                    {p.label}
                  </span>
                  <p className="text-[0.78rem] font-dm font-light text-warm-gray leading-[1.75]">
                    {p.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUpChildVariants}
              className="flex gap-10 mt-2 pt-8 border-t border-olive/15"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="block font-cormorant font-light text-[2.5rem] text-olive leading-none mb-1">
                    {s.num}
                  </span>
                  <span className="text-[0.62rem] tracking-[0.2em] uppercase text-warm-gray font-dm font-light">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}