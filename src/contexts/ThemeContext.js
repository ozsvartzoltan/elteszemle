import React, { createContext, useContext, useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const DEFAULT_COLORS = {
  mainColor: '#cc2d1c',
  textColor: '#cc2d1c',
  linkColor: '#cc2d1c'
}

export const ThemeProvider = ({ children, year }) => {
  const [colors, setColors] = useState(DEFAULT_COLORS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTheme = async () => {
      // Always use default colors for 2025
      if (year === 2025) {
        setColors(DEFAULT_COLORS)
        setLoading(false)
        return
      }

      // Load from Firebase for 2026+
      try {
        const settingsDoc = await getDoc(doc(db, `years/${year}/settings/theme`))
        if (settingsDoc.exists()) {
          const data = settingsDoc.data()
          setColors({
            mainColor: data.mainColor || DEFAULT_COLORS.mainColor,
            textColor: data.textColor || data.mainColor || DEFAULT_COLORS.textColor,
            linkColor: data.linkColor || DEFAULT_COLORS.linkColor
          })
        } else {
          // Fallback to default if no settings exist
          setColors(DEFAULT_COLORS)
        }
      } catch (error) {
        console.error('Error loading theme:', error)
        setColors(DEFAULT_COLORS)
      } finally {
        setLoading(false)
      }
    }

    loadTheme()
  }, [year])

  const updateTheme = async (newColors) => {
    if (year === 2025) {
      console.warn('Cannot update theme for 2025 (hardcoded)')
      return
    }

    try {
      await setDoc(doc(db, `years/${year}/settings/theme`), {
        ...newColors,
        updatedAt: new Date()
      })
      setColors({
        mainColor: newColors.mainColor || DEFAULT_COLORS.mainColor,
        textColor: newColors.textColor || newColors.mainColor || DEFAULT_COLORS.textColor,
        linkColor: newColors.linkColor || DEFAULT_COLORS.linkColor,
      })
    } catch (error) {
      console.error('Error updating theme:', error)
      throw error
    }
  }

  return (
    <ThemeContext.Provider value={{
      colors,
      loading,
      updateTheme
    }}>
      {loading ? null : children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
