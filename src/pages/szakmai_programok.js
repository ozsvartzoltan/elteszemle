import React from "react";
import { extraPrograms, dayLabels } from "utils/const";
import { Button } from "@heroui/react";
import SVG from "components/svg/SVG";

function SzakmaiProgramok() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Szakmai programok
      </h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {Object.entries(extraPrograms).map(([date, programs]) => (
          <div key={date} className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#cc2d1c]">
              {dayLabels[date] || date}
            </h2>

            <div className="space-y-6">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <p className="text-lg font-semibold text-white">
                    {program.title}{" "}
                    <span className="text-[#cc2d1c] text-sm font-normal">
                      – {program.time}
                    </span>
                  </p>

                  {program.subtitle && (
                    <p className="text-white/90 italic mt-1">
                      {program.subtitle}
                    </p>
                  )}

                  {program.description && (
                    <ul className="text-white/80 mt-2 list-disc pl-5 space-y-1">
                      {program.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  )}

                  {program.eloadok && (
                    <p className="text-sm text-white/70 mt-2">
                      <strong>Előadók:</strong> {program.eloadok}
                    </p>
                  )}

                  {program.speakers && (
                    <p className="text-sm text-white/70 mt-2">
                      {program.speakers}
                    </p>
                  )}

                  {program.link && (
                    <p className="text-sm mt-2">
                      <a
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#cc2d1c]"
                      >
                        Link megnyitása
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        onPress={() => {
          document.body.scrollTop = 0;
        }}
        className="fixed bottom-1 right-3 bg-black text-white  rounded-full shadow-lg hover:bg-[#702a25] transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  );
}

export default SzakmaiProgramok;
