import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: label + headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
                A Experiência
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-8">
                Cada detalhe é um{" "}
                <span className="italic text-primary">convite</span> aos sentidos.
              </h2>
              <div className="w-16 h-[1px] bg-primary/40" />
            </motion.div>

            {/* Right: text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed text-lg">
                No Negai, a cozinha oriental encontra uma nova linguagem. Da seleção dos
                ingredientes ao empratamento final, cada etapa carrega intenção, cuidado
                e a busca por uma experiência que transcende o paladar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A atmosfera noturna, a iluminação cuidadosamente desenhada, os drinks
                autorais e uma cozinha que respeita tradições enquanto reinventa sabores
                — tudo se conecta para criar momentos que ficam.
              </p>
              <p className="text-secondary-foreground leading-relaxed font-medium">
                Não é apenas uma refeição. É uma vivência que começa no olhar
                e permanece na memória.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
