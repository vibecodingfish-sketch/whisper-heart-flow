import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ManifestoStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 border-y border-border/20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 lg:px-12 text-center"
      >
        <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-foreground/80 max-w-4xl mx-auto leading-relaxed">
          "Uma marca que já conquistou seu espaço. Uma experiência que merece ser vivida."
        </blockquote>
        <div className="w-12 h-[1px] bg-primary/40 mx-auto mt-8" />
      </motion.div>
    </section>
  );
};

export default ManifestoStrip;
