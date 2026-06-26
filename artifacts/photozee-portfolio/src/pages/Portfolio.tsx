import { useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | PhotoZee";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-20"
    >
      <section className="relative py-24 flex flex-col items-center justify-center text-center px-4 border-b border-border bg-muted/30">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-4"
        >
          Our <span className="text-primary italic">Portfolio</span>
        </motion.h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore our collection of cinematic stories, breathtaking photography, and raw emotional moments.
        </p>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-6 min-h-[60vh]">
        <PortfolioGrid />
      </section>
    </motion.div>
  );
}
