import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Instagram } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" className="py-32 lg:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Visite-nos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium">
            Encontre o <span className="italic text-primary">Negai</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30 max-w-4xl mx-auto">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-background p-10 text-center"
          >
            <MapPin size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-medium mb-3">Localização</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Barra de Sirinhaém
              <br />
              Pernambuco PE
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-10 text-center"
          >
            <Clock size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-medium mb-3">Funcionamento</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ter a Dom 18h às 23h
              <br />
              <span className="text-xs text-muted-foreground/60">(horários sujeitos a alteração)</span>
            </p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background p-10 text-center"
          >
            <Instagram size={24} className="text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="font-heading text-lg font-medium mb-3">Instagram</h3>
            <a
              href="https://www.instagram.com/_negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              @_negaisushi
            </a>
            <p className="text-xs text-muted-foreground/60 mt-2">+3 mil seguidores</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
