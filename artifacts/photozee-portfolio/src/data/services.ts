export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    description: "Timeless frames that tell your love story.",
    longDescription: "We capture the genuine, unscripted moments of your special day, transforming fleeting emotions into everlasting memories.",
    features: ["Candid & Posed Shots", "8-12 Hours Coverage", "500+ Edited Photos", "Online Gallery", "Print Ready Files", "2 Photographers"],
    icon: "Camera",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
  },
  {
    id: "wedding-videography",
    title: "Wedding Videography",
    description: "Cinematic films that make you relive every vow.",
    longDescription: "Our films are crafted like cinematic features, blending raw emotion with masterful storytelling.",
    features: ["4K Resolution", "8-10 Hours Coverage", "Highlight Reel (3-5 min)", "Full Ceremony Film", "Drone Footage", "Same-Day Edit Preview"],
    icon: "Video",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80"
  },
  {
    id: "pre-wedding-shoots",
    title: "Pre-Wedding Shoots",
    description: "Romantic sessions that capture your chemistry.",
    longDescription: "Celebrate your engagement with a bespoke photoshoot designed around your unique dynamic and aesthetic.",
    features: ["2-4 Hours Session", "2 Outfit Changes", "Location of Choice", "150+ Edited Photos", "Print Package Available"],
    icon: "Heart",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80"
  },
  {
    id: "event-photography",
    title: "Event Photography",
    description: "Every moment of your celebration documented.",
    longDescription: "From grand galas to intimate gatherings, we ensure no detail goes unnoticed.",
    features: ["Corporate & Social Events", "6-8 Hours Coverage", "300+ Edited Photos", "Quick Turnaround"],
    icon: "Aperture",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80"
  },
  {
    id: "event-videography",
    title: "Event Videography",
    description: "Cinematic coverage of your special events.",
    longDescription: "Immersive video documentation that brings the energy and atmosphere of your event to the screen.",
    features: ["4K Coverage", "6-8 Hours", "Highlight Video", "Full Event Recording"],
    icon: "Film",
    imageUrl: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80"
  },
  {
    id: "drone-coverage",
    title: "Drone Coverage",
    description: "Breathtaking aerial perspectives.",
    longDescription: "Elevate your visuals with sweeping aerial shots that provide context, scale, and dramatic impact.",
    features: ["Licensed Drone Operator", "4K Aerial Footage", "FAA Compliant", "Multiple Angles"],
    icon: "Plane",
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
  },
  {
    id: "cinematic-videos",
    title: "Cinematic Videos",
    description: "Hollywood-style films for your brand.",
    longDescription: "High-end commercial videography designed to captivate your audience and communicate your vision.",
    features: ["Scripted & Unscripted", "Color Graded", "Sound Design", "Multiple Revisions"],
    icon: "Clapperboard",
    imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80"
  },
  {
    id: "corporate-shoots",
    title: "Corporate Shoots",
    description: "Professional imagery for your business.",
    longDescription: "Crisp, polished photography that elevates your brand identity and executive presence.",
    features: ["Team Portraits", "Event Coverage", "Brand Storytelling", "Quick Delivery"],
    icon: "Briefcase",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  }
];