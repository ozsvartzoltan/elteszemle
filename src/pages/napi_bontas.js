import SVG from "components/svg/SVG"
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { dayLabels } from "utils/const"
import { Button } from "@heroui/react"
import { useData } from "../contexts/DataContext"
import { useTheme } from "../contexts/ThemeContext"

function NapiBontas() {
  const { year, dailyPrograms } = useData()
  const { colors } = useTheme()
  const navigate = useNavigate()

  const grouped = dailyPrograms || {}

  const formatDateLabel = (dateKey) => {
    if (year !== 2026) {
      return dayLabels[dateKey] || dateKey
    }

    const capitalize = (text) =>
      text ? `${text.charAt(0).toUpperCase()}${text.slice(1)}` : text

    let parsedDate = null
    const isoDateMatch = dateKey.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    const monthDayMatch = dateKey.match(/^(\d{2})\.(\d{2})$/)

    if (isoDateMatch) {
      const [, yearPart, monthPart, dayPart] = isoDateMatch
      parsedDate = new Date(Number(yearPart), Number(monthPart) - 1, Number(dayPart))
    } else if (monthDayMatch) {
      const [, monthPart, dayPart] = monthDayMatch
      parsedDate = new Date(2026, Number(monthPart) - 1, Number(dayPart))
    }

    if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
      return dateKey
    }

    const month = new Intl.DateTimeFormat("hu-HU", { month: "long" }).format(parsedDate)
    const weekday = new Intl.DateTimeFormat("hu-HU", { weekday: "long" }).format(parsedDate)

    return `${capitalize(month)} ${parsedDate.getDate()}. (${capitalize(weekday)})`
  }

  const handleProgramClick = (program, date) => {
    console.log(program?.title + " - " + date + " - " + program?.time)
    console.log(`${program?.title} - ${date} - ${program?.time}`)
    localStorage.setItem(
      "name",
      `${program?.title} - ${date} - ${program?.time}`
    )
    let isBlokk = (program?.title || '').split(" ")[1] === "Blokk"
    navigate(isBlokk ? "/filmek" : "/szakmai_programok")
  }

  useEffect(() => {
    localStorage.removeItem("name")
  }, [])

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Napi bontás</h1>

      <div className="space-y-16 max-w-4xl mx-auto">
        {Object.entries(grouped).map(([date, groups]) => (
          <div key={date} className="space-y-8">
            <h2 className="text-2xl font-semibold" style={{ color: colors.textColor }}>
              {formatDateLabel(date)}
            </h2>

            <div className="space-y-6">
              {groups.map((group) => (
                <div key={group.id || `${group.date}-${group.place}`} className="space-y-3">
                  <h3 className="text-xl font-medium text-[#f7f2e3]">{group.place || "Helyszín nélkül"}</h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {(group.programs || []).map((program, index) => (
                      <button
                        key={program.id || `${group.id}-${index}-${program.title}`}
                        onClick={() => {
                          if (program?.link) {
                            window.open(program.link, "_blank")
                            return
                          }

                          if (program?.title) {
                            handleProgramClick(program, date)
                          }
                        }}
                        className="text-left w-full bg-gray-900 rounded-xl px-6 py-4 border border-white/10 hover:bg-white/10 transition flex justify-between items-center"
                      >
                        <div>
                          <span className=" font-medium text-lg">{program.title}</span>
                        </div>
                        <div>
                                <span className="font-semibold flex text-right" style={{ color: colors.textColor }}>
                            {program.time}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
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

export default NapiBontas
