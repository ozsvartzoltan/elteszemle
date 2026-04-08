import React, { useState, useEffect, useRef, useMemo } from "react"
import { Tabs, Tab, Skeleton, Image, Button } from "@heroui/react"
import SVG from "components/svg/SVG"
import { useData } from "../contexts/DataContext"
import { useTheme } from "../contexts/ThemeContext"

function Filmek() {
  const { year, movies, blocks } = useData()
  const { colors } = useTheme()
  const groupedMovies = useMemo(() => {
    const blockNames = Object.keys(movies || {})
    const isLegacyGroupedMovies = blockNames.length > 0 && Array.isArray(movies[blockNames[0]])

    if (isLegacyGroupedMovies) {
      return movies || {}
    }

    const blockNameById = (blocks || []).reduce((accumulator, block) => {
      accumulator[block.id] = block.name || block.id
      return accumulator
    }, {})

    const grouped = {}
    Object.values(movies || {}).forEach((movie) => {
      const blockName = blockNameById[movie.blockId] || 'Egyéb'
      if (!grouped[blockName]) {
        grouped[blockName] = []
      }
      grouped[blockName].push(movie)
    })

    Object.keys(grouped).forEach((blockName) => {
      grouped[blockName].sort((first, second) => {
        const firstIndex = Number.isFinite(first.indexInBlock) ? first.indexInBlock : Number.MAX_SAFE_INTEGER
        const secondIndex = Number.isFinite(second.indexInBlock) ? second.indexInBlock : Number.MAX_SAFE_INTEGER
        if (firstIndex !== secondIndex) {
          return firstIndex - secondIndex
        }
        return (first.title || '').localeCompare(second.title || '')
      })
    })

    return grouped
  }, [movies, blocks])

  const blockOrderByName = useMemo(() => {
    return (blocks || []).reduce((accumulator, block) => {
      accumulator[block.name] = Number.isFinite(block.order) ? block.order : Number.MAX_SAFE_INTEGER
      return accumulator
    }, {})
  }, [blocks])

  const blockKeys = useMemo(() => {
    const keys = Object.keys(groupedMovies || {})
    return keys.sort((first, second) => {
      const firstOrder = blockOrderByName[first] ?? Number.MAX_SAFE_INTEGER
      const secondOrder = blockOrderByName[second] ?? Number.MAX_SAFE_INTEGER
      if (firstOrder !== secondOrder) {
        return firstOrder - secondOrder
      }
      return first.localeCompare(second)
    })
  }, [groupedMovies, blockOrderByName])
  const [selectedTab, setSelectedTab] = useState('')
  const [loadedImages, setLoadedImages] = useState({})
  const tabContainerRef = useRef(null)

  useEffect(() => {
    if (!selectedTab && blockKeys.length > 0) {
      setSelectedTab(blockKeys[0])
    }
    if (selectedTab && !blockKeys.includes(selectedTab) && blockKeys.length > 0) {
      setSelectedTab(blockKeys[0])
    }
  }, [blockKeys, selectedTab])

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }))
  }

  const scrollTabs = (direction) => {
    if (tabContainerRef.current) {
      const isLargeScreen = window.innerWidth >= 850
      const isMediumScreen = window.innerWidth >= 650
      const scrollAmount = isLargeScreen ? 600 : isMediumScreen ? 500 : 380

      tabContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    let blokk = localStorage.getItem("name")
    if (blokk?.split(" ")[1] === "Blokk") {
      setSelectedTab(blokk)
    }
    document.body.scrollTop = 0
  }, [])

  return (
    <div className="bg-black text-white min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Filmek</h1>

        <div className="relative mb-8">
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <SVG type="chevronLeft" />
          </button>

          <div
            ref={tabContainerRef}
            className="overflow-x-auto scrollbar-hide px-8"
          >
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={setSelectedTab}
              color="primary"
              variant="underlined"
              className="inline-flex min-w-max whitespace-nowrap"
            >
              {blockKeys.map((block) => (
                <Tab key={block} title={block} />
              ))}
            </Tabs>
          </div>

          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-2 rounded-full"
          >
            <SVG type="chevronRight" />
          </button>
        </div>

        <div className="space-y-10">
          {(groupedMovies[selectedTab] || []).map((movie, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-white/10 rounded-xl shadow-xl flex flex-col md:flex-row overflow-hidden"
            >
              <div className="md:w-2/3 w-full p-6 space-y-2">
                <h2 className="text-2xl font-bold" style={{ color: colors.textColor }}>
                  {movie?.titleJSX ?? movie?.title}
                </h2>
                {movie?.director !== "-" && (
                  <p className="text-sm text-white/90">
                    <strong>Rendező:</strong> {movie.director}
                  </p>
                )}

                <p className="text-sm text-white/90">
                  <strong>Hossz:</strong> {movie.length}
                </p>
                <p className="text-sm text-white/90">
                  <strong>Típus:</strong> {movie.type}
                </p>

                {movie?.actors !== "-" && (
                  <p className="text-sm text-white/90">
                    <strong>Szereplők:</strong> {movie.actors}
                  </p>
                )}
                <p className="text-sm text-white/90">
                  <strong>Leírás:</strong> {movie.description}
                </p>
              </div>

              <div className="md:w-1/3 w-full flex items-center justify-center p-4">
                <Skeleton isLoaded={loadedImages[index]} className="w-full">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    onLoad={() => handleImageLoad(index)}
                    className="w-full h-auto object-contain max-h-[400px] z-100"
                  />
                </Skeleton>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onPress={() => {
          document.body.scrollTop = 0
        }}
        className="fixed bottom-1 right-3 bg-black text-white rounded-full shadow-lg transition-all z-10000"
      >
        <SVG type="chevronUp" />
      </Button>
    </div>
  )
}

export default Filmek
