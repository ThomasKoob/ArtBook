import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-dracula-800 text-neutral-900 min-h-screen">
        {/* Header */}
        <header className="mx-auto max-w-screen-2xl px-6 pb-16 mt-10 flex items-start justify-between">
          {/* links: Titel */}
          <div>
            <h1 className="text-5xl xl:text-9xl text-pink-200 hover:text-pink-500/50 transition-all font-semibold tracking-tight">
              ArtBook
            </h1>
            <h2 className="text-2xl text-pink-400 ml-20">by Thomas Koob</h2>
          </div>

          {/* rechts: Navigation */}
          <nav className="flex gap-2 sm:gap-3">
            <Link
              to="/"
              className="rounded px-10 py-2  text-2xl bg-pink-300 hover:bg-neutral-300"
            >
              HOME
            </Link>
            <Link
              to="/gallery"
              className="rounded px-10 py-2 text-2xl  bg-violet-300 hover:bg-neutral-300"
            >
              GALLERY
            </Link>
          </nav>
        </header>

        {/* Seiten-Inhalt */}
        <main className="mx-auto max-w-screen-2xl px-6 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
