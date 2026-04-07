import React, { createContext, useContext, useState, useEffect } from 'react'
import { getMovies, getJurys, getExtraPrograms, getDailyPrograms } from '../lib/dataService'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [year, setYear] = useState(() => {
    const saved = localStorage.getItem('selectedYear')
    return saved ? parseInt(saved, 10) : 2026
  })
  const [movies, setMovies] = useState({})
  const [jurys, setJurys] = useState([])
  const [extraPrograms, setExtraPrograms] = useState({})
  const [dailyPrograms, setDailyPrograms] = useState({})
  const [loading, setLoading] = useState(true)

  // Persist year to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selectedYear', year.toString())
  }, [year])

  // Load data when year changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const [moviesData, jurysData, extraProgramsData, dailyProgramsData] = await Promise.all([
          getMovies(year),
          getJurys(year),
          getExtraPrograms(year),
          getDailyPrograms(year)
        ])
        setMovies(moviesData)
        setJurys(jurysData)
        setExtraPrograms(extraProgramsData)
        setDailyPrograms(dailyProgramsData)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [year])

  const changeYear = (newYear) => {
    setYear(newYear)
  }

  return (
    <DataContext.Provider value={{
      year,
      changeYear,
      movies,
      jurys,
      extraPrograms,
      dailyPrograms,
      loading
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
