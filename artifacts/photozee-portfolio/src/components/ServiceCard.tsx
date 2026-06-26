import { motion } from "framer-motion";
import { Link } from "wouter";
import * as Icons from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  // Dynamically load the icon
  const IconComponent = (Icons as any)[service.icon] || Icons.Image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border border-l-4 border-l-primary p-6 md:p-8 rounded-lg overflow-hidden hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        <IconComponent size={28} strokeWidth={1.5} />
      </div>
      
      <h3 className="font-serif text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 flex-grow">
        {service.description}
      </p>
      
      <ul className="space-y-2 mb-8 flex-grow">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-muted-foreground/80">
            <Icons.Check size={16} className="text-primary mr-2 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-4 border-t border-border">
        <Link href={`/contact?service=${service.id}`} className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link">
          Get Inquiry 
          <Icons.ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
