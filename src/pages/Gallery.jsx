import React, { useMemo, useState } from "react";
import ImageCard from "../components/ImageCard";
import ImageModal from "../components/ImageModal";
import useLocalStorage from "../hooks/useLocalStorage";

const IMAGES = [
  { id: 1, src: "/images/ArtBook1.jpeg", title: "" },
  { id: 2, src: "/images/ArtBook2.jpeg", title: "" },
  { id: 3, src: "/images/ArtBook3.jpeg", title: "" },
  { id: 4, src: "/images/ArtBook4.jpeg", title: "" },
  { id: 5, src: "/images/ArtBook5.jpeg", title: "" },
  { id: 6, src: "/images/ArtBook6.jpeg", title: "" },
  { id: 7, src: "/images/ArtBook7.jpeg", title: "" },
  { id: 8, src: "/images/ArtBook8.jpeg", title: "" },
  { id: 9, src: "/images/ArtBook9.jpeg", title: "" },
  { id: 10, src: "/images/ArtBook10.jpeg", title: "" },
  { id: 11, src: "/images/ArtBook11.jpeg", title: "" },
  { id: 12, src: "/images/ArtBook12.jpeg", title: "" },
  { id: 13, src: "/images/ArtBook13.jpeg", title: "" },
  { id: 14, src: "/images/ArtBook14.jpeg", title: "" },
  { id: 16, src: "/images/ArtBook16.jpeg", title: "" },
  { id: 17, src: "/images/ArtBook17.jpeg", title: "" },
  { id: 18, src: "/images/ArtBook18.jpeg", title: "" },
  { id: 19, src: "/images/ArtBook19.jpeg", title: "" },
  { id: 20, src: "/images/Artbook20.jpeg", title: "" },
  { id: 21, src: "/images/ArtBook21.jpeg", title: "" },
  { id: 22, src: "/images/ArtBook22.jpeg", title: "" },
  { id: 23, src: "/images/ArtBook23.jpeg", title: "" },
  { id: 24, src: "/images/Artbook24.jpeg", title: "" },
  { id: 25, src: "/images/ArtBook25.jpeg", title: "" },
  { id: 26, src: "/images/ArtBook26.jpeg", title: "" },
  { id: 27, src: "/images/ArtBook27.jpeg", title: "" },
  { id: 28, src: "/images/ArtBook28.jpeg", title: "" },
  { id: 29, src: "/images/ArtBook29.jpeg", title: "" },
  { id: 30, src: "/images/ArtBook30.jpeg", title: "" },
  { id: 31, src: "/images/ArtBook31.jpeg", title: "" },
  { id: 32, src: "/images/ArtBook32.jpeg", title: "" },
  { id: 33, src: "/images/ArtBook33.jpeg", title: "" },
  { id: 34, src: "/images/ArtBook34.jpeg", title: "" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);
  const [favoriteIds, setFavoriteIds] = useLocalStorage("favorites", []);
  const [onlyFavs, setOnlyFavs] = useState(false);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const visibleImages = useMemo(() => {
    return onlyFavs
      ? IMAGES.filter((img) => favoriteIds.includes(img.id))
      : IMAGES;
  }, [onlyFavs, favoriteIds]);

  const currentIndex = useMemo(() => {
    if (!selected) return -1;
    return visibleImages.findIndex((img) => img.id === selected.id);
  }, [selected, visibleImages]);

  const handlePrev = () => {
    if (currentIndex === -1) return;
    const i = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    setSelected(visibleImages[i]);
  };

  const handleNext = () => {
    if (currentIndex === -1) return;
    const i = (currentIndex + 1) % visibleImages.length;
    setSelected(visibleImages[i]);
  };

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <button
          onClick={() => setOnlyFavs((v) => !v)}
          className={`rounded ml-7 px-2 py-1 text-sm shadow ${
            onlyFavs
              ? "bg-purple-400 text-white"
              : "bg-cyan-200   hover:bg-violet-300 text-gray-800"
          }`}
          x
        >
          {onlyFavs ? "Nur Favoriten: AN" : "Nur Favoriten: AUS"}
        </button>
        <span className="text-sm text-neutral-400">
          ❤️ {favoriteIds.length}
        </span>
      </div>

      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img) => (
            <ImageCard key={img.id} img={img} onOpen={setSelected} />
          ))}
        </div>
      </div>

      {selected && (
        <ImageModal
          img={selected}
          onClose={() => setSelected(null)}
          isFavorite={favoriteIds.includes(selected.id)}
          onToggleFavorite={toggleFavorite}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default Gallery;
