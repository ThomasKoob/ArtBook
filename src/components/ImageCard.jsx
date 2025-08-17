// Kein React-Import nötig

const ImageCard = ({ img, onOpen }) => {
  return (
    <button
      onClick={() => onOpen(img)} // beim Klick Bild an Parent übergeben
      className="group overflow-hidden rounded-xl bg-indigo-950 hover:bg-pink-300 -700  shadow transition hover:shadow-md"
      aria-label={`Zeige ${img.title || "Artwork"} groß`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img.src} // VARIABLE, keine Anführungszeichen!
          alt={img.title || "Artwork"} // VARIABLE
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="text-base font-medium">{img.title}</h3>
      </div>
    </button>
  );
};

export default ImageCard;
