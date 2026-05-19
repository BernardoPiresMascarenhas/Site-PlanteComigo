"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Não esqueça de importar a Imagem

const items = [
  "Paisagismo contemporâneo",
  "Biodiversidade",
  "Design biofísico" ,
  "Biomas brasileiros",
  "Arquitetura e urbanismo",
  "Ecologia urbana",
  "Conforto ambiental", 
  "Paisagem e permanência",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-moss py-3.5 overflow-hidden whitespace-nowrap" aria-hidden="true">
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="inline-block text-[0.6rem] tracking-[0.3em] uppercase text-sand/70 font-dm font-light px-8">
              {item}
            </span>
            
            {/* A Logo no lugar da Estrelinha */}
            <div className="relative w-4 h-4 opacity-60 mr-8">
              <Image 
                src="/logo1.png" 
                alt="Separador" 
                fill 
                className="object-contain brightness-0 invert" 
              />
            </div>
            
          </span>
        ))}
      </motion.div>
    </div>
  );
}