import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"

function Fotokiallitas() {
  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-20 space-y-12 text-justify">
      {/* Header */}
      <div className="space-y-4 text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/oldal_kepek/fotokiallitas.jpg"
            alt="Fotókiállítás"
            className="shadow-lg w-full max-w-4xl rounded-3xl"
          />
        </div>
      </div>

      {/* Image */}

      {/* Fotók list */}
      <div className="max-w-4xl mx-auto text-white space-y-6 text-lg">
        <p>
          <strong>
            Az elte.WERK részeként az alábbi munkák lesznek kiállítva:
          </strong>
        </p>

        <ul className="space-y-4">
          <li>
            <strong>
              <em>Halak hűlt helye</em>
            </strong>
            <br />
            Rendező: Adonyi-Walsh Gáspár
            <br />
            Werk fotók: Gálhidy Zoltán, Bujnovszky Vanda
          </li>
          <li>
            <strong>
              <em>Kétoldali közelítés</em>
            </strong>
            <br />
            Rendező: Albert Virág
            <br />
            Werk fotók: Eloy Rodriguez, Komlós Ábel, Szentpétery Vanda Léda
          </li>
          <li>
            <strong>
              <em>Térden haraptak álmomban</em>
            </strong>
            <br />
            Rendező: Bíró Rozi
            <br />
            Werk fotók: Rácz Olivér
          </li>
          <li>
            <strong>
              <em>Zsigereim</em>
            </strong>
            <br />
            Rendező: Fárizs Mihály
            <br />
            Werk fotók: Somorjai Máté, Bagossy Bálint
          </li>
          <li>
            <strong>
              <em>Ide-oda</em>
            </strong>
            <br />
            Rendező: Fárizs Mihály
            <br />
            Werk fotók: Czeglédi Mátyás
          </li>
          <li>
            <strong>
              <em>Kacifánt</em>
            </strong>
            <br />
            Rendező: Farkas Zsigmond
            <br />
            Werk fotók: Major Bence és Farkas Zsigmond
          </li>
          <li>
            <strong>
              <em>Apám fia</em>
            </strong>
            <br />
            Rendező: Heim Vilmos
            <br />
            Werk fotók: Kisházy Eszter
          </li>
          <li>
            <strong>
              <em>Last Call</em>
            </strong>
            <br />
            Rendező: Ivandro Cabral
            <br />
            Werk fotók: Noor Hanania
          </li>
          <li>
            <strong>
              <em>Hava</em>
            </strong>
            <br />
            Rendező: Joonyoung Kim
            <br />
            Werk fotók: Solongo Soninbayar
          </li>
          <li>
            <strong>
              <em>Házibuli Karaoki</em>
            </strong>
            <br />
            Rendező: Mrena Dorka
            <br />
            Werk fotók: Klenovszky Anna
          </li>
          <li>
            <strong>
              <em>Magda</em>
            </strong>
            <br />
            Rendező: Mrena Dorka
            <br />
            Werk fotók: Mészáros Áron
          </li>
          <li>
            <strong>
              <em>Töredékek</em>
            </strong>
            <br />
            Rendező: Petrányi Levente
            <br />
            Werk fotók: Kelcz Lilla
          </li>
          <li>
            <strong>
              <em>Jimmy Hard balladája</em>
            </strong>
            <br />
            Rendező: S. Papp Máté
            <br />
            Werk fotók: a stáb tagjai
          </li>
          <li>
            <strong>
              <em>Szakadás</em>
            </strong>
            <br />
            Rendező: Szabó Levente
            <br />
            Werk fotók: Kulcz Lilla
          </li>
          <li>
            <strong>
              <em>Nem fogok fizetni</em>
            </strong>
            <br />
            Rendező: Szirmai János
            <br />
            Werk fotók: Czeglédi Mátyás
          </li>
          <li>
            <strong>
              <em>Kopaszok</em>
            </strong>
            <br />
            Rendező: Mandula Lujza
            <br />
            Werk fotók: Klucsik Franci
          </li>
          <li>
            <strong>
              <em>Negyed szlovák, nyolcad szerb</em>
            </strong>
            <br />
            Rendező: Taraczky Mila
            <br />
            Werk fotók: Farkas Szandra
          </li>
          <li>
            <strong>
              <em>Bölcsesség és tej</em>
            </strong>
            <br />
            Rendező: Vajdai Liza Vera
            <br />
            Werk fotók: Mészáros Áron
          </li>
        </ul>

        <p>
          Az elte.JELEN részeként az alábbi hallgatók munkái tekinthetők meg:
          Mandula Lujza, Rözge Borisz, Palkovits Eszter, Fárizs Mihály, Reuter
          Réka, Orbán Róza, Juhász Maja, Kövesi Bálint, Szabó Sipos Tamás, Bíró
          Rozi, Adonyi-Walsh Gáspár, Béres Péter, Mrena Dorka, Nagy Kornél
        </p>

        <p>
          A fotókiállítás megnyitóját <strong>április 29-én 18 órakkor</strong>{" "}
          tartjuk. A képek április 29. és május 1. között lesznek kiállítva a
          Stúdió K-ban.
        </p>

        <p>
          A kiállítást Somorjai Máté szervezi. A képeket két kurátor, Mucsi
          Ágota és Balázs Gáspár válogatta.
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

export default Fotokiallitas
