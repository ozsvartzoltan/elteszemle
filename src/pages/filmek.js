import React, { useState, useEffect, useRef } from "react";
import { Tabs, Tab, Skeleton, Image, Button } from "@heroui/react";
import { movies } from "utils/const";
import SVG from "components/svg/SVG";

function Filmek() {
  const [selectedTab, setSelectedTab] = useState(Object.keys(movies)[0]);
  const [loadedImages, setLoadedImages] = useState({});
  const tabContainerRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const scrollTabs = (direction) => {
    if (tabContainerRef.current) {
      const scrollAmount = 200;
      tabContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let blokk = localStorage.getItem("name");
    if (blokk?.split(" ")[1] === "Blokk") {
      setSelectedTab(blokk);
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Filmek</h1>

        <div className="relative mb-8">
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <SVG type="chevronLeft" />
          </button>

          <div
            ref={tabContainerRef}
            className="overflow-x-auto scrollbar-hide px-8"
          >
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={setSelectedTab}
              color="primary"
              variant="underlined"
              className="inline-flex min-w-max whitespace-nowrap"
            >
              {Object.keys(movies).map((block) => (
                <Tab key={block} title={block} />
              ))}
            </Tabs>
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <SVG type="chevronRight" />
          </button>
        </div>

        <div className="space-y-10">
          {movies[selectedTab].map((movie, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-white/10 rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-2/3 w-full p-6 space-y-2">
                <h2 className="text-2xl font-bold text-[#cc2d1c]">
                  {movie.title}
                </h2>
                <p className="text-sm text-white/90">
                  <strong>Rendező:</strong> {movie.director}
                </p>
                <p className="text-sm text-white/90">
                  <strong>Hossz:</strong> {movie.length}
                </p>
                <p className="text-sm text-white/90">
                  <strong>Típus:</strong> {movie.type}
                </p>

                {movie?.actors !== "-" && (
                  <p className="text-sm text-white/90">
                    <strong>Szereplők:</strong> {movie.actors}
                  </p>
                )}
                <p className="text-sm text-white/90">
                  <strong>Leírás:</strong> {movie.description}
                </p>
              </div>

              <div className="md:w-1/3 w-full flex items-center justify-center p-4">
                <Skeleton isLoaded={loadedImages[index]} className="w-full">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    onLoad={() => handleImageLoad(index)}
                    className="w-full h-auto object-contain max-h-[400px] z-100"
                  />
                </Skeleton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onPress={() => {
          document.body.scrollTop = 0;
        }}
        className="fixed bottom-1 right-3 bg-black text-white  rounded-full shadow-lg hover:bg-[#702a25] transition-all z-10000"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  );
}

export default Filmek;
