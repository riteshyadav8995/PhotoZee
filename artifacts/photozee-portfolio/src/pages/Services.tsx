import { useEffect } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  useEffect(() => {
    document.title = "Services | PhotoZee";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-20"
    >
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-4"
          >
            Our <span className="text-primary italic">Services</span>
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto uppercase tracking-widest">
            Bespoke coverage for every occasion
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted/30 px-4 md:px-6 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-primary italic">PhotoZee?</span></h2>
            <p className="text-muted-foreground">The difference is in the details.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "100% Satisfaction Guarantee", desc: "We don't rest until you are completely thrilled with your final gallery and films." },
              { title: "Expert Creative Team", desc: "Our collective comprises award-winning industry veterans who live and breathe visual art." },
              { title: "Cutting-Edge Equipment", desc: "We utilize the latest cinema cameras, drones, and lighting to ensure Hollywood-level quality." },
              { title: "Timely Delivery", desc: "We respect your excitement. Our streamlined post-production guarantees prompt delivery without compromising quality." }
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-card border border-border rounded-lg"
              >
                <CheckCircle2 className="text-primary shrink-0 w-8 h-8" />
                <div>
                  <h4 className="font-bold text-xl mb-2">{point.title}</h4>
                  <p className="text-muted-foreground">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center px-4">
        <h2 className="font-serif text-4xl font-bold mb-6">Don't see what you're looking for?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We offer completely customizable packages tailored to your specific requirements and destination.</p>
        <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105">
          Request Custom Quote
        </Link>
      </section>
    </motion.div>
  );
}
