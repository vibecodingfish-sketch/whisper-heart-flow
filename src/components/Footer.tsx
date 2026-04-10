const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-heading text-2xl font-bold tracking-wider">NEGAI</span>
              <span className="font-heading text-2xl font-light tracking-wider text-primary">寿司</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Uma experiência oriental sofisticada em Barra de Sirinhaém.
              Onde tradição, sabor e atmosfera se encontram.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Experiência", href: "#experiencia" },
                { label: "Destaques", href: "#destaques" },
                { label: "Ambiente", href: "#ambiente" },
                { label: "Localização", href: "#localizacao" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-4">Conecte-se</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://pedido.anota.ai/loja/negaisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-foreground transition-colors"
              >
                Pedido Online
              </a>
              <a
                href="https://www.instagram.com/_negaisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram @_negaisushi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Negai Sushi. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Barra de Sirinhaém PE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
