import React from "react";

const ImageModal = ({ img, onClose, isFavorite, onToggleFavorite }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90svh] w-full max-w-4xl rounded-xl bg-black/80 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Schließen */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Herz-Button */}
        <button
          onClick={() => onToggleFavorite(img.id)}
          className="absolute left-3 top-3 text-2xl hover:scale-110 transition"
        >
          <span className={isFavorite ? "text-pink-500" : "text-white/70"}>
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </button>

        {/* Bild */}
        <figure className="flex flex-col gap-3">
          <img
            src={img.src}
            alt={img.title || "Artwork"}
            className="mx-auto max-h-[70svh] w-auto rounded-md object-contain"
          />
          <figcaption className="text-center text-sm text-white/80">
            {img.title}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImageModal;
