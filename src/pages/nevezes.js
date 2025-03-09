import React from "react";
function Nevezes() {
  return (
    <div className=" bg-black text-white px-4 md:px-20 lg:px-40 py-16 ">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Nevezési információk
        </h1>
        <div className="space-y-6 text-justify leading-relaxed">
          <p className="">
            Az idei ELTE Szemlére minden ELTE filmszakos hallgató március 17-ig
            nevezheti filmjeit. A benevezett filmek mennyiségét illetően kitétel
            nincs, így arra bátorítunk mindenkit, hogy több filmjét is adja le.
            A 2-3 perces órai feladatoktól egészen a 30 perces vizsga- és
            diplomafilmekig minden alkotást szeretettel várunk, legyen az
            fikciós, dokumentum, vagy kísérleti film.
          </p>
          <p>
            Nevezni{" "}
            <a
              className="underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLScHt5MEKUovXFPOUiP9uKdk0kkgaaueTRiyAZUvhaCKMka63A/viewform?fbclid=IwY2xjawI1haZleHRuA2FlbQIxMAABHQ_qgLEfoRmDBv0AZa98skUey-Pz_wfiFrhuSxGGFpiCID0TzRv-0SG_KQ_aem_f1Ywo40dndBxO14jZ_cOMw"
            >
              itt
            </a>{" "}
            tudtok.
          </p>
          <p>
            A fesztivál ideje alatt egy{" "}
            <a href="/fotokiallitas">fotókiállítás</a> is lesz. Az elte.JELEN-re
            a címben szereplő hívószóhoz társítható munkákkal tudtok nevezni,
            míg az elte.WERK-re behind the scenes képekkel. Részletek az{" "}
            <a href="/fotokiallitas" className="underline">
              alábbi linken
            </a>
            .
          </p>
          <p>
            A JELEN-re{" "}
            <a href="https://forms.gle/HPTCd1nbTHL7TaRr5" className="underline">
              itt
            </a>
            , a WERK-re{" "}
            <a href="https://forms.gle/5euN1BMHbN44v2wK9" className="underline">
              itt
            </a>{" "}
            tudtok nevezni március 31-ig.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nevezes;
