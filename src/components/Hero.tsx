"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&q=85&auto=format&fit=crop"
          alt="Ambiente moderno com plantas e arquitetura contemporânea"
          fill
          priority
          className="object-cover scale-110"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/10 to-dark/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-8 md:px-12 pb-20 md:pb-28 max-w-4xl"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[0.62rem] tracking-[0.3em] uppercase text-sand mb-6 font-dm font-normal"
        >
          Paisagismo · Design · Natureza
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-ice leading-[1.05] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          Transformando espaços<br />
          através da{" "}
          <em className="italic text-sand/90">natureza.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-dm font-light text-ice/65 text-[0.9rem] leading-[1.85] max-w-md mb-12 tracking-wide"
        >
          Criamos ambientes que respiram vida — unindo arquitetura contemporânea,
          natureza e design minimalista em projetos únicos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#projetos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-olive text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase hover:bg-moss transition-all duration-400 hover:-translate-y-0.5"
          >
            Conheça nossos projetos
          </Link>
          <Link
            href="#contato"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase border border-ice/40 hover:border-ice hover:bg-ice/8 transition-all duration-400"
          >
            Fale conosco
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 right-8 md:right-12 flex items-center gap-3 z-10"
      >
        <div className="w-10 h-px bg-ice/40" />
        <span className="text-[0.58rem] tracking-[0.25em] uppercase text-ice/50 font-dm font-light">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
