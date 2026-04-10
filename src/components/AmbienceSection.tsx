import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ambience from "@/assets/ambience.jpg";

const AmbienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ambiente" className="py-32 lg:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:-mr-12 z-10"
          >
            <div className="relative overflow-hidden">
              <img
                src={ambience}
                alt="Ambiente do Negai Sushi"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
            </div>
            {/* Accent line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-24 relative"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6">
              Atmosfera
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mb-8">
              Mais do que um jantar.
              <br />
              <span className="italic text-primary">Um destino.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              A fachada marcante, a iluminação envolvente, a energia de quem sabe que está
              no lugar certo. O Negai Sushi foi pensado para ser vivido — do primeiro
              olhar ao último gole.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Um espaço onde a estética oriental encontra o calor brasileiro, criando
              uma atmosfera que convida a ficar, compartilhar e voltar.
            </p>

            <a
              href="https://www.instagram.com/_negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors duration-300"
            >
              <span>Siga no Instagram</span>
              <span className="w-8 h-[1px] bg-current" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
