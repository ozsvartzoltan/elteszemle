import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useTheme } from "../contexts/ThemeContext"

function ErkezikAHarmadikElteSzemle() {
  const { colors } = useTheme()
  
  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/szponzor/sajtokozlemeny_borito_lgkedf.png"
            alt="Érkezik a III. ELTE Szemle"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          Érkezik a III. ELTE Szemle, hivatalos a zsűri névsora
        </h1>

        <p>
          <strong>
            A tavalyi évhez hasonlóan idén is április 29. és május 2. között rendezik meg az ELTE filmes képzésein készülő hallgatói filmek fesztiválját, az ELTE Szemlét. Az esemény központi helyszíne idén is a Stúdió K Színház lesz, a nyitóvetítésnek azonban a margitszigeti Kristály Színtér ad otthont, míg a BEST OF a Corvin Moziban lesz. Továbbá hivatalos a zsűri névsora is. Az ELTE-n filmes tanulmányokat folytató diákok március 17-ig nevezhetik filmjeiket. Kitekintés képpen más budapesti filmes egyetemek munkái is helyet kapnak a válogatásban. A fesztivál fő támogatója idén ismét a Canon Magyarország.
          </strong>
        </p>

        <p>
          Az elmúlt két év sikere után immár a harmadik kiadásához érkezik az ELTE Szemle. A négynapos fesztivál különleges nyitóeseményére a Kristály Színtéren kerül sor, ahol április 29-én 19:00-kor egy kertmozis vetítésen nézhetik meg az érdeklődők az első versenyblokkot, a Mozizug csapatával együttműködve. Ezt követően április 30-án, valamint május 1-én a Stúdió K Színházban egész nap vetítések, illetve különböző szakmai programok, workshopok, kerekasztal-beszélgetések várják az érdeklődőket. Az eseményt idén is egy BEST OF vetítés zárja május 2-án, amire a Corvin Moziban kerül sor. A vetítést követően a szervezők mindenkit szeretettel várnak az After bulin a Teufelbe. 
        </p>

        <p>
          A fesztivál továbbra is fontos küldetésének tartja, hogy a hazai filmes képzéseken tanuló diákok megismerjék egymás munkáit, és szakmai kapcsolatokat alakítsanak ki egymás alkotásaiból inspirálódva. Ennek szellemében egy vendégblokk keretein belül az SZFE, a MOME és a METU hallgatóinak válogatott filmjeit tekinthetik meg az érdeklődők. 
        </p>

        <p>
          A beérkezett filmeket egy négytagú zsűri fogja értékelni, amelynek tagjai Füzes Dániel (Ellentétes alapállás, Az utolsó lélek az ördögé) filmrendező, Kőrösi Máté (Dívák) dokumentumfilm-rendező, Martin Wanda fotográfus, valamint Karácsony Péter (A kis hatalmasok, Lesen) filmrendező. A zsűri a BEST OF összeállítása mellett dönt a fesztivál fődíjáról, amely egy eszközbérlési csomag lesz a Canon Magyarország jóvoltából.
        </p>

        <p>
          A fesztivál összes programja változatlanul ingyenesen látogatható. Az esemény fő támogatója a Canon Magyarország, kiemelt támogatója és technikai kivitelezője a Mindenki Mozija. Az ELTE filmszakos hallgatói március 17-ig nevezhetik filmjeiket az <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2xhelfzpV8Jyk82vE-uiXm3yt_1Nw-QNVOBa1QJCuJ1Kr_g/viewform?fbclid=IwY2xjawQWZ4RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeLXkGusujqSGUDE1Gn3So3excfmVeXK19lHu_PHbD7LN53ez1RS9luZ3572M_aem_QRFfIiOj3MvPQkLQgvc6tw" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: colors.linkColor }}>alábbi linken</a>. További infók az esemény weboldalán, valamint <a href="https://www.instagram.com/elteszemle?igsh=dmVhZ3czMmoyMG5h" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: colors.linkColor }}>social media felületein</a>. Részletes program április első felében várható.
        </p>
      </div>

      <Button
        onPress={() => {
          document.body.scrollTop = 0
        }}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}

export default ErkezikAHarmadikElteSzemle
