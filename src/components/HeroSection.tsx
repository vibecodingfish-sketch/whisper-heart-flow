import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-end overflow-hidden">
      {/* Background with cinematic treatment */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Interior do Negai Sushi"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
        />
        {/* Multi-layer cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content — anchored to bottom for editorial feel */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 pb-20 lg:pb-28">
        <div className="max-w-5xl">
          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary/80 border border-primary/20 px-4 py-1.5 inline-block">
              Barra de Sirinhaém · PE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-display font-light leading-[1.05] mb-8"
          >
            Onde o sabor
            <br />
            encontra{" "}
            <em className="text-primary font-light">presença.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed mb-14 font-light"
          >
            Uma experiência oriental que transcende o paladar.
            Cada detalhe, uma intenção. Cada visita, uma memória.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://pedido.anota.ai/loja/negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-4 bg-primary text-primary-foreground text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-500 hover:shadow-[0_0_60px_-10px_hsla(355,82%,41%,0.4)] hover:bg-primary/90"
            >
              Fazer Pedido
            </a>
            <a
              href="#destaques"
              className="px-10 py-4 border border-foreground/10 text-foreground/70 text-[11px] font-medium tracking-[0.25em] uppercase hover:border-foreground/30 hover:text-foreground transition-all duration-500"
            >
              Explorar Cardápio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-0 right-16 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground/40 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
