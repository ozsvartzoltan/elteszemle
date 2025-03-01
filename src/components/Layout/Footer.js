import { Image } from "@heroui/react";
import { SocialIcon } from "react-social-icons";
import { canonImage, elteImage, mhaImage } from "utils/const";

export default function Footer() {
  return (
    <footer className="bg-[#913E35] px-6 py-12 text-white sm:px-12">
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
                  "https://www.facebook.com/share/13tyreHCvy/",
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
          <SocialIcon url="https://www.facebook.com/profile.php?id=61557156184640" />
          {/* <div className="flex gap-4">
            <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.68 1.94 1.34 3.88 2.01 5.82.67-1.94 1.33-3.88 2-5.82 1.31.01 2.61 0 3.91.02-.05 2.09-.03 4.19-.04 6.28-1.33.08-2.68-.04-4.01.06.03 1.89.04 3.78.04 5.67 1.33.04 2.67.02 4.01.02.01 1.39.01 2.77.01 4.16-1.33.01-2.66-.01-3.99.01-.66-1.94-1.34-3.87-2.01-5.81-.68 1.93-1.34 3.87-2 5.81-1.35-.02-2.69 0-4.04-.01.01-1.39.01-2.77.02-4.16 1.32 0 2.63.02 3.95-.02 0-1.89.02-3.78.04-5.67-1.32-.1-2.65.02-3.97-.06.01-2.09.03-4.19-.02-6.28z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
