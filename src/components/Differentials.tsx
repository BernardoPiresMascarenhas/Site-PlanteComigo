"use client";

import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";

const differentials = [
  {
    title: "Projetos sob medida",
    text: "Cada projeto é exclusivo e criado a partir da sua necessidade — sem soluções genéricas, apenas o que faz sentido para o seu espaço.",
  },
  {
    title: "Equipe capacitada",
    text: "Nossa equipe realiza a execução com prazo definido, oferecendo previsibilidade sobre o início e o término da implantação.",
  },
  {
    title: "Confiabilidade",
    text: "Há 6 anos no mercado oferecendo o melhor dos nossos conhecimentos e prestando um serviço de confiança para cada cliente.",
  },
  {
    title: "Melhores fornecedores",
    text: "Temos acesso às melhores espécies e adornos do mercado para garantir qualidade e variedade em cada composição.",
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
            className="text-[0.62rem] tracking-[0.3em] uppercase text-sage font-dm font-light mb-3"
          >
            Por que escolher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-cormorant font-light text-charcoal leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            A experiência{" "}
            <em className="italic text-olive">PlanteComigo.</em>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        >
          {differentials.map((item) => (
            <motion.div key={item.title} variants={fadeUpChildVariants}>
              <div className="w-8 h-px bg-olive mb-8" />
              <h4 className="font-cormorant font-light text-[1.3rem] text-charcoal mb-3 leading-snug">
                {item.title}
              </h4>
              <p className="text-[0.82rem] font-dm font-light text-warm-gray leading-[1.9]">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
