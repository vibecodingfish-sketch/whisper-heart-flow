import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Interior do Negai Sushi"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm tracking-[0.3em] uppercase text-primary mb-8"
          >
            Barra de Sirinhaém PE
          </motion.p>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.1] mb-8">
            Onde o sabor
            <br />
            <span className="italic text-primary">encontra presença.</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Uma experiência oriental sofisticada que vai além do sabor.
            Cada detalhe pensado para despertar os sentidos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://pedido.anota.ai/loja/negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(193,18,31,0.3)]"
            >
              Fazer Pedido
            </a>
            <a
              href="#destaques"
              className="px-10 py-4 border border-foreground/20 text-foreground font-medium tracking-widest uppercase text-sm hover:border-foreground/50 transition-all duration-300"
            >
              Explorar Cardápio
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
