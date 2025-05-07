import React, { useEffect } from "react"
import { Image, Button } from "@heroui/react"

export default function Bestof() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-20 space-y-12">
      {/* Header */}
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold">
          A II. ELTE Szemle BEST OF válogatása
        </h1>
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/oldal_kepek/best_of.jpg"
            alt="Best Of Poster"
            className="rounded-xl shadow-lg w-full max-w-4xl"
          />
        </div>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          A 2025-ös ELTE Szemle szakmai zsűrije (Pálos Gergely, Dér Asia, Sós
          Bálint Dániel, Stork Natasa, Csuja László) az alábbi filmeket ítélték
          a legjobbaknak:
        </p>
      </div>

      {/* Film List */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4 text-lg text-white">
        <ul className="space-y-4">
          <li>
            <strong>
              Kékes Kiara: <em>Hazug disznók az álmok is</em>
            </strong>
          </li>
          <li>
            <strong>
              Zseni Márton: <em>Majdnem</em>
            </strong>
          </li>
          <li>
            <strong>
              Taraczky Mila: <em>Mélyen megvetett ágy</em>
            </strong>
          </li>
          <li>
            <strong>
              Kapás Tibor: <em>Mobil Kisállat Hamvasztás</em>
            </strong>
          </li>
          <li>
            <strong>
              Kisházy Eszter: <em>Ne nézz a napba</em>
            </strong>
          </li>
        </ul>

        <p className="text-xl font-bold">
          A fesztivál fődíját, amely egy 500 000 forintos gyártási támogatás a
          Canon Magyarország jóvoltából, Zseni Márton <em>Majdnem</em> című
          filmje nyerte meg.
        </p>
        <p className="text-xl font-semibold">Gratulálunk!</p>
      </div>
    </div>
  )
}
