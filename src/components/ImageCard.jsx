import React from "react";

const ImageCard = ({ img, onOpen }) => {
  return (
    <div className="group overflow-hidden rounded-xl bg-gray-800 shadow transition hover:shadow-md">
      <button
        onClick={() => onOpen(img)}
        className="group overflow-hidden p-1.5 rounded-xl bg-black/40 hover:bg-pink-300/50 shadow transition hover:shadow-md"
        aria-label={`Zeige ${img.title || "Artwork"} groß`}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={img.src}
            alt={img.title || "Artwork"}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
          />
        </div>
      </button>
    </div>
  );
};

export default ImageCard;
