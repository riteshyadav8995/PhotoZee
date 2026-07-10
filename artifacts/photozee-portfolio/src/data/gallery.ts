export interface GalleryItem {
  id: string;
  title: string;
  category: "photos" | "reels" | "videos";
  imageUrl?: string;
  youtubeId?: string;
  vimeoId?: string;
  videoUrl?: string;
  thumbnail?: string;
  description: string;
}

export const gallery: GalleryItem[] = [
  // PHOTOS
  {
    id: "p1",
    title: "Pre-Wedding Magic",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/prewedding1_ouprmc.jpg",
    description: "Beautiful moments before the big day."
  },
  {
    id: "p2",
    title: "Pre-Wedding Romance",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/prewedding2_jhakzg.jpg",
    description: "Capturing the love and excitement."
  },
  {
    id: "p3",
    title: "Wedding Ceremony",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/wedding1_o1mumx.jpg",
    description: "Traditional rituals and blessings."
  },
  {
    id: "p4",
    title: "Together Forever",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488596/wedding2_qfo2pc.jpg",
    description: "A stunning portrait of the couple."
  },
  {
    id: "p5",
    title: "Candid Joy",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488595/image4_apo9z3.jpg",
    description: "Smiles that light up the room."
  },
  {
    id: "p6",
    title: "Vibrant Celebrations",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488594/SaveInta.com_624684953_18090769591856530_3511836272925994130_n_saah6s.jpg",
    description: "The beautiful colors of an Indian wedding."
  },
  {
    id: "p7",
    title: "Elegant Details",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488594/SaveInta.com_624627466_17995701566911910_8825584311455916062_n_j7nuri.jpg",
    description: "Every small detail matters."
  },
  {
    id: "p8",
    title: "Family & Friends",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488594/SaveInta.com_626190813_18167591080397972_4162854643570984198_n_rajmi7.jpg",
    description: "Surrounded by loved ones."
  },
  {
    id: "p9",
    title: "The Perfect Look",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488593/SaveInta.com_525490636_17882106198357301_7653271905011169429_n_id0b7l.jpg",
    description: "Flawless bridal portrait."
  },
  {
    id: "p10",
    title: "Golden Memories",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488593/SaveInta.com_625233220_18142099471464801_1394002767108823554_n_zmlbpz.jpg",
    description: "Memories that will last a lifetime."
  },
  {
    id: "p11",
    title: "Rituals & Traditions",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488593/SaveInta.com_508340020_17876796807357301_258699174900690809_n_wc1cvu.jpg",
    description: "Capturing the essence of tradition."
  },
  {
    id: "p12",
    title: "The Venue",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488592/SaveInta.com_508320538_17876796864357301_7959524437596980884_n_gkyupb.jpg",
    description: "A stunning backdrop for the perfect day."
  },
  {
    id: "p13",
    title: "Joyous Haldi",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488592/SaveInta.com_508287237_17876791116357301_5011568847029135790_n_uezt2i.jpg",
    description: "Laughter and vibrant yellow hues."
  },
  {
    id: "p14",
    title: "Mehendi Night",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488592/SaveInta.com_508392154_17876791098357301_941458597015534277_n_rhz0pb.jpg",
    description: "Intricate designs and celebration."
  },
  {
    id: "p15",
    title: "The Grand Entrance",
    category: "photos",
    imageUrl: "https://res.cloudinary.com/dyzdppaqu/image/upload/v1783488592/SaveInta.com_524853956_17882106225357301_3829946363559729815_n_nikb2r.jpg",
    description: "Stepping into a new journey."
  },

  // VIDEOS
  {
    id: "v1",
    title: "Cinematic Wedding Film",
    category: "videos",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488600/video1_ewxsrt.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488600/video1_ewxsrt.jpg",
    description: "A beautifully captured wedding story."
  },
  {
    id: "v2",
    title: "Pre-Wedding Highlight",
    category: "videos",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video4_sbrswy.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video4_sbrswy.jpg",
    description: "A glimpse into their love story."
  },
  {
    id: "v3",
    title: "The Grand Celebration",
    category: "videos",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video2_yui2q8.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video2_yui2q8.jpg",
    description: "Energy, dancing, and pure joy."
  },

  // REELS
  {
    id: "r1",
    title: "Trending Reel 1",
    category: "reels",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488594/SaveInta.com_AQMOBJmQmE6hmV5HfDwCFPE-agIqHMDZ5wn97jAAWvDBJ4D1LaeQVToDAstRTs5MbLFtCsDB24WqBwLGfLoE_u3aaEal-DeGemD5yYw_w0lbdu.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488594/SaveInta.com_AQMOBJmQmE6hmV5HfDwCFPE-agIqHMDZ5wn97jAAWvDBJ4D1LaeQVToDAstRTs5MbLFtCsDB24WqBwLGfLoE_u3aaEal-DeGemD5yYw_w0lbdu.jpg",
    description: "Quick cinematic moments."
  },
  {
    id: "r2",
    title: "Trending Reel 2",
    category: "reels",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video3_x6np3d.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488595/video3_x6np3d.jpg",
    description: "Behind the scenes and highlights."
  },
  {
    id: "r3",
    title: "Trending Reel 3",
    category: "reels",
    videoUrl: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488592/SaveInta.com_AQO86TPp7vWISQW4PogK5KgSAnNZ7yacrt9Pr3GjZr4ZbLfkNp5gqYQx1aHektbuIgtpDsTI-B8GfVN9EawKxhkcRjjDRwSR9A07UQA_qws0z3.mp4",
    thumbnail: "https://res.cloudinary.com/dyzdppaqu/video/upload/v1783488592/SaveInta.com_AQO86TPp7vWISQW4PogK5KgSAnNZ7yacrt9Pr3GjZr4ZbLfkNp5gqYQx1aHektbuIgtpDsTI-B8GfVN9EawKxhkcRjjDRwSR9A07UQA_qws0z3.jpg",
    description: "Short and sweet memories."
  }
];
