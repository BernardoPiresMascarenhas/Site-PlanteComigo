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
        {/* Verifica se a foto 0 existe (Hero da galeria) */}
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

        {/* ── NOVO LAYOUT DE GALERIA DINÂMICA E INFINITA ── */}
        <div className="px-8 md:px-12 max-w-[1300px] mx-auto mt-16 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-32 gap-x-8 items-center">
            
            {/* O .slice(1) garante que ele pule a Foto 0 (pois ela já foi renderizada lá em cima) e mapeie todo o resto! */}
            {project.photos.slice(1).map((photo, index) => {
              const isPortrait = photo.aspect === "portrait";

              // Lógica Ziguezague: Ímpar/Par para jogar a foto para a esquerda ou para a direita
              const isEven = index % 2 === 0;
              
              const colSpan = isPortrait ? "md:col-span-5" : "md:col-span-7";
              const colStart = isEven
                ? "md:col-start-1" // Lado esquerdo
                : isPortrait
                  ? "md:col-start-8" // Lado direito (Retrato)
                  : "md:col-start-6"; // Lado direito (Paisagem)

              // Alturas dinâmicas baseadas no formato da foto
              const heightClass = isPortrait
                ? "h-[400px] md:h-[650px]"
                : "h-[250px] md:h-[450px]";

              // Adiciona uma margem no topo de forma alternada para criar o efeito desalinhado
              const marginTop = isEven ? "md:mt-0" : "md:mt-20";

              return (
                <motion.div
                  key={index} // Chave única para o React não reclamar
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`col-span-12 ${colSpan} ${colStart} ${marginTop}`}
                >
                  <div className={`relative w-full ${heightClass} overflow-hidden mb-4`}>
                    <ParallaxImage
                      src={photo.src}
                      alt={photo.alt}
                      speed={0.12}
                      className="absolute inset-0"
                    />
                  </div>
                  
                  {/* Legenda automática baseada na tag "alt" do arquivo de dados */}
                  {photo.alt && (
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-px bg-olive/30" />
                      <p className="text-[0.65rem] tracking-[0.05em] uppercase text-warm-gray/60 font-dm font-light">
                        {photo.alt}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PULL QUOTE (Citação) */}
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