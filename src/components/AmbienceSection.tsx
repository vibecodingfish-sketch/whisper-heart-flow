import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ambience from "@/assets/ambience.jpg";
import { ArrowUpRight } from "lucide-react";

const AmbienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ambiente" className="py-40 lg:py-52 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-0 items-center">
          {/* Image — full bleed left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:-ml-16"
          >
            <div className="relative overflow-hidden">
              <img
                src={ambience}
                alt="Ambiente do Negai Sushi"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full h-[450px] lg:h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:pl-20 xl:pl-28"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary/70 block mb-8">
              Atmosfera
            </span>

            <h2 className="font-heading text-display-sm font-light leading-[1.15] mb-10">
              Mais do que
              <br />
              um jantar.
              <br />
              <em className="text-primary font-light">Um destino.</em>
            </h2>

            <div className="w-10 h-px bg-primary/30 mb-10" />

            <p className="text-muted-foreground leading-[1.8] text-[15px] font-light mb-6 max-w-md">
              A fachada marcante, a iluminação envolvente, a energia de quem sabe que está
              no lugar certo. O Negai foi pensado para ser vivido.
            </p>
            <p className="text-muted-foreground/60 leading-[1.8] text-sm font-light mb-14 max-w-md">
              Um espaço onde a estética oriental encontra o calor brasileiro —
              atmosfera que convida a ficar, compartilhar e voltar.
            </p>

            <a
              href="https://www.instagram.com/_negaisushi"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-primary/80 hover:text-foreground transition-colors duration-500"
            >
              <span>Siga no Instagram</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmbienceSection;
