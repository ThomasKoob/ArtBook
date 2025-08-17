// Kein React-Import nötig

const ImageModal = ({ img, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-xl: w-20xl rounded-xl p-3"
        onClick={(e) => e.stopPropagation()} // Klicks innen nicht bubblen
      >
        <button
          onClick={onClose}
          className="btn btn-ghost font-extralight  absolute text-white m-5 right-1 top-3 rounded-md border-4 px-2 py-1 text-xl"
          aria-label="Schließen"
        >
          X
        </button>

        <figure className="flex flex-col gap-3">
          <img
            src={img.src} // VARIABLE
            alt={img.title || "Artwork"} // Fallback falls title leer ist
            className="mx-auto p-15
             max-h-[70svh w-3xl  bg-black/70 rounded-md object-contain"
          />
          <figcaption className="text-center text-sm text-neutral-600">
            {img.title}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImageModal;
