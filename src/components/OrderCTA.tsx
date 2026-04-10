import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import tempura from "@/assets/tempura.jpg";

const OrderCTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 lg:py-52 relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src={tempura}
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
            Pronto para experimentar?
          </span>

          <h2 className="font-heading text-display-sm lg:text-display font-light leading-[1.1] mb-10">
            Sua próxima experiência{" "}
            <em className="text-primary font-light">começa aqui.</em>
          </h2>

          <p className="text-muted-foreground/60 text-base mb-16 max-w-lg mx-auto leading-relaxed font-light">
            Peça agora pelo nosso cardápio digital ou venha nos visitar.
            Cada prato é preparado com a dedicação que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pedido.anota.ai/loja/negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-primary text-primary-foreground text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-500 hover:shadow-[0_0_80px_-15px_hsla(355,82%,41%,0.35)] hover:bg-primary/90"
            >
              Fazer Pedido Online
            </a>
            <a
              href="https://www.instagram.com/_negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 border border-foreground/10 text-foreground/60 text-[11px] font-medium tracking-[0.25em] uppercase hover:border-primary/30 hover:text-primary transition-all duration-500"
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
