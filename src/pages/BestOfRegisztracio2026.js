import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useTheme } from "../contexts/ThemeContext"

export default function BestOfRegisztracio2026() {
  const { colors } = useTheme()

  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/2026/hirek/3_hir_cover.jpg"
            alt="Regisztracio a BEST OF vetitesre"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          Regisztráció a BEST OF vetítésre
        </h1>

        <p>
          A 2026-os ELTE Szemle utolsó napján a szakmai zsűri által összerakott BEST OF
          válogatást nézhetitek meg. A bekerülő filmekre május 1-én a zsűri
          kerekasztal-beszélgetésén derül fény, ami 19:30-kor kezdődik a Stúdió K-ban.
          A fesztivál fődíját a BEST OF vetítésen jelentjük be. A díj egy
          eszközbérlési csomag lesz fő támogatónk, a Canon Magyarország felajánlásából.
        </p>

        <div className="space-y-1 text-left">
          <p>
            <strong>Dátum:</strong> május 2.
          </p>
          <p>
            <strong>Időpont:</strong> 18:00
          </p>
          <p>
            <strong>Helyszín:</strong> Corvin Mozi
          </p>
        </div>

        <p>
          A vetítésre az{" "}
          <a
            href="https://forms.gle/qH28FSzd159p5mzJA"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: colors.linkColor }}
          >
            alábbi űrlap kitöltésével tudtok regisztrálni.
          </a>
        </p>
      </div>

      <Button
        onPress={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
          localStorage.removeItem("name")
        }}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}
