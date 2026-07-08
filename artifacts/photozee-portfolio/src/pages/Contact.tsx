import { useEffect } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | PhotoZee";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-background pt-20"
    >
      <section className="relative py-24 bg-muted/30 border-b border-border px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6"
          >
            Let's <span className="text-primary italic">Connect</span>
          </motion.h1>
          <p className="text-muted-foreground text-lg">
            We take on a limited number of commissions each year to ensure the highest quality for every client. Reach out to check our availability.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Right: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Studio</h3>
                  <p className="text-muted-foreground">123 Cinematic Ave,<br/>Bandra West,<br/>Mumbai, 400050<br/>India</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-1">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@photozee.com</p>
                  <p className="text-muted-foreground">bookings@photozee.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                  <p className="text-muted-foreground">Mon-Sat: 10 AM - 7 PM</p>
                  <p className="text-muted-foreground">Sun: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Social & Chat Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Connect</h3>
              <div className="flex flex-col gap-3">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-medium hover:bg-[#25D366] hover:text-white transition-all shadow-sm">
                  <SiWhatsapp size={24} />
                  Chat with us on WhatsApp
                </a>
                <div className="flex gap-3">
                  <a href="https://instagram.com/photozee" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-card border border-border hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all shadow-sm">
                    <SiInstagram size={20} />
                    Instagram
                  </a>
                  <a href="https://facebook.com/photozee" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-card border border-border hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shadow-sm">
                    <SiFacebook size={20} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-card border border-border rounded-lg overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/prewedding1_ouprmc.jpg')] bg-cover bg-center grayscale"></div>
              <div className="relative z-10 text-center">
                <MapPin className="text-primary w-8 h-8 mx-auto mb-2" />
                <p className="font-serif text-xl font-bold">Mumbai, India</p>
                <p className="text-sm text-muted-foreground mt-1">Available Worldwide</p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
