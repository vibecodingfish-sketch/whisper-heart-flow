import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Cardápio", href: "#destaques" },
  { label: "Ambiente", href: "#ambiente" },
  { label: "Contato", href: "#localizacao" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 overflow-visible ${
        scrolled ? "glass-dark border-b border-border/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <span className="font-heading text-2xl lg:text-3xl font-semibold tracking-wide text-foreground">
              NEGAI
            </span>
            <span className="text-primary/30 font-light">|</span>
            <span className="font-heading text-xl lg:text-2xl font-light tracking-widest text-primary/80">
              寿司
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-500 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://pedido.anota.ai/loja/negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2.5 bg-primary/90 text-primary-foreground text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-primary transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsla(355,82%,41%,0.4)]"
            >
              Reservar
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass-dark border-t border-border/10"
          >
            <nav className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="https://pedido.anota.ai/loja/negaisushi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-10 py-3.5 bg-primary text-primary-foreground text-[11px] font-medium tracking-[0.2em] uppercase"
              >
                Fazer Pedido
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
