import React, { useEffect, useMemo, useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from '@heroui/react'
import {
  getBlocks,
  addBlock,
  updateBlock,
  deleteBlock,
  getMovies,
} from '../../lib/dataService'

const BlockManager = ({ year }) => {
  const [blocks, setBlocks] = useState([])
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    order: '',
  })
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    loadData()
  }, [year])

  const loadData = async () => {
    setLoading(true)
    setError('')
    try {
      const [blockData, movieData] = await Promise.all([getBlocks(year), getMovies(year)])
      const movieArray =
        typeof movieData === 'object' && !Array.isArray(movieData)
          ? Object.entries(movieData).map(([id, movie]) => ({ id, ...movie }))
          : Array.isArray(movieData)
          ? movieData
          : []

      setBlocks(blockData)
      setMovies(movieArray)
    } catch (loadError) {
      console.error('Error loading blocks:', loadError)
      setError('Nem sikerült betölteni a blokkokat.')
    } finally {
      setLoading(false)
    }
  }

  const blockUsageCounts = useMemo(() => {
    return movies.reduce((accumulator, movie) => {
      if (!movie.blockId) {
        return accumulator
      }
      accumulator[movie.blockId] = (accumulator[movie.blockId] || 0) + 1
      return accumulator
    }, {})
  }, [movies])

  const openNewForm = () => {
    setEditingId(null)
    setError('')
    setFormData({ name: '', order: '' })
    onOpen()
  }

  const openEditForm = (block) => {
    setEditingId(block.id)
    setError('')
    setFormData({
      name: block.name || '',
      order: Number.isFinite(block.order) ? String(block.order) : '',
    })
    onOpen()
  }

  const handleSubmit = async () => {
    const trimmedName = formData.name.trim()
    if (!trimmedName) {
      setError('A blokk neve kötelező.')
      return
    }

    const parsedOrder = formData.order === '' ? null : Number.parseInt(formData.order, 10)
    if (formData.order !== '' && Number.isNaN(parsedOrder)) {
      setError('A sorrend csak szám lehet.')
      return
    }

    const payload = {
      name: trimmedName,
      ...(parsedOrder !== null ? { order: parsedOrder } : {}),
    }

    try {
      setError('')
      if (editingId) {
        await updateBlock(year, editingId, payload)
      } else {
        await addBlock(year, payload)
      }
      await loadData()
      onOpenChange()
    } catch (submitError) {
      console.error('Error saving block:', submitError)
      setError('Nem sikerült menteni a blokkot.')
    }
  }

  const handleDelete = async (block) => {
    const usedBy = blockUsageCounts[block.id] || 0
    if (usedBy > 0) {
      setError(`A blokk nem törölhető, mert ${usedBy} film tartozik hozzá.`)
      return
    }

    if (!window.confirm(`Biztosan törölni szeretnéd ezt a blokkot: ${block.name}?`)) {
      return
    }

    try {
      setError('')
      await deleteBlock(year, block.id)
      await loadData()
    } catch (deleteError) {
      console.error('Error deleting block:', deleteError)
      setError('Nem sikerült törölni a blokkot.')
    }
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új blokk hozzáadása
      </Button>

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Betöltés...</div>
      ) : blocks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek blokkok az {year} évhez. Adj hozzá egyet!
        </div>
      ) : (
        <Table aria-label="Blokkok táblázata">
          <TableHeader>
            <TableColumn>Blokk neve</TableColumn>
            <TableColumn>Sorrend</TableColumn>
            <TableColumn>Filmek száma</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {blocks.map((block) => (
              <TableRow key={block.id}>
                <TableCell>{block.name}</TableCell>
                <TableCell>{block.order ?? '-'}</TableCell>
                <TableCell>{blockUsageCounts[block.id] || 0}</TableCell>
                <TableCell className="flex gap-2">
                  <Button isIconOnly size="sm" variant="light" onPress={() => openEditForm(block)}>
                    ✏️
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => handleDelete(block)}
                  >
                    🗑️
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {editingId ? 'Blokk szerkesztése' : 'Új blokk hozzáadása'}
          </ModalHeader>
          <ModalBody className="gap-4">
            <Input
              label="Blokk neve"
              placeholder="Pl. I. Blokk - 04.29 - 19:00"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            />
            <Input
              label="Sorrend"
              placeholder="Pl. 1"
              value={formData.order}
              onChange={(event) => setFormData({ ...formData, order: event.target.value })}
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

export default BlockManager
