import React, { useEffect, useRef, useState } from "react";

const ImageModal = ({
  img,
  onClose,
  isFavorite,
  onToggleFavorite,
  onPrev,
  onNext,
}) => {
  const [fade, setFade] = useState(true);
  const [current, setCurrent] = useState(img);

  useEffect(() => {
    if (!img) return;
    setFade(false);
    const t = setTimeout(() => {
      setCurrent(img);
      setFade(true);
    }, 250);
    return () => clearTimeout(t);
  }, [img]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // --- Touch: Swipe
  const startX = useRef(0);
  const startY = useRef(0);
  const swiping = useRef(false);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
    swiping.current = false;
  };

  const handleTouchMove = (e) => {
    const t = e.touches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      swiping.current = true;
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e) => {
    if (!swiping.current) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const THRESHOLD = 50;
    if (dx > THRESHOLD && onPrev) onPrev();
    if (dx < -THRESHOLD && onNext) onNext();
    swiping.current = false;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl rounded-xl bg-black/80 p-4"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>
        <button
          onClick={() => onToggleFavorite(current.id)}
          className="absolute left-3 top-3 text-2xl hover:scale-110 transition"
        >
          <span className={isFavorite ? "text-pink-500" : "text-white/70"}>
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </button>

        {/* Pfeile */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white text-xl hover:bg-white/30"
          >
            ‹
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white text-xl hover:bg-white/30"
          >
            ›
          </button>
        )}
        <figure className="flex flex-col gap-3">
          <img
            key={current.id}
            src={current.src}
            alt={current.title || "Artwork"}
            className={`mx-auto max-h-[70vh] w-auto rounded-md object-contain 
                        transition-opacity duration-300 
                        ${fade ? "opacity-100" : "opacity-0"}`}
          />
          <figcaption className="text-center text-sm text-white/80">
            {current.title}
          </figcaption>
        </figure>

        <div className="mt-2 text-center text-xs text-white/50 sm:hidden"></div>
      </div>
    </div>
  );
};

export default ImageModal;
