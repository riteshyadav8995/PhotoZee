export interface Testimonial {
  id: string;
  name: string;
  event: string;
  eventType: string;
  rating: number;
  review: string;
  date: string;
  location: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aisha & Rohan",
    event: "Aisha & Rohan's Wedding",
    eventType: "Wedding",
    rating: 5,
    review: "PhotoZee captured the soul of our wedding. Every time we look at the photos, we are transported back to that magical day. Truly extraordinary work.",
    date: "October 2023",
    location: "Udaipur, India",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    id: "t2",
    name: "Michael Chen",
    event: "Tech Innovators Summit",
    eventType: "Corporate",
    rating: 5,
    review: "Professional, unobtrusive, and the final video was a masterpiece. They made our corporate event look like a Hollywood premiere.",
    date: "March 2024",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    id: "t3",
    name: "Priya & Amit",
    event: "Priya & Amit's Engagement",
    eventType: "Pre-Wedding",
    rating: 5,
    review: "The pre-wedding shoot was incredibly fun. Zee and his team made us feel so comfortable, and the cinematic teaser left all our friends speechless.",
    date: "December 2023",
    location: "Goa, India",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  },
  {
    id: "t4",
    name: "Sarah Jenkins",
    event: "Sarah's 30th Gala",
    eventType: "Birthday",
    rating: 5,
    review: "I wanted my 30th to feel epic, and PhotoZee delivered. The candid moments they caught are priceless.",
    date: "February 2024",
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
  },
  {
    id: "t5",
    name: "Neha & Vikram",
    event: "Neha & Vikram's Wedding",
    eventType: "Wedding",
    rating: 5,
    review: "Their attention to detail is unmatched. From the intricate embroidery on my lehenga to the tear in my father's eye, they missed nothing.",
    date: "November 2023",
    location: "Jaipur, India",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80"
  },
  {
    id: "t6",
    name: "David Smith",
    event: "Nexus Launch Event",
    eventType: "Corporate",
    rating: 5,
    review: "A highly talented team that understands brand storytelling. The highlight reel they produced was perfect for our marketing campaign.",
    date: "January 2024",
    location: "Bangalore, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    id: "t7",
    name: "Kavita & Arjun",
    event: "Kavita & Arjun's Anniversary",
    eventType: "Anniversary",
    rating: 5,
    review: "We hired them for our 10th anniversary, and it felt just as special as our wedding day. A beautiful experience from start to finish.",
    date: "April 2024",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
  },
  {
    id: "t8",
    name: "Ravi Patel",
    event: "Ravi's Destination Wedding",
    eventType: "Wedding",
    rating: 5,
    review: "We flew PhotoZee out for our destination wedding, and it was the best decision we made. The drone footage was absolutely spectacular.",
    date: "May 2024",
    location: "Maldives",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80"
  }
];