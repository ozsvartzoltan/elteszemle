import React, { useEffect, useRef } from "react"
import { dayLabels } from "utils/const"
import { Button } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useData } from "../contexts/DataContext"
import { useTheme } from "../contexts/ThemeContext"

function SzakmaiProgramok() {
  const { year, extraPrograms } = useData()
  const { colors } = useTheme()
  const blockRefs = useRef({})

  useEffect(() => {
    const stored = localStorage.getItem("name")
    if (stored) {
      const [title] = stored.split(" - ")
      const match = Object.values(blockRefs.current).find((ref) =>
        ref?.dataset?.title?.toLowerCase().includes(title.toLowerCase())
      )
      if (match) {
        match.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Szakmai programok
      </h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {Object.entries(extraPrograms || {}).map(([date, programs]) => (
          <div key={date} className="space-y-8">
            <h2 className="text-2xl font-semibold" style={{ color: colors.mainColor }}>
              {dayLabels[date] || date}
            </h2>

            <div className="space-y-6">
              {programs.map((program, idx) => {
                const refKey = `${program.title}-${date}-${idx}`
                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      if (el) blockRefs.current[refKey] = el
                    }}
                    data-title={program.title}
                    className="bg-white/5 p-6 rounded-xl border border-white/10"
                  >
                    <p className="text-lg font-semibold text-white">
                      <span className="uppercase">{program.title} </span>
                      <span className="text-sm font-normal" style={{ color: colors.mainColor }}>
                        – {program.time}
                        {program.place ? ` (${program.place})` : ""}
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

                    {program.performers && (
                      <p className="text-sm text-white/70 mt-2">
                        <strong>Előadók:</strong> {program.performers}
                      </p>
                    )}

                    {program.end && (
                      <p className="text-sm text-white/70 mt-1">
                        <strong>Vége:</strong> {program.end}
                      </p>
                    )}

                    {program.link && (
                      <p className="text-sm mt-2">
                        <a
                          href={program.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          style={{ color: colors.linkColor }}
                        >
                          További információ
                        </a>
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <Button
        onPress={() => {
          document.body.scrollTop = 0
        }}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg transition-all"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}

export default SzakmaiProgramok
