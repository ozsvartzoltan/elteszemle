import React, { useEffect, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Image,
} from "@heroui/react";
import SVG from "components/svg/SVG";

function Home() {
  const { onOpen, onOpenChange } = useDisclosure();
  const [showScroll, setShowScroll] = useState(true);
  const img_num = Math.floor(Math.random() * 6);
  const images = {
    0: "/images/nyitokepek/IMG_1.jpg",
    2: "/images/nyitokepek/IMG_3.jpg",
    1: "/images/nyitokepek/IMG_2.jpg",
    3: "/images/nyitokepek/IMG_4.jpg",
    4: "/images/nyitokepek/IMG_5.jpg",
    5: "/images/nyitokepek/IMG_6.jpg",
  };

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal
        isOpen={false} //onOpen
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="4xl"
      >
        <ModalContent className="bg-black">
          {(onClose) => (
            <>
              <ModalBody className="pt-8">
                <Image
                  src={images[img_num]}
                  alt="Nyitókép"
                  className="object-cover w-full h-full rounded-3xl"
                />
              </ModalBody>
              <ModalFooter className="-mt-4 items-center justify-center">
                <Button color="danger" variant="light" onPress={onClose}>
                  Bezárás
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div id="hirek" className="p-4 px-16 text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl">Hírek</div>
      </div>
      <div id="rolunk" className="p-4 px-16 text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl">Rólunk</div>
        <div>
          Az ELTE Szemle egy 2024-ben hallgatói önerőből létrejött egyetemi
          filmfesztivál, amelyen az ELTE Filmtanszékén készülő hallgatói filmek
          kerülnek bemutatásra. Célunk láthatóságot adni a műhelymunkának, ami a
          magyar film jövőjét alakíthatja ki.
        </div>
        <div>
          A fesztiválon a Mozgókép alapképzés (MoHa), a Filmtudomány mesterszak,
          valamint a Szabadbölcsészet Film specializációs hallgatók munkáit
          vetítjük. A filmek díjazására egy szakmai zsűrit kérünk fel, amely
          dönt a fesztivál fődíjáról, illetve összeállít egy ún. BEST OF blokkot
          a legmagasabb színvonalú munkákból. A vetítéseken kívül különböző
          szakmai programokat is szervezünk. Az érdeklődők betekintést kaphatnak
          a hazai filmes szakmai kulisszái mögé, izgalmas
          kerekasztal-beszélgetések, valamint mesterkurzusok és workshopok
          révén.
        </div>
        <div>
          A fesztivált immár egy több mint tíz fős csapat szervezi. Ezt a
          küldetést mindannyian egyfajta elhivatottságból vállaltuk. Hiszünk
          abban, hogy ez az esemény egy olyan érték lehet hosszútávon, amely
          nemcsak a fiatal filmesek körében, de az egész magyar filmszakmában is
          népszerűvé, elismertté tud válni.
        </div>
        <div>
          Az ELTE képzésein temérdek értékes és figyelemre méltó alkotás készül.
          A 2024-es Friss Húson hat, míg a 2025-ös Magyar Filmszemlén tizenhárom
          rövidfilm szerepelt a programban. Ress Abigél Háztűznéző című filmje
          ráadásul elnyerte a Legjobb Rövid Dokumentumfilm díját. De nem csak
          idehaza aratnak sikert ezek a filmek: 2022-ben Szelestey Bianka
          Hajszálrepedés című diplomafilmje a Cannes-i Nemzetközi filmfesztivál
          Cinéfondation szekciójában versenyzett, Heim Vilmos Apám fia című
          alkotását vetítették az egyik legrangosabb német diákfilmfesztiválon,
          a müncheni Filmschoolfesten, de megjárta Mexikót, Bulgáriát és
          Lengyelországot is.
        </div>
        <div>
          Az ELTE Szemle összes programja nyitott és ingyenesen látogatható.
        </div>
        <div>
          Az ELTE filmszakos diákjai{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScHt5MEKUovXFPOUiP9uKdk0kkgaaueTRiyAZUvhaCKMka63A/viewform"
            className="underline"
            target="_blank"
          >
            itt
          </a>{" "}
          tudnak nevezni március 17-ig.
        </div>
      </div>
      <div id="stab" className="p-4 px-16 text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl">Stáb</div>
      </div>
      {showScroll && (
        <Button
          onPress={() => {
            document.body.scrollTop = 0;
          }}
          className="fixed bottom-6 right-6 bg-black text-white  rounded-full shadow-lg hover:bg-[#702a25] transition-all"
        >
          <SVG type="chevronUp" />
        </Button>
      )}
    </>
  );
}

export default Home;
