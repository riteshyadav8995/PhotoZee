import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      const isMedia = item.category === "videos" || item.category === "reels";
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && !isMedia) onNext();
      if (e.key === "ArrowLeft" && !isMedia) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  const isMedia = item.category === "videos" || item.category === "reels";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-primary transition-colors p-2 z-50"
        >
          <X size={32} />
        </button>

        {!isMedia && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-4 md:left-10 text-white/50 hover:text-primary transition-colors p-4 z-50"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-4 md:right-10 text-white/50 hover:text-primary transition-colors p-4 z-50"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </>
        )}

        <div 
          className="max-w-5xl w-full max-h-[85vh] p-4 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[75vh] w-auto object-contain rounded-sm shadow-2xl"
            />
          ) : item.youtubeId ? (
            <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ) : item.vimeoId ? (
            <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
              <iframe
                src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={item.title}
                loading="lazy"
              ></iframe>
            </div>
          ) : item.videoUrl ? (
            <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl bg-black flex items-center justify-center">
              <video 
                src={item.videoUrl} 
                controls 
                autoPlay 
                className="max-h-[75vh] w-auto"
              />
            </div>
          ) : null}

          <div className="mt-6 text-center text-white">
            <h3 className="font-serif text-3xl font-bold text-primary mb-2">{item.title}</h3>
            <p className="text-white/70">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
