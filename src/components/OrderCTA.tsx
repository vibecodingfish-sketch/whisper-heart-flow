import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OrderCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
            Pronto para experimentar?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.2] mb-8">
            Sua próxima experiência{" "}
            <span className="italic text-primary">começa aqui.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Peça agora pelo nosso cardápio digital ou venha nos visitar.
            Cada prato é preparado com a dedicação que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pedido.anota.ai/loja/negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_60px_rgba(193,18,31,0.25)]"
            >
              Fazer Pedido Online
            </a>
            <a
              href="https://www.instagram.com/_negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border border-foreground/20 text-foreground font-medium tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderCTA;
