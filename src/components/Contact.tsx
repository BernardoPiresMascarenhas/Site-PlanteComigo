"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpChildVariants, staggerContainerVariants } from "@/lib/animations";
import { sendEmail } from "@/app/actions/sendEmail";

const contactInfo = [
  { label: "Endereço", value: "Belo Horizonte, Minas Gerais" },
  { label: "Telefone", value: "(31) 99999-0000" },
  { label: "E-mail", value: "ola@plantecomigo.com" },
  { label: "Horário", value: "Seg – Sex, 8h às 18h" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await sendEmail(form);

      if (result && result.success) {
        setSent(true);
        setForm({ name: "", email: "", service: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b border-sand/20 py-3 text-ice font-dm font-light text-[0.9rem] outline-none transition-all duration-300 placeholder-sand/25 focus:border-sand/50 caret-sand";

  return (
    <section id="contato" className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Left — moss bg */}
      <div className="bg-moss px-10 md:px-16 py-24 md:py-28 flex flex-col justify-between">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUpChildVariants}
            className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-light mb-4"
          >
            Vamos conversar
          </motion.p>

          <motion.h2
            variants={fadeUpChildVariants}
            className="font-cormorant font-light text-ice leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            Nossa missão é levar o <em className="italic text-sand/80">verde</em>{" "}
            até você.
          </motion.h2>

          <motion.p
            variants={fadeUpChildVariants}
            className="mt-5 text-[0.88rem] font-dm font-light text-ice/50 leading-[1.85] max-w-[340px]"
          >
            Se você tem refletido em ir de encontro com a natureza, além de
            valorizar o seu espaço, entre em contato — iremos te fazer uma
            visita sem compromisso.
          </motion.p>

          <motion.div
            variants={fadeUpChildVariants}
            className="mt-10 space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-6 items-start">
                <span className="text-[0.58rem] tracking-[0.25em] uppercase text-sand/50 font-dm font-light w-16 flex-shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-[0.88rem] font-dm font-light text-ice/75 leading-relaxed">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Right — dark bg */}
      <div className="bg-dark px-10 md:px-16 py-24 md:py-28">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUpChildVariants}
            className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/40 font-dm font-light mb-10"
          >
            Envie uma mensagem
          </motion.p>

          {/* Mudança aqui: de <motion.div> para <motion.form> */}
          <motion.form 
            variants={fadeUpChildVariants} 
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[0.6rem] tracking-[0.22em] uppercase text-sand/50 font-dm font-light mb-2"
              >
                Nome completo
              </label>
              <input
                className={inputBase}
                type="text"
                id="name"
                required
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[0.6rem] tracking-[0.22em] uppercase text-sand/50 font-dm font-light mb-2"
              >
                E-mail
              </label>
              <input
                className={inputBase}
                type="email"
                id="email"
                required
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-[0.6rem] tracking-[0.22em] uppercase text-sand/50 font-dm font-light mb-2"
              >
                Serviço de interesse
              </label>
              <input
                className={inputBase}
                type="text"
                id="service"
                required
                placeholder="Ex: paisagismo residencial"
                value={form.service}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[0.6rem] tracking-[0.22em] uppercase text-sand/50 font-dm font-light mb-2"
              >
                Mensagem
              </label>
              <textarea
                className={`${inputBase} resize-none min-h-[90px]`}
                id="message"
                required
                placeholder="Conte-nos sobre seu projeto..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className="inline-flex items-center gap-4 px-10 py-4 bg-transparent border border-sand/30 text-sand font-dm text-[0.62rem] font-normal tracking-[0.22em] uppercase cursor-pointer transition-all duration-400 hover:bg-olive hover:border-olive hover:text-ice mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : sent ? "Mensagem enviada ✓" : "Enviar mensagem →"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}