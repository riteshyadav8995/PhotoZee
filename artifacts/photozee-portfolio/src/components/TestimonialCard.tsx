import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border p-8 rounded-lg relative overflow-hidden group hover:border-primary/50 transition-colors h-full flex flex-col"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className="font-serif text-8xl text-primary leading-none">"</span>
      </div>
      
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={18} className={i < testimonial.rating ? "fill-primary text-primary" : "text-muted"} />
        ))}
      </div>
      
      <p className="font-serif text-xl italic text-card-foreground mb-8 relative z-10 flex-grow leading-relaxed">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-primary mb-1">{testimonial.eventType}</p>
          <p className="text-xs text-muted-foreground">{testimonial.date}</p>
        </div>
      </div>
    </motion.div>
  );
}
