import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    label: "Endereço",
    value: "Barra de Sirinhaém",
    sub: "Pernambuco, Brasil",
  },
  {
    label: "Funcionamento",
    value: "Ter – Dom · 18h às 23h",
    sub: "Horários sujeitos a alteração",
  },
  {
    label: "Instagram",
    value: "@_negaisushi",
    sub: "+3 mil seguidores",
    href: "https://www.instagram.com/_negaisushi",
  },
];

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" className="py-40 lg:py-52 relative">
      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
            Visite-nos
          </span>
          <h2 className="font-heading text-display-sm font-light">
            Encontre o <em className="text-primary font-light">Negai</em>
          </h2>
        </motion.div>

        {/* Horizontal info strip */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-px">
          {contactInfo.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="text-center py-12 px-6 relative"
            >
              {/* Vertical divider */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border/20 hidden md:block" />
              )}

              <span className="text-[10px] tracking-[0.3em] uppercase text-primary/50 block mb-4">
                {item.label}
              </span>

              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg font-medium tracking-wide hover:text-primary transition-colors duration-300 block mb-2"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-heading text-lg font-medium tracking-wide mb-2">
                  {item.value}
                </p>
              )}

              <p className="text-[11px] text-muted-foreground/40 font-light">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
