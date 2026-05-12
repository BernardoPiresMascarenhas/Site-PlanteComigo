"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";
import { projects as allProjects } from "@/lib/projects-data";

// Removemos a lógica de colunas e tamanhos variados.
// Pegamos todos os projetos a partir do segundo (índice 1).
const otherProjects = allProjects.slice(1).map((p) => ({
  ...p,
  src: p.coverSrc,
}));

function OtherProjectCard({ project }: { project: (typeof otherProjects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={fadeUpChildVariants}
      className="group cursor-pointer flex flex-col w-full"
    >
      <Link href={`/projetos/${project.slug}`} className="block w-full">
        {/* Imagem com proporção 4:3 para todos ficarem do mesmo tamanho */}
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal mb-6"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: hovered ? "scale(1.04)" : "scale(1)",
              filter: hovered
                ? "brightness(0.6) saturate(1.05)"
                : "brightness(0.8) saturate(0.85)",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute top-5 left-6 z-10">
            <span className="font-cormorant font-light text-[1rem] text-sand/30">
              {project.num}
            </span>
          </div>

          <div className="absolute top-5 right-6 z-10">
            <span className="text-[0.55rem] tracking-[0.22em] uppercase text-sand/25 font-dm font-light">
              {project.year}
            </span>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent z-10 flex items-end p-6"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-[0.62rem] tracking-[0.2em] uppercase text-sand font-dm font-light border-b border-sand/30 pb-0.5"
                >
                  Ver projeto →
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Informações Textuais (Empilhadas) */}
        <div className="flex flex-col gap-3 pr-4">
          <div>
            <p className="text-[0.6rem] tracking-[0.22em] uppercase text-sage font-dm font-light mb-1.5">
              {project.category}
            </p>
            <h3
              className="font-cormorant font-light text-charcoal leading-[1.1] transition-colors duration-300 group-hover:text-olive"
              style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
            >
              {project.title}
            </h3>
          </div>

          <p className="text-[0.82rem] font-dm font-light text-warm-gray leading-[1.7] line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[0.58rem] tracking-[0.15em] uppercase text-olive/70 border border-olive/20 px-3 py-1 font-dm font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function OtherProjects() {
  return (
    <section className="bg-ice pt-8 pb-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-6 mb-16 pb-8 border-b border-olive/10"
        >
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-warm-gray/50 font-dm font-light">
            Outros projetos
          </span>
          <div className="flex-1 h-px bg-olive/8" />
          <span className="font-cormorant font-light text-[1rem] text-warm-gray/20">
            {String(otherProjects.length).padStart(2, '0')}
          </span>
        </motion.div>

        {/* GRID PRINCIPAL: 1 coluna no mobile, 2 colunas no desktop */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          {otherProjects.map((project) => (
            <OtherProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}