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
        {/* --- IMAGEM DESKTOP (Mostra apenas de 'md' para cima) --- */}
        <Image
          src="/hero2.jpeg"
          alt="Ambiente moderno com plantas e arquitetura contemporânea"
          fill
          priority
          className="object-cover scale-110 hidden md:block" // Escondida no mobile, visível no desktop
          sizes="100vw"
        />

        {/* --- IMAGEM MOBILE (Mostra apenas no celular, esconde no 'md' para cima) --- */}
        <Image
          src="/hero4.jpeg"
          alt="Ambiente moderno com plantas e arquitetura contemporânea (Mobile)"
          fill
          priority
          className="object-cover scale-110 block md:hidden" // Visível no mobile, escondida no desktop
          sizes="100vw"
        />

        {/* 1. OVERLAY GERAL: Escurece a foto inteira por igual (Ajuste o 40 para mais ou menos escuro) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 2. GRADIENTE: Escurece ainda mais as pontas e a base para o texto brilhar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
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
          // AJUSTE DE CONTRASTE: Mudei para font-medium e adicionei drop-shadow
          className="text-[0.70rem] tracking-[0.3em] uppercase text-sand mb-6 font-dm font-medium drop-shadow-md"
        >
          Paisagismo · Bem estar · Natureza
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-ice leading-[1.05] tracking-[-0.01em] mb-8"
          style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
        >
          Transformando sua vida
          através da{" "}
          {/* AJUSTE DE CONTRASTE: Mudei para font-medium e adicionei drop-shadow */}
          <em className="italic text-sand font-medium drop-shadow-md">natureza.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          // AJUSTE DE CONTRASTE: Mudei a cor para branco puro (text-white) e a fonte para normal
          className="font-dm font-normal text-white text-[0.9rem] leading-[1.85] max-w-md mb-12 tracking-wide drop-shadow-sm"
        >
          Criamos paisagens que respiram e trazem conexão - unindo arquitetura contemporânea, design biofilico e a naturalidade brasileira
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#projetos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-olive text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase hover:bg-moss transition-all duration-400 hover:-translate-y-0.5 drop-shadow-sm"
          >
            Conheça nossos projetos
          </Link>
          <Link
            href="https://wa.me/5531999576263"
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