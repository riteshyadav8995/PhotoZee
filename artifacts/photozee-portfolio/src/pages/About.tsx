import { useEffect } from "react";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import { Star, Camera, Video, Award } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | PhotoZee";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-20"
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/wedding2_qfo2pc.jpg')] bg-cover bg-[center_15%]">
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-4"
          >
            Our <span className="text-primary italic">Story</span>
          </motion.h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto uppercase tracking-widest">
            Crafting legacies since 2014
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-6">More Than Just <span className="text-primary italic">Photographers</span></h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              Founded on the belief that every profound emotion deserves to be immortalized, PhotoZee began as a passion project in a small studio. Today, we are an elite collective of visual artists dedicated to capturing life's most defining moments.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We approach every event not as a job, but as a film waiting to be made. Our unobtrusive, documentary-style methodology ensures that we capture the raw, unfiltered essence of your day while delivering a final product that looks like a high-end cinematic feature.
            </p>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-border">
              <img src="https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/prewedding1_ouprmc.jpg" alt="Our Studio" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card border border-border p-6 rounded-lg shadow-2xl max-w-xs hidden md:block">
              <Star className="text-primary mb-2" size={32} />
              <p className="font-serif text-xl italic">"They don't just take pictures; they freeze time."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 px-4 md:px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-10 rounded-lg text-center"
          >
            <Camera className="text-primary w-16 h-16 mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">To provide a luxury, stress-free experience while producing stunning, narrative-driven visual art that our clients will cherish for generations.</p>
          </motion.div>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border p-10 rounded-lg text-center"
          >
            <Video className="text-primary w-16 h-16 mx-auto mb-6" />
            <h3 className="font-serif text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">To remain at the vanguard of event cinematography, constantly pushing the boundaries of creative storytelling and technical excellence.</p>
          </motion.div>
        </div>
      </section>


      {/* Timeline */}
      <section className="py-24 bg-card border-t border-border px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-center">Our <span className="text-primary italic">Journey</span></h2>
          <div className="space-y-12">
            {[
              { year: "2014", title: "Founded", desc: "PhotoZee opened its doors as a boutique photography studio." },
              { year: "2016", title: "First 100 Weddings", desc: "Reached our first major milestone in luxury wedding coverage." },
              { year: "2018", title: "Drone Services Added", desc: "Expanded our capabilities with cutting-edge aerial cinematography." },
              { year: "2020", title: "Digital Reels Studio", desc: "Launched our dedicated short-form content division." },
              { year: "2022", title: "National Award", desc: "Recognized as Best Premium Event Cinematographers." },
              { year: "2024", title: "10 Years of Excellence", desc: "Celebrating a decade of capturing unparalleled moments." }
            ].map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-center"
              >
                <div className="md:w-1/3 text-right">
                  <span className="font-serif text-5xl font-bold text-primary/20">{item.year}</span>
                </div>
                <div className="hidden md:flex flex-col items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  {i !== 5 && <div className="w-px h-24 bg-border my-2"></div>}
                </div>
                <div className="md:w-1/2 text-center md:text-left bg-background border border-border p-6 rounded-lg relative w-full">
                  <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
