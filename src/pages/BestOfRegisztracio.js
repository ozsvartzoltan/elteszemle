import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"

export default function BestOfRegisztracio() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/oldal_kepek/news_4.jpg"
            alt="Elte Szemle"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          Regisztráció a BEST OF vetítésre
        </h1>

        <p>
          A fesztivál zárónapján, <strong>május 2-án 18:00-kor</strong>{" "}
          tekinthetitek meg a zsűri által legjobbnak ítélt filmeket a{" "}
          <strong>Puskin Mozi nagytermében</strong>, ahol kiderül, melyik film
          nyeri a fesztivál fődíját, ami egy{" "}
          <strong>500 000 forintos gyártási támogatás</strong> a fesztivál fő
          támogatója, a Canon jóvoltából.
        </p>

        <p>
          Az{" "}
          <a
            href="https://forms.gle/kEVn5WQG8PJDLpKz7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cc2d1c] underline"
          >
            alábbi űrlap kitöltésével tudjátok biztosítani a helyeteket a
            vetítésre.
          </a>{" "}
          <br />
        </p>

        <p>
          Ezen kívül <strong>egyedül az első blokk</strong> regisztrációhoz
          kötött,{" "}
          <a
            href="https://forms.gle/p9JxQRHH5D7MjvLu9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cc2d1c] underline"
          >
            amire itt tudjátok bebiztosítani a helyeteket.
          </a>{" "}
          <br />
        </p>

        <p>
          A fesztivál többi blokkja és programja{" "}
          <strong>mind regisztráció nélkül</strong> látogatható! A helyfoglalás{" "}
          <strong>érkezési sorrend szerint</strong> történik.
        </p>
      </div>

      <Button
        onPress={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg hover:bg-[#702a25] transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}
