import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Image,
  Skeleton,
} from "@heroui/react";
import SVG from "components/svg/SVG";
import { modalImages, news } from "utils/const";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsCard from "components/NewsCard/index";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";

function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showScroll, setShowScroll] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const img_num = Math.floor(Math.random() * 6);
  const swiperRef = useRef(null);

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div className="px-2 md:px-10 xl:px-16">
      <Modal
        isOpen={false} //TODO: isOpen
        placement="center"
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="full"
        hideCloseButton
      >
        <ModalContent className="bg-black">
          {(onClose) => (
            <>
              <ModalBody
                className="pt-8 flex justify-center items-center"
                onClick={onClose}
              >
                {!imageLoaded ? (
                  <Skeleton className="w-full h-[400px] rounded-3xl bg-black" />
                ) : (
                  <Image
                    src={modalImages[img_num]}
                    alt="Nyitókép"
                    className="object-contain w-full h-full transition-opacity duration-500 opacity-100"
                  />
                )}
                <Image
                  src={modalImages[img_num]}
                  alt=""
                  className="hidden"
                  onLoad={() => setImageLoaded(true)}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div id="hirek" className=" py-4 text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl">Hírek</div>

        {/* For small screens */}
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="w-full h-auto"
          >
            {Object.entries(news).map(([key, newsItem]) => (
              <SwiperSlide key={key} className="!bg-black">
                <NewsCard newsItem={{ id: key, ...newsItem }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* For small screens */}
        <div className=" hidden sm:flex lg:hidden ">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            loop
            className="w-full h-auto"
          >
            {Object.entries(news).map(([key, newsItem]) => (
              <SwiperSlide key={key} className="!bg-black ">
                <NewsCard
                  newsItem={{ id: key, ...newsItem }}
                  className="w-[500px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* For larger screens */}
        {Object.keys(news).length > 3 && (
          <div className="hidden lg:flex justify-center items-center">
            <Button
              id="prev-button"
              variant="light"
              className="rounded-full text-white bg-transparent hover:bg-white/10 mr-2 border-gray-600 border-2"
              size="md"
            >
              <SVG type="chevronLeft" />
            </Button>
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: "#next-button",
                prevEl: "#prev-button",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                780: { slidesPerView: 2 },
                1150: { slidesPerView: 3 },
              }}
              className="w-full h-auto rounded-none"
            >
              {Object.entries(news).map(([key, newsItem]) => (
                <SwiperSlide key={key} className="!bg-black">
                  <NewsCard newsItem={{ id: key, ...newsItem }} />
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              id="next-button"
              variant="light"
              className="p-2 rounded-full text-white bg-transparent hover:bg-white/10 ml-2 border-gray-600 border-2"
            >
              <SVG type="chevronRight" />
            </Button>
          </div>
        )}

        {Object.keys(news).length <= 3 && (
          <div className="hidden lg:flex flex-row gap-8 pb-5">
            {Object.entries(news).map(([key, newsItem], index) => (
              <NewsCard key={index} newsItem={{ id: key, ...newsItem }} />
            ))}
          </div>
        )}
      </div>

      <div id="rolunk" className="text-sm sm:text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl mt-10">Rólunk</div>
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
        <div className="pb-4">
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
      <div id="stab" className="space-y-6 text-justify">
        <div className="font-bold text-4xl mt-10">Stáb</div>
        <div className="font-bold my-0">Az ELTE Szemle csapata:</div>
        <div>
          <div>Tóth Anna Júlia és Kristóf Álmos (főszervezők)</div>
          <div>
            Kriza Áron, Bíró Rozi, Hurtik Nóra, Somorjai Máté, Rözge Borisz,
            Szirmai János, Vajda Fruzsi, Mrena Dorka, Vigh Martin, Igaz Réka
          </div>
        </div>
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
    </div>
  );
}

export default Home;
