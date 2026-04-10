import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import sushiCombo from "@/assets/sushi-combo.jpg";
import matchaFizz from "@/assets/matcha-fizz.jpg";
import yakisoba from "@/assets/yakisoba.jpg";
import comboFukushima from "@/assets/combo-fukushima.jpg";
import sakerinha from "@/assets/sakerinha.jpg";
import tempura from "@/assets/tempura.jpg";
import poke from "@/assets/poke.jpg";
import chopSuey from "@/assets/chop-suey.jpg";
import ceviche from "@/assets/ceviche.jpg";
import yuzuSpritz from "@/assets/yuzu-spritz.jpg";

type Category = "todos" | "combinados" | "pratos" | "drinks";

const menuItems = [
  { name: "Combo Tokyo", desc: "Seleção premium de nigiri e uramaki com peixes nobres", image: sushiCombo, category: "combinados" as const },
  { name: "Combo Fukushima", desc: "Generosa composição de sushi e sashimi para compartilhar", image: comboFukushima, category: "combinados" as const },
  { name: "Yakisoba Especial", desc: "Macarrão artesanal salteado com legumes frescos e proteína", image: yakisoba, category: "pratos" as const },
  { name: "Tempurá de Peixe", desc: "Crocância perfeita com peixe fresco em massa leve", image: tempura, category: "pratos" as const },
  { name: "Monte Seu Poke", desc: "Sua criação, nossos ingredientes selecionados", image: poke, category: "pratos" as const },
  { name: "Chop Suey Frango", desc: "Legumes crocantes com frango em molho oriental autoral", image: chopSuey, category: "pratos" as const },
  { name: "Ceviche Misto", desc: "Frescor cítrico com frutos do mar em harmonia perfeita", image: ceviche, category: "pratos" as const },
  { name: "Matcha Fizz", desc: "Efervescência delicada com chá verde japonês", image: matchaFizz, category: "drinks" as const },
  { name: "Sakerinha", desc: "A fusão entre o sakê e a brasilidade em um copo", image: sakerinha, category: "drinks" as const },
  { name: "Yuzu Spritz", desc: "Citrus japonês com toque refrescante e sofisticado", image: yuzuSpritz, category: "drinks" as const },
];

const categories: { key: Category; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "combinados", label: "Combinados" },
  { key: "pratos", label: "Pratos" },
  { key: "drinks", label: "Drinks" },
];

const MenuHighlights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Category>("todos");

  const filtered = active === "todos" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="destaques" className="py-32 lg:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Coleção Gastronômica
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2]">
            Nossos <span className="italic text-primary">destaques</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-6 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 border-b ${
                active === cat.key
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative overflow-hidden bg-card border border-border/30 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
                <h3 className="font-heading text-xl font-medium mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://pedido.anota.ai/loja/negaisushi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-primary text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Cardápio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;
