import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, Select, SelectItem, useDisclosure } from '@heroui/react'
import { getMovies, addMovie, updateMovie, deleteMovie, getBlocks } from '../../lib/dataService'

const MovieManager = ({ year }) => {
  const [movies, setMovies] = useState([])
  const [blocks, setBlocks] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState({
    blockId: '',
    title: '',
    length: '',
    director: '',
    actors: '',
    description: '',
    type: '',
    image: ''
  })
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // Fetch movies on mount or year change
  useEffect(() => {
    loadMovies()
  }, [year])

  const loadMovies = async () => {
    setLoading(true)
    setError('')
    try {
      const [data, blockData] = await Promise.all([getMovies(year), getBlocks(year)])
      // Convert object to array if needed
      const moviesArray = typeof data === 'object' && !Array.isArray(data)
        ? Object.entries(data).map(([id, movie]) => ({ id, ...movie }))
        : Array.isArray(data) ? data : []
      setMovies(moviesArray)
      setBlocks(blockData)
    } catch (error) {
      console.error('Error loading movies:', error)
      setError('Nem sikerült betölteni a filmeket.')
    } finally {
      setLoading(false)
    }
  }

  const openNewForm = () => {
    setEditingId(null)
    setError('')
    setFormError('')
    setFormData({
      blockId: '',
      title: '',
      length: '',
      director: '',
      actors: '',
      description: '',
      type: '',
      image: ''
    })
    onOpen()
  }

  const openEditForm = (movie) => {
    setEditingId(movie.id)
    setError('')
    setFormError('')
    setFormData({
      blockId: movie.blockId || '',
      title: movie.title || '',
      length: movie.length || '',
      director: movie.director || '',
      actors: movie.actors || '',
      description: movie.description || movie.synopsis || '',
      type: movie.type || movie.genre || '',
      image: movie.image || movie.img || ''
    })
    onOpen()
  }

  const handleSubmit = async () => {
    if (!formData.blockId) {
      setFormError('A blokk kiválasztása kötelező.')
      return
    }

    const payload = {
      blockId: formData.blockId,
      title: formData.title,
      length: formData.length,
      director: formData.director,
      actors: formData.actors,
      description: formData.description,
      type: formData.type,
      image: formData.image,
    }

    try {
      setError('')
      setFormError('')
      if (editingId) {
        await updateMovie(year, editingId, payload)
      } else {
        await addMovie(year, payload)
      }
      await loadMovies()
      onOpenChange()
    } catch (error) {
      console.error('Error saving movie:', error)
      setFormError('Nem sikerült menteni a filmet.')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Biztosan törölni szeretné ezt a filmet?')) {
      try {
        setError('')
        await deleteMovie(year, id)
        await loadMovies()
      } catch (error) {
        console.error('Error deleting movie:', error)
        setError('Nem sikerült törölni a filmet.')
      }
    }
  }

  const getBlockName = (blockId) => {
    if (!blockId) {
      return '-'
    }
    const block = blocks.find((item) => item.id === blockId)
    return block?.name || 'Ismeretlen blokk'
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új film hozzáadása
      </Button>

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Betöltés...</div>
      ) : movies.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek filmek az {year} évhez. Adj hozzá egyet az "Új film hozzáadása" gombbal!
        </div>
      ) : (
        <Table aria-label="Filmek táblázata">
          <TableHeader>
            <TableColumn>Blokk</TableColumn>
            <TableColumn>Cím</TableColumn>
            <TableColumn>Rendező</TableColumn>
            <TableColumn>Típus</TableColumn>
            <TableColumn>Hossz</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {movies.map(movie => (
              <TableRow key={movie.id}>
                <TableCell>{getBlockName(movie.blockId)}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.director || '-'}</TableCell>
                <TableCell>{movie.type || movie.genre || '-'}</TableCell>
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
            <Select
              label="Blokk *"
              placeholder="Válassz blokkot..."
              isInvalid={Boolean(formError)}
              errorMessage={formError}
              selectedKeys={formData.blockId ? new Set([formData.blockId]) : new Set([])}
              onSelectionChange={(keys) => {
                const selectedKey = Array.from(keys)[0] || ''
                if (selectedKey) {
                  setFormError('')
                }
                setFormData({ ...formData, blockId: selectedKey })
              }}
            >
              {blocks.map((block) => (
                <SelectItem key={block.id}>{block.name}</SelectItem>
              ))}
            </Select>
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
              label="Leírás"
              placeholder="Film rövid ismertetése"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            <Input
              label="Típus"
              placeholder="Pl. kisjátékfilm"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
            />
            <Input
              label="Kép URL"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
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
