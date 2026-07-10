import { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import PortfolioGrid from "@/components/PortfolioGrid";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "wouter";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  useEffect(() => {
    document.title = "PhotoZee | Luxury Wedding & Event Cinematography";
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoInView) {
        videoRef.current.play().catch((e) => {
          console.log("Browser blocked unmuted autoplay. Falling back to muted autoplay.", e);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(console.error);
          }
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVideoInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background text-foreground"
    >
      <Hero />

      {/* Brand Introduction */}
      <section className="py-24 px-4 md:px-6 container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-primary italic">PhotoZee</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are a luxury cinematography and photography studio dedicated to capturing life's most precious moments with an artistic, cinematic flair. With over a decade of experience across the globe, our passion is transforming your special days into timeless masterpieces that you and your family will cherish forever.
          </p>
        </motion.div>
      </section>

      {/* Featured Highlight Video */}
      <section className="py-24 px-4 md:px-6 container mx-auto bg-card border-b border-border">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-primary italic">Highlight</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the magic of our cinematic storytelling.
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video relative bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            src="https://assets.mixkit.co/videos/40601/40601-720.mp4"
            poster="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&w=1920&q=80"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-4 md:px-6 container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-primary italic">Portfolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A curated selection of our finest moments captured across the globe.
          </motion.p>
        </div>
        <PortfolioGrid limit={6} showFilters={false} />
        <div className="text-center mt-12">
          <Link href="/portfolio" className="inline-block px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 transition-colors rounded-full font-medium">
            View Complete Gallery
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
            >
              What We <span className="text-primary italic">Do</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full font-medium">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-border relative overflow-hidden bg-[url('https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488592/SaveInta.com_508320538_17876796864357301_7959524437596980884_n_gkyupb.jpg')] bg-fixed bg-cover bg-center">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Weddings", value: 500, suffix: "+" },
              { label: "Events", value: 1000, suffix: "+" },
              { label: "Years Experience", value: 10, suffix: "+" },
              { label: "Awards Won", value: 50, suffix: "+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-serif text-4xl md:text-6xl font-bold text-primary mb-2">
                  <CountUp end={stat.value} />{stat.suffix}
                </div>
                <div className="text-muted-foreground uppercase tracking-widest text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 px-4 md:px-6 container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Client <span className="text-primary italic">Stories</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-4 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488593/SaveInta.com_508340020_17876796807357301_258699174900690809_n_wc1cvu.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto relative z-10 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold mb-6"
          >
            Ready to Book Your <span className="text-primary italic">Session?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground mb-10"
          >
            Let us tell your story. Contact us today to discuss your vision and secure your date.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-full hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
