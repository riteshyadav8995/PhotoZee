import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiYoutube, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold tracking-wider text-foreground">
                Photo<span className="text-primary">Zee</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Capturing moments, crafting memories. We transform your most precious events into timeless cinematic masterpieces.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <SiInstagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <SiFacebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <SiYoutube size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                <SiWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mumbai, India</li>
              <li>+91 98765 43210</li>
              <li>photozee@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 PhotoZee Videography & Photography. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
