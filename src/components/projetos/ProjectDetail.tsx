"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";
import { Project, getAdjacentProjects, projects } from "@/lib/projects-data";
import BlurredHero from "@/components/projetos/BlurredHero";

function ParallaxImage({
  src,
  alt,
  speed = 0.12,
  className = "",
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-speed * 80}px`, `${speed * 80}px`]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full scale-[1.15]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 55vw" />
      </motion.div>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-[90vh] min-h-[600px] flex items-end overflow-hidden"
      >
        <BlurredHero
          src={project.coverSrc}
          alt={project.title}
          parallaxY={heroBgY}
          className="absolute inset-0"
          priority
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 px-8 md:px-12 pb-16 md:pb-24 w-full max-w-[1300px] mx-auto"
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <Link
              href="/"
              className="text-[0.58rem] tracking-[0.22em] uppercase text-ice/40 hover:text-ice/70 transition-colors font-dm font-light"
            >
              Início
            </Link>
            <span className="text-ice/20 text-[0.5rem]">—</span>
            <Link
              href="/projetos"
              className="text-[0.58rem] tracking-[0.22em] uppercase text-ice/40 hover:text-ice/70 transition-colors font-dm font-light"
            >
              Projetos
            </Link>
            <span className="text-ice/20 text-[0.5rem]">—</span>
            <span className="text-[0.58rem] tracking-[0.22em] uppercase text-ice/60 font-dm font-light">
              {project.title}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[0.6rem] tracking-[0.28em] uppercase text-sand/60 font-dm font-light mb-4"
              >
                {project.category}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-cormorant font-light text-ice leading-[1.02] tracking-[-0.01em]"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
              >
                {project.title}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="md:col-span-4 md:col-start-9 md:pb-2"
            >
              <div className="flex gap-8">
                <div>
                  <span className="block text-[0.55rem] tracking-[0.22em] uppercase text-sand/40 font-dm font-light mb-1">
                    Ano
                  </span>
                  <span className="text-[0.82rem] font-dm font-light text-ice/70">
                    {project.year}
                  </span>
                </div>
                <div>
                  <span className="block text-[0.55rem] tracking-[0.22em] uppercase text-sand/40 font-dm font-light mb-1">
                    Local
                  </span>
                  <span className="text-[0.82rem] font-dm font-light text-ice/70">
                    {project.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 z-10"
        >
          <div className="w-8 h-px bg-ice/30" />
          <span className="text-[0.55rem] tracking-[0.25em] uppercase text-ice/40 font-dm font-light">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── PROJECT INFO STRIP ── */}
      <section className="bg-cream border-b border-olive/10">
        <div className="max-w-[1300px] mx-auto px-8 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block text-[0.60rem] tracking-[0.22em] uppercase text-warm-gray/80 font-dm font-normal mb-1.5">
              Projeto
            </span>
            <span className="text-[0.88rem] font-dm font-light text-charcoal">
              {String(project.num).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div>
            <span className="block text-[0.60rem] tracking-[0.22em] uppercase text-warm-gray/80 font-dm font-normal mb-1.5">
              Categoria
            </span>
            <span className="text-[0.88rem] font-dm font-light text-charcoal">
              {project.category}
            </span>
          </div>
          <div>
            <span className="block text-[0.60rem] tracking-[0.22em] uppercase text-warm-gray/80 font-dm font-normal mb-1.5">
              Serviços
            </span>
            <span className="text-[0.88rem] font-dm font-light text-charcoal">
              {project.services.join(" · ")}
            </span>
          </div>
          <div>
            <span className="block text-[0.60rem] tracking-[0.22em] uppercase text-warm-gray/80 font-dm font-normal mb-1.5">
              Ano
            </span>
            <span className="text-[0.88rem] font-dm font-light text-charcoal">
              {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ── */}
      <section className="bg-ice py-24 md:py-32 px-8 md:px-12">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
        >
          <motion.div variants={fadeUpChildVariants} className="md:col-span-4">
            <div className="sticky top-32">
              <div className="w-8 h-px bg-olive mb-8" />
              <p className="text-[0.75rem] tracking-[0.28em] uppercase text-sage font-dm font-light mb-4">
                Sobre o projeto
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.70rem] tracking-[0.15em] uppercase text-olive/70 border border-olive/20 px-3 py-1 font-dm font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7 md:col-start-6 space-y-6">
            {project.longDescription.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUpChildVariants}
                className="text-[0.95rem] font-dm font-light text-warm-gray leading-[1.95]"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── SCATTERED PHOTO LAYOUT ── */}
      <section className="bg-ice pb-24">
        {/* Verifica se a foto 0 existe (sempre deve existir pelo menos 1 na base) */}
        {project.photos[0] && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="relative w-full overflow-hidden"
            style={{ height: "clamp(280px, 38vw, 520px)" }}
          >
            {/* blur de fundo */}
            <div
              aria-hidden="true"
              style={{ position: "absolute", inset: "-15%", overflow: "hidden" }}
            >
              <img
                src={project.photos[0].src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "blur(28px) saturate(1.3) brightness(0.45)",
                  transform: "scale(1.05)",
                }}
              />
            </div>
            {/* imagem nítida contida */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={project.photos[0].src}
                alt={project.photos[0].alt}
                style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto", objectFit: "contain", display: "block" }}
              />
            </div>
            {/* gradiente sutil na base */}
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(to bottom, transparent 60%, rgba(250,250,247,0.18) 100%)" }} />
          </motion.div>
        )}

        <div className="px-8 md:px-12 max-w-[1300px] mx-auto">
          {/* ROW A: portrait offset-up + caption + landscape */}
          <div className="grid grid-cols-12 gap-3 md:gap-4 mt-3 items-end">
            {/* Caption */}
            {project.photos[1] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="col-span-12 md:col-span-2 md:col-start-1 order-last md:order-first pb-6"
              >
                <p className="text-[0.75rem] font-dm font-light text-warm-gray leading-[1.9] max-w-[200px]">
                  {project.photos[1].alt}
                </p>
                <div className="mt-3 w-6 h-px bg-olive/30" />
              </motion.div>
            )}

            {/* Portrait — tall, elevated */}
            {project.photos[1] && (
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-5 md:col-span-3 md:col-start-3"
                style={{ marginTop: "-5rem" }}
              >
                <div className="relative h-[280px] md:h-[440px] overflow-hidden">
                  <ParallaxImage
                    src={project.photos[1].src}
                    alt={project.photos[1].alt}
                    speed={0.13}
                    className="absolute inset-0"
                  />
                </div>
              </motion.div>
            )}

            {/* Landscape — right side */}
            {project.photos[2] && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-7 md:col-span-6 md:col-start-7 relative h-[200px] md:h-[310px] overflow-hidden"
              >
                <ParallaxImage
                  src={project.photos[2].src}
                  alt={project.photos[2].alt}
                  speed={0.08}
                  className="absolute inset-0"
                />
              </motion.div>
            )}
          </div>

          {/* ROW B: wide landscape + portrait overlapping right */}
          {(project.photos[3] || project.photos[4]) && (
            <div className="grid grid-cols-12 gap-3 md:gap-4 mt-3 md:mt-4 items-start">
              {/* Wide */}
              {project.photos[4] && (
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-12 md:col-span-7 relative h-[240px] md:h-[400px] overflow-hidden"
                >
                  <ParallaxImage
                    src={project.photos[4].src}
                    alt={project.photos[4].alt}
                    speed={0.09}
                    className="absolute inset-0"
                  />
                </motion.div>
              )}

              {/* Portrait — slightly elevated, overlapping */}
              {project.photos[3] && (
                <motion.div
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-8 md:col-span-4 md:col-start-9 relative h-[320px] md:h-[500px]"
                  style={{ marginTop: "-3.5rem" }}
                >
                  <div className="relative h-full overflow-hidden">
                    <ParallaxImage
                      src={project.photos[3].src}
                      alt={project.photos[3].alt}
                      speed={0.15}
                      className="absolute inset-0"
                    />
                  </div>
                  {/* Accent corner */}
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-sand/40 pointer-events-none hidden md:block" />
                </motion.div>
              )}
            </div>
          )}
        </div>

        {/* PULL QUOTE */}
        {project.quote && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="px-8 md:px-12 max-w-[1300px] mx-auto mt-20 mb-2"
          >
            <div className="border-l-2 border-olive/30 pl-8 max-w-[700px] ml-auto">
              <p
                className="font-cormorant font-light text-charcoal/65 leading-[1.4] tracking-wide"
                style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)" }}
              >
                <em>"{project.quote}"</em>
              </p>
              <span className="block mt-4 text-[0.65rem] tracking-[0.22em] uppercase text-warm-gray/80 font-dm font-normal">
                Plante Comigo
              </span>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── PREV / NEXT NAVIGATION ── */}
      <nav className="bg-charcoal border-t border-white/4">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2">
          {/* Prev */}
          <div className="border-r border-white/4">
            {prev ? (
              <Link
                href={`/projetos/${prev.slug}`}
                className="group block px-8 md:px-12 py-12 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-sand/30 font-dm font-light mb-3">
                  ← Projeto anterior
                </span>
                <span
                  className="block font-cormorant font-light text-ice/50 group-hover:text-ice/80 transition-colors duration-300 leading-tight"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  {prev.title}
                </span>
                <span className="block text-[0.62rem] tracking-[0.15em] uppercase text-sand/20 font-dm font-light mt-1">
                  {prev.category}
                </span>
              </Link>
            ) : (
              <Link
                href="/projetos"
                className="group block px-8 md:px-12 py-12 hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="block text-[0.58rem] tracking-[0.22em] uppercase text-sand/30 font-dm font-light mb-3">
                  ← Voltar
                </span>
                <span className="block font-cormorant font-light text-ice/40 group-hover:text-ice/70 transition-colors duration-300"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>
                  Todos os projetos
                </span>
              </Link>
            )}
          </div>

          {/* Next */}
          <div>
            {next ? (
              <Link
                href={`/projetos/${next.slug}`}
                className="group block px-8 md:px-12 py-12 text-right hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="block text-[0.65rem] tracking-[0.22em] uppercase text-sand/30 font-dm font-light mb-3">
                  Próximo projeto →
                </span>
                <span
                  className="block font-cormorant font-light text-ice/50 group-hover:text-ice/80 transition-colors duration-300 leading-tight"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  {next.title}
                </span>
                <span className="block text-[0.62rem] tracking-[0.15em] uppercase text-sand/20 font-dm font-light mt-1">
                  {next.category}
                </span>
              </Link>
            ) : (
              <Link
                href="/#contato"
                className="group block px-8 md:px-12 py-12 text-right hover:bg-white/[0.02] transition-colors duration-300"
              >
                <span className="block text-[0.58rem] tracking-[0.22em] uppercase text-sand/30 font-dm font-light mb-3">
                  Próximo passo →
                </span>
                <span className="block font-cormorant font-light text-ice/40 group-hover:text-ice/70 transition-colors duration-300"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}>
                  Fale conosco
                </span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}