import { useEffect } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { Star } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  useEffect(() => {
    document.title = "Testimonials | PhotoZee";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-20"
    >
      <section className="py-24 text-center px-4 bg-[#121212] border-b border-border">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-serif text-5xl md:text-7xl font-bold mb-6"
        >
          Client <span className="text-primary italic">Love</span>
        </motion.h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1,2,3,4,5].map(i => <Star key={i} className="fill-primary text-primary" size={28} />)}
        </div>
        <p className="text-xl font-bold text-foreground">4.9/5 Average Rating</p>
        <p className="text-muted-foreground mt-2">Based on over 500+ authentic reviews.</p>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </section>
      
      <section className="py-20 text-center border-t border-border bg-[#121212]">
        <h2 className="font-serif text-3xl font-bold mb-6">Become Our Next Success Story</h2>
        <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors">
          Contact Us Today
        </Link>
      </section>
    </motion.div>
  );
}
