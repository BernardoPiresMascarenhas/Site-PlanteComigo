"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeUpChildVariants, staggerContainerVariants } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const detailedPhases = [
  {
    id: "criacao",
    num: "01",
    title: "Criação e Planejamento",
    subtitle: "A fundação do seu novo espaço",
    desc: "Tudo começa com a escuta. Entendemos seus desejos, necessidades e a vocação natural do seu ambiente. Realizamos um levantamento topográfico e botânico completo, desenhando um projeto que alinha a estética premium com a funcionalidade real do dia a dia. Nenhum detalhe é deixado ao acaso.",
    image: "/plantacriacao3.jpeg",
    // Adicionamos o caminho do PDF aqui. Certifique-se de colocar o arquivo na pasta /public
    pdfPath: "/planta-projeto.pdf", 
  },
  {
    id: "encomenda",
    num: "02",
    title: "Seleção de Fornecedores",
    subtitle: "A busca pela excelência",
    desc: "A beleza de um jardim depende diretamente da qualidade de suas raízes e materiais. Temos uma rede de fornecedores homologados e viveiros exclusivos. Selecionamos rigorosamente as espécies botânicas mais saudáveis, os vasos mais elegantes e os substratos mais ricos, garantindo um resultado final impecável.",
    image: "/fornecedores2.jpeg",
  },
  {
    id: "implantacao",
    num: "03",
    title: "Implantação",
    subtitle: "Do papel para a terra",
    desc: "Nossa equipe entra em cena para transformar o projeto em realidade. Com um cronograma bem definido, realizamos a preparação do solo, plantio técnico, instalação de sistemas de irrigação e posicionamento de adornos. Tudo feito de forma limpa, organizada e com prazo previsível.",
    image: "/implantacao.jpeg", 
  },
  {
    id: "manutencao",
    num: "04",
    title: "Manutenção",
    subtitle: "O segredo da vitalidade",
    desc: "Um jardim é um organismo vivo que muda com as estações. Oferecemos um serviço de manutenção especializada para garantir que o seu espaço não apenas sobreviva, mas prospere. Podas técnicas, adubação equilibrada, controle de pragas e limpeza cíclica para que o verde esteja sempre exuberante.",
    image: "/manutencao.jpeg", 
  },
];

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ice">
        {/* HERO SECTION */}
        <section className="bg-charcoal pt-40 pb-24 px-8 md:px-12 relative overflow-hidden">
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[45rem] h-[45rem] opacity-[0.03] pointer-events-none rotate-12 z-0">
            <Image src="/logo1.png" alt="" fill className="object-contain brightness-0 invert" />
          </div>

          <div className="max-w-[1300px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-16"
            >
              <Link href="/" className="text-[0.6rem] tracking-[0.22em] uppercase text-sand/40 hover:text-sand/70 transition-colors font-dm font-light">
                Início
              </Link>
              <span className="text-sand/20 text-[0.5rem]">—</span>
              <span className="text-[0.6rem] tracking-[0.22em] uppercase text-sand/60 font-dm font-light">
                Metodologia
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-light mb-5"
                >
                  O Processo
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-cormorant font-light text-ice leading-[1.05] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
                >
                  A arte de cultivar<br />
                  <em className="italic text-sand/90">experiências.</em>
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="md:col-span-4 md:pb-2"
              >
                <p className="text-[0.85rem] font-dm font-light text-ice/40 leading-[1.9]">
                  Conheça em detalhes as quatro etapas fundamentais que garantem a entrega de projetos com qualidade estética e técnica inigualáveis.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PHASES DETAIL SECTION */}
        <section className="py-32 px-8 md:px-12 bg-cream">
          <div className="max-w-[1300px] mx-auto space-y-32">
            {detailedPhases.map((phase, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={phase.id} 
                  id={phase.id} 
                  className="scroll-mt-32"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                    
                    {/* Bloco de Imagem */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden ${!isEven ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>

                    {/* Bloco de Texto */}
                    <motion.div
                      variants={staggerContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      className={`flex flex-col ${!isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"}`}
                    >
                      <motion.div variants={fadeUpChildVariants} className="flex items-center gap-4 mb-8">
                        <span className="font-cormorant text-3xl text-olive/40">{phase.num}</span>
                        <div className="h-px w-12 bg-olive/30" />
                      </motion.div>

                      <motion.p variants={fadeUpChildVariants} className="text-[0.65rem] tracking-[0.25em] uppercase text-sage font-dm font-light mb-3">
                        {phase.subtitle}
                      </motion.p>

                      <motion.h2 variants={fadeUpChildVariants} className="font-cormorant font-light text-[2.5rem] md:text-[3.2rem] text-charcoal leading-[1.1] mb-8">
                        {phase.title}
                      </motion.h2>

                      <motion.p variants={fadeUpChildVariants} className="text-[0.95rem] font-dm font-light text-warm-gray leading-[2] mb-12">
                        {phase.desc}
                      </motion.p>

                      {/* Botão para o PDF (renderiza apenas se houver pdfPath) */}
                      {phase.pdfPath && (
                        <motion.div variants={fadeUpChildVariants}>
                          <a 
                            href={phase.pdfPath} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-3 border border-olive text-olive font-dm text-[0.65rem] tracking-[0.2em] uppercase hover:bg-olive hover:text-ice transition-all duration-400 w-fit"
                          >
                            Visualizar Planta
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 7l10 10M17 7v10H7" />
                            </svg>
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-moss py-32 md:py-40 px-8 relative overflow-hidden flex flex-col items-center text-center">
          {/* Linha decorativa sutil no topo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent to-sand/20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            {/* Pré-título para dar contexto */}
            <span className="text-[0.62rem] tracking-[0.3em] uppercase text-sand/50 font-dm font-normal mb-8">
              O seu novo ambiente
            </span>

            <h2 className="font-cormorant text-ice text-[2.2rem] md:text-5xl lg:text-6xl font-light mb-8 max-w-4xl leading-[1.15]">
              Um projeto paisagístico não muda apenas o espaço.<br className="hidden md:block" />
              Muda a forma como você <em className="italic text-sand/90">vive</em> dentro dele.
            </h2>

            <p className="font-dm font-light text-ice/60 mb-14 max-w-lg mx-auto leading-[1.9] text-[0.9rem]">
              Conte pra gente o que você imagina — nós criamos ambientes exclusivos, naturais e cheios de vida.
            </p>

            <Link
              href="https://wa.me/5531999576263"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-transparent border border-sand/30 text-sand font-dm text-[0.65rem] font-normal tracking-[0.22em] uppercase overflow-hidden transition-all duration-500"
            >
              {/* Efeito de fundo que sobe ao passar o mouse */}
              <div className="absolute inset-0 bg-sand transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              
              <span className="relative z-10 group-hover:text-moss transition-colors duration-500">
                Agendar uma visita
              </span>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}