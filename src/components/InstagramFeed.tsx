"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainerVariants, fadeUpChildVariants } from "@/lib/animations";

const posts = [
  {
    src: "/insta1.png",
    alt: "Jardim minimalista",
    href: "https://www.instagram.com/p/DXKGocSDZcI/?img_index=1",
  },
  {
    src: "/insta2.png",
    alt: "Plantas de interior",
    href: "https://www.instagram.com/p/C4vKDutOGwj/?img_index=1",
  },
  {
    src: "/insta3.png",
    alt: "Composição verde",
    href: "https://www.instagram.com/p/Cu789Ypu0MO/",
  },
  {
    src: "/insta4.png",
    alt: "Folhagem contemporânea",
    href: "https://www.instagram.com/p/Cr4AxGzO8BH/?img_index=1",
  },
  {
    src: "/insta5.png",
    alt: "Cactos e suculentas",
    href: "https://www.instagram.com/p/CqqOnysu4hO/?img_index=1",
  },
  {
    src: "/insta6.png",
    alt: "Jardim externo",
    href: "https://www.instagram.com/p/CP3_GrSNdsE/",
  },
];

function IgItem({ post }: { post: typeof posts[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={post.href || "#"} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={fadeUpChildVariants}
        className="relative aspect-square overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={post.src}
          alt={post.alt}
          fill
          className="object-cover transition-all duration-500 ease-out"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            filter: hovered ? "saturate(1)" : "saturate(0.85)",
          }}
          sizes="(max-width: 768px) 50vw, 16vw"
        />

        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-moss/50 flex items-center justify-center"
        >
          <span className="text-[0.62rem] tracking-[0.22em] uppercase text-ice/90 font-dm font-light">
            Ver foto
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default function InstagramFeed() {
  return (
    <section className="bg-ice py-32 px-8 md:px-12">
      {/* Header */}
      <div className="text-center max-w-[540px] mx-auto mb-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[0.62rem] tracking-[0.3em] uppercase text-sage font-dm font-light mb-3"
        >
          Siga nossa jornada
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cormorant font-light text-charcoal leading-[1.1]"
          style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
        >
          Natureza em{" "}
          <em className="italic text-olive">movimento.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Link
            href="https://instagram.com/plantecomigo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.2em] uppercase text-olive mt-4 hover:text-moss transition-colors font-dm font-light"
          >
            @plantecomigo
          </Link>
        </motion.div>
      </div>

      {/* Feed grid */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 md:grid-cols-6 gap-1.5 max-w-[1300px] mx-auto"
      >
        {posts.map((post, i) => (
          <IgItem key={i} post={post} />
        ))}
      </motion.div>
    </section>
  );
}
