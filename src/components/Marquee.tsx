"use client";

import { motion } from "framer-motion";

const items = [
  "Paisagismo contemporâneo",
  "Design verde",
  "Jardins internos",
  "Consultoria personalizada",
  "Manutenção especializada",
  "Arquitetura viva",
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
            <span className="inline-block text-[0.6rem] tracking-[0.3em] uppercase text-sand/70 font-dm font-light px-10">
              {item}
            </span>
            <span className="text-sand/60 text-xs mr-10">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
