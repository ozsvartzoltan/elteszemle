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
  Textarea,
  useDisclosure,
} from '@heroui/react'
import {
  getExtraPrograms,
  addExtraProgram,
  updateExtraProgram,
  deleteExtraProgram,
} from '../../lib/dataService'

const createEmptyFormData = () => ({
  date: '',
  title: '',
  time: '',
  place: '',
  subtitle: '',
  description: [''],
  performers: '',
  end: '',
  link: '',
})

const normalizeDescription = (description) => {
  if (!Array.isArray(description)) {
    return ['']
  }

  const filtered = description.map((line) => (line || '').trim()).filter(Boolean)
  return filtered.length > 0 ? filtered : ['']
}

const normalizeProgramForForm = (program) => ({
  date: program.date || '',
  title: program.title || '',
  time: program.time || '',
  place: program.place || '',
  subtitle: program.subtitle || '',
  description: normalizeDescription(program.description),
  performers: program.performers || '',
  end: program.end || '',
  link: program.link || '',
})

const buildPayload = (formData) => ({
  date: (formData.date || '').trim(),
  title: (formData.title || '').trim(),
  time: (formData.time || '').trim(),
  place: (formData.place || '').trim(),
  subtitle: (formData.subtitle || '').trim(),
  description: (formData.description || []).map((line) => line.trim()).filter(Boolean),
  performers: (formData.performers || '').trim(),
  end: (formData.end || '').trim(),
  link: (formData.link || '').trim(),
})

const ExtraProgramManager = ({ year }) => {
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

      return (first.title || '').localeCompare(second.title || '')
    })
  }, [programs])

  const loadPrograms = async () => {
    setLoading(true)
    setError('')

    try {
      const grouped = await getExtraPrograms(year)
      const list = Object.values(grouped || {}).flatMap((items) => items || [])
      setPrograms(list)
    } catch (loadError) {
      console.error('Error loading extra programs:', loadError)
      setError('Nem sikerült betölteni a szakmai programokat.')
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

  const setDescriptionLine = (index, value) => {
    setFormData((current) => {
      const nextDescription = [...current.description]
      nextDescription[index] = value
      return { ...current, description: nextDescription }
    })
  }

  const addDescriptionLine = () => {
    setFormData((current) => ({
      ...current,
      description: [...current.description, ''],
    }))
  }

  const removeDescriptionLine = (index) => {
    setFormData((current) => {
      if (current.description.length === 1) {
        return { ...current, description: [''] }
      }

      return {
        ...current,
        description: current.description.filter((_, lineIndex) => lineIndex !== index),
      }
    })
  }

  const handleSubmit = async () => {
    const payload = buildPayload(formData)

    if (!payload.date || !payload.title || !payload.time) {
      setFormError('A dátum, cím és idő mező kitöltése kötelező.')
      return
    }

    try {
      setFormError('')
      setError('')

      if (editingId) {
        await updateExtraProgram(year, editingId, payload)
      } else {
        await addExtraProgram(year, payload)
      }

      await loadPrograms()
      onOpenChange()
    } catch (saveError) {
      console.error('Error saving extra program:', saveError)
      setFormError('Nem sikerült menteni a szakmai programot.')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Biztosan törölni szeretnéd ezt a szakmai programot?')) {
      return
    }

    try {
      setError('')
      await deleteExtraProgram(year, id)
      await loadPrograms()
    } catch (deleteError) {
      console.error('Error deleting extra program:', deleteError)
      setError('Nem sikerült törölni a szakmai programot.')
    }
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új szakmai program hozzáadása
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
          Még nincsenek szakmai programok az {year} évhez.
        </div>
      ) : (
        <Table aria-label="Szakmai programok táblázata">
          <TableHeader>
            <TableColumn>Dátum</TableColumn>
            <TableColumn>Cím</TableColumn>
            <TableColumn>Idő</TableColumn>
            <TableColumn>Helyszín</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {sortedPrograms.map((program) => (
              <TableRow key={program.id}>
                <TableCell>{program.date || '-'}</TableCell>
                <TableCell>{program.title || '-'}</TableCell>
                <TableCell>{program.time || '-'}</TableCell>
                <TableCell>{program.place || '-'}</TableCell>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" className="max-h-[800px] overflow-auto">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {editingId ? 'Szakmai program szerkesztése' : 'Új szakmai program'}
          </ModalHeader>
          <ModalBody className="gap-4">
            {formError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded text-sm">
                {formError}
              </div>
            )}

            <Input
              label="Dátum *"
              placeholder="Pl. 05.01"
              value={formData.date}
              onChange={(event) => setFormData({ ...formData, date: event.target.value })}
            />
            <Input
              label="Cím *"
              placeholder="Program címe"
              value={formData.title}
              onChange={(event) => setFormData({ ...formData, title: event.target.value })}
            />
            <Input
              label="Idő *"
              placeholder="Pl. 13:00 - 14:30"
              value={formData.time}
              onChange={(event) => setFormData({ ...formData, time: event.target.value })}
            />
            <Input
              label="Helyszín"
              placeholder="Pl. Nagyterem"
              value={formData.place}
              onChange={(event) => setFormData({ ...formData, place: event.target.value })}
            />
            <Input
              label="Alcím"
              placeholder="Rövid kiegészítő cím"
              value={formData.subtitle}
              onChange={(event) => setFormData({ ...formData, subtitle: event.target.value })}
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Leírás pontok (lista)</label>
                <Button size="sm" variant="flat" onPress={addDescriptionLine}>
                  + Új pont
                </Button>
              </div>

              {formData.description.map((line, index) => (
                <div key={`description-${index}`} className="flex items-start gap-2">
                  <Textarea
                    minRows={2}
                    placeholder={`Leírás ${index + 1}. pont`}
                    value={line}
                    onChange={(event) => setDescriptionLine(index, event.target.value)}
                  />
                  <Button
                    isIconOnly
                    variant="light"
                    color="danger"
                    onPress={() => removeDescriptionLine(index)}
                    className="mt-2"
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>

            <Input
              label="Előadók / Performers"
              placeholder="Előadó(k) neve"
              value={formData.performers}
              onChange={(event) => setFormData({ ...formData, performers: event.target.value })}
            />
            <Input
              label="Vége"
              placeholder="Pl. 14:30"
              value={formData.end}
              onChange={(event) => setFormData({ ...formData, end: event.target.value })}
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

export default ExtraProgramManager
