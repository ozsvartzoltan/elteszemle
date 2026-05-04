import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useTheme } from "../contexts/ThemeContext"

export default function BestOf2026() {
  const { colors } = useTheme()

  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/2026/hirek/best_of_hir_cover.jpg"
            alt="A III. ELTE Szemle BEST OF válogatása"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">
          A III. ELTE Szemle BEST OF válogatása
        </h1>

        <p>
          A 2026-os ELTE Szemle szakmai zsűrije (Kőrösi Máté, Martin Wanda, Füzes Dániel) az alábbi filmeket ítélte a legjobbaknak:
        </p>

        <div className="space-y-1 text-left">
          <p>Kárpáti Jakab: Elköltözöm</p>
          <p>Mandula Lujza: Indián nyár</p>
          <p>Donáth Péter: Simon</p>
          <p>Ress Abigél: Cudar világ</p>
          <p>Heim Vilmos: Bleu subjectif</p>
          <p>Mrena Dorka: Nem vagyok faszán</p>
        </div>

        <p>A fesztivál fődíját, és a vele járó eszközbérlési támogatást Ress Abigél Cudar világ című filmje nyerte.</p>

        <p className="text-xl font-semibold">Gratulálunk!</p>

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
