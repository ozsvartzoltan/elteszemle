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
  date: '',
  place: '',
  programs: [{ title: '', time: '', link: '' }],
})

const normalizeProgramForForm = (group) => {
  const normalizedPrograms = Array.isArray(group.programs)
    ? group.programs.map((program) => ({
        title: program.title || '',
        time: program.time || '',
        link: program.link || '',
      }))
    : []

  return {
    date: group.date || '',
    place: group.place || '',
    programs: normalizedPrograms.length > 0 ? normalizedPrograms : [{ title: '', time: '', link: '' }],
  }
}

const buildPayload = (formData) => ({
  date: (formData.date || '').trim(),
  place: (formData.place || '').trim(),
  programs: (formData.programs || [])
    .map((program) => ({
      title: (program.title || '').trim(),
      time: (program.time || '').trim(),
      link: (program.link || '').trim(),
    }))
    .filter((program) => program.title && program.time),
})

const DailyProgramManager = ({ year }) => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [error, setError] = useState('')
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState(createEmptyFormData())
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  useEffect(() => {
    loadPrograms()
  }, [year])

  const sortedGroups = useMemo(() => {
    return [...groups].sort((first, second) => {
      const firstDate = first.date || ''
      const secondDate = second.date || ''
      if (firstDate !== secondDate) {
        return firstDate.localeCompare(secondDate)
      }

      return (first.place || '').localeCompare(second.place || '')
    })
  }, [groups])

  const loadPrograms = async () => {
    setLoading(true)
    setError('')

    try {
      const grouped = await getDailyPrograms(year)
      const list = Object.values(grouped || {}).flatMap((items) => items || [])
      setGroups(list)
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

    if (!payload.date || !payload.place) {
      setFormError('A dátum és helyszín mező kitöltése kötelező.')
      return
    }

    if (!payload.programs.length) {
      setFormError('Legalább egy programot adj meg (cím + idő).')
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
      ) : sortedGroups.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek napi program csoportok az {year} évhez.
        </div>
      ) : (
        <Table aria-label="Napi bontás táblázata">
          <TableHeader>
            <TableColumn>Dátum</TableColumn>
            <TableColumn>Helyszín</TableColumn>
            <TableColumn>Programok száma</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {sortedGroups.map((group) => (
              <TableRow key={group.id}>
                <TableCell>{group.date || '-'}</TableCell>
                <TableCell>{group.place || '-'}</TableCell>
                <TableCell>{Array.isArray(group.programs) ? group.programs.length : 0}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={() => openEditForm(group)}
                  >
                    ✏️
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => handleDelete(group.id)}
                  >
                    🗑️
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl" className="max-h-[800px] overflow-auto">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {editingId ? 'Napi program csoport szerkesztése' : 'Új napi program csoport'}
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
              label="Helyszín *"
              placeholder="Pl. Stúdió K"
              value={formData.place}
              onChange={(event) => setFormData({ ...formData, place: event.target.value })}
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Programok</label>
                <Button
                  size="sm"
                  variant="flat"
                  onPress={() => setFormData({
                    ...formData,
                    programs: [...formData.programs, { title: '', time: '', link: '' }],
                  })}
                >
                  + Új program
                </Button>
              </div>

              {formData.programs.map((program, index) => (
                <div key={`program-row-${index}`} className="border border-gray-200 rounded-lg p-3 space-y-2">
                  <Input
                    label={`Cím ${index + 1} *`}
                    placeholder="Program címe"
                    value={program.title}
                    onChange={(event) => {
                      const nextPrograms = [...formData.programs]
                      nextPrograms[index] = { ...nextPrograms[index], title: event.target.value }
                      setFormData({ ...formData, programs: nextPrograms })
                    }}
                  />
                  <Input
                    label={`Idő ${index + 1} *`}
                    placeholder="Pl. 19:30 - 20:15"
                    value={program.time}
                    onChange={(event) => {
                      const nextPrograms = [...formData.programs]
                      nextPrograms[index] = { ...nextPrograms[index], time: event.target.value }
                      setFormData({ ...formData, programs: nextPrograms })
                    }}
                  />
                  <Input
                    label={`Link ${index + 1}`}
                    placeholder="https://..."
                    value={program.link}
                    onChange={(event) => {
                      const nextPrograms = [...formData.programs]
                      nextPrograms[index] = { ...nextPrograms[index], link: event.target.value }
                      setFormData({ ...formData, programs: nextPrograms })
                    }}
                  />
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      variant="light"
                      color="danger"
                      onPress={() => {
                        if (formData.programs.length === 1) {
                          setFormData({ ...formData, programs: [{ title: '', time: '', link: '' }] })
                          return
                        }
                        setFormData({
                          ...formData,
                          programs: formData.programs.filter((_, rowIndex) => rowIndex !== index),
                        })
                      }}
                    >
                      Program törlése
                    </Button>
                  </div>
                </div>
              ))}
            </div>
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
