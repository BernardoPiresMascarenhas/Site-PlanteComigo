"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsCTA() {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&q=80&auto=format&fit=crop"
          alt="Plante Comigo — Entre em contato"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/60" />
      </div>

      <div className="relative z-10 px-8 md:px-12 py-28 md:py-36 max-w-[1300px] mx-auto">
        <div className="max-w-[600px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[0.6rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-light mb-5"
          >
            Vamos criar juntos
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant font-light text-ice leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}
          >
            O seu projeto pode ser
            o{" "}
            <em className="italic text-sand/70">próximo.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[0.88rem] font-dm font-light text-ice/45 leading-[1.9] mb-10 max-w-[440px]"
          >
            Nos envie uma mensagem e vamos conversar sobre o que você está
            buscando para esse momento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/#contato"
              className="inline-flex items-center gap-3 px-8 py-4 bg-olive text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase hover:bg-moss transition-all duration-400 hover:-translate-y-0.5"
            >
              Fale conosco
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-ice font-dm text-[0.7rem] font-normal tracking-[0.18em] uppercase border border-ice/20 hover:border-ice/50 transition-all duration-400"
            >
              ← Voltar ao início
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
