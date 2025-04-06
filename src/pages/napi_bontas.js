import React from "react";
import { dayLabels, extraPrograms, scheduleData } from "utils/const";

function NapiBontas() {
  const grouped = scheduleData.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Napi bontás</h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {Object.entries(grouped).map(([date, blocks]) => (
          <div key={date} className="space-y-8">
            <h2 className="text-2xl font-semibold text-[#cc2d1c]">
              {dayLabels[date] || date}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {blocks.map((block) => (
                <div
                  key={block.name}
                  className="bg-gray-900 rounded-xl px-6 py-4 flex justify-between items-center border border-white/10 hover:bg-white/10 transition"
                >
                  <span className="font-medium text-lg">{block.name}</span>
                  <span className="text-[#cc2d1c] font-semibold text-lg">
                    {block.time}
                  </span>
                </div>
              ))}
            </div>

            {extraPrograms[date] && (
              <div className="space-y-6 pt-8">
                {extraPrograms[date].map((program, idx) => (
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
                    <ul className="text-white/80 mt-2 list-disc pl-5 space-y-1">
                      {program.description.map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NapiBontas;
