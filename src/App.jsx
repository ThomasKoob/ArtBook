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
            <a
              href="https://www.instagram.com/thomas__koob/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-5xl xl:text-9xl text-pink-200 hover:text-pink-500/70 transition-all transform hover:scale-105 font-semibold tracking-tight cursor-pointer">
                ArtBook
              </h1>
            </a>
            <h2 className="text-2xl text-pink-400 ml-20">by Thomas Koob</h2>
          </div>

          {/* rechts: Navigation */}
          <nav className="flex shrink-2 gap-2 sm:gap-3">
            <Link
              to="/"
              className="btn btn-primary text-cyan-900 hover:text-gray-700 hover:bg-teal-200 btn-sm sm:btn-md md:btn-lg"
            >
              HOME
            </Link>
            <Link
              to="/gallery"
              className="btn btn-secondary text-cyan-900 hover:text-gray-700 hover:bg-lime-100 btn-sm sm:btn-md md:btn-lg"
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
