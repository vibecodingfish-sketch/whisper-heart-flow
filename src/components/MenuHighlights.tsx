import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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
  { name: "Combo Tokyo", desc: "Nigiri e uramaki com peixes nobres", image: sushiCombo, category: "combinados" as const },
  { name: "Combo Fukushima", desc: "Sushi e sashimi para compartilhar", image: comboFukushima, category: "combinados" as const },
  { name: "Yakisoba Especial", desc: "Macarrão artesanal salteado", image: yakisoba, category: "pratos" as const },
  { name: "Tempurá", desc: "Crocância em massa leve", image: tempura, category: "pratos" as const },
  { name: "Poke Bowl", desc: "Monte sua criação", image: poke, category: "pratos" as const },
  { name: "Chop Suey", desc: "Legumes crocantes em molho autoral", image: chopSuey, category: "pratos" as const },
  { name: "Ceviche Misto", desc: "Frescor cítrico e frutos do mar", image: ceviche, category: "pratos" as const },
  { name: "Matcha Fizz", desc: "Chá verde com efervescência", image: matchaFizz, category: "drinks" as const },
  { name: "Sakerinha", desc: "Sakê com brasilidade", image: sakerinha, category: "drinks" as const },
  { name: "Yuzu Spritz", desc: "Citrus japonês refrescante", image: yuzuSpritz, category: "drinks" as const },
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
    <section id="destaques" className="py-40 lg:py-52 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
            Coleção Gastronômica
          </span>
          <h2 className="font-heading text-display-sm font-light">
            Nossos <em className="text-primary font-light">destaques</em>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-8 lg:gap-12 mb-20"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-500 pb-3 border-b ${
                active === cat.key
                  ? "text-foreground border-primary"
                  : "text-muted-foreground/60 border-transparent hover:text-muted-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid — editorial asymmetric */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className={`group relative overflow-hidden premium-border ${
                  i === 0 && filtered.length > 4 ? "col-span-2 lg:col-span-1 row-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <h3 className="font-heading text-lg lg:text-xl font-medium tracking-wide mb-1">
                    {item.name}
                  </h3>
                  <p className="text-[12px] text-muted-foreground/60 font-light tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="https://pedido.anota.ai/loja/negaisushi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-primary/30 text-primary/80 text-[11px] font-medium tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500"
          >
            Ver Cardápio Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;
