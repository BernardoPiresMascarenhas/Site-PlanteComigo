"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";

const phases = [
  {
    num: "01",
    name: "Criação",
    desc: "Estudo inicial do projeto: conservamos o espaço, fazemos um levantamento completo, desenho e planejamento considerando todos os fatores importantes.",
  },
  {
    num: "02",
    name: "Fornecedores",
    desc: "Seleção rigorosa dos melhores materiais, espécies botânicas e adornos do mercado, garantindo a qualidade premium para o seu espaço.",
  },
  {
    num: "03",
    name: "Implantação",
    desc: "Com a presença da nossa equipe e de todos os materiais necessários, iniciamos a implantação do projeto com prazo definido e total previsibilidade.",
  },
  {
    num: "04",
    name: "Manutenção",
    desc: "A manutenção envolve o cuidado e o tratamento das plantas para mantê-las saudáveis e belas. Uma área bem cuidada pede uma manutenção cíclica.",
  },
];

function PhaseCard({ phase }: { phase: typeof phases[0] }) {
  return (
    <motion.div
      variants={fadeUpChildVariants}
      className="group relative bg-ice p-10 cursor-pointer overflow-hidden flex flex-col"
    >
      {/* Fundo verde que sobe no hover */}
      <div className="absolute inset-0 bg-moss transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />

      {/* Transformamos toda a área de conteúdo em um Link para /servicos */}
      <Link href="/servicos" className="relative z-10 flex flex-col h-full w-full">
        <span className="block text-[0.85rem] font-cormorant text-sand mb-5 transition-colors duration-400 group-hover:text-sand/60">
          {phase.num}
        </span>

        <h3 className="font-cormorant font-light text-[1.6rem] text-charcoal mb-3 transition-colors duration-400 group-hover:text-ice">
          {phase.name}
        </h3>

        <p className="text-[0.82rem] font-dm font-light text-warm-gray leading-[1.85] transition-colors duration-400 group-hover:text-sand/75 mb-6">
          {phase.desc}
        </p>

        <span className="mt-auto inline-block text-[0.62rem] tracking-[0.2em] uppercase text-sage transition-all duration-400 group-hover:text-sand group-hover:translate-x-1 w-fit">
          Saiba mais →
        </span>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="bg-ice py-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[0.62rem] tracking-[0.3em] uppercase text-sage font-dm font-normal mb-3"
            >
              As quatro fases de um projeto paisagístico
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-cormorant font-light text-charcoal leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Criação, fornecedores,{" "}
              <em className="italic text-olive">implantação</em>
              <br />
              e manutenção.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[0.9rem] font-dm font-light text-warm-gray leading-[1.9]"
          >
            A Plante Comigo também realiza cada uma dessas etapas individualmente.
            Seja criar um paisagismo, implantar novas espécies ou fazer a manutenção
            do seu jardim — podemos te ajudar a chegar em ótimas escolhas e resultados.
          </motion.p>
        </div>

        {/* Phases grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-olive/15 mb-px"
        >
          {phases.map((phase) => (
            <PhaseCard key={phase.num} phase={phase} />
          ))}
        </motion.div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-cream border border-olive/10 px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-px"
        >
          <p className="text-[0.9rem] font-dm font-light text-warm-gray leading-relaxed max-w-xl">
            A Plante Comigo também realiza cada uma dessas etapas individualmente.
            Seja criando um paisagismo, implantando novas espécies ou fazendo a
            manutenção do seu jardim — podemos te ajudar a chegar em ótimas
            escolhas e resultados.
          </p>
          <a
            href="#contato"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-olive text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase hover:bg-moss transition-all duration-400 hover:-translate-y-0.5"
          >
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}