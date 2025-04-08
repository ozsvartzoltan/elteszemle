import React, { useEffect } from "react";
import { Image, Button } from "@heroui/react";

function Fotokiallitas() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-20 space-y-12 text-justify">
      {/* Header */}
      <div className="space-y-4 text-justify">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">
          Fotókiállítás
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto text-white">
          Az idei ELTE Szemle egyik kísérőprogramja lesz egy két részből álló
          fotókiállítás. Az{" "}
          <a href="https://forms.gle/HPTCd1nbTHL7TaRr5">elte.JELEN-re</a> a
          címben szereplő hívószóhoz társítható munkákkal nevezhetnek a
          hallgatók, míg az{" "}
          <a href="https://forms.gle/5euN1BMHbN44v2wK9">elte.WERK-re</a> behind
          the scenes fotókkal.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src="https://res.cloudinary.com/dhzagayrh/image/upload/v1741364586/elte.jelen.werk2_kbdzke.png"
          alt="Fotókiállítás plakát"
          className="rounded-xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Details */}
      <div className="max-w-4xl mx-auto text-white space-y-6 text-lg">
        <p>Részletek a nevezési felhívásban:</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            as="a"
            href="https://forms.gle/HPTCd1nbTHL7TaRr5"
            target="_blank"
            className="bg-[#cc2d1c] text-white w-full sm:w-auto"
          >
            elte.JELEN nevezési űrlap
          </Button>
          <Button
            as="a"
            href="https://forms.gle/5euN1BMHbN44v2wK9"
            target="_blank"
            className="bg-[#cc2d1c] text-white w-full sm:w-auto"
          >
            elte.WERK nevezési űrlap
          </Button>
        </div>

        <p>
          A beválogatott munkák az idei ELTE Szemle alatt, április 29 és május 1
          között lesznek láthatóak a Stúdió K-ban. A fotókiállítás megnyitóját
          április 29-én este tartjuk.
        </p>

        <p>A kiállítást Somorjai Máté és Rözge Borisz szervezik.</p>
      </div>
    </div>
  );
}

export default Fotokiallitas;
