import React, { useEffect } from "react";
import { Button, Image } from "@heroui/react";
import SVG from "components/svg/SVG";

function Sajtokozlemenyketto() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto space-y-6 text-white/90 leading-relaxed text-justify">
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dhzagayrh/image/upload/v1744042816/jimmy1_gdyiid.png"
            alt="Jimmy Hard balladája"
            className="shadow-lg w-full max-w-2xl rounded-3xl"
          />
        </div>
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
          A szakmai zsűri - Pálos Gergely, Sós Bálint Dániel, Dér Asia, Csuja
          László, Stork Natasa - a fődíj odaítélésénél idén közel hetven
          versenyfilmből válogathat, amelyeket a közönség tizenhárom blokkban
          tekinthet majd meg. A programban szerepelnek a Magyar Filmszemlén is
          sikerrel vetített alkotások. Ilyen többek között Nagy Dániel
          diplomafilmje, a <em>Budapest 10 óra 25 perc</em>, amely egy
          szürreális utazáson keresztül beszél a mai Magyarországról, S. Papp
          Mátétól a <em>Jimmy Hard balladája</em>, amiben Liber Ágoston
          karaktere az Ördöggel köt paktumot, valamint Kékes Kiara{" "}
          <em>Hazug disznók az álmok is</em>
          című kísérleti filmje, ami azzal a gondolattal játszik el, hogy mi
          történik, ha betiltják a halfogyasztást.
        </p>
        <p>
          Számos ígéretes hallgatói film pedig az idei ELTE Szemlén kezdheti meg
          a sikeres fesztivál körútját. Szabó Dávid András a{" "}
          <em>Csak hogy végre valami (sikerüljön) megtörténjen</em> című
          filmjében Árpád apja nagy becsben tartott csokijának az ellopásával
          próbál lenyűgözni egy lányt, Fárizs Mihály <em>Ide-oda</em> című
          munkájának központi kérdése, hogy hol ér véget a barátság, és hol
          kezdődik a szerelem.
        </p>
        <p>
          Komoly fesztivál szereplések várhatnak az első Mohás (Mozgokép Szak)
          diplomafilmekre is. Kapás Tibor szatirikus hangvételű alkotásában a{" "}
          <em>Mobil Kisállat Hamvasztásban</em> a kissé mizantróp Tamás
          kényszerül átvenni a családi vállalkozást, amelynek üzemeltetése során
          a nem várt helyzetekben elkezd magára találni. Albert Virág{" "}
          <em>Kétoldali közelítésében</em> a 11 éves Jázmin szüleivel új városba
          költözik, az új osztályában pedig kiközösítik, így a képzeletbeli
          barátjánál, Rozinál keres vigaszt.
        </p>
        <p>
          Ezentúl látható lesz Ascher Károly <em>Clairvoyance</em> című filmje,
          amiben feltűnik a<em>Fekete pont</em> főszereplője, Mészöly Anna is,
          Kisházy Esztertől a <em>Ne nézz a Napba</em>, ami két egykori barátnő
          újbóli találkozását ábrázolja, valamint a <em>Cordis</em> című
          pszichológiai dráma, amiben egy karrierje csúcsán lévő orvosnak kell
          szembenéznie sötét múltjával.
        </p>
        <p>
          Az idei fesztivál különlegessége az egri Eszterházy Károly Egyetem
          vendég blokkja lesz, amiben Kozma Katica a Filmszemlén vetített{" "}
          <em>Én testem</em> című filmje mellett Kovács Mátyás letaglózó drámája
          az <em>Ádám fél</em>
          is helyet kap.
        </p>
        <p>
          A szakmai programok a korábbiaknál is nagyobb szerepet kapnak az idei
          ELTE Szemlén. Az esemény fő támogatója, a Canon, izgalmas előadásokkal
          készül, de kitelepül majd a Camera Kft és a Fotoplus, és a
          Filmarchívum is tart egy animációs workshopot. Az érdeklődők részt
          vehetnek Veszelák Bori intimitás koordinátor által tartott workshopon,
          de érkezik Ruttkay Zsófia és Pálfi György is, akik a Nem vagyok a
          barátod című filmjük kapcsán tartanak egy mesterkurzust. Idén is lesz
          zsűri kerekasztal, illetve Lichter Péterrel, Kránicz Bencével és Nagy
          V. Gergővel beszélgetünk majd az elméleti és gyakorlati munkák
          összefonódásáról, arról, hogy a két szféra hol és hogyan egészítheti
          ki egymást, mik az előnyei és a hátrányai a kettős identitásnak.
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
          ELTE-s vizsga- és diplomafilmek elkészülését támogatja majd a
          fesztivál
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
          streaming felületén is láthatóak lesznek, valamint a nyertes
          alkotóknak ajándékcsomaggal is készülnek.
        </p>
        <p>
          Az ELTE Szemle hosszútávú együttműködési partnere lesz a jövőben a{" "}
          <a
            href="http://biff.hu"
            target="_blank"
            className="text-[#cc2d1c] underline"
            rel="noopener noreferrer"
          >
            Budapest International Film Festival (BIFF)
          </a>{" "}
          A két fesztivál számára egyaránt fontos a függetlenség, valamint a
          fiatal tehetségek felfedezése és támogatása. A jövőben további
          részletek jelennek majd meg az együttműködéssel kapcsolatban.
        </p>
        <p>
          A négynapos fesztivált a hagyományok szerint a BEST OF vetítés zárja
          május 2-án, amit követően a szervezők mindenkit várnak az ELTE Szemle
          After bulijára a Könyvtár Klubba. A fesztivál minden programja nyitott
          és ingyenesen látogatható.
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
