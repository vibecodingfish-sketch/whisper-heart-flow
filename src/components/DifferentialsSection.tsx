import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const differentials = [
  { number: "01", title: "Cozinha Autoral", desc: "Tradição oriental reinterpretada com identidade e ingredientes selecionados a dedo." },
  { number: "02", title: "Experiência Visual", desc: "Cada prato é uma composição — visual, aroma e sabor em harmonia absoluta." },
  { number: "03", title: "Drinks de Assinatura", desc: "Coquetéis autorais que traduzem a essência oriental em cada dose." },
  { number: "04", title: "Ambiente Marcante", desc: "Atmosfera noturna criada para envolver e transformar momentos em memórias." },
  { number: "05", title: "Delivery Premium", desc: "A experiência Negai na sua casa com a mesma apresentação impecável." },
  { number: "06", title: "Localização Única", desc: "No coração de Barra de Sirinhaém — fácil de encontrar, impossível de esquecer." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 lg:py-52 relative">
      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
            Diferenciais
          </span>
          <h2 className="font-heading text-display-sm font-light">
            O que nos torna <em className="text-primary font-light">únicos</em>
          </h2>
        </motion.div>

        {/* Minimal numbered list — editorial */}
        <div className="max-w-3xl mx-auto">
          {differentials.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="group grid grid-cols-[auto_1fr] gap-8 lg:gap-12 py-8 lg:py-10 border-b border-border/15 first:border-t hover:border-primary/20 transition-colors duration-500"
            >
              <span className="font-heading text-sm text-primary/40 pt-1 font-light">
                {item.number}
              </span>
              <div>
                <h3 className="font-heading text-xl lg:text-2xl font-medium tracking-wide mb-2 group-hover:text-primary/90 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/50 text-sm leading-relaxed font-light max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
