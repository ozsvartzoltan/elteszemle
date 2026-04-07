import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore'
import { db } from './firebase'

const sortExtraPrograms = (programs) => {
  return [...programs].sort((first, second) => {
    const firstDate = first.date || ''
    const secondDate = second.date || ''
    if (firstDate !== secondDate) {
      return firstDate.localeCompare(secondDate)
    }

    const firstTime = first.time || ''
    const secondTime = second.time || ''
    if (firstTime !== secondTime) {
      return firstTime.localeCompare(secondTime)
    }

    return (first.title || '').localeCompare(second.title || '')
  })
}

const groupExtraProgramsByDate = (programs) => {
  return programs.reduce((accumulator, program) => {
    const dateKey = program.date || 'ismeretlen'
    if (!accumulator[dateKey]) {
      accumulator[dateKey] = []
    }
    accumulator[dateKey].push(program)
    return accumulator
  }, {})
}

const sortDailyPrograms = (programs) => {
  return [...programs].sort((first, second) => {
    const firstDate = first.date || ''
    const secondDate = second.date || ''
    if (firstDate !== secondDate) {
      return firstDate.localeCompare(secondDate)
    }

    const firstTime = first.time || ''
    const secondTime = second.time || ''
    if (firstTime !== secondTime) {
      return firstTime.localeCompare(secondTime)
    }

    return (first.name || '').localeCompare(second.name || '')
  })
}

const sortDailyProgramEntries = (programs) => {
  return [...(programs || [])].sort((first, second) => {
    const firstTime = first.time || ''
    const secondTime = second.time || ''
    if (firstTime !== secondTime) {
      return firstTime.localeCompare(secondTime)
    }

    return (first.title || '').localeCompare(second.title || '')
  })
}

const sortDailyProgramGroups = (groups) => {
  return [...(groups || [])].sort((first, second) => {
    const firstDate = first.date || ''
    const secondDate = second.date || ''
    if (firstDate !== secondDate) {
      return firstDate.localeCompare(secondDate)
    }

    return (first.place || '').localeCompare(second.place || '')
  })
}

const groupDailyProgramGroupsByDate = (groups) => {
  const sortedGroups = sortDailyProgramGroups(groups)
  return sortedGroups.reduce((accumulator, group) => {
    const dateKey = group.date || 'ismeretlen'
    if (!accumulator[dateKey]) {
      accumulator[dateKey] = []
    }
    accumulator[dateKey].push(group)
    return accumulator
  }, {})
}

const extractPlaceFromTime = (timeText) => {
  const text = timeText || ''
  const match = text.match(/\(([^)]+)\)\s*$/)
  return match ? match[1].trim() : ''
}

const normalizeLegacyScheduleToGroups = (scheduleData) => {
  const grouped = new Map()

  ;(scheduleData || []).forEach((item, index) => {
    const date = item.date || ''
    const place = extractPlaceFromTime(item.time)
    const key = `${date}||${place}`

    if (!grouped.has(key)) {
      grouped.set(key, {
        id: `const-group-${date}-${place || 'no-place'}`,
        date,
        place,
        programs: [],
      })
    }

    grouped.get(key).programs.push({
      id: `const-program-${index}`,
      title: item.name || '',
      time: item.time || '',
      link: item.link || '',
    })
  })

  const groups = Array.from(grouped.values()).map((group) => ({
    ...group,
    programs: sortDailyProgramEntries(group.programs),
  }))

  return groupDailyProgramGroupsByDate(groups)
}

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

// ==================== EXTRA PROGRAMS ====================

export const getExtraPrograms = async (year) => {
  if (year === 2025) {
    const { extraPrograms } = await import('../utils/const')
    const flatPrograms = Object.entries(extraPrograms || {}).flatMap(([date, programs]) =>
      (programs || []).map((program, index) => ({
        id: `const-${date}-${index}`,
        date,
        title: program.title || '',
        time: program.time || '',
        place: program.place || '',
        subtitle: program.subtitle || '',
        description: Array.isArray(program.description) ? program.description : [],
        performers: program.performers || program.eloadok || program.speakers || '',
        end: program.end || '',
        link: typeof program.link === 'string' ? program.link : (program.link?.url || ''),
      }))
    )

    return groupExtraProgramsByDate(sortExtraPrograms(flatPrograms))
  }

  try {
    const snapshot = await getDocs(collection(db, `years/${year}/extraPrograms`))
    const programs = snapshot.docs.map((programDoc) => ({
      id: programDoc.id,
      ...programDoc.data(),
      description: Array.isArray(programDoc.data().description)
        ? programDoc.data().description
        : [],
    }))

    return groupExtraProgramsByDate(sortExtraPrograms(programs))
  } catch (error) {
    console.error('Error fetching extra programs:', error)
    return {}
  }
}

export const addExtraProgram = async (year, extraProgramData) => {
  try {
    const docRef = await addDoc(collection(db, `years/${year}/extraPrograms`), {
      ...extraProgramData,
      description: Array.isArray(extraProgramData.description)
        ? extraProgramData.description
        : [],
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding extra program:', error)
    throw error
  }
}

export const updateExtraProgram = async (year, extraProgramId, extraProgramData) => {
  try {
    await updateDoc(doc(db, `years/${year}/extraPrograms/${extraProgramId}`), {
      ...extraProgramData,
      description: Array.isArray(extraProgramData.description)
        ? extraProgramData.description
        : [],
      updatedAt: new Date(),
    })
  } catch (error) {
    console.error('Error updating extra program:', error)
    throw error
  }
}

export const deleteExtraProgram = async (year, extraProgramId) => {
  try {
    await deleteDoc(doc(db, `years/${year}/extraPrograms/${extraProgramId}`))
  } catch (error) {
    console.error('Error deleting extra program:', error)
    throw error
  }
}

// ==================== DAILY PROGRAMS ====================

export const getDailyPrograms = async (year) => {
  if (year === 2025) {
    const { scheduleData } = await import('../utils/const')
    return normalizeLegacyScheduleToGroups(scheduleData)
  }

  try {
    const snapshot = await getDocs(collection(db, `years/${year}/dailyPrograms`))
    const groups = snapshot.docs.map((programDoc) => {
      const data = programDoc.data()

      // Backward compatibility with old flat model (name/date/time/link)
      if (typeof data.name === 'string' || typeof data.time === 'string') {
        return {
          id: programDoc.id,
          date: data.date || '',
          place: data.place || '',
          programs: sortDailyProgramEntries([
            {
              id: `${programDoc.id}-legacy`,
              title: data.name || '',
              time: data.time || '',
              link: data.link || '',
            },
          ]),
        }
      }

      return {
        id: programDoc.id,
        date: data.date || '',
        place: data.place || '',
        programs: sortDailyProgramEntries(
          Array.isArray(data.programs)
            ? data.programs.map((program, index) => ({
                id: program.id || `${programDoc.id}-program-${index}`,
                title: program.title || '',
                time: program.time || '',
                link: program.link || '',
              }))
            : []
        ),
      }
    })

    return groupDailyProgramGroupsByDate(groups)
  } catch (error) {
    console.error('Error fetching daily programs:', error)
    return {}
  }
}

export const addDailyProgram = async (year, dailyProgramData) => {
  try {
    const docRef = await addDoc(collection(db, `years/${year}/dailyPrograms`), {
      date: dailyProgramData.date || '',
      place: dailyProgramData.place || '',
      programs: sortDailyProgramEntries(
        Array.isArray(dailyProgramData.programs) ? dailyProgramData.programs : []
      ),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding daily program:', error)
    throw error
  }
}

export const updateDailyProgram = async (year, dailyProgramId, dailyProgramData) => {
  try {
    await updateDoc(doc(db, `years/${year}/dailyPrograms/${dailyProgramId}`), {
      date: dailyProgramData.date || '',
      place: dailyProgramData.place || '',
      programs: sortDailyProgramEntries(
        Array.isArray(dailyProgramData.programs) ? dailyProgramData.programs : []
      ),
      updatedAt: new Date(),
    })
  } catch (error) {
    console.error('Error updating daily program:', error)
    throw error
  }
}

export const deleteDailyProgram = async (year, dailyProgramId) => {
  try {
    await deleteDoc(doc(db, `years/${year}/dailyPrograms/${dailyProgramId}`))
  } catch (error) {
    console.error('Error deleting daily program:', error)
    throw error
  }
}

// ==================== GENERAL DATA ====================

export const getYearData = async (year) => {
  if (year === 2025) {
    // Return all 2025 data from const.js
    const { movies, zsurik, news, scheduleData, extraPrograms } = await import('../utils/const')
    return {
      movies: movies || {},
      jury: zsurik || [],
      news: news || {},
      schedule: scheduleData || [],
      dailyPrograms: normalizeLegacyScheduleToGroups(scheduleData),
      extraPrograms: extraPrograms || {},
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
    return { movies: {}, jury: [], news: {}, schedule: [], dailyPrograms: [], extraPrograms: {}, blocks: [] }
  } catch (error) {
    console.error('Error fetching year data:', error)
    return { movies: {}, jury: [], news: {}, schedule: [], dailyPrograms: [], extraPrograms: {}, blocks: [] }
  }
}
