import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Eye, GlassWater, MapPin, Truck, Sparkles } from "lucide-react";

const differentials = [
  { icon: Flame, title: "Cozinha Autoral", desc: "Tradição oriental reinterpretada com identidade própria e ingredientes selecionados." },
  { icon: Eye, title: "Experiência Visual", desc: "Cada prato é uma composição — visual, aroma e sabor em harmonia." },
  { icon: GlassWater, title: "Drinks Especiais", desc: "Coquetéis autorais que traduzem a alma oriental em cada dose." },
  { icon: Sparkles, title: "Ambiente Marcante", desc: "Atmosfera noturna pensada para envolver e criar memórias." },
  { icon: Truck, title: "Delivery Premium", desc: "A experiência Negai na sua casa, com a mesma apresentação impecável." },
  { icon: MapPin, title: "Localização Estratégica", desc: "No coração de Barra de Sirinhaém, fácil de encontrar e impossível de esquecer." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Por Que Negai
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium">
            O que nos torna <span className="italic text-primary">únicos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-background p-10 lg:p-12 group hover:bg-card transition-colors duration-500"
            >
              <item.icon
                size={28}
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
