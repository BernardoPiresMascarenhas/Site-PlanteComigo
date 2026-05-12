"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { fadeUpChildVariants, staggerContainerVariants } from "@/lib/animations";

const stats = [
  { num: "6+", label: "Anos no mercado" },
  { num: "100%", label: "Projetos sob medida" },
  { num: "∞", label: "Amor pelo verde" },
];

const pillars = [
  {
    label: "Projeto",
    text: "Projetos exclusivos e realizados sob medida a partir da sua necessidade.",
  },
  {
    label: "Do plantio à manutenção",
    text: "Especialistas em criar e cuidar de jardins. Uma área bem cuidada pede uma manutenção cíclica.",
  },
  {
    label: "Execução",
    text: "Equipe preparada e capacitada, com prazo informado no projeto para total previsibilidade da implantação.",
  },
  {
    label: "Fornecedores",
    text: "Acesso às melhores espécies e adornos do mercado para compor o seu projeto.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="sobre" className="bg-cream py-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[520px] md:h-[620px]"
          >
            <Image
              src="/about.png"
              alt="Espaço verde contemporâneo projetado pela PlanteComigo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Accent border */}
            <div className="absolute -bottom-6 -right-6 w-[55%] h-[55%] border border-sand pointer-events-none" />
          </motion.div>

          {/* Text column */}
          <motion.div
            ref={ref}
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeUpChildVariants}
              className="text-[0.62rem] tracking-[0.3em] uppercase text-sage font-dm font-normal mb-2"
            >
              Nossa história
            </motion.p>

            

            <motion.h2
              variants={fadeUpChildVariants}
              className="font-cormorant font-light text-charcoal tracking-[-0.01em] leading-[1.1] mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              O equilíbrio entre o espaço urbano e um ambiente{" "}
              <em className="italic text-olive">sustentável.</em>
            </motion.h2>

            <motion.p
              variants={fadeUpChildVariants}
              className="text-[0.9rem] font-dm font-light text-warm-gray leading-[1.9] max-w-[460px] mb-10"
            >
              A Plante Comigo é uma empresa que preza não apenas pela beleza de
              um espaço, mas também utiliza técnicas profissionais que resultam
              em uma solução eficiente dos recursos naturais — o equilíbrio entre
              o espaço urbano e o desenvolvimento de um ambiente sustentável.
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
