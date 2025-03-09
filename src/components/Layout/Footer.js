import { Image } from "@heroui/react";
import { SocialIcon } from "react-social-icons";
import {
  canonImage,
  elteImage,
  mhaImage,
  mindenkiMozijaImage,
} from "utils/const";

export default function Footer() {
  return (
    <footer className="bg-[#cc2d1c] px-6 py-12 text-white sm:px-12">
      {/* Desktop Layout */}
      <div className="hidden sm:grid mx-auto max-w-7xl gap-6 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-start">
        {/* FŐ TÁMOGATÓ */}
        <div className="flex flex-col min-w-[200px]">
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
        <div className="flex flex-col min-w-[200px]">
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

        {/* PARTNEREK */}
        <div className="flex flex-col min-w-[200px]">
          <h2 className="mb-2 text-xl font-light text-left whitespace-nowrap">
            PARTNEREK
          </h2>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>

        {/* KAPCSOLAT */}
        <div className="sm:ml-auto flex flex-col min-w-[220px]">
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
              src="https://res.cloudinary.com/dhzagayrh/image/upload/v1741552061/letterbox_jk7hbd.png"
              alt="Letterbox"
              className="w-[50px] aspect-square hover:cursor-pointer"
              onClick={() =>
                window.open("https://letterboxd.com/elteszemle/", "_blank")
              }
            />
          </div>
        </div>
      </div>

      {/*Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center gap-8 text-2xl">
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
          <div className="flex flex-col gap-6 items-center">
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
              src="https://res.cloudinary.com/dhzagayrh/image/upload/v1741552061/letterbox_jk7hbd.png"
              alt="Letterbox"
              className="w-[50px] aspect-square hover:cursor-pointer"
              onClick={() =>
                window.open("https://letterboxd.com/elteszemle/", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
