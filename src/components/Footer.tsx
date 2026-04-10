const Footer = () => {
  return (
    <footer className="border-t border-border/10 py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-3 gap-16 items-start mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-heading text-2xl font-semibold tracking-wide">NEGAI</span>
              <span className="text-primary/30 font-light">|</span>
              <span className="font-heading text-xl font-light tracking-widest text-primary/80">寿司</span>
            </div>
            <p className="text-muted-foreground/40 text-sm leading-[1.8] font-light max-w-xs">
              Uma experiência oriental sofisticada em Barra de Sirinhaém.
              Tradição, sabor e atmosfera.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Navegação
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Experiência", href: "#experiencia" },
                { label: "Cardápio", href: "#destaques" },
                { label: "Ambiente", href: "#ambiente" },
                { label: "Contato", href: "#localizacao" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-light"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/40 mb-6">
              Conecte-se
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://pedido.anota.ai/loja/negaisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary/70 hover:text-primary transition-colors duration-300 font-light"
              >
                Pedido Online →
              </a>
              <a
                href="https://www.instagram.com/_negaisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-light"
              >
                Instagram @_negaisushi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-muted-foreground/30 font-light tracking-wide">
            © {new Date().getFullYear()} Negai Sushi — Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-muted-foreground/20 font-light tracking-wider">
            Barra de Sirinhaém · PE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
