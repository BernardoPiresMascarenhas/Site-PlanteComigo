"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUpChildVariants, staggerContainerVariants } from "@/lib/animations";
import { projects as allProjects } from "@/lib/projects-data";

// Atualizado com os slugs reais dos 4 primeiros projetos
const homeGridConfig: Record<string, string> = {
  "automovel-club":           "col-span-7",
  "casacor-2019":             "col-span-5",
  "casa-mangabeiras":         "col-span-4",
  "hospital-sao-lucas": "col-span-8",
};

// O .slice(0, 4) limita o array para exibir apenas 4 projetos na Home
const projects = allProjects.slice(0, 4).map((p) => ({
  ...p,
  span: homeGridConfig[p.slug] ?? "col-span-6",
  src: p.coverSrc,
}));

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeUpChildVariants}
      className={`${project.span} relative overflow-hidden cursor-pointer group bg-charcoal`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/projetos/${project.slug}`} className="block w-full h-full">
        <div className="relative min-h-[300px] md:min-h-[380px]">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            style={{
              filter: hovered
                ? "brightness(0.55) saturate(1.1)"
                : "brightness(0.75) saturate(0.9)",
            }}
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          <div className="absolute bottom-6 left-7 z-10 flex items-baseline gap-3">
            <span className="font-cormorant text-[1rem] text-sand/40">{project.num}</span>
            <span className="text-[0.55rem] tracking-[0.2em] uppercase text-sand/25 font-dm font-light">
              {project.year}
            </span>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-transparent flex flex-col justify-end p-7 z-10"
              >
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="text-[0.58rem] tracking-[0.25em] uppercase text-sand mb-2 font-dm font-light"
                >
                  {project.category}
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="font-cormorant font-light text-[1.6rem] text-ice leading-tight"
                >
                  {project.title}
                </motion.p>
                <motion.span
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.18 }}
                  className="mt-3 text-[0.58rem] tracking-[0.18em] uppercase text-sand/70 font-dm font-light border-b border-sand/25 pb-0.5 w-fit"
                >
                  Ver projeto
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="bg-charcoal py-32 px-8 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/60 font-dm font-light mb-3"
            >
              Portfólio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-cormorant font-light text-ice leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Projetos que{" "}
              <em className="italic text-sand/80">inspiram.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/projetos"
              className="text-[0.62rem] tracking-[0.2em] uppercase text-sand border-b border-sand/30 pb-0.5 hover:text-ice hover:border-ice transition-colors duration-300 font-dm font-light"
            >
              Ver todos os projetos
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-12 gap-px bg-white/4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}