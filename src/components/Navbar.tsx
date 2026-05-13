"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 transition-all duration-500",
        scrolled
          ? "py-4 bg-ice/92 backdrop-blur-md border-b border-olive/10"
          : "py-6 bg-transparent"
      )}
    >
      {/* Logo e Texto */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          {/* Símbolo da Marca (logo1.png) */}
          <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/logo1.png"
              alt="Logo Plante Comigo"
              fill
              className={cn(
                "object-contain transition-all duration-400",
                // A mágica: se o fundo for escuro (scrolled=false), a logo precisa ser clara (invertida/brilho alto).
                // Se o fundo for claro (scrolled=true), a logo volta a ser escura (ou assume a cor original se for preta).
                scrolled ? "brightness-0 opacity-80" : "brightness-0 invert opacity-90"
              )}
            />
          </div>

          {/* Texto */}
          <span
            className={cn(
              "font-cormorant text-xl tracking-[0.15em] uppercase transition-colors duration-400 font-light",
              scrolled ? "text-moss" : "text-ice"
            )}
          >
            PlanteComigo
          </span>
        </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-[0.7rem] font-dm font-normal tracking-[0.18em] uppercase transition-colors duration-300 hover:text-olive",
                scrolled ? "text-warm-gray" : "text-ice/80"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={cn(
          "md:hidden flex flex-col gap-[5px] cursor-pointer",
          scrolled ? "text-moss" : "text-ice"
        )}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={cn(
            "block h-px w-6 transition-all duration-300 bg-current",
            menuOpen && "rotate-45 translate-y-[7px]"
          )}
        />
        <span
          className={cn(
            "block h-px w-6 transition-all duration-300 bg-current",
            menuOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "block h-px w-6 transition-all duration-300 bg-current",
            menuOpen && "-rotate-45 -translate-y-[7px]"
          )}
        />
      </button>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 top-0 bg-charcoal z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cormorant text-4xl font-light text-ice/80 hover:text-sand tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
}
