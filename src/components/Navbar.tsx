"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" }, 
  { label: "Projetos", href: "/projetos" },
  { label: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const pathname = usePathname(); // Pegando a rota atual
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Para impedir a rolagem da página quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 transition-all duration-500",
        scrolled && !menuOpen
          ? "py-4 bg-ice/92 backdrop-blur-md border-b border-olive/10"
          : "py-6 bg-transparent"
      )}
    >
      {/* Logo e Texto */}
      <Link
        href="/"
        className="flex items-center gap-3 group relative z-50"
        onClick={(e) => {
          setMenuOpen(false);
          if (window.location.pathname === "/") {
            e.preventDefault(); 
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
      >
        <div className="relative w-7 h-7 md:w-8 md:h-8 transition-transform duration-500 group-hover:scale-105">
          <Image
            src="/logo1.png"
            alt="Logo Plante Comigo"
            fill
            className={cn(
              "object-contain transition-all duration-400",
              // Se tiver rolado a tela E o menu estiver fechado, fica escura. Senão, fica branca.
              scrolled && !menuOpen ? "brightness-0 opacity-80" : "brightness-0 invert opacity-90"
            )}
          />
        </div>

        <span
          className={cn(
            "font-cormorant text-xl tracking-[0.15em] uppercase transition-colors duration-400 font-light",
            scrolled && !menuOpen ? "text-moss" : "text-ice"
          )}
        >
          PlanteComigo
        </span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => {
          // Lógica de roteamento dinâmico
          let finalHref = link.href;
          if (link.label === "Projetos" && pathname === "/") {
            finalHref = "/#projetos";
          }

          return (
            <li key={link.label}>
              <Link
                href={finalHref}
                className={cn(
                  "text-[0.7rem] font-dm font-normal tracking-[0.18em] uppercase transition-colors duration-300 hover:text-olive",
                  scrolled ? "text-warm-gray" : "text-ice/80"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile hamburger */}
      <button
        className={cn(
          "md:hidden flex flex-col gap-[5px] cursor-pointer relative z-50",
          scrolled && !menuOpen ? "text-moss" : "text-ice"
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

      {/* Mobile menu (Estilo Editorial) */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 top-0 bg-charcoal z-40 flex flex-col px-10 pt-32 pb-10 md:hidden overflow-hidden"
      >
        {/* Marca d'água super sutil no fundo */}
        <div className="absolute -right-16 -bottom-16 w-[22rem] h-[22rem] opacity-[0.03] pointer-events-none rotate-12 z-0">
          <Image src="/logo1.png" alt="" fill className="object-contain brightness-0 invert" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-[0.55rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-light mb-8 relative z-10"
        >
          Navegação
        </motion.p>

        <div className="flex flex-col gap-2 relative z-10">
          {navLinks.map((link, i) => {
            // Lógica de roteamento dinâmico também no mobile
            let finalHref = link.href;
            if (link.label === "Projetos" && pathname === "/") {
              finalHref = "/#projetos";
            }

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-white/5 pb-4 pt-2"
              >
                <Link
                  href={finalHref}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between font-cormorant text-3xl font-light text-ice/90 hover:text-sand transition-colors"
                >
                  {link.label}
                  <span className="text-sand/30 text-xs font-dm font-light">
                    0{i + 1}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Rodapé do Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={menuOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-auto flex justify-between items-end relative z-10"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[0.55rem] tracking-[0.2em] uppercase text-sand/40 font-dm">
              Fale conosco
            </span>
            <a href="mailto:ola@plantecomigo.com" className="text-[0.8rem] font-dm font-light text-ice/60 hover:text-sand transition-colors">
              ola@plantecomigo.com
            </a>
          </div>
          
          <div className="relative w-7 h-7 opacity-30">
            <Image src="/logo1.png" alt="" fill className="object-contain brightness-0 invert" />
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}