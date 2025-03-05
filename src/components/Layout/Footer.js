import { Image } from "@heroui/react";
import { SocialIcon } from "react-social-icons";
import { canonImage, elteImage, mhaImage } from "utils/const";

export default function Footer() {
  return (
    <footer className="bg-[#cc2d1c] px-6 py-12 text-white sm:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-xl font-light ">FŐ TÁMOGATÓ</h2>
          <Image
            src={canonImage}
            alt="Canon"
            className="w-[300px] h-auto object-contain bg-transparent cursor-pointer flex-shrink-0"
            radius="none"
            onClick={() => {
              window.open("https://www.canon.hu/", "_blank");
            }}
          />
        </div>
        <div>
          <h2 className="mb-6 text-xl font-light ">PARTNEREK</h2>
          <div className="flex flex-col gap-6">
            <Image
              src={elteImage}
              alt="ELTE BTK"
              className="w-[240px] h-auto object-contain bg-transparent cursor-pointer flex-shrink-0"
              onClick={() => {
                window.open("https://film.elte.hu/", "_blank");
              }}
            />
            <Image
              src={mhaImage}
              alt="m•ha [elte]"
              className="w-[200px] h-auto object-contain bg-transparent cursor-pointer flex-shrink-0"
              onClick={() => {
                window.open(
                  "https://www.instagram.com/elte_film/?utm_source=qr",
                  "_blank"
                );
              }}
            />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-light">KAPCSOLAT</h2>
          <div className="mb-4 inline-block text-lg text-white">
            elteszemle@gmail.com
          </div>

          <h3 className="mb-4 mt-4 text-lg font-light tracking-wide">
            SOCIAL MEDIA
          </h3>
          <div className="flex gap-4">
            <SocialIcon url="https://www.facebook.com/profile.php?id=61557156184640" />
            <SocialIcon url="https://www.instagram.com/elteszemle?igsh=dmVhZ3czMmoyMG5h" />
            <SocialIcon url="https://www.tiktok.com/@elteszemle?_t=ZN-8uQxxr5NfD0&_r=1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
