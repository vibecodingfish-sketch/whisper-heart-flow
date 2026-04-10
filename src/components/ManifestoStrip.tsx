import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ManifestoStrip = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-28 lg:py-36 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="container mx-auto px-6 lg:px-16 text-center"
      >
        <div className="w-6 h-px bg-primary/40 mx-auto mb-12" />
        <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-foreground/70 max-w-4xl mx-auto leading-[1.3] italic">
          Uma marca que já conquistou
          <br className="hidden md:block" />
          seu espaço. Uma experiência
          <br className="hidden md:block" />
          que merece ser vivida.
        </blockquote>
        <div className="w-6 h-px bg-primary/40 mx-auto mt-12" />
      </motion.div>
    </section>
  );
};

export default ManifestoStrip;
