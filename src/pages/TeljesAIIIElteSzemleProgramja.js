import React, { useEffect } from "react"
import { Button, Image } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useTheme } from "../contexts/ThemeContext"

function TeljesAIIIElteSzemleProgramja() {
  const { colors } = useTheme()

  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/2026/hirek/2_h%C3%ADr_cover.png"
            alt="Teljes a III. ELTE Szemle programja"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          Teljes a III. ELTE Szemle programja
        </h1>

        <p>
          <strong>
            Több, mint 60 hallgatói rövidfilmmel érkezik április végén az ELTE Szemle 2026-os évada. Az ELTE-s diploma- és vizsgafilmeken, valamint a különböző órai feladatra készült gyakorlatokon túl két vendég blokkba szedve az SZFE-n, a MOME-n, és a METU-n készülő filmek közül is láthatnak válogatást az érdeklődők. A fesztivál megnyitójának április 29-én este 8-kor a Kristály Színtér ad otthont.
          </strong>
        </p>

        <p>
          A programban idén is több olyan film szerepel, amik a 45. Magyar Filmszemlén már bemutatkozhattak, ilyen többek közt Donáth Péter diplomafilmje a <em>Simon</em>, Szirmai János elsőéves vizsgafilmje, a <em>Cargo</em>, valamint a kísérleti filmes szekció különdíjasa, a <em>Hogy kell Rizst főzni?</em> Számos ígéretes alkotás pedig az idei ELTE Szemlén kezdheti meg a fesztivál körútját. Fárizs Mihály <em>Végem</em> című letaglózó erejű diplomafilmjében Meszléry Judit átlagos napja lassan szürreális labirintussá torzul, míg Gál András <em>Majd jövünk</em> című alkotásában egy pár külföldre költözésének reggelét követhetjük, ahol a felszín alatt látszik kibontakozni az igazi dráma. Látható lesz továbbá a 2024-es ELTE Szemle BEST OF blokkjába bekerülő <em>Háztűznéző</em> című film rendezőjének, Ress Abigélnek a mesterszakos diplomafilmje. A <em>Cudar világ</em>ban egy operett rajongó parkolóőr, egy nap beleszeret egy pánsípos utcazenész indiánba, továbbá Kárpáti Jakab parádés helyzetkomikumú alkotása, az <em>Elköltözöm</em>.
        </p>

        <p>
          A végzős MoHa (Mozgókép Hallgatók) osztály diákjainak legújabb, adaptációs vizsgamunkái is szerepelnek az idei programban. Az <em>Alfák</em>ban Wrochna Fanni társkeresés közben bukkan váratlan arcra, míg a <em>Férfi a Földön</em>ben Hajduk Károly egy pikniken sodródik bizarr szituációba legújabb barátnőjével, és fiával. Mandula Lujza <em>Indián nyár</em> című alkotásában egy legjobb barátság megpróbáltatását követjük végig, Béres Péter <em>Voltaképpen kik vagyunk?</em> című filmjében pedig kiderül, hogyan reagál egy férfi, amikor egyik napról a másikra felesége nem ismeri fel.
        </p>

        <p>
          Az első vendég blokkban látható lesz többek közt a tavalyi Friss Húson két nagy sikert arató alkotás: Nagyistók Edit <em>Ugar</em>, valamint Tóth Kristóf Zsolt <em>Túlpart</em> című munkája, a második blokkban pedig szerepel a tavalyi CineFest CineNewWave szekciójában a Nemzetközi Kritikusok díját elnyerő rövidfilm: dr. Mokrai Mihály <em>A Hóhér Reggelije</em> című alkotása. A teljes filmes programot <a href="/filmek" className="underline" style={{ color: colors.linkColor }}>itt</a> lehet megtekinteni.
        </p>

        <p>
          A Stúdió K-ban megtekinthető lesz egy <a href="/fotokiallitas" className="underline" style={{ color: colors.linkColor }}>fotókiállítás</a>, ahol a MOHA VETÍTÉS- ÉS BULISOROZAT képeiből láthatnak válogatást az érdeklődők. A MOHA BULI a mohák, azaz a mozgókép hallgatók filmnézős-táncolós eseménye, ahol már 2024 novembere óta ismerkednek, találkozunk egymással és egymás munkáival a szak hallgatói. A fotókiállítás abból az előrevetített nosztalgiából inspirálódik, amellyel „majd évekkel később, egy véletlenül elénk kerülő fényképről eszünkbe jutnak majd a jelen közös éjszakái”.
        </p>

        <p>
          A vetítések mellett különböző <a href="/szakmai_programok" className="underline" style={{ color: colors.linkColor }}>szakmai programok</a> is lesznek. Április 30-án a Nemzeti Filmarchívum workshopján filmszalagra lehet készíteni rövid animációt, míg május 1-én egy nem mindennapi improvizációs workshopra kerül sor. Ezentúl intimitás-koordinációs, és kaszkadőr workshop is színesíti a programot, amelyek izgalmas betekintést nyújtanak a két szakmába, továbbá az esemény fő támogatója, a Canon Magyarország is készül izgalmas szakmai előadásokkal.
        </p>

        <p>
          A négynapos fesztivált a hagyományok szerint a BEST OF vetítés zárja május 2-án, ezúttal a Corvin Moziban, amit követően a szervezők mindenkit várnak az ELTE Szemle After bulijára a Teufelbe. Az <a href="https://fb.me/e/6vmVBAurz" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: colors.linkColor }}>esemény</a> minden programja nyitott és ingyenesen látogatható. A részletes program és további információk elérhetőek az esemény weboldalán, valamint a <a href="https://www.instagram.com/elteszemle/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: colors.linkColor }}>social media felületein</a>.
        </p>
      </div>

      <Button
        onPress={() => {
          document.body.scrollTop = 0
        }}
        className="fixed bottom-1 right-3 bg-black text-white shadow-lg transition-all"
        style={{ borderRadius: '9999px' }}
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}

export default TeljesAIIIElteSzemleProgramja