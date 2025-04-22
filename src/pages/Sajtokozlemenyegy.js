import React, { useEffect } from "react"
import { Image } from "@heroui/react"

function Sajtokozlemenyegy() {
  useEffect(() => {
    localStorage.clear()
  }, [])
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-20 lg:px-40 py-2">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/szponzor/sajtokozlemeny_borito_lgkedf.png"
            alt="Sajtóközlemény"
            className="rounded-xl w-full max-w-4xl"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Új helyszínen, sokszínűbb programmal tér vissza az ELTE Szemle
        </h1>

        <div className="space-y-6 text-justify leading-relaxed">
          <p className="font-semibold">
            Az első kiadás sikere után visszatér az ELTE hallgatóinak
            filmfesztiválja. A második ELTE Szemle április 29 és május 2 között
            zajlik majd a Stúdió K-ban és a Puskin Moziban. A szervezők március
            17-ig várják a nevezéseket, a győztes film rendezőjének 500 000
            forintos gyártási támogatást biztosít következő filmjére az esemény
            fő támogatója, a Canon. Hivatalos továbbá a zsűri névsora is.
          </p>
          <p>
            2024-ben első alkalommal került sor az ELTE Szemlére, amelynek célja
            a közösségépítés, a tudásátadás és a műhelymunka mellett az volt,
            hogy a figyelmet az egyetem falain belül megvalósuló filmes képzésre
            irányítsa. A rendezvény nagy sikerrel zárult, a BEST OF vetítés
            mellett a legtöbb blokk is teltházzal futott, az ELTE-s filmek azóta
            nívós szemléken szerepeltek, díjakat nyertek, így a szervezők
            számára nem volt kérdés, hogy 2025-ben is megrendezik a fesztivált.
            A rendezvény idén is egyetemi fókusszal bír, de fontos célja
            továbbá, hogy megszólítsa a tágabb filmszakmát és az érdeklődő
            közönséget.
          </p>
          <p>
            Az idei ELTE Szemle fő helyszíne a Stúdió K Színház lesz, ahol
            április 29-én kerül sor az esemény megnyitójára, majd az első
            versenyblokkot tekinthetik meg a nézők. A fesztivál idén szeretné
            felhívni a figyelmet a film és a társművészetek kapcsolatára, épp
            ezért a nyitónap estéjén a Prudencia Hart különös kivetkezése című
            színházi előadást láthatja a közönség a Stúdió K-ban. Ezt követően
            három napon keresztül zajlanak majd a vetítések, amelyek mellett
            idén is számos mesterkurzus, workshop, kerekasztal-beszélgetés tárja
            majd fel a filmszakma különböző területeinek összefüggéseit,
            aktuális tendenciáit. Mindemellett egy két részből álló
            fotókiállítás is színesíti majd a programot. A művészeti
            perspektívájú hívószava a{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeTKWaHaQYd_14OGYkOQkCEdDajwxlgRlg1t5kPAxH3KIb-Lg/viewform"
              className="underline"
            >
              JELEN
            </a>
            , míg a szakmaié a{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSentFwpUuQncf6JbpqmeaZHHn25vx0wIXZJFnQn7o3H5AJaSA/viewform"
              className="underline"
            >
              WERK
            </a>{" "}
            lesznek. Részletek a nevezési felhívásban elérhetőek. Az egyetem
            hallgatói március 31-ig adhatják le a munkáikat. Az ELTE Szemlét
            idén is a BEST OF vetítés zárja a Puskin Moziban, a legjobb filmeket
            később a Kerekdomb fesztiválon is vetítik majd. Továbbá idén vendég
            egyetemként az egri Eszterházy Károly Katolikus Egyetem filmes
            hallgatói munkákból is vetítenek egy válogatott blokkot.
          </p>
          <p>
            A beérkezett filmeket ezúttal is szakmai zsűri értékeli, amelynek
            tagjai <span className="font-bold">Pálos Gergely</span> operatőr
            (Egy galamb leült egy ágra, hogy tűnődjön a létezésről, Történetek a
            végtelenségről, Csendes barát),{" "}
            <span className="font-bold">Sós Bálint Dániel</span> (Minden
            rendben) rendező, <span className="font-bold">Dér Asia</span>{" "}
            dokumentumfilm-rendező (Anyáim története, Nem halok meg),{" "}
            <span className="font-bold">Csuja László</span> rendező (Virágvölgy,
            Szelíd), <span className="font-bold">Stork Natasa</span> színésznő
            (Jupiter holdja, Felkészülés meghatározatlan ideig tartó
            együttlétre, Veszélyes lehet a fagyi). A zsűri a BEST OF
            összeállítása mellett idén egy fődíjat is kioszt, amelynek
            tulajdonosa 500 000 forintos pénzdíjban részesül, amelyet következő
            projektje megvalósítására fordíthat.
          </p>
          <p>
            A következő hónapokban fokozatosan érkeznek majd a hírek, újdonságok
            az ELTE Szemlével kapcsolatban, így érdemes figyelemmel követni az{" "}
            esemény weboldalát, illetve a fesztivál{" "}
            <a
              href="https://www.facebook.com/p/ELTE-Szemle-61557156184640/"
              className="underline"
            >
              közösségi média
            </a>{" "}
            felületeit is. Ezeken a platformokon jelennek majd meg a szakmai
            programok, a beszélgetések résztvevői, illetve a vetítések
            közeledtével a filmekről is itt tájékozódhatnak majd a nézők.
          </p>
          <p>
            Az esemény fő támogatója a Canon, kiemelt támogatója és technikai
            kivitelezője a Mindenki Mozija. Az ELTE filmszakos hallgatói március
            17-ig nevezhetik filmjeiket az{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScHt5MEKUovXFPOUiP9uKdk0kkgaaueTRiyAZUvhaCKMka63A/viewform"
              className="underline"
            >
              alábbi linken
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sajtokozlemenyegy
