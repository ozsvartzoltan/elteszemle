export const headerImage =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1741545099/feher_logo_jw8mxp.png"

export const headerImageBlack =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1741545099/fekete_logo_ydviih.png"

export const canonImage =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817660/canon_njvsww.png"

export const mindenkiMozijaImage =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1741547731/mindenli_logo_vjppvs.png"

export const mhaImage =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817661/mha_logo_hgneh5.png"

export const elteImage =
  "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817663/filmtansz_logo_ktl0r1.png"

export const modalImages = {
  0: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817662/IMG_1_qlf9fc.jpg",
  2: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817662/IMG_2_kv3jlo.jpg",
  1: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817663/IMG_3_iwcgkt.jpg",
  3: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817662/IMG_4_xj468y.jpg",
  4: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817663/IMG_5_qai96g.jpg",
  5: "https://res.cloudinary.com/dhzagayrh/image/upload/v1740817661/IMG_6_ciw7vo.jpg",
}

export const zsurik = [
  {
    name: "Pálos Gergő",
    title: "Operatőr",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1740845025/Pa%CC%81los_Gergely_zwbjpg.jpg",
    description:
      "A legtöbben a legendás svéd rendezővel, Roy Anderssonnal való közös munkáiról ismerik (Egy galamb leült az ágra, hogy tűnődjön a létezésről, Történetek a végtelenségről). 2011-ben végzett a Színház- és Filmművészeti Egyetem operatőr képzésén, ugyanebben az évben beválogatták a Berlinale Talents programba is. Olyan magyar filmeket fényképezett, mint a Jövő nyár, a Saját Erdő, vagy éppen a Zenith. Legújabb munkája Enyedi Ildikó új filmje, a Csendes barát, ami idén kerül a mozikba.",
  },
  {
    name: "Sós Bálint Dániel",
    title: "Rendező, forgatókönyvíró",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1741797927/IMG_2550-min_nfau8w.jpg",
    description:
      "Március 20-tól kerül a magyar mozikba első nagyjátékfilmje a Minden rendben, amit beválogattak az idei Berlinale Perspectives szekciójába is. Ezt megelőző kisfilmjei közül a 2022-es Krémest, valamint a 2017-es Grand Prix-t is vetítették a Friss Húson. Ezentúl társalapítója a Kinopravda rendezői kollektívának, amely 2014 óta a nemzetközi reklámipar egyik meghatározó szereplője. ",
  },
  {
    name: "Dér Asia",
    title: "Dokumentumfilm-rendező",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1741209420/Asia_rfdlel.jpg",
    description:
      "Legutóbbbi egészestés dokumentumfilmje, a Nem halok meg, a 2023-as Varsói Nemzetközi Filmfesztiválon debütált, de bekerült többek között a Verzióra és a 44. Magyar Filmszemle programjába is. Haragonics Sárival közösen rendezett filmje, az Anyáim története több mint 30 ország nemzetközi filmfesztiválján szerepelt. A Magyar Dokumentumfilmesek Egyesülete (MADOKE) és a Filmművész Szövetség elnökségi tagja.",
  },
  {
    name: "Csuja László",
    title: "Rendező, forgatókönyvíró",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1740845026/Csuja_La%CC%81szlo%CC%81_ayflb8.jpg",
    description:
      "Alkotótársával, Nemes Annával közös filmje, a Szelíd a 2022-es Sundance Filmfesztiválon versenyzett, de megfordult Kolozsváron, Triesztben, és Brüsszelben is. A 2018-ban készült Virágvölgy című alkotásuk világpremierjét a Karlovy Vary Nemzetközi Filmfesztiválon tartották. Első egészestés dokumentumfilmjét a Kilenc hónap háborút pedig vetítették a szarajevói- és a lipcsei filmfesztiválon is.",
  },
  {
    name: "Stork Natasa",
    title: "Színésznő",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1741209507/Natasa_kjvfsw.jpg",
    description:
      "A Velencei Nemzetközi Filmfesztiválon bemutatott, majd komoly nemzetközi sikereket elérő Felkészülés meghatározatlan ideig tartó együttlétre című film főszereplője. 2008-ban végzett a Színház- és Filmművészeti Egyetem színművész szakon. Olyan sikeres filmekben szerepelt továbbá, mint a Veszélyes lehet a fagyi, a Szelíd teremtés - A Frankenstein terv, vagy éppen a Jupiter holdja. Hamarosan Goldberg Emília Tiszavirágok című filmjében láthatjuk játszani.",
  },
]

export const fixWidows = (text) => {
  return text
    .replace(/ a /g, " a\u00A0")
    .replace(/ az /g, " az\u00A0")
    .replace(/ és /g, " és\u00A0")
    .replace(/ vagy /g, " vagy\u00A0")
    .replace(/ is /g, " is\u00A0")
    .replace(/ de /g, " de\u00A0")
    .replace(/ ide /g, " ide\u00A0")
    .replace(/ oda /g, " oda\u00A0")
    .replace(/ ami /g, " ami\u00A0")
    .replace(/ aki /g, " aki\u00A0")
}

export const links = {
  hirek: { href: "#hirek", text: "hírek" },
  rolunk: { href: "#rolunk", text: "rólunk" },
  stab: { href: "#stab", text: "stáb" },
  galeria: { href: "/zsurik", text: "zsűri" },
}

export const programLinks = [
  { key: "napi_bontas", text: "napi bontás", href: "/napi_bontas" },
  { key: "filmek", text: "filmek", href: "/filmek" },
  {
    key: "szakmai_programok",
    text: "szakmai programok",
    href: "/szakmai_programok",
  },

  { key: "fotokiallitas", text: "fotókiállítás", href: "/fotokiallitas" },
]

export const news = {
  0: {
    title:
      "13 órányi vetítés és sokszínű szakmai programok várják az ELTE Szemle látogatóit",
    date: "2025. április 8.",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1744042816/jimmy1_gdyiid.png",
    link: {
      page: "/sajtokozlemeny",
    },
    description:
      "Száznál is több nevezés érkezett az idei ELTE Szemlére, ezekből közel hetvenet a közönség is láthat majd április 29. és május 2. között a Stúdió K-ban. A programban szereplő filmek közül vannak, amik az elmúlt időszakban nagy sikereket arattak a Friss Húson és a Filmszemlén is, de érdemes lesz odafigyelni az első MOHA (ELTE Mozgókép Hallgatók) diplomafilmekre is.",
    text: [],
  },

  1: {
    title: "Új helyszínen, sokszínűbb programmal tér vissza az ELTE Szemle",
    date: "2025. március 10.",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1741549309/sajtokozlemeny_borito_lgkedf.png",
    link: {
      page: "/1_sajtokozlemeny",
    },
    description:
      "Az első kiadás sikere után visszatér az ELTE hallgatóinak filmfesztiválja. A második ELTE Szemle április 29. és május 2. között zajlik majd a Stúdió K-ban és a Puskin Moziban. A szervezők március 17-ig várják a nevezéseket, a győztes film rendezőjének 500 000 forintos gyártási támogatást biztosít következő filmjére az esemény fő támogatója, a Canon. Hivatalos továbbá a zsűri névsora is.",
    text: [
      "2024-ben első alkalommal került sor az ELTE Szemlére, amelynek célja a közösségépítés, a tudásátadás és a műhelymunka mellett az volt, hogy a figyelmet az egyetem falain belül megvalósuló filmes képzésre irányítsa. A rendezvény nagy sikerrel zárult, a BEST OF vetítés mellett a legtöbb blokk is teltházzal futott, az ELTE-s filmek azóta nívós szemléken szerepeltek, díjakat nyertek, így a szervezők számára nem volt kérdés, hogy 2025-ben is megrendezik a fesztivált. A rendezvény idén is egyetemi fókusszal bír, de fontos célja továbbá, hogy megszólítsa a tágabb filmszakmát és az érdeklődő közönséget. ",
      "Az idei ELTE Szemle fő helyszíne a Stúdió K Színház lesz, ahol április 29-én kerül sor az esemény megnyitójára, majd az első versenyblokkot tekinthetik meg a nézők. A fesztivál  idén szeretné felhívni a figyelmet a film és a társművészetek kapcsolatára, épp ezért a nyitónap estéjén a Prudencia Hart különös kivetkezése című színházi előadást láthatja a közönség a Stúdió K-ban. Ezt követően három napon keresztül zajlanak majd a vetítések, amelyek mellett idén is számos mesterkurzus, workshop, kerekasztal-beszélgetés tárja majd fel a filmszakma különböző területeinek összefüggéseit, aktuális tendenciáit. Mindemellett egy két részből álló fotókiállítás is színesíti majd a programot. A művészeti perspektívájú hívószava a JELEN, míg a szakmaié a WERK lesznek. Részletek itt, a nevezési felhívásban elérhetőek. Az egyetem hallgatói március 31-ig adhatják le a munkáikat. Az ELTE Szemlét idén is a BEST OF vetítés zárja a Puskin Moziban, a legjobb filmeket később a Kerekdomb fesztiválon is vetítik majd. Továbbá idén vendég egyetemként az egri Eszterházy Károly Katolikus Egyetem filmes hallgatói munkákból is vetítenek egy válogatott blokkot.",
      "A beérkezett filmeket ezúttal is szakmai zsűri értékeli, amelynek tagjai Pálos Gergely operatőr (Egy galamb leült egy ágra, hogy tűnődjön a létezésről, Történetek a végtelenségről, Csendes barát), Sós Bálint Dániel (Minden rendben) rendező, Dér Asia dokumentumfilm-rendező (Anyáim története, Nem halok meg), Csuja László rendező (Virágvölgy, Szelíd), Stork Natasa színésznő (Jupiter holdja, Felkészülés meghatározatlan ideig tartó együttlétre, Veszélyes lehet a fagyi). A zsűri a BEST OF összeállítása mellett idén egy fődíjat is kioszt, amelynek tulajdonosa 500 000 forintos pénzdíjban részesül, amelyet következő projektje megvalósítására fordíthat.",
      "A következő hónapokban fokozatosan érkeznek majd a hírek, újdonságok az ELTE Szemlével kapcsolatban, így érdemes figyelemmel követni az esemény weboldalát, illetve a fesztivál közösségi média felületeit is. Ezeken a platformokon jelennek majd meg a szakmai programok, a beszélgetések résztvevői, illetve a vetítések közeledtével a filmekről is itt tájékozódhatnak majd a nézők. ",
      "Az esemény fő támogatója a Canon, kiemelt támogatója és technikai kivitelezője a Mindenki Mozija. Az ELTE filmszakos hallgatói március 17-ig nevezhetik filmjeiket az alábbi linken.",
    ],
  },
  2: {
    title: "Nevezési információk",
    date: "2025. március 10.",
    image:
      "https://res.cloudinary.com/dhzagayrh/image/upload/v1741549309/nevezesi_ke%CC%81p_dwtqba.png",
    link: {
      page: "/nevezes",
    },
    description:
      "Az idei ELTE Szemlére minden ELTE filmszakos hallgató március 17-ig nevezheti filmjeit. A benevezett filmek mennyiségét illetően kitétel nincs, így arra bátorítunk mindenkit, hogy több filmjét is adja le. A 2-3 perces órai feladatoktól egészen a 30 perces vizsga- és diplomafilmekig minden alkotást szeretettel várunk, legyen az fikciós, dokumentum, vagy kísérleti film.",
    text: [
      "Az idei ELTE Szemlére minden ELTE filmszakos hallgató március 17-ig nevezheti filmjeit. A benevezett filmek mennyiségét illetően kitétel nincs, így arra bátorítunk mindenkit, hogy több filmjét is adja le. A 2-3 perces órai feladatoktól egészen a 30 perces vizsga- és diplomafilmekig minden alkotást szeretettel várunk, legyen az fikciós, dokumentum, vagy kísérleti film.",
      "Nevezni itt tudtok.",
      "A fesztivál ideje alatt egy fotókiállítás is lesz. Az elte.JELEN-re a címben szereplő hívószóhoz társítható munkákkal tudtok nevezni, míg az elte.WERK-re behind the scenes képekkel. Részletek az alábbi linken. (a fotókiállítás alfül linkje ide belinkelve)",
      "A JELEN-re itt, a WERK-re itt tudtok nevezni március 31-ig.",
    ],
  },
}

export const scheduleData = [
  { name: "I. Blokk", date: "04.29", time: "19:30" },
  { name: "II. Blokk", date: "04.30", time: "10:00" },
  {
    name: "Canon szakmai előadások",
    date: "04.30",
    time: "11:00 - 12:30 (Nagyterem)",
  },
  { name: "III. Blokk", date: "04.30", time: "13:30" },
  {
    name: "Filmarchívum - Klassz Program animációs workshop",
    date: "04.30",
    time: "14:00 - 18:00 (Kisterem)",
  },
  { name: "IV. Blokk", date: "04.30", time: "15:00" },
  { name: "Egri Blokk", date: "04.30", time: "16:30" },
  { name: "V. Blokk", date: "04.30", time: "18:00" },
  { name: "VI. Blokk", date: "04.30", time: "19:30" },
  { name: "VII. Blokk", date: "04.30", time: "21:00" },
  { name: "VIII. Blokk", date: "04.30", time: "22:30" },
  { name: "IX. Blokk", date: "05.01", time: "10:00" },
  { name: "X. Blokk", date: "05.01", time: "11:30" },
  {
    name: "Intimitás koordináció workshop",
    date: "05.01",
    time: "11:30 - 13:00 (Kisterem)",
  },
  {
    name: "Pálfi György, Ruttkay Zsófia Mesterkurzus (Nem vagyok a barátod)",
    date: "05.01",
    time: "13:00 - 14:30 (Nagyterem)",
  },

  { name: "XI. Blokk", date: "05.01", time: "15:00" },
  {
    name: "Filmtudomány és Filmkészítés kerekasztal-beszélgetés",
    date: "05.01",
    time: "15:00 - 16:30 (Kisterem)",
  },
  { name: "XII. Blokk", date: "05.01", time: "16:30" },
  { name: "XIII. Blokk", date: "05.01", time: "18:00" },
  {
    name: "Zsűri kerekasztal-beszélgetés",
    date: "05.01",
    time: "19:30 - 20:15 (Nagyterem)",
  },
  {
    name: "Kaos Camping performansz",
    date: "05.01",
    time: "21:00 - 22:30 (Nagyterem)",
  },
]

export const dayLabels = {
  "04.29": "Április 29. (Kedd)",
  "04.30": "Április 30. (Szerda)",
  "05.01": "Május 1. (Csütörtök)",
}

export const extraPrograms = {
  "04.30": [
    {
      title: "Canon szakmai előadások",
      time: "11:00 - 12:30 (Nagyterem)",
      subtitle:
        "Filmes alkímia: Vízióból valóság, a kamera és objektív választás folyamata",
      description: [
        "Hogyan forgatunk filmet: „A pokol élővilága” című film ökoszisztémája: kamera + objektív + monitor",
        "PTZ kamerák (Pan-Tilt-Zoom) dokumentumfilmekhez és kis költségvetésű produkciókhoz",
        "Korlátozott erőforrások optimális beosztása minőségi elvárások csökkentése nélkül",
        "Szakmai tapasztalatok megosztása, példákkal, werkfotókkal, filmrészletekkel",
      ],
      eloadok:
        "M. Deák Kristóf operatőr, Iványi Petra producer, Viesz Richárd dokumentumfilmes/operatőr",
    },
    {
      title: "Filmarchívum - Klassz Program animációs workshop",
      time: "14:00 - 18:00 (Kisterem)",
      description: [
        "A foglalkozás az állóképet először mozgásba lendítő eszközök köré szerveződik. A résztvevők megismerkedhetnek a 19. század legnépszerűbb optikai eszközeivel: taumatróp, zsebmozi, fenakisztoszkóp, zoetróp, praxinoszkóp. Elkészíthetik saját animációs filmjüket a praxinoszkópba, vagy akár 35 mm-es filmszalagra, amit a helyszínen vetítve meg is nézhetnek.",
      ],
      eloadok: "A workshopot Erdős Emese és Gátay-Tóth Mirtill tartják.",
    },
  ],
  "05.01": [
    {
      title: "Intimitás koordináció workshop",
      time: "11:30 - 13:00 (Kisterem)",
      description: [
        "Elsősorban rendezőknek és színészeknek ajánljuk, akik szeretnének bepillantást nyerni az intimitás koordinációba. Egy beszélgetés keretében ismerhetik meg az érdeklődők ezt a kifejezetten új, azonban kifejezetten fontos szakmát és annak működését, olyan kulcsfogalmak mentén, mint például a “consent”. De rövid kontakt-improvizációs fizikai érzet feladatokban is kipróbálhatják majd magukat a résztvevők.",
      ],
      speakers: "A workshopot Veszelák Bori intimitás koordinátor tartja.",
    },
    {
      title: "Pálfi György, Ruttkay Zsófia Mesterkurzus (Nem vagyok a barátod)",
      time: "13:00 - 14:30 (Nagyterem)",
      description: [
        "Vendégeink Pálfi György forgatókönyvíró-filmrendező, és felesége-alkotótársa Ruttkay Zsófia forgatókönyvíró-dramaturg, akik olyan filmeket készítettek közösen, mint a Taxidermia, a Hukkle, vagy éppen a Final Cut: hölgyeim és uraim. A mesterkurzus témája a 2009-ben készült Nem vagyok a barátod című filmjük lesz, amelynek történetét kilenc amatőr szereplővel közösen hozták létre. Beszélgetni fogunk színészvezetésről, castingról, alkotói rugalmasságról, ötletek elengedéséről, vagy az azokhoz való ragaszkodásról.",
      ],
      speakers: "A beszélgetést Szirmai János moderálja.",
      link: {
        url: "https://youtu.be/ZdXwAPjfLvM",
        text: "A Nem vagy a barátod című film az alabbi linkre kattintva érhető el.",
      },
    },
    {
      title: "Filmtudomány és Filmkészítés kerekasztal-beszélgetés",
      time: "15:00 - 16:30 (Kisterem)",
      description: [
        "A kerekasztal-beszélgetés résztvevői a filmkészítés és a filmelmélet találkozásával kapcsolatos tapasztalataikat osztják meg. Elsősorban arra keresik a választ, hogy milyen a kritikusi- alkotói kettős identitás, mi lehet a filmelméleti tudás kifutása, valamint hogy a szakma két különböző iránya milyen helyzetekben képes a hétköznapokban párbeszédbe lépni egymással. A meghívott vendégek az filmalkotói- és elméleti szinten is aktívak, így aktuális képet tudnak közvetíteni erről a kettős szerepről. ",
        "A beszélgetésen részt vesz Kránicz Bence filmkritikus, forgatókönyvíró, az ELTE Filmtanszék oktatója, Lichter Péter kísérleti filmes, a Pécsi Tudományegyetem Filmtanszék oktatója, valamint Nagy V. Gergő forgatókönyvíró, filmkritikus. A beszélgetést Vigh Martin moderálja.",
      ],
    },
    {
      title: "Zsűri kerekasztal-beszélgetés",
      time: "19:30 - 20:15 (Nagyterem)",
      description: [
        "A 2025-ös ELTE Szemle szakmai zsűrijének tagjai elsőként bejelentik az idei BEST OF-ba bekerülő filmeket, valamint azt is, hogy melyik film nyerte a fesztivál fődíját, és az azzal járó 500 000 forintos gyártási támogatást következő filmjére a Canon jóvoltából. Ezt követően pedig megosztják tapasztalataikat, észrevételeiket a filmekről és a zsűrizés folyamatáról.",
      ],
      speakers:
        "A beszélgetésen részt vesz Pálos Gergely, Dér Asia, Stork Natasa, Sós Bálint Dániel és Csuja László.",
    },
    {
      title: "Kaos Camping performansz",
      time: "21:00 - 22:30 (Nagyterem)",
      description: [
        "A Kaos Camping elnevezésű formáció által szimultán vetített, archív super 8-as és 16 mm-es filmjein alapuló installációkat láthat a közönség. A 2000-ben alakult formáció akcióiban a mozielőadás, az ismeretterjesztő prezentáció és egy anarchista performance elemei keverednek. Kizárólag analóg vetítőeszközökkel (diavetítő, lemezjátszó, gramofon, szalagos magnó) hoznak létre installációkat.",
      ],
      speakers:
        "A Kaos camping tagjai: Szeredi Csaba, Szilágyi Kornél, Szolnoki József, Vándor Csaba",
      link: {
        url: "https://kaoscamping.com/",
        text: "A Kaos Camping hivatalos weboldala",
      },
    },
  ],
}

export const movies = {
  "I. Blokk - 04.29 - 19:30": [
    {
      title: "Kétoldali közelítés",
      director: "Albert Virág",
      type: "kisjátékfilm",
      length: "18 perc",
      description:
        "Jázmin 11 éves, imád gyerek lenni. Most azonban nagy változások előtt áll. Szüleivel új városba költöznek, az új osztályában pedig kiközösítik. Az egyetlen hely, ahol biztonságban érzi magát az az otthoni fürdőszoba, benne Rozival, a képzeletbeli baráttal. Albert Virág diplomafilmjében Jázmin egy változásokkal teli hetét követjük végig.",
      actors:
        "Mátyássy Kála, Demeter Villő, Kovács Hanga, Farkas Ádám, Pálos Hanna, Mátyássy Bence",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743583443/vlcsnap-2025-04-01-23h11m09s022_mkqxxz.png",
    },
    {
      title: "Csekk",
      director: "Gát Mihály",
      type: "kisjátékfilm",
      length: "3 perc",
      description:
        '"Te mondd, a te hangod mélyebb!" Két hanyag lakótárs nem tudja kifizetni a havi albérletüket, és úgy döntenek átmennek a tulajhoz, hogy elmondják neki a helyzetüket...',
      actors: "Major Irma, Jánosi Botond",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871314/Csekk3_g82umk.png",
    },
    {
      title: "Ide-oda",
      director: "Fárizs Mihály",
      type: "kisjátékfilm",
      length: "17 perc",
      description:
        "Mikor ér véget egy kapcsolat? Ha kimondjuk, vagy ha már mással beszélgetjük át az éjszakát? Mekkora hullámokat ver egy barátokkal eltötött hétvége két fiatal életében? A Zsigereimmel a tavalyi BEST OF-ba bekerülő Fárizs Mihály vizsgafilmjében a lelkiismeret áll egy burjánzó szerelem lehetőségének útjába.",
      actors:
        "Babai Dénes, Klausz Veronika, Juniki Noémi, Meszléry Judit, Veress Kámen",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581978/IDEODA_2.13.1_jxhep8.png",
    },
    {
      title: "Egy Átlagos Magyar Nő A Teljes Idegösszeomlás Szélén",
      director: "Bíró Rozi és MoHa5-ös alkotótársai",
      type: "kisjátékfilm",
      length: "6 perc",
      description:
        "Groteszk kisrealista szenvedésepizód a mindennapok súlyának elviselhetetlen könnyűségéről, párkapcsolati feszültséggel és a túllocsolástól szenvedő cserepesnövényekkel súlyosbítva.",
      actors: "Udvari-Kardos Tímea, Wéber Simon",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871425/egyatlagos_still2_bms8yq.png",
    },
    {
      title: "Budapest, 10 óra 25 perc",
      director: "Nagy Dániel",
      type: "kisjátékfilm",
      length: "19 perc",
      description:
        "Hanna arra készül, hogy külföldre költözik, azonban a repülés előtti hajnalon eltéved, és egy fordulatos utazás során újra megismeri Magyarországot. Nagy Dániel diplomafilmjét beválogatták a 44. Magyar Filmszemle rövidfilmes versenyszekciójába.",
      actors:
        "Erős Mara, Csernák Norbert, Márton Dorottya, Baranyi Emma, Kukovecz Ákos, Kozáry Ferenc",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582392/bp1025_still3_nzxnnc.jpg",
    },
  ],
  "II. Blokk - 04.30 - 10:00": [
    {
      title: "Gyógyfürdő",
      director: "Jó Kristóf és MoHa5-ös alkotótársai",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        "Miklós a túlbuzgó dolgozó fürdőbe megy, de nehezen találja meg a megnyugvást. Vajon a forró gőz képes ellazítani őt?",
      actors: "Nagy Miklós, Mezei Barbara",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871500/2_seijrr.jpg",
    },
    {
      title: "Lepkék",
      director: "Horváth Barbara",
      type: "kísérleti rövidfilm",
      length: "6 perc",
      description:
        "Négy lány vidáman, felszabadultan beszélget, de valami nincs rendben, egyesével elkezdenek eltűnni. Végül a negyedik lány egyedül kénytelen szembenézni keserű tükörképével.",
      actors: "Juhász Maja, Bíró Rozi, Alicia Lara",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581665/Lepk%C3%A9k_still01_hujxfr.png",
    },
    {
      title: "Portré",
      director: "Horváth Zoltán",
      type: "kisjátékfilm",
      length: "8 perc",
      description:
        "Julinak portrét kell rajzolnia az egyik órájára, de sehogy sem akar összejönni a tökéletes rajz, így egyre frusztráltabbá válik és drasztikus lépésre szánja el magát...",
      actors: "Csaplár Júlia, Kicsák Blanka",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743764799/portre_4_1.8.1_tlfsyo.jpg",
    },
    {
      title: "Tudod ez egy ilyen érzés",
      director: "Béres Péter",
      type: "rövid dokumentumfilm",
      length: "6 perc",
      description:
        '"Nem mondanám, hogy az esetem volt, de az esetem lett." A rendező szülei elmesélik, hogyan ismerték meg egymást egy farkasréti házibuliban.',
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871565/3MamaPapastill_2.2.1_ehzipx.jpg",
    },
    {
      title: "A Teszt",
      director: "Ayoub El Aoubaidi",
      type: "kisjátékfilm",
      length: "6 perc",
      description:
        "A Teszt egy dráma három nő közötti titkokról és feszültségről. Lívia úgy gondolja, hogy terhes, és a terhességi teszt elvégzése közben meghívja barátnőit, Dalmát és Annát, hogy támogassák őt. A helyzet kínossá válik egy váratlan személy érkezésének hatására.",
      actors: "Násztor Eszter, Csizma Blanka, Bozsó Eszter Alma",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743583946/17_haog6a.png",
    },
    {
      title: "A kibxszott hetedik kerületben?!?!",
      director: "Solymos Kristóf",
      type: "kisjátékfilm",
      length: "10 perc",
      description:
        "Egy baráti társaság iszogat és beszélget egy átlagos péntek estén. Egyszer csak a szomszéd átkopog, és elszabadul a pokol...",
      actors: "Durugy Tamás, Kicsák Blanka, Csaplár Júlia, Varga Péter",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582042/kib7ker3_qsaykt.png",
    },
  ],
  "III. Blokk - 04.30 - 13:30": [
    {
      title: "Adászavar",
      director: "Hegedűs Brúnó",
      type: "kisjátékfilm",
      length: "3 perc",
      description:
        "Egy fiatalember elégedetlen tévéje működésével, ezért szerelőt hív, hogy közösen megoldást találjanak a problémára.",
      actors: "Kovács Márk, Lapos Imola",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582338/still02_dwgkex.png",
    },
    {
      title: "Hot girl syndrome",
      director: "Csoboth Dorka",
      type: "kísérleti rövidfilm",
      length: "10 perc",
      description:
        "Pszichiátriai ülések mosódnak össze pornóipari casting-helyzetekkel egy lány fantáziájában, amint próbálja visszafejteni az emlékeit pszicho-szomatikus betegségéről. Csoboth Dorka be- ki- le- fel- szét- meg- át- című egészestés filmjével szerepelt a 44. Magyar Filmszemle kísérleti filmes programjában.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743975119/2.4_tgpdcd_p8y5ma.png",
    },
    {
      title: "Hava",
      director: "Joonyoung Kim",
      type: "kisjátékfilm",
      length: "10 perc",
      description:
        "A film egy Budapesten élő török lányról szól, aki megpróbál megszabadulni egy kellemetlen szagtól, amit a körülötte élők nem éreznek, miközben folyamatosan szakad el a világtól, az otthonától, a családjától, a barátaitól és korábbi szerelmétől is.",
      actors: "Berfin Kutlag, Leman Zeynepcan Aydogan, Arda Bingül",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582208/hava_still_1_crnfqm.png",
    },
    {
      title: "Se veled, se velem",
      director: "Vajdai Liza",
      type: "kisjátékfilm",
      length: "17 perc",
      description:
        "Bodza és Tomi szakít egymással. Ezután megpróbálják túltenni magukat a saját szorongásaikon és egymáson. Se együtt, se egyedül nem jutnak sokra.",
      actors:
        "Kovács Korinna, Durugy Tamás, Csaplár Júlia, Varga Péter, Kistamás Naomi, Jovánovics Eszter",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581780/se_veled_se_velem1_mogbu2.jpg",
    },
    {
      title: "Salut ca va",
      director: "Gát Mihály és MoHa5-ös alkotótársai",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        "A városban egy hely van, ahol nincs térerő, így a pihenni vágyó biciklis futárok itt gyűlnek össze nap, mint nap és beszélgetnek.",
      actors: "Zhao Sute, Morch Ilona, Szirmai János",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871814/SalutCaVa_3_lgmnya.png",
    },
    {
      title: "Last Call",
      director: "Ivandro Cabral",
      type: "kisjátékfilm",
      length: "18 perc",
      description:
        "Gabriela és Joseph nyári románca rövid, de erőteljes volt. Mivel Joseph akkoriban filmes iskolába járt, nem tudott elköteleződni, Gabriela pedig úgy döntött, hogy külföldre költözik, hogy munkát vállaljon. A nő hat hónappal később felhívja Josephet, és egy utolsó találkozót kér, hogy megbeszéljék a dolgaikat és elbúcsúzzanak egymástól. Gabriela el akarja mondani Joseph-nek egy titkát, ami bonyodalmak sorát eredményezi.",
      actors: "Nadine Tavares, Bergendi Barnabás",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743880202/Still_2025-04-04_190031_1.42.3_nnqcjv.jpg",
    },
  ],
  "IV. Blokk - 04.30 - 15:00": [
    {
      title: "Gáspár Márton Gáspár",
      director: "Szirmai János",
      type: "fikciós-rövid dokumentumfilm",
      length: "13 perc",
      description:
        "A narratív történet kitalált, de a helyzetek nagyon is valóságosak. Egy édesapját Görögországban kereső fiúról szól a film. A fiú valószínűleg még sosem találkozott az apjával, és sose látott olyan furcsa dolgokat, amelyeket az apjával tapasztal meg. Szituációs, fikciós-dokumentumfilm.",
      actors: "Márton Csaba, Szirmai Sándor, Horváth Eszter",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581491/3_tcb7yq.jpg",
    },
    {
      title: "robot",
      director: "Nagy Kornél",
      type: "rövid dokumentumfilm",
      length: "6 perc",
      description:
        "Az ember-telenség szó szerint vehető ábrázolása egy tejüzem mindennapjain keresztül, melyben a dokumentarista és az experimentális jelleg megrendítő kompozíciókban vegyül, csendes monotonitásával figyelmeztetve a robotikus jövő kísérteties hatására.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871918/robot4_1.1.6_bghuu6.jpg",
    },
    {
      title: "Anyu",
      director: "Bujdosó Flóra",
      type: "rövid dokumentumfilm",
      length: "14 perc",
      description:
        "“Anyu, hogyan találkoztatok Apuval?” - első és egyben utolsó interjú édesanyámmal. Rom-com, ahogy 2 fiatal találkozik a rendszerváltások időszakában, megnyílnak a nyugati határok, lebomlanak a falak. Új élet, új remények, új célok.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872034/image0_1_jgqvll.jpg",
    },
    {
      title: "Üres székek",
      director: "Kövesi Bálint",
      type: "kisjátékfilm",
      length: "3 perc",
      description:
        "Egy idős férfi reggeli rutinja a szenvedélye és a hiány társaságában. Felvételi film.",
      actors: "Hordós Csaba",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872146/%C3%9CresSz%C3%A9kekStill3_qopybd.jpg",
    },
    {
      title: "Az Istenek alkonya",
      director: "Erkel Bálint",
      type: "rövid dokumentumfilm",
      length: "25 perc",
      description:
        "Éva, egy kendőzetlenül őszinte nyolcvankét éves asszony, aki életének legintimebb pillanataiba kalauzol el bennünket, ahol a szerelem, a hűtlenség és a fájdalmas veszteségek összefonódnak. Szenvedélyes őszinteséggel mesél, miközben kitartóan ápolja párját annak élete utolsó óráiban.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743771254/vlcsnap-2023-09-03-13h07m33s812_mkwbsx.png",
    },
  ],
  "Egri Blokk - 04.30 - 16:30": [
    {
      title: "Riportré",
      director: "-",
      type: "rövid animációs film",
      length: "7 perc",
      description:
        "Az Egri Eszterházy Katolikus Egyetem filmszakos hallgatói animációs filmjében fiatalok és idősek beszélnek a generációk közti szakadékról, a múltjukról, a jelenükről és persze a jövőjükről.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743870864/Riportr%C3%A9_3_ncwj1j.png",
    },
    {
      title: "Ádám Fél",
      director: "Kovács Mátyás",
      type: "kisjátékfilm",
      length: "20 perc",
      description:
        "A film egy szlovák határvidéki kis faluban játszódik, ahol Vica szülei élnek. Az ország háborús készenlét alatt áll, mivel félő, hogy a szomszéd országokat sújtó támadások, valamint az egész európai régióba begyűrűző háború tovább eszkalálódik. Ádám és Vica a lány gyerekkori barátjának, Milosnak a segítségét kérik külföldre szökésükhöz.",
      actors:
        "Szatmári Alíz, Georgita Máté Dezső, Tóth Sándor, Nemesházi Beatrix, Kuhár Róbert, Gere Dénes",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743870946/441900989_485548710464556_3923848048805191584_n_x3sil2.jpg",
    },
    {
      title: "Mari mókatára",
      director: "Sipos Gábor",
      type: "rövid dokumentumfilm",
      length: "5 perc",
      description:
        "Márton Sándorné Marika több mint 20 éve árul babaruhákat. A piac a második otthona. Mária-nap alkalmával megvendégeli az árusokat.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743870908/K%C3%A9perny%C5%91k%C3%A9p_2024-12-07_132324_nwhses.png",
    },
    {
      title: "Én testem",
      director: "Kozma Katica",
      type: "kisjátékfilm",
      length: "21 perc",
      description:
        "Laci életét behálózták az anorexiás rutinok és hazugságok, ám egy váratlan találkozás hatására felszínre törnek a betegség valódi mélységei. Kozma Katica diplomafilmje szerepelt a 44. Magyar Filmszemle rövidfilmes programjában.",
      actors: "Jakab Balázs, Kozma Veronika, Berki Szofi",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743870979/EN_TESTEM_FILMKEP_2_n3r7m3.png",
    },
  ],
  "V. Blokk - 04.30 - 18:00": [
    {
      title: "A sápadt férfi utolsó kísérlete a napozásra",
      director: "Csókás Nándor",
      type: "kisjátékfilm",
      length: "12 perc",
      description:
        "A kilenc éves Rózi épp a nagymamája mellett unatkozik a strandon, amikor hirtelen látomása lesz: segítenie kell a sápadt férfinak meghalni. Csókás Nándor diplomafilmje szerepelt a 2024-es Friss Hús versenyprogramjában is.",
      actors:
        "Havlicsek Bori, Szentgáli Piroska, Hajduk Károly, Mészáros Piroska",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871027/2_tbgtef.png",
    },
    {
      title: "Születésnap",
      director: "Szirmai János",
      type: "kisjátékfilm",
      length: "4 perc",
      description:
        "A film egy diktátor születésnapját meséli el. Harmadik körös felvételi film, egy hét állt rendelkezésre az elkészítésére. A feladat az volt, hogy legyen benne lufi, illetve hűtő. A méltán híres Születésnap című dogmafilm inspirálta, és ehhez mérten itt is az összes dogma szabály szigorúan be lett tartva.",
      actors:
        "Hajdu Lujza, Garamvölgyi Vince, Kepe Marcell, Szirmai Péter, Baló Jakab, Varga Zétény",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743879247/szulistill6_kckduy.jpg",
    },
    {
      title: "Cordis",
      director: "Taraczky Mila",
      type: "kisjátékfilm",
      length: "12 perc",
      description:
        "A karrierje csúcsán járó Maróti doktor orvosi konferenciára érkezik a gáláns Gellért Szállóba, azonban az előadására való felkészülés során szembe kell néznie múltjával, mely alakot ölt az éjszakában. A film forgatókönyvét Orbán Róza írta, akinek a Cordis volt a felvételi filmje az ELTE Filmtudomány mesterszakára.",
      actors:
        "Bölkény Balázs, Jakab-Aponyi Csenge, Pigler Emília, Vetlényi Lili",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743583465/cordis_still_01_pdkmby.jpg",
    },
    {
      title: "Tremor",
      director: "Jó Kristóf",
      type: "kísérleti rövidfilm",
      length: "5 perc",
      description:
        "Egy fiú menekül a háborúból, majd könyveket keres a homokban. Ezután minden átfordul egy furcsa David Lynch-szerű világba...",
      actors: "Szmejkal Zsombor, Mezei Barbara, Juhász Maja",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872243/1_1_n4eane.jpg",
    },

    {
      title: "Szakadás",
      director: "Szabó Levente",
      type: "kisjátékfilm",
      length: "18 perc",
      description:
        "A heves természetű, piti bűnöző Miki egy balul sikerült pénzbehajtás után testvére, a sokkal megfontoltabb Áron segítségét kéri a probléma megoldásában. A két testvér durván összekap a feszült helyzetben, és Miki már nemcsak magát, de Áront is halálos veszélybe sodorja.",
      actors: "Dóra Béla, Nyomárkay Zsigmond",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743580977/szakadas_still_best_aysozs.jpg",
    },
  ],
  "VI. Blokk - 04.30 - 19:30": [
    {
      title: "Jetlag",
      director: "Kriza Áron",
      type: "kisjátékfilm",
      length: "19 perc",
      description:
        "Hosszú amerikai útja után az elkényesztetett Timi a reptérről tart hazafelé az udvariasan kimért Péterrel, a család sofőrjével. Ebédre haza kell érniük, de Timi több kitérőt is tervez.",
      actors: "Füzi Tímea, Marosi Péter",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582088/jetlag_best_wm0vga.jpg",
    },
    {
      title: "Üvegek",
      director: "Somorjai Máté",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        "A tárgyak titkos életéről humorosan megemlékező, ám az emberi sorsokat végig alulnézetből láttató keserédes kisfilm. Dinnyés és citromos ízesítésben, egyenesen az automatából.",
      actors:
        "Ékes Olivér, Kovács Izabella, Kövécs Barnabás, Terék Simon, Bujdosó Flóra",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743764882/%C3%BCvegek_2_ge81mk.png",
    },
    {
      title: "Bátyám, Dodó",
      director: "Mandula Lujza",
      type: "kisjátékfilm",
      length: "14 perc",
      description:
        "Liza bátyját, Dodót követi egy napig. Megismeri bátyja eddig számára ismeretlen oldalát, a barátait, a festményeit a szerelmét. Bár csak rövid ideje láthat bele bátyja életébe, Liza szembesül vele, hogy bátyja el fog költözni, így kénytelen elengedni őt.",
      actors:
        "Kunert Mici, Bánhidi-Rózsa Bence, Szamosi Zsófia, Czutor Meri, Rajó Zita",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743945148/IMG_1392_mx7irp.jpg",
    },
    {
      title: "Időmúlás",
      director: "Bujdosó Flóra",
      type: "kisjátékfilm",
      length: "3 perc",
      description:
        "Az idő telik, körbemegy, lassan, folyamatosan. Emberek jönnek-mennek, álmok, vágyak, érzések, ígéretek. Vajon huszonéves férfi főhősünk megtalálja az igazit.",
      actors: "Somorjai Máté, Tóth Bogi, Palkovits Eszter, Nagy Izabella",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872340/Screenshot_2025-04-05_at_9.08.39_pc276g.png",
    },
    {
      title: "Mobil Kisállat Hamvasztás",
      director: "Kapás Tibor",
      type: "kisjátékfilm",
      length: "22 perc",
      description:
        "Apja halála után a kissé mizantróp Tamás kényszerül átvenni a családi mobil-kisállathamvasztó vállalkozást, amelynek üzemeltetése során a nem várt helyzetekben elkezd magára találni. Kapás Tibor Szilánkok című filmje bekerült tavaly az ELTE Szemle BEST OF blokkjába.",
      actors:
        "Csizmadia Gergő, Pipacs, Miklós Marcell, Gombos Judit, Sétáló Imola",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872400/ashes_still_1_wuk6gx.jpg",
    },
  ],
  "VII. Blokk - 04.30 - 21:00": [
    {
      title: "Ne nézz a Napba",
      director: "Kisházy Eszter",
      type: "kisjátékfilm",
      length: "17 perc",
      description:
        "Liza és Emma legjobb barátnők, évek óta járnak a Balatonhoz az egyetemi társaságukkal. Idén először velük tart Emma új barátja is, ám a fiú jelenléte Lizában féltékenységet vált ki, zavarja, hogy kevesebb időt tölt vele Emma. A fülledt nyár, az érzelmileg felfokozott légkör irracionális viselkedést vált ki belőle, amivel Emmával való barátságát veszélyezteti.",
      actors: "Pigler Emília, Bukovszky Orsolya, Juhász Vince, Atlasz Barnabás",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765130/Keystill_1.1.2_g57ia1.png",
    },
    {
      title: "Moszkva tér",
      director: "Alicia Lara és MoHa5-ös alkotótársai",
      type: "kisjátékfilm",
      length: "6 perc",
      description:
        "Egy pulcsi gazdát cserél, egy régi barát visszatér, Lili pedig fontos dolgot tanul az emberi kapcsolatokról. Hol máshol, mint a Moszka téren.",
      actors: "Erdős Lili, Rözge Maxim, Csizmadia Gergő, Birta Marci",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872476/moszkvastill2_j%C3%B3_i3t5de.jpg",
    },
    {
      title: "Hazug disznók az álmok is",
      director: "Kékes Kiara",
      type: "kísérleti rövidfilm",
      length: "14 perc",
      description:
        "25 éve tiltott a hal fogyasztása Magyarországon. A társadalmon kívüliek halra és szerelemre vadásznak a barátságtalan városon és diktatúrán kívül. A természetben megtalálják mindkettőt. A Hazug disznók az álmok is című filmet beválogatták a 44. Magyar Filmszemle kísérleti filmes szekciójába is.",
      actors: "Fukui Ryu, Korom Sára",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872560/hazugdisznok-kkn-4319_g0nmvf.jpg",
    },
    {
      title: "Jó napot!",
      director: "Orbán Róza",
      type: "kisjátékfilm",
      length: "2 perc",
      description:
        "Budapest, 1919. Egy vegyeskereskedés tulajdonosa “hírlap” fedőnév alatt illegális árut ad el pult alatt, mígnem egy nap egy gyanút fogó pandúr téved az üzletbe.",
      actors: "Kunert Zsolt, Aczél Tulián, Mandula Lujza",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743879176/jonapot_2_iw4w8l.jpg",
    },
    {
      title: "Lehetne (valami) jó is",
      director: "Sándor Lili",
      type: "kisjátékfilm",
      length: "20 perc",
      description:
        "Egy kapcsolat véget ér, egy másik elkezdődik? A Rókavadászat rendezője, Sándor Lili Pigler Emília és Bukovszky Orsi főszereplésével készített nemzedéki közérzetfilmet.",
      actors: "Pigler Emília, Bukovszky Orsolya, Forrai Áron",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1744036360/IMG_9290_yjfziu.jpg",
    },
  ],
  "VIII. Blokk - 04.30 - 22:30": [
    {
      title: "Döglött szerelem",
      director: "Nagy Kornél",
      type: "kisjátékfilm",
      length: "2 perc",
      description:
        "Szerelmesnek lenni könnyű, de nem-szerelmesnek lenni végtelenül nehéz. A Másik hiányának játékos fájdalmát költői képekben sűríti össze Nagy Kornél kisfilmje.",
      actors: "Adonyi-Walsh Gáspár, Nagy Kornél",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872650/doglott3_1.1.3_ancsij%C3%B3_c6brq6.jpg",
    },
    {
      title: "Jimmy Hard balladája",
      director: "S. Papp Máté",
      type: "kisjátékfilm",
      length: "8 perc",
      description:
        "A Filmszemlét is megjáró, Edgar Allen Poe-t idéző jazzballada Jimmy Hard-ról, a magányos new york-i buszsofőrről, akinek szívét egy éjszaka elrabolja az Ördög.",
      actors: "Liber Ágoston, Sas Zoltán, Vízi Dávid, Iván Flóra",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582140/jimmy1_astjvs.png",
    },
    {
      title: "csiga",
      director: "Juhász Maja és MoHa5-ös alkotótársai",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        'Jánossal szakít a csaja. Úgy gondolja azért történt vele ez, mivel nem volt elég "férfi". Elhatározza, hogy igazi férfivá válik, kérdés sikerül-e ez neki.',
      actors: "Juhász Maja, Kövesi Bálint, Báró Márton",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872723/IMG_6678_Ancsij%C3%B3_vmkh7w.jpg",
    },
    {
      title: "Nem fogok fizetni",
      director: "Szirmai János",
      type: "kisjátékfilm",
      length: "10 perc",
      description:
        "A cigány, a zsidó és a kínai ülnek egy kocsiban. Lerobban az autó. Egy fontos találkozóra igyekeznek, aztán máshogy alakulnak a történések, mint ahogy eltervezték. Már ha egyáltalán eltervezték...",
      actors:
        'Major "Hugó Kálodzséró" Imre, Zhao Shute, Ross Leó, Neuman Félix, Béres Miklós "Minky", Bob Zé',
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581432/NemFogokFizetni_ASSY_0112_01_07_45_05_xllegu.jpg",
    },
    {
      title: "TV néző ember",
      director: "Rözge Borisz",
      type: "kísérleti rövidfilm",
      length: "7 perc",
      description:
        "Egy ember tv-t néz. Vagy a tv nézi őt? Vagy ő nézi saját magát, ahogy magát nézi a tv-ben?",
      actors:
        "Kövesi Bálint, Rözge Borisz, Kriza Áron, Horváth Barbara, Szmejkál Zsombor",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581810/tvstill2_siqjgx.jpg",
    },
    {
      title: "Házibuli Karaoki",
      director: "Mrena Dorka",
      type: "kisjátékfilm",
      length: "12 perc",
      description:
        '"Gyros, házibuli, szamuráj, szerelem, karaoke - ezt egy mesebeli cowboy álmodja, vagy csak én képzelődöm a szobában ragadt füsttömegtől?"',
      actors:
        "Adonyi-Walsh Gáspár, Lapos Imola, Mandula Lujza, Béres Péter, Halasi Sára, Szarvas Réka",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743583510/Still_2025-04-01_111554_1.54.1_hpfjsh.png",
    },
  ],
  "IX. Blokk - 05.01 - 10:00": [
    {
      title: "Még 5 perc",
      director: "Alicia Lara",
      type: "kísérleti rövidfilm",
      length: "6 perc",
      description:
        "Sári nem éri el a metrót, nem találja a telefonját, és ráadásul rákényszerítik, hogy lefussa a maratont. Mi jöhet még?",
      actors:
        "Mihályi Sári, Juhász Maja, Lukács Andrea, Horváth Barbara, Rözge Borisz",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582363/MVI_0666.00_01_24_42.Still013_cpzkcr.jpg",
    },
    {
      title: "Mese",
      director: "Tóth Boglárka",
      type: "kisjátékfilm",
      length: "4 perc",
      description:
        "Ha a Szentivánéji álom Pukk-ja megjelenne és azt mondaná elvisz a szerelmedhez, követnéd?",
      actors: "Béres Péter, Bujdosó Flóra, Nagy Izabella",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743879315/palk%C3%B3tal%C3%A1l_b29m1v.png",
    },
    {
      title: "Térden haraptak álmomban",
      director: "Biró Rozi",
      type: "kísérleti rövidfilm",
      length: "10 perc",
      description:
        "Miután a játszótéren magányosan érezte magát, benézett egy buliba. A rémálmok kényelmetlen bolyongásába húz magával Bíró Rozi első féléves vizsgafilmje.",
      actors: "Galambos Vera, Kecskés Ábrahám, Németh Mirkó, Farkas András",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872812/terdenstill6_ouxs7v.jpg",
    },
    {
      title: "Váltott bőr",
      director: "Somorjai Máté",
      type: "kísérleti rövidfilm",
      length: "5 perc",
      description:
        "Ipi-apacs! Misu egy szép tavaszi napon megpillant egy hintázó lányt, majd másnap a lány testében ébred. Hogyan töri meg a varázst?",
      actors: "Kékes Kiara, Fárizs Mihály",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765386/v%C3%A1ltottb%C5%91r_2_lc7waq.png",
    },
    {
      title: "Kacifánt",
      director: "Farkas Zsigmond",
      type: "kisjátékfilm",
      length: "34 perc",
      description:
        "Egy világban ahol a gengszterfilmek és a népmesék találkoznak, a hős ellopja a gonosz gengszterfőnöktől, a mágikus tárgyakat tartalmazó bőröndjét, és barátnője szerelmét. Majd útra kel, hogy méltóvá váljon a bőröndben rejlő fegyver használatára, és a főnök legyőzésére...",
      actors:
        "Papp Győző Benedek, Kovács Zsófia, Budavári-Dudla Zsolt Krisztián, Harmati Márton, Fülöp Kristóf, Székhelyi Dániel",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765313/k%C3%A9p_pfidjl.png",
    },
  ],
  "X. Blokk - 05.01 - 11:30": [
    {
      title: "Töredékek",
      director: "Petrányi Levente",
      type: "kisjátékfilm",
      length: "10 perc",
      description:
        "A film középpontjában egy családi veszekedés áll, ami érzékletesen bemutatja hol tud félre siklani a kommunikáció. Te hogy reagálnál, ha a gyereked kést fogna rád?",
      actors: "Petrik Andrea, Mészáros Béla, Petrányi Panna",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582004/t%C3%B6red%C3%A9kek2_ej3uoh.jpg",
    },
    {
      title: "Nem?",
      director: "Kistamás Naomi",
      type: "kisjátékfilm",
      length: "12 perc",
      description:
        "Egy igazi háztartásbeli nő elrablásának története, mely váratlan pozitív fordulatot hoz ingerszegény életébe.",
      actors:
        "Csabai Gabriella, Szabó Piroska, Kistamás László, Ferenczi Gábor, Hegedűs Botond, Kécza András",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872897/ancsij%C3%B3Screenshot_2025-04-04_at_20.16.15_hfrfz0.png",
    },
    {
      title: "anyuapu",
      director: "Adonyi-Walsh Gáspár",
      type: "rövid dokumentumfilm",
      length: "4 perc",
      description:
        "Első látásra szerelem egy amerikai férfi és egy magyar nő között. Lehet ez több egy közösen eltöltött szép nap emlékénél?",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581612/IMG_2950_iblkkm.png",
    },
    {
      title: "Onirológia",
      director: "Rözge Borisz",
      type: "kísérleti rövidfilm",
      length: "10 perc",
      description:
        "A világ furcsa hely. Egy orosz nő a Keleti előtt kiabál egy Zoltán nevű férfinak, két srác a Nemzeti Múzeum előtt verekszik, egy főzőműsor pedig balul sül el.",
      actors:
        "Zelda Attard, Rözge Borisz, Szirmai János, Várhegyi Dávid, Alicia Lara, Kovács Janka",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765264/final1_copy_hcaxs6.jpg",
    },
    {
      title: "Krumplibaba",
      director: "Pánczér Eszter",
      type: "kisjátékfilm",
      length: "13 perc",
      description:
        "Adél együtt lakik barátjával, Jakabbal. Elhanyagolt a kapcsolatuk, és elhanyagolt a lakásuk is, mindenhol kosz, szemét és rendetlenség. Adél egyik este szakít Jakabbal, aki elfogadja Adél döntését. Másnap azonban Jakab meggondolja magát, és egy érdekes gesztussal próbálja visszacsábítani szerelmét.",
      actors: "Csaplár Júlia, Porogi Milán",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582304/kb_stills_5_br4ydf.jpg",
    },
    {
      title: "Egy sikeres nap",
      director: "Maróthy Emil",
      type: "kisjátékfilm",
      length: "13 perc",
      description:
        "A fiatal asztalos segéd, Huba, mesterével, Istvánnal ellátogat a gazdag Fuchs házaspárhoz, hogy beszereljenek egy szekrényt. Huba filmrendező szeretne lenni, ezért mindent megtesz, hogy jó benyomást tegyen Fuchs úrra, aki történetesen filmproducer.",
      actors: "Forrai Áron, Hannus Zoltán, Balogh Orsolya, Kiskádár Tamás",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743945207/1_4_pnzmhm.png",
    },
  ],
  "XI. Blokk - 05.01 - 15:00": [
    {
      title: "Jó, hogy itt vagy",
      director: "Kisházy Eszter",
      type: "kisjátékfilm",
      length: "7 perc",
      description:
        "Két barátnő egy üveg bor fölött próbál újra kapcsolódni, avagy milyen a nem NER-es vitorlásgatya és bírható-e a nápolyi meleg.",
      actors: "Csaplár Júlia, Kicsák Blanka",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765005/image_2_goublg.png",
    },
    {
      title: "Állatkert",
      director: "Vig Zsombor",
      type: "kisjátékfilm",
      length: "14 perc",
      description:
        "A Németországban élő W hazatér meglátogatni gyermekkorának fontos helyszínét, az állatkertet. A kellemesnek ígérkező kiruccanás során nem várt meglepetés várja őt az oroszlán ketrecnél.",
      actors:
        "Farkas Ádám, Kovács S. József, Domján Kata, Óvári Luca, Dióssy Gábor",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743872966/1_3_fzonss.png",
    },
    {
      title: "Barátságunkról ennyit mondhatok",
      director: "Gál András",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        "Panna és Atus az időtlenségben élnek. De vajon kitarthat ez legalább az allergiaszezon végéig?",
      actors: "Gálhidy Gizella, Laskai Csaba",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743765185/GA_Barats_Still1_bgsq6x.jpg",
    },
    {
      title: "Tetőpont",
      director: "Bujdosó Flóra",
      type: "kisjátékfilm",
      length: "8 perc",
      description:
        "Mit csinálnak a kamaszok iskola után? Egy 13 éves kisfiú szokásosnak induló délutánja egyetlen mozdulattal tragédiába fordul. Hogyan reagálnak erre a szülők? Nem esett messze az alma a fájától. Megtörtént események alapján.",
      actors:
        "Kövécs Barnabás, Kiss Diána Magdolna, Mészáros András, Ékes Olivér, Terék Simon",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871225/Screenshot_2025-04-05_at_9.40.15_vvgsxi.png",
    },
    {
      title: "Majdnem",
      director: "Zseni Márton",
      type: "kisjátékfilm",
      length: "22 perc",
      description:
        "A huszonéves Vili a Margit-sziget partján üldögél, gondolataiban a közelmúlt emlékei kavarognak. Lírai hangvételű film a fiatal felnőttkor nyomasztó nehézségeiről.",
      actors:
        "Nyomárkay Zsigmond, Erdős Lili, Gál Oxána, Szabó Dávid András, Taraczky Mila, Dezső Bálint",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743945336/default_1.126.1_vnicyc.jpg",
    },
  ],
  "XII. Blokk - 05.01 - 16:30": [
    {
      title: "Apám fia",
      director: "Heim Vilmos",
      type: "kisjátékfilm",
      length: "13 perc",
      description:
        "Doma ritkán látott féltestvérét, Ádámot egy puccos kávézóba hívja. Azt állítja hogy az apjuk újra össze akar jönni Ádám anyjával, és most megtudják lesni őket. Ádám nem hisz neki, de a szülők tényleg feltűnnek és elkezd kibontakozni egy különös család portréja. Az Apám fia szerepelt a 2024-es Friss Hús versenyprogramjában, de vetítették többek között a müncheni Filmschoolfesten is.",
      actors:
        "Raoul Ionescu, Kelemen Péter Bence, Bede-Fazekas Szabolcs, Rezes Judit",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581544/Apam_fia_2_nna0tj.png",
    },
    {
      title: "Totyi",
      director: "Béres Péter",
      type: "rövid dokumentumfilm",
      length: "6 perc",
      description:
        "A gép zajos, az idő meleg, a hordók nehezek, sok a darázs. Totyi és a szőlőszemek játéka egy szüreten.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743873104/3Totyistill_1.11.1._best_gq5gtg.jpg",
    },
    {
      title: "Mélyen megvetett ágy",
      director: "Taraczky Mila",
      type: "kisjátékfilm",
      length: "18 perc",
      description:
        "Janka véletlen összefut volt barátnőjével, aki felajánl neki egy fuvart. A hétköznapi szívesség elfogadása azonban nem várt érzelmi hullámvasúthoz vezet. Ahogy közelednek a célpont felé, egyre nehezebbé válik az elválás.",
      actors: "Büki Flóra, Kicsák Blanka, Kovács Korinna, Meszléry Judit",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743873246/Still_2025-04-05_141708_1.12.2_gi2dfp.jpg",
    },
    {
      title: "Ragacs",
      director: "Fárizs Mihály",
      type: "kisjátékfilm",
      length: "9 perc",
      description:
        "Kelenföldön futnak össze a szálak és az érzelmek. A lány megtanulja, hogy kell valakit elengedni, a fiú pedig, hogy néha el kell dobni a tányért.",
      actors: "Kicsák Blanka, Varga Péter",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743581873/ragacs_still_3.1.1_ichlmo.png",
    },
    {
      title: "Várjuk meg apát",
      director: "Bóna Jakab",
      type: "kisjátékfilm",
      length: "16 perc",
      description:
        "A kamasz lány, Réka eddig azt hitte ismeri a családját. De apja utáni nyomozása során rájön, hogy a felnőttek világa nem teljesen az, aminek gondolta.",
      actors:
        "Paizs Vanda, Pion István, Kelemen Olga, Krasznahorkai Ágnes, Bíró Eszter, Bántó Barnabás",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743871182/IMG_5842_auysxg.png",
    },
  ],
  "XIII. Blokk - 05.01 - 18:00": [
    {
      title: "Csibészek",
      director: "Aczél Tulian",
      type: "rövid dokumentumfilm",
      length: "10 perc",
      description:
        "A film Várkonyi csibészek zenekar életébe enged be egy picit, ahol nehézségekkel és örömökkel egyaránt találkozhatunk.",
      actors: "-",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743873314/Still_2025-04-05_105851_1.27.1_pvcy0s.png",
    },
    {
      title: "Szavalóverseny",
      director: "Nagy Dániel",
      type: "kisjátékfilm",
      length: "5 perc",
      description:
        "Az alsótagozatos szavalóverseny egyszerre végtelenül unalmas és irtózatosan emberpróbáló mivoltának groteszk képekbe sűrített elbeszélése egy kissé kívülálló figura szemszögéből.",
      actors:
        'Havlicsek Bori, Antal Olga, Kiss Eszter, Bencze Sándor "Qpa", Jámbor József',
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743582441/k%C3%A1poszta3_zk6ksg.jpg",
    },
    {
      title: "Clairvoyance",
      director: "Ascher Károly",
      type: "kisjátékfilm",
      length: "18 perc",
      description:
        "Balázs megismerkedik Sárával, ami ráébreszti régót tartó kapcsolatának ártalmasságára. Hirtelen jött tisztánlátása önmagában nem elég, a cselekvéshez össze kell szednie minden bátorságát.",
      actors: "Bölkény Balázs, Mészöly Anna, Mosolygó Sára",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743873423/cv_stills_21_best_sncrty.jpg",
    },
    {
      title: "Kocsmasztori",
      director: "Mrena Dorka",
      type: "kisjátékfilm",
      length: "4 perc",
      description:
        "A mozgókép szak felvételijére készült film, amiben a rendező bebizonyítja, hogy az álmok valóra válnak, és hogy nem csak az ég kék, hanem talán te is az vagy.",
      actors:
        "Mrena Dorka, Lapos Imola, Demeter Zsuzsa, Blahó Tas, Molnár Panna",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743583488/still_1.1.3_fh6mn2.jpg",
    },
    {
      titleJSX: (
        <>
          Csak hogy végre valami{" ("}
          <span className="line-through">sikerüljön</span>
          {") "}történjen
        </>
      ),
      director: "Szabó Dávid András",
      type: "kisjátékfilm",
      length: "22 perc",
      description:
        "A kis Árpád ellopja édesapja legféltettebb kincsét, hogy szerelmének adja ajándékul. Megpróbálja leplezni tettét, amiért súlyos árat fizet. Hiába, az egész, hiába. Szabó Dávid András Apával nem szoktunk ilyenekről beszélgetni című filmje szerepelt a tavalyi ELTE Szemle BEST OF válogatásában.",
      actors:
        "Tatai Bulcsú, Herbály Blanka, Hajduk Károly, Forgács Péter, Gazdag-Kötél Orsi, Vatamány Atanáz",
      image:
        "https://res.cloudinary.com/dhzagayrh/image/upload/v1743873557/473534632_122195753642169015_7150033435158431515_n_roa5ld.jpg",
    },
  ],
}
