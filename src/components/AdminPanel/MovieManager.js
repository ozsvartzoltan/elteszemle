import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, useDisclosure } from '@heroui/react'
import { getMovies, addMovie, updateMovie, deleteMovie } from '../../lib/dataService'

const MovieManager = ({ year }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    length: '',
    director: '',
    actors: '',
    synopsis: '',
    genre: ''
  })
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // Fetch movies on mount or year change
  useEffect(() => {
    loadMovies()
  }, [year])

  const loadMovies = async () => {
    setLoading(true)
    try {
      const data = await getMovies(year)
      // Convert object to array if needed
      const moviesArray = typeof data === 'object' && !Array.isArray(data)
        ? Object.entries(data).map(([id, movie]) => ({ id, ...movie }))
        : Array.isArray(data) ? data : []
      setMovies(moviesArray)
    } catch (error) {
      console.error('Error loading movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const openNewForm = () => {
    setEditingId(null)
    setFormData({
      title: '',
      length: '',
      director: '',
      actors: '',
      synopsis: '',
      genre: ''
    })
    onOpen()
  }

  const openEditForm = (movie) => {
    setEditingId(movie.id)
    setFormData({
      title: movie.title || '',
      length: movie.length || '',
      director: movie.director || '',
      actors: movie.actors || '',
      synopsis: movie.synopsis || '',
      genre: movie.genre || ''
    })
    onOpen()
  }

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updateMovie(year, editingId, formData)
      } else {
        await addMovie(year, formData)
      }
      await loadMovies()
      onOpenChange()
    } catch (error) {
      console.error('Error saving movie:', error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Biztosan törölni szeretné ezt a filmet?')) {
      try {
        await deleteMovie(year, id)
        await loadMovies()
      } catch (error) {
        console.error('Error deleting movie:', error)
      }
    }
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új film hozzáadása
      </Button>

      {loading ? (
        <div className="text-center py-8">Betöltés...</div>
      ) : movies.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek filmek az {year} évhez. Adj hozzá egyet az "Új film hozzáadása" gombbal!
        </div>
      ) : (
        <Table aria-label="Filmek táblázata">
          <TableHeader>
            <TableColumn>Cím</TableColumn>
            <TableColumn>Rendező</TableColumn>
            <TableColumn>Műfaj</TableColumn>
            <TableColumn>Hossz</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {movies.map(movie => (
              <TableRow key={movie.id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.director || '-'}</TableCell>
                <TableCell>{movie.genre || '-'}</TableCell>
                <TableCell>{movie.length || '-'}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={() => openEditForm(movie)}
                  >
                    ✏️
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => handleDelete(movie.id)}
                  >
                    🗑️
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {editingId ? 'Film szerkesztése' : 'Új film hozzáadása'}
          </ModalHeader>
          <ModalBody className="gap-4">
            <Input
              label="Cím"
              placeholder="Film címe"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            <Input
              label="Hossz (perc)"
              placeholder="Játékidő"
              value={formData.length}
              onChange={(e) => setFormData({...formData, length: e.target.value})}
            />
            <Input
              label="Rendező"
              placeholder="Rendező neve"
              value={formData.director}
              onChange={(e) => setFormData({...formData, director: e.target.value})}
            />
            <Input
              label="Szereplők"
              placeholder="Főbb szereplők"
              value={formData.actors}
              onChange={(e) => setFormData({...formData, actors: e.target.value})}
            />
            <Textarea
              label="Szinopszis"
              placeholder="Film rövid ismertetése"
              value={formData.synopsis}
              onChange={(e) => setFormData({...formData, synopsis: e.target.value})}
            />
            <Input
              label="Műfaj"
              placeholder="Film műfaja"
              value={formData.genre}
              onChange={(e) => setFormData({...formData, genre: e.target.value})}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => onOpenChange()}>
              Mégse
            </Button>
            <Button color="primary" onPress={handleSubmit}>
              {editingId ? 'Mentés' : 'Hozzáadás'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default MovieManager
