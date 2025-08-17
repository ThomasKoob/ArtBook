import { useState } from "react";
import ImageCard from "../components/ImageCard";
import ImageModal from "../components/ImageModal";

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
  { id: 20, src: "/images/ArtBook20.jpeg", title: "" },
  { id: 21, src: "/images/ArtBook21.jpeg", title: "" },
  { id: 22, src: "/images/ArtBook22.jpeg", title: "" },
  { id: 23, src: "/images/ArtBook23.jpeg", title: "" },
  { id: 24, src: "/images/ArtBook24.jpeg", title: "" },
  { id: 25, src: "/images/ArtBook25.jpeg", title: "" },
  { id: 26, src: "/images/ArtBook26.jpeg", title: "" },
  { id: 27, src: "/images/ArtBook27.jpeg", title: "" },
  { id: 28, src: "/images/ArtBook28.jpeg", title: "" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <main className=" mx-30 px-4 pb-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {IMAGES.map((img) => (
          <ImageCard key={img.id} img={img} onOpen={setSelected} />
        ))}
      </div>
      {selected && (
        <ImageModal img={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
};

export default Gallery;
