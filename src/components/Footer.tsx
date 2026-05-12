import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "https://www.instagram.com/plantecomigo/" },
  { label: "Threads", href: "https://www.threads.com/@plantecomigo?xmt=AQG0bNtxr2T_Mk4P2f51r0jqNSOaaProKeiep33Ag3OJj0s" },
  { label: "WhatsApp", href: "https://wa.me/5531999990000" },
];

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/4">
      {/* Main footer */}
      <div className="px-8 md:px-12 py-16 max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {/* Brand */}
        <div>
          <span className="font-cormorant font-light text-xl tracking-[0.15em] uppercase text-ice/40">
            PlanteComigo
          </span>
          <p className="mt-4 text-[0.8rem] font-dm font-light text-ice/25 leading-relaxed max-w-[240px]">
            Transformando espaços através da natureza. Paisagismo e design verde
            com qualidade premium.
          </p>
        </div>

        {/* Nav links */}
        <div className="md:flex md:justify-center">
          <div>
            <p className="text-[0.58rem] tracking-[0.25em] uppercase text-sand/30 font-dm font-light mb-5">
              Navegação
            </p>
            <ul className="space-y-3 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.78rem] font-dm font-light text-ice/30 hover:text-sand/70 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="md:flex md:justify-end">
          <div>
            <p className="text-[0.58rem] tracking-[0.25em] uppercase text-sand/30 font-dm font-light mb-5">
              Redes sociais
            </p>
            <ul className="space-y-3 list-none">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[0.78rem] font-dm font-light text-ice/30 hover:text-sand/70 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-8 md:px-12 py-5 border-t border-white/4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          <span className="text-[0.62rem] tracking-[0.12em] text-ice/20 font-dm font-light">
            © {new Date().getFullYear()} PlanteComigo. Todos os direitos reservados.
          </span>
          <span className="hidden sm:block w-[1px] h-3 bg-white/5" />
          <span className="text-[0.6rem] tracking-[0.1em] text-ice/15 font-dm font-light uppercase">
            Desenvolvido por{" "}
            <Link 
              href="https://github.com/BernardoPiresMascarenhas" 
              target="_blank"
              className="hover:text-sand/50 transition-colors duration-300 underline underline-offset-2 decoration-white/5"
            >
              Bernardo Pires
            </Link>
          </span>
        </div>
        
        <span className="text-[0.6rem] tracking-[0.1em] text-ice/15 font-dm font-light">
          Belo Horizonte, Minas Gerais
        </span>
      </div>
    </footer>
  );
}
