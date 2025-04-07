import SVG from "components/svg/SVG";
import React from "react";
import { useNavigate } from "react-router-dom";
import { dayLabels, scheduleData } from "utils/const";
import { Button } from "@heroui/react";

function NapiBontas() {
  const navigate = useNavigate();

  const grouped = scheduleData.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  const handleBlockClick = (block) => {
    console.log(block?.name + " - " + block?.date + " - " + block?.time);
    localStorage.setItem(
      "name",
      block?.name + " - " + block?.date + " - " + block?.time
    );
    let isBlokk = block?.name.split(" ")[1] === "Blokk";
    navigate(isBlokk ? "/filmek" : "/szakmai_programok");
  };

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
                <button
                  key={block.name}
                  onClick={() => handleBlockClick(block)}
                  className="text-left w-full bg-gray-900 rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 transition flex justify-between items-center"
                >
                  <div>
                    <span className="font-medium text-lg">{block.name}</span>
                  </div>
                  <div>
                    <span className="text-[#cc2d1c] font-semibold text-lg">
                      {block.time}
                    </span>
                  </div>
                </button>
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

export default NapiBontas;
