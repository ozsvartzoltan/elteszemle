import { Image } from "@heroui/react"
import { SocialIcon } from "react-social-icons"
import {
  canonImage,
  elteImage,
  magyar_film_napja,
  mhaImage,
  mindenkiMozijaImage,
  muziZug,
} from "utils/const"
import CookieSettings from "../CookieConsent/CookieSettings"
import { useTheme } from "../../contexts/ThemeContext"

const FEHER_NYUL_LOGO =
  "https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/szponzor/feher_nyul_egyszinu_logo.png"

export default function Footer() {
  const { colors } = useTheme()
  
  return (
    <footer className="px-6 py-12 text-white min-[880px]:px-12" style={{ backgroundColor: colors.mainColor }}>
      {/* Desktop Layout */}
      <div className="hidden min-[880px]:grid mx-auto w-full max-w-7xl gap-8 min-[880px]:grid-cols-3 items-start">
        <div className="flex flex-col gap-8 min-w-[220px] items-center justify-self-start min-[880px]:order-1">
          {/* FŐ TÁMOGATÓ */}
          <div className="flex flex-col min-w-[200px] items-center">
            <h2 className="mb-2 text-xl font-light text-left whitespace-nowrap">
              FŐ TÁMOGATÓ
            </h2>
            <Image
              src={canonImage}
              alt="Canon"
              className="w-[240px] min-w-[200px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              radius="none"
              onClick={() => window.open("https://www.canon.hu/", "_blank")}
            />
          </div>

          {/* KIEMELT TÁMOGATÓ */}
          <div className="flex flex-col min-w-[200px] items-center">
            <h2 className="mb-2 text-xl font-light text-left whitespace-nowrap">
              KIEMELT TÁMOGATÓ
            </h2>
            <Image
              src={mindenkiMozijaImage}
              alt="Mindenki Mozija"
              className="w-[100px] min-w-[80px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              radius="none"
            />
          </div>
        </div>

        {/* PARTNEREK */}
        <div className="flex flex-col min-w-[200px] items-center justify-self-center min-[880px]:order-2">
          <h2 className="mb-2 text-xl font-light text-left whitespace-nowrap">
            PARTNEREK
          </h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-2 place-items-center">
            <Image
              src={elteImage}
              alt="ELTE BTK"
              className="w-[180px] min-w-[150px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() => window.open("https://film.elte.hu/", "_blank")}
            />
            <Image
              src={mhaImage}
              alt="m•ha [elte]"
              className="w-[150px] min-w-[120px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/elte_film/?utm_source=qr",
                  "_blank"
                )
              }
            />
            <Image
              src={muziZug}
              alt="MuziZug"
              className="w-[150px] min-w-[120px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://mozizug.hu/",
                  "_blank"
                )
              }
            />
            <Image
              src={magyar_film_napja}
              alt="Magyar Film Napja"
              className="w-[150px] min-w-[120px] max-w-full h-auto object-fit bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.magyarfilmnapja.hu/",
                  "_blank"
                )
              }
            />
            <Image
              src={FEHER_NYUL_LOGO}
              alt="Fehér Nyúl"
              className="col-span-2 w-[150px] min-w-[120px] max-w-full h-auto object-fit cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.fehernyul.hu/",
                  "_blank"
                )
              }
            />
          </div>
        </div>

        {/* KAPCSOLAT */}
        <div className="flex flex-col min-w-[220px] items-center justify-self-end min-[880px]:order-3">
          <h2 className="mb-2 text-xl font-light whitespace-nowrap">
            KAPCSOLAT
          </h2>
          <div className="text-lg text-white mb-4 text-left">
            elteszemle@gmail.com
          </div>

          <h3 className="mb-4 mt-4 text-lg font-light tracking-wide whitespace-nowrap">
            SOCIAL MEDIA
          </h3>
          <div className="flex flex-wrap justify-start gap-4">
            <SocialIcon
              target="_blank"
              url="https://www.facebook.com/profile.php?id=61557156184640"
            />
            <SocialIcon
              target="_blank"
              url="https://www.instagram.com/elteszemle?igsh=dmVhZ3czMmoyMG5h"
            />
            <SocialIcon
              target="_blank"
              url="https://www.tiktok.com/@elteszemle?_t=ZN-8uQxxr5NfD0&_r=1"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/szponzor/letterbox_jk7hbd.png"
              alt="Letterbox"
              className="w-[50px] aspect-square hover:cursor-pointer"
              onClick={() =>
                window.open("https://letterboxd.com/elteszemle/", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/* Copyright and Cookie Settings */}
      <div className={`hidden min-[880px]:block border-t border-[${colors.linkColor}] mt-8 pt-6 text-center`}>
        <div className="flex justify-center items-center gap-4 text-sm">
          <span>© 2026 ELTE Szemle. Minden jog fenntartva.</span>
          <span>|</span>
          <CookieSettings />
        </div>
      </div>

      {/*Mobile Layout */}
      <div className="min-[880px]:hidden flex flex-col items-center gap-8 text-2xl">
        {/* FŐ TÁMOGATÓ */}
        <div className="flex flex-col items-center">
          <h2 className="mb-6 font-light whitespace-nowrap">FŐ TÁMOGATÓ</h2>
          <Image
            src={canonImage}
            alt="Canon"
            className="w-[250px] min-w-[180px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
            radius="none"
            onClick={() => window.open("https://www.canon.hu/", "_blank")}
          />
        </div>

        {/* KIEMELT TÁMOGATÓ */}
        <div className="flex flex-col items-center">
          <h2 className="mb-4 font-light whitespace-nowrap">
            KIEMELT TÁMOGATÓ
          </h2>
          <Image
            src={mindenkiMozijaImage}
            alt="Mindenki Mozija"
            className="w-[100px] min-w-[80px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
            radius="none"
          />
        </div>

        {/* PARTNEREK */}
        <div className="flex flex-col items-center">
          <h2 className="mb-6 font-light whitespace-nowrap">PARTNEREK</h2>
          <div className="flex flex-col gap-3 items-center">
            <Image
              src={elteImage}
              alt="ELTE BTK"
              className="w-[160px] min-w-[140px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() => window.open("https://film.elte.hu/", "_blank")}
            />
            <Image
              src={mhaImage}
              alt="m•ha [elte]"
              className="w-[140px] min-w-[120px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/elte_film/?utm_source=qr",
                  "_blank"
                )
              }
            />
            <Image
              src={muziZug}
              alt="MuziZug"
              className="w-[140px] min-w-[120px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://mozizug.hu/",
                  "_blank"
                )
              }
            />
            <Image
              src={magyar_film_napja}
              alt="Magyar Film Napja"
              className="w-[140px] min-w-[120px] max-w-full h-auto object-contain bg-transparent cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.magyarfilmnapja.hu/",
                  "_blank"
                )
              }
            />
            <Image
              src={FEHER_NYUL_LOGO}
              alt="Fehér Nyúl"
              className="w-[140px] min-w-[120px] max-w-full h-auto object-contain bg-transparent"
            />
          </div>
        </div>

        {/* KAPCSOLAT  */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 font-light whitespace-nowrap">KAPCSOLAT</h2>
          <div className="mb-4 text-lg text-white">elteszemle@gmail.com</div>

          <h3 className="mb-4 mt-4 font-light tracking-wide whitespace-nowrap">
            SOCIAL MEDIA
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <SocialIcon
              target="_blank"
              url="https://www.facebook.com/profile.php?id=61557156184640"
            />
            <SocialIcon
              target="_blank"
              url="https://www.instagram.com/elteszemle?igsh=dmVhZ3czMmoyMG5h"
            />
            <SocialIcon
              target="_blank"
              url="https://www.tiktok.com/@elteszemle?_t=ZN-8uQxxr5NfD0&_r=1"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/ozsvartzoltan/elteszemle-images@master/images/szponzor/letterbox_jk7hbd.png"
              alt="Letterbox"
              className="w-[50px] aspect-square hover:cursor-pointer"
              onClick={() =>
                window.open("https://letterboxd.com/elteszemle/", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/* Copyright and Cookie Settings - Mobile */}
      <div className={`min-[880px]:hidden border-t border-[${colors.linkColor}] mt-8 pt-6 text-center`}>
        <div className="flex flex-col items-center gap-2 text-sm ">
          <span>© 2026 ELTE Szemle</span>
          <span>Minden jog fenntartva.</span>
          <CookieSettings />
        </div>
      </div>
    </footer>
  )
}
