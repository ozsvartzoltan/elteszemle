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
  getDailyPrograms,
  addDailyProgram,
  updateDailyProgram,
  deleteDailyProgram,
} from '../../lib/dataService'

const createEmptyFormData = () => ({
  name: '',
  date: '',
  time: '',
  link: '',
})

const normalizeProgramForForm = (program) => ({
  name: program.name || '',
  date: program.date || '',
  time: program.time || '',
  link: program.link || '',
})

const buildPayload = (formData) => ({
  name: (formData.name || '').trim(),
  date: (formData.date || '').trim(),
  time: (formData.time || '').trim(),
  link: (formData.link || '').trim(),
})

const DailyProgramManager = ({ year }) => {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState(createEmptyFormData())
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    loadPrograms()
  }, [year])

  const sortedPrograms = useMemo(() => {
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
  }, [programs])

  const loadPrograms = async () => {
    setLoading(true)
    setError('')

    try {
      const grouped = await getDailyPrograms(year)
      const list = Object.values(grouped || {}).flatMap((items) => items || [])
      setPrograms(list)
    } catch (loadError) {
      console.error('Error loading daily programs:', loadError)
      setError('Nem sikerült betölteni a napi bontást.')
    } finally {
      setLoading(false)
    }
  }

  const openNewForm = () => {
    setEditingId(null)
    setFormError('')
    setFormData(createEmptyFormData())
    onOpen()
  }

  const openEditForm = (program) => {
    setEditingId(program.id)
    setFormError('')
    setFormData(normalizeProgramForForm(program))
    onOpen()
  }

  const handleSubmit = async () => {
    const payload = buildPayload(formData)

    if (!payload.name || !payload.date || !payload.time) {
      setFormError('A név, dátum és idő mező kitöltése kötelező.')
      return
    }

    try {
      setFormError('')
      setError('')

      if (editingId) {
        await updateDailyProgram(year, editingId, payload)
      } else {
        await addDailyProgram(year, payload)
      }

      await loadPrograms()
      onOpenChange()
    } catch (saveError) {
      console.error('Error saving daily program:', saveError)
      setFormError('Nem sikerült menteni a napi bontást.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Biztosan törölni szeretnéd ezt a napi bontást?')) {
      return
    }

    try {
      setError('')
      await deleteDailyProgram(year, id)
      await loadPrograms()
    } catch (deleteError) {
      console.error('Error deleting daily program:', deleteError)
      setError('Nem sikerült törölni a napi bontást.')
    }
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új napi program hozzáadása
      </Button>

      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Betöltés...</div>
      ) : sortedPrograms.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek napi programok az {year} évhez.
        </div>
      ) : (
        <Table aria-label="Napi bontás táblázata">
          <TableHeader>
            <TableColumn>Dátum</TableColumn>
            <TableColumn>Név</TableColumn>
            <TableColumn>Idő</TableColumn>
            <TableColumn>Link</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {sortedPrograms.map((program) => (
              <TableRow key={program.id}>
                <TableCell>{program.date || '-'}</TableCell>
                <TableCell>{program.name || '-'}</TableCell>
                <TableCell>{program.time || '-'}</TableCell>
                <TableCell>{program.link || '-'}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={() => openEditForm(program)}
                  >
                    ✏️
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => handleDelete(program.id)}
                  >
                    🗑️
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {editingId ? 'Napi program szerkesztése' : 'Új napi program'}
          </ModalHeader>
          <ModalBody className="gap-4">
            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
                {formError}
              </div>
            )}

            <Input
              label="Név *"
              placeholder="Program neve"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
            />
            <Input
              label="Dátum *"
              placeholder="Pl. 05.01"
              value={formData.date}
              onChange={(event) => setFormData({ ...formData, date: event.target.value })}
            />
            <Input
              label="Idő *"
              placeholder="Pl. 19:30 - 20:15"
              value={formData.time}
              onChange={(event) => setFormData({ ...formData, time: event.target.value })}
            />
            <Input
              label="Link"
              placeholder="https://..."
              value={formData.link}
              onChange={(event) => setFormData({ ...formData, link: event.target.value })}
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

export default DailyProgramManager
