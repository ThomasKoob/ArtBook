import React from "react";
import Gallery from "./pages/Gallery"; // Galerie importieren

// App als Arrow Function
const App = () => (
  <div className="bg-dracula-800 text-neutral-900">
    <header className="ml-40 mb-10 max-w-5xl px-4 py-4">
      <div className="grid grid-cols-2">
        <h1 className="text-9xl text-pink-200 hover:text 9xl hover:text-pink-500/50 hover:font-extrabold transition-all duration-300 font-semibold tracking-tight">
          ArtBook{" "}
        </h1>
        <div className="text-4xl justify-self-end text-pink-400 ml-14 mt-10 ">
          by Thomas Koob
        </div>
      </div>
      <p className="text-sm text-pink-100 ">
        Klicke auf eine Karte, um das Bild groß zu sehen.
      </p>
    </header>
    <Gallery />
  </div>
);

export default App;
