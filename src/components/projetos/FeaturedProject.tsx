"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";
import { projects } from "@/lib/projects-data";

// Featured = first project (Automóvel Club)
const featured = projects[0];
const photos = featured.photos;

function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  className,
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
  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-full scale-[1.12]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
}

export default function FeaturedProject() {
  return (
    <section className="bg-ice py-24 md:py-32">

      {/* PROJECT HEADER */}
      <div className="px-8 md:px-12 max-w-[1300px] mx-auto mb-20">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end"
        >
          <div className="md:col-span-7">
            <motion.div variants={fadeUpChildVariants} className="flex items-center gap-4 mb-6">
              <span className="font-cormorant font-light text-[4rem] leading-none text-olive/10 select-none">
                01
              </span>
              <div className="w-12 h-px bg-olive/30" />
              <span className="text-[0.6rem] tracking-[0.28em] uppercase text-sage font-dm font-light">
                Projeto em destaque
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpChildVariants}
              className="font-cormorant font-light text-charcoal leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
            >
              {featured.title.split(" ").slice(0, 1).join(" ")}{" "}
              <em className="italic text-olive">{featured.title.split(" ").slice(1).join(" ")}</em>
            </motion.h2>
          </div>

          <motion.div variants={fadeUpChildVariants} className="md:col-span-5 md:pb-1">
            <div className="flex gap-6 mb-6 pb-6 border-b border-olive/10">
              <div>
                <span className="block text-[0.58rem] tracking-[0.22em] uppercase text-warm-gray/60 font-dm font-light mb-1">
                  Categoria
                </span>
                <span className="text-[0.82rem] font-dm font-light text-charcoal">
                  {featured.category}
                </span>
              </div>
              <div>
                <span className="block text-[0.58rem] tracking-[0.22em] uppercase text-warm-gray/60 font-dm font-light mb-1">
                  Serviços
                </span>
                <span className="text-[0.82rem] font-dm font-light text-charcoal">
                  {featured.services.join(" · ")}
                </span>
              </div>
            </div>

            <p className="text-[0.88rem] font-dm font-light text-warm-gray leading-[1.9] mb-6">
              {featured.description}
            </p>

            <Link
              href={`/projetos/${featured.slug}`}
              className="inline-flex items-center gap-3 text-[0.62rem] tracking-[0.2em] uppercase text-olive border-b border-olive/30 pb-0.5 hover:text-moss hover:border-moss transition-colors duration-300 font-dm font-light"
            >
              Ver projeto completo →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* HERO IMAGE — full bleed */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[55vw] min-h-[400px] max-h-[700px] overflow-hidden"
      >
        <Image
          src={photos[0].src}
          alt={photos[0].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ice/30" />
      </motion.div>

      {/* SCATTERED LAYOUT */}
      <div className="px-8 md:px-12 max-w-[1300px] mx-auto mt-4">

        {/* Row A */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mt-4 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 md:col-span-2 md:col-start-1 order-last md:order-first pb-6"
          >
            <p className="text-[0.75rem] font-dm font-light text-warm-gray leading-[1.9] max-w-[200px]">
              {photos[1].alt}
            </p>
            <div className="mt-3 w-6 h-px bg-olive/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 md:col-span-3 md:col-start-3"
            style={{ marginTop: "-5rem" }}
          >
            <div className="relative h-[280px] md:h-[440px] overflow-hidden">
              <ParallaxImage src={photos[1].src} alt={photos[1].alt} speed={0.13} className="absolute inset-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 md:col-span-6 md:col-start-7 relative h-[200px] md:h-[310px] overflow-hidden"
          >
            <ParallaxImage src={photos[2].src} alt={photos[2].alt} speed={0.08} className="absolute inset-0" />
          </motion.div>
        </div>

        {/* Row B */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 mt-3 md:mt-4 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7 relative h-[240px] md:h-[400px] overflow-hidden"
          >
            <ParallaxImage src={photos[4].src} alt={photos[4].alt} speed={0.09} className="absolute inset-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-8 md:col-span-4 md:col-start-9 relative h-[320px] md:h-[500px]"
            style={{ marginTop: "-3.5rem" }}
          >
            <div className="relative h-full overflow-hidden">
              <ParallaxImage src={photos[3].src} alt={photos[3].alt} speed={0.15} className="absolute inset-0" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-sand/40 pointer-events-none hidden md:block" />
          </motion.div>
        </div>

        {/* Pull quote */}
        {featured.quote && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-16 mb-4 border-l-2 border-olive/30 pl-8 max-w-[680px] mx-auto md:mx-0 md:ml-auto"
          >
            <p className="font-cormorant font-light text-charcoal/70 leading-[1.4] tracking-wide"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)" }}>
              <em>"{featured.quote}"</em>
            </p>
            <span className="block mt-4 text-[0.6rem] tracking-[0.22em] uppercase text-warm-gray/50 font-dm font-light">
              Plante Comigo
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
