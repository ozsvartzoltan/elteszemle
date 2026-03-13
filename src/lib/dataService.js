import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'
import { db } from './firebase'

// ==================== MOVIES ====================

export const getMovies = async (year) => {
  if (year === 2025) {
    // Return 2025 data from const.js
    const { movies } = await import('../utils/const')
    return movies || {}
  }

  try {
    const moviesSnapshot = await getDocs(collection(db, `years/${year}/movies`))
    const moviesData = {}
    moviesSnapshot.forEach(doc => {
      moviesData[doc.id] = doc.data()
    })
    return moviesData
  } catch (error) {
    console.error('Error fetching movies:', error)
    return {}
  }
}

export const addMovie = async (year, movieData) => {
  try {
    const docRef = await addDoc(collection(db, `years/${year}/movies`), {
      ...movieData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding movie:', error)
    throw error
  }
}

export const updateMovie = async (year, movieId, movieData) => {
  try {
    await updateDoc(doc(db, `years/${year}/movies/${movieId}`), {
      ...movieData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating movie:', error)
    throw error
  }
}

export const deleteMovie = async (year, movieId) => {
  try {
    await deleteDoc(doc(db, `years/${year}/movies/${movieId}`))
  } catch (error) {
    console.error('Error deleting movie:', error)
    throw error
  }
}

// ==================== BLOCKS ====================

export const getBlocks = async (year) => {
  if (year === 2025) {
    const { movies } = await import('../utils/const')
    return Object.keys(movies || {}).map((name, index) => ({
      id: `const-${index}`,
      name,
      order: index + 1,
    }))
  }

  try {
    const blocksSnapshot = await getDocs(collection(db, `years/${year}/blocks`))
    const blocks = blocksSnapshot.docs.map((blockDoc) => ({
      id: blockDoc.id,
      ...blockDoc.data(),
    }))

    return blocks.sort((first, second) => {
      const firstOrder = Number.isFinite(first.order) ? first.order : Number.MAX_SAFE_INTEGER
      const secondOrder = Number.isFinite(second.order) ? second.order : Number.MAX_SAFE_INTEGER
      if (firstOrder !== secondOrder) {
        return firstOrder - secondOrder
      }
      return (first.name || '').localeCompare(second.name || '')
    })
  } catch (error) {
    console.error('Error fetching blocks:', error)
    return []
  }
}

export const addBlock = async (year, blockData) => {
  try {
    const docRef = await addDoc(collection(db, `years/${year}/blocks`), {
      ...blockData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding block:', error)
    throw error
  }
}

export const updateBlock = async (year, blockId, blockData) => {
  try {
    await updateDoc(doc(db, `years/${year}/blocks/${blockId}`), {
      ...blockData,
      updatedAt: new Date(),
    })
  } catch (error) {
    console.error('Error updating block:', error)
    throw error
  }
}

export const deleteBlock = async (year, blockId) => {
  try {
    await deleteDoc(doc(db, `years/${year}/blocks/${blockId}`))
  } catch (error) {
    console.error('Error deleting block:', error)
    throw error
  }
}

// ==================== JURYS ====================

export const getJurys = async (year) => {
  if (year === 2025) {
    // Return 2025 data from const.js
    const { zsurik } = await import('../utils/const')
    return zsurik || []
  }

  try {
    const jurySnapshot = await getDocs(collection(db, `years/${year}/jury`))
    return jurySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching jury:', error)
    return []
  }
}

export const addJury = async (year, juryData) => {
  try {
    const docRef = await addDoc(collection(db, `years/${year}/jury`), {
      ...juryData,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding jury member:', error)
    throw error
  }
}

export const updateJury = async (year, juryId, juryData) => {
  try {
    await updateDoc(doc(db, `years/${year}/jury/${juryId}`), {
      ...juryData,
      updatedAt: new Date()
    })
  } catch (error) {
    console.error('Error updating jury member:', error)
    throw error
  }
}

export const deleteJury = async (year, juryId) => {
  try {
    await deleteDoc(doc(db, `years/${year}/jury/${juryId}`))
  } catch (error) {
    console.error('Error deleting jury member:', error)
    throw error
  }
}

// ==================== GENERAL DATA ====================

export const getYearData = async (year) => {
  if (year === 2025) {
    // Return all 2025 data from const.js
    const { movies, zsurik, news, scheduleData } = await import('../utils/const')
    return {
      movies: movies || {},
      jury: zsurik || [],
      news: news || {},
      schedule: scheduleData || [],
      blocks: Object.keys(movies || {}).map((name, index) => ({
        id: `const-${index}`,
        name,
        order: index + 1,
      })),
    }
  }

  try {
    const yearDoc = await getDoc(doc(db, 'years', year.toString()))
    if (yearDoc.exists()) {
      return yearDoc.data()
    }
    return { movies: {}, jury: [], news: {}, schedule: [], blocks: [] }
  } catch (error) {
    console.error('Error fetching year data:', error)
    return { movies: {}, jury: [], news: {}, schedule: [], blocks: [] }
  }
}
