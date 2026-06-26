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
    id: "wedding-shoots",
    title: "Wedding Shoots",
    description: "Comprehensive coverage of your special day.",
    longDescription: "Our wedding shoots are designed to capture every magical moment, from the nervous anticipation of getting ready to the joyous celebration on the dance floor. We provide a complete narrative of your love story.",
    features: [
      "Full Day Coverage (10-12 Hours)",
      "2 Lead Photographers & 1 Assistant",
      "Pre-Wedding Consultation",
      "800+ High-Resolution Edited Images",
      "Custom Online Gallery for 1 Year",
      "Highlight Slideshow (3-5 mins)",
      "Premium 50-page Layflat Album"
    ],
    icon: "Heart",
    imageUrl: "https://images.unsplash.com/photo-1519225421980-716e6f8cce58?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "events",
    title: "Events",
    description: "Professional coverage for corporate and social gatherings.",
    longDescription: "Whether it's a corporate gala, a milestone birthday, or a grand anniversary, our event coverage ensures that the atmosphere, the people, and the key moments are documented flawlessly.",
    features: [
      "Flexible Hourly Coverage (Minimum 4 Hours)",
      "Candid & Structured Group Shots",
      "Detail & Decor Photography",
      "Next-Day Teaser Images",
      "Full Gallery Delivery within 2 Weeks",
      "High-Res & Web-Sized Digital Downloads",
      "Corporate Licensing Included"
    ],
    icon: "Camera",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cinematic-videos",
    title: "Cinematic Videos",
    description: "Breathtaking films that tell a compelling story.",
    longDescription: "We don't just record events; we craft cinematic films. Using state-of-the-art cinema cameras and professional audio equipment, we create a movie-like experience of your most important memories.",
    features: [
      "4K Ultra HD Recording",
      "Multi-Camera Setup (3 Cameras)",
      "Drone Aerial Footage (Weather Permitting)",
      "Professional Audio Recording (Lavalier Mics)",
      "3-5 Minute Cinematic Highlight Trailer",
      "30-60 Minute Full Documentary Edit",
      "Color Grading & Custom Sound Design"
    ],
    icon: "Video",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "photography-packages",
    title: "Photography Packages",
    description: "Tailored photo sessions for portraits, families, and brands.",
    longDescription: "Our standalone photography packages are perfect for lifestyle shoots, family portraits, maternity sessions, or personal branding. We customize the aesthetic to match your vision.",
    features: [
      "2-Hour On-Location or Studio Session",
      "Creative Direction & Posing Guidance",
      "Multiple Outfit Changes (Up to 3)",
      "Professional Retouching on Select Images",
      "100+ High-Resolution Digital Files",
      "Private Online Viewing Gallery",
      "Options for Prints & Canvases"
    ],
    icon: "Aperture",
    imageUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80"
  }
];
