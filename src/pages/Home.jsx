import React from "react";

const Home = () => {
  return (
    <section className="relative">
      {/* Hintergrund-Glow */}
      <div aria-hidden="true" className="" />

      {/* Begrüßung */}
      <div className="mx-auto max-w-2xl text-center space-y-3 mb-6">
        <p className=" text-pink-100/90 text-4xl">
          Alien giraffe out of control!
        </p>
      </div>

      {/* GIF */}
      <div className="mx-auto w-full max-w-120">
        {" "}
        {/* → kleiner: max-w-sm ≈ 24rem */}
        <figure className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/Home.gif"
            alt="Künstlerisches Intro"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <figcaption className="sr-only">Animiertes Intro</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Home;
