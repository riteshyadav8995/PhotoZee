import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1519225421980-716e6f8cce58?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1920&q=80"
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 10,
  }));

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image & Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url("${backgroundImages[bgIndex]}")` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/95 z-0"></div>

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/40 z-10"
          style={{ width: p.size, height: p.size, top: `${p.y}%`, left: `${p.x}%` }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center pt-20 pb-32 h-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Every Moment Deserves To Be A <span className="text-primary italic">Masterpiece</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 font-medium tracking-wide uppercase"
        >
          Premium Wedding & Event Cinematography
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-center"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors text-center"
          >
            Book A Session
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-muted-foreground flex flex-col items-center gap-2 cursor-pointer hover:text-primary transition-colors bg-background/50 backdrop-blur-sm p-4 rounded-full border border-border/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <ChevronDown size={20} className="text-primary" />
      </motion.button>
    </div>
  );
}
