import React, { useEffect, useRef, useState } from "react"
import { Button } from "@heroui/react"
import SVG from "components/svg/SVG"
import { newsByYear, rolunk, stab } from "utils/const"
import { Swiper, SwiperSlide } from "swiper/react"
import NewsCard from "components/NewsCard/index"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useData } from "../contexts/DataContext"
import { useTheme } from "../contexts/ThemeContext"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles.css"

function Home() {
  const { year } = useData()
  const { colors } = useTheme()
  const [showScroll] = useState(true)
  const swiperRef = useRef(null)
  const currentNews = newsByYear[year] || newsByYear[2026]
  const currentRolunk = rolunk[year] || rolunk[2025]
  const currentStab = stab[year] || stab[2025]

  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="px-2 md:px-10 xl:px-16">
      <div id="hirek" className=" py-4 text-xl space-y-6 text-justify">
        <div className="font-bold text-4xl">Hírek</div>

        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            className="w-full h-auto"
          >
            {Object.entries(currentNews).map(([key, newsItem]) => (
              <SwiperSlide key={key} className="!bg-black">
                <NewsCard newsItem={{ id: key, ...newsItem }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" hidden sm:flex lg:hidden ">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={2}
            loop
            className="w-full h-auto"
          >
            {Object.entries(currentNews).map(([key, newsItem]) => (
              <SwiperSlide key={key} className="!bg-black ">
                <NewsCard
                  newsItem={{ id: key, ...newsItem }}
                  className="w-[500px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {Object.keys(currentNews).length > 3 && (
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
                delay: 4000,
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
              {Object.entries(currentNews).map(([key, newsItem]) => (
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

        {Object.keys(currentNews).length <= 3 && (
          <div className="hidden lg:flex flex-row gap-8 pb-5">
            {Object.entries(currentNews).map(([key, newsItem], index) => (
              <NewsCard key={index} newsItem={{ id: key, ...newsItem }} />
            ))}
          </div>
        )}
      </div>

      <div id="rolunk" className=" space-y-6 text-justify leading-relaxed">
        <div className="font-bold text-4xl mt-10">Rólunk</div>
        {currentRolunk.map((paragraph, index) => {
          return <div key={index}>{paragraph}</div>
        })}
      </div>
      <div id="stab" className="space-y-6 text-justify">
        <div className="font-bold text-4xl mt-10">Stáb</div>
        <div className="font-bold my-0">Az ELTE Szemle csapata:</div>
        <div>
          {Object.entries(currentStab).map(([key, value]) => (
            <div key={key} className={key === "Főszervezők" ? "" : "pt-4"}>
              <span className="font-bold">{key}:</span>{" "}
              {key === "Főszervezők" ? (
                <div>{value}</div>
              ) : key === "Szervezői csapat" || key === "Külön köszönet" ? (
                <div>{value}</div>
              ) : (
                value
              )}
            </div>
          ))}
        </div>
      </div>
      {showScroll && (
        <Button
          onPress={() => {
            document.body.scrollTop = 0
          }}
          className="fixed bottom-1 right-3 bg-black text-white  rounded-full shadow-lg hover:bg-[#702a25] transition-all"
        >
          <SVG type="chevronUp" />
        </Button>
      )}
    </div>
  )
}

export default Home
