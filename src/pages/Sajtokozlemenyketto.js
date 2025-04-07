import React, { useEffect } from "react";
import { Button } from "@heroui/react";
import SVG from "components/svg/SVG";

function Sajtokozlemenyketto() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <h1 className="text-4xl font-bold text-center mb-12">
          13 órányi vetítés és sokszínű szakmai programok várják az ELTE Szemle
          látogatóit
        </h1>
        <p>
          <strong>
            Száznál is több nevezés érkezett az idei ELTE Szemlére, ezekből
            közel hetvenet a közönség is láthat majd április 29. és május 2.
            között a Stúdió K-ban. A programban szereplő filmek közül vannak,
            amik az elmúlt időszakban nagy sikereket arattak a Friss Húson és a
            Filmszemlén is, de érdemes lesz odafigyelni az első MOHA (ELTE
            Mozgókép Hallgatók) diplomafilmekre is.
          </strong>
        </p>
        <p>
          A szakmai zsűri – Pálos Gergely, Sós Bálint Dániel, Dér Asia, Csuja
          László, Stork Natasa – a fődíj odaítélésénél idén közel hetven
          versenyfilmből válogathat, amelyeket a közönség tizenhárom blokkban
          tekinthet majd meg. A programban szerepelnek a Magyar Filmszemlén is
          sikerrel vetített alkotások. Ilyen többek között Nagy Dániel
          diplomafilmje, a <em>Budapest 10 óra 25 perc</em>, amely egy
          szürreális utazáson keresztül beszél a mai Magyarországról, S. Papp
          Mátétól a <em>Jimmy Hard balladája</em>, amiben Liber Ágoston
          karaktere az Ördöggel köt paktumot, valamint Kékes Kiara{" "}
          <em>Hazug disznók az álmok is</em> című kísérleti filmje, ami azzal a
          gondolattal játszik el, hogy mi történik, ha betiltják a
          halfogyasztást.
        </p>
        <p>
          Számos ígéretes hallgatói film pedig az idei ELTE Szemlén kezdheti meg
          a sikeres fesztivál körútját. Szabó Dávid András{" "}
          <em>Csak hogy végre valami (sikerüljön) megtörténjen</em> című
          filmjében Árpád apja nagy becsben tartott csokijának az ellopásával
          próbál lenyűgözni egy lányt, Fárizs Mihály <em>Ide-oda</em> című
          munkájának központi kérdése, hogy hol ér véget a barátság, és hol
          kezdődik a szerelem.
        </p>
        <p>
          Komoly fesztiválszereplések várhatnak az első Mohás diplomafilmekre
          is. Kapás Tibor szatirikus hangvételű alkotásában, a{" "}
          <em>Mobil Kisállat Hamvasztásban</em> a kissé mizantróp Tamás
          kényszerül átvenni a családi vállalkozást, amelynek üzemeltetése során
          a nem várt helyzetekben elkezd magára találni. Albert Virág{" "}
          <em>Kétoldali közelítésében</em> a 11 éves Jázmin szüleivel új városba
          költözik, ahol osztálytársai kiközösítik, így képzeletbeli barátjánál,
          Rozinál keres vigaszt.
        </p>
        <p>
          Ezentúl látható lesz Ascher Károly <em>Clairvoyance</em> című filmje,
          amiben feltűnik a <em>Fekete pont</em> főszereplője, Mészöly Anna is,
          Kisházy Esztertől a <em>Ne nézz a Napba</em>, valamint a{" "}
          <em>Cordis</em> című pszichológiai dráma is.
        </p>
        <p>
          Az idei fesztivál különlegessége az egri Eszterházy Károly Egyetem
          vendég blokkja lesz, ahol Kozma Katica <em>Én testem</em> című filmje
          mellett Kovács Mátyás letaglózó drámája, az <em>Ádám fél</em> is
          helyet kap.
        </p>
        <p>
          A szakmai programok idén még hangsúlyosabb szerepet kapnak. A fő
          támogató, a Canon, izgalmas előadásokkal készül, a Camera Kft és a
          Fotoplus is kitelepül, a Filmarchívum pedig animációs workshopot tart.
          Lesz intimitás koordináció workshop Veszelák Bori vezetésével, és
          érkezik Ruttkay Zsófia és Pálfi György is egy mesterkurzussal. Idén is
          lesz zsűri kerekasztal, illetve beszélgetés Lichter Péterrel, Kránicz
          Bencével és Nagy V. Gergővel az elmélet és gyakorlat kapcsolódásáról.
        </p>
        <p>
          Idén egy plakátbörzével is készülnek a szervezők, ahol a{" "}
          <a
            href="https://www.facebook.com/CinemaNiche/?locale=hu_HU"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Cinema Niche
          </a>
          ,{" "}
          <a
            href="https://mozinet.hu"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Mozinet
          </a>
          ,{" "}
          <a
            href="https://magyarhangya.hu/"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Magyarhangya
          </a>{" "}
          és{" "}
          <a
            href="https://cirkofilm.hu/"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Cirko Film
          </a>{" "}
          plakátjaiból válogathatnak az érdeklődők. Az ebből befolyt összeggel
          ELTE-s vizsga- és diplomafilmeket támogat majd a fesztivál.
        </p>
        <p>
          A BEST OF-ba bekerülő filmek előreláthatólag az év végén a{" "}
          <a
            href="http://cinego.hu"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Cinego
          </a>{" "}
          streaming felületen is megtekinthetők lesznek, a díjazottak
          ajándékcsomagot is kapnak.
        </p>
        <p>
          Az ELTE Szemle hosszútávú együttműködést köt a{" "}
          <a
            href="http://biff.hu"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Budapest International Film Festival (BIFF)
          </a>
          -fel. A közös cél a függetlenség és a fiatal tehetségek támogatása.
        </p>
        <p>
          A négynapos fesztivált hagyományosan a BEST OF vetítés zárja május
          2-án, ezt követi az After buli a Könyvtár Klubban. A fesztivál minden
          programja ingyenes. A részletes program és további infók:{" "}
          <a
            href="http://elteszemle.hu"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            elteszemle.hu
          </a>{" "}
          és{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61557156184640"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Facebook oldal
          </a>
          .
        </p>
      </div>

      <Button
        onPress={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg hover:bg-[#702a25] transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  );
}

export default Sajtokozlemenyketto;
