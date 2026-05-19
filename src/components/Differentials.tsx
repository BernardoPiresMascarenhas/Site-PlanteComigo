"use client";

import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";

const differentials = [
  {
    title: "Projetos autorais",
    text: "Cada projeto nasce da leitura do seu espaço, da sua rotina e da atmosfera que você deseja viver. Criamos soluções exclusivas, pensadas para integrar estética, funcionalidade e natureza de forma autêntica.",
  },
  {
    title: "Equipe especializada",
    text: "Contamos com uma equipe qualificada e alinhada em cada etapa da execução, garantindo organização, cuidado técnico e cumprimento dos prazos definidos. Acompanhamos todo o processo para que a implantação aconteça com segurança, clareza e excelência nos detalhes.",
  },
  {
    title: "Confiança construída com experiência",
    text: "Há 8 anos desenvolvendo projetos paisagísticos, unimos conhecimento técnico, sensibilidade estética e compromisso com cada cliente. Trabalhamos com transparência, responsabilidade e atenção em cada decisão, criando admiração e uma relações de confiança.",
  },
  {
    title: "Curadoria dos melhores fornecedores",
    text: "Selecionamos fornecedores e espécies com alto padrão de qualidade para garantir beleza, durabilidade e identidade em cada composição. Cada elemento é escolhido com critério para assegurar um resultado sofisticado, saudável e harmônico ao longo do tempo.",
  },
];

export default function Differentials() {
  return (
    <section className="bg-cream py-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="max-w-[520px] mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[0.75rem] tracking-[0.3em] uppercase text-sage font-dm font-normal mb-3"
          >
            Por que escolher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cormorant font-light text-charcoal tracking-[-0.01em] leading-[1.15] w-full"
            style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)" }}
          >
            A experiência{" "}
            <em className="italic text-olive font-normal">Plante Comigo.</em>
          </motion.h2>
        </div>

        {/* Grid ajustado para 2 colunas e espaçamento otimizado */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14"
        >
          {differentials.map((item) => (
            <motion.div key={item.title} variants={fadeUpChildVariants}>
              <div className="w-8 h-px bg-olive/60 mb-6" />
              <h4 className="font-cormorant font-normal text-[1.4rem] text-charcoal mb-4 leading-snug">
                {item.title}
              </h4>
              <p className="text-[0.88rem] font-dm font-light text-warm-gray leading-[1.9] text-justify max-w-[520px]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}