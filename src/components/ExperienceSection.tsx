import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import sushiCombo from "@/assets/sushi-combo.jpg";

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-40 lg:py-52 relative overflow-hidden">
      {/* Subtle warm accent */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
            {/* Left: editorial text — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
                A Experiência
              </span>

              <h2 className="font-heading text-display-sm font-light leading-[1.15] mb-10">
                Cada detalhe é um{" "}
                <em className="text-primary font-light">convite</em>
                <br />
                aos sentidos.
              </h2>

              <div className="w-10 h-px bg-primary/30 mb-10" />

              <div className="space-y-6 max-w-lg">
                <p className="text-muted-foreground leading-[1.8] text-[15px] font-light">
                  No Negai, a cozinha oriental encontra uma nova linguagem. Da seleção dos
                  ingredientes ao empratamento final, cada etapa carrega intenção, cuidado
                  e a busca por uma experiência que transcende o paladar.
                </p>
                <p className="text-muted-foreground/70 leading-[1.8] text-sm font-light">
                  A atmosfera noturna, a iluminação envolvente, os drinks
                  autorais — tudo se conecta para criar momentos que permanecem.
                </p>
              </div>
            </motion.div>

            {/* Right: image — 2 cols */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="lg:col-span-2 order-1 lg:order-2 relative"
            >
              <div className="relative">
                <img
                  src={sushiCombo}
                  alt="Sushi premium Negai"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
