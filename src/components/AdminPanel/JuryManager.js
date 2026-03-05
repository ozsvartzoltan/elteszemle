import React, { useState, useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, useDisclosure } from '@heroui/react'
import { getJurys, addJury, updateJury, deleteJury } from '../../lib/dataService'

const JuryManager = ({ year }) => {
  const [jurys, setJurys] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    work: '',
    desc: ''
  })
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // Fetch jury on mount or year change
  useEffect(() => {
    loadJurys()
  }, [year])

  const loadJurys = async () => {
    setLoading(true)
    try {
      const data = await getJurys(year)
      setJurys(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error loading jury:', error)
    } finally {
      setLoading(false)
    }
  }

  const openNewForm = () => {
    setEditingId(null)
    setFormData({
      name: '',
      work: '',
      desc: ''
    })
    onOpen()
  }

  const openEditForm = (jury) => {
    setEditingId(jury.id)
    setFormData({
      name: jury.name || '',
      work: jury.work || '',
      desc: jury.desc || ''
    })
    onOpen()
  }

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await updateJury(year, editingId, formData)
      } else {
        await addJury(year, formData)
      }
      await loadJurys()
      onOpenChange()
    } catch (error) {
      console.error('Error saving jury member:', error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Biztosan törölni szeretné ezt a zsűri tagot?')) {
      try {
        await deleteJury(year, id)
        await loadJurys()
      } catch (error) {
        console.error('Error deleting jury member:', error)
      }
    }
  }

  return (
    <div className="p-4">
      <Button color="primary" onPress={openNewForm} className="mb-4">
        ➕ Új zsűri tag hozzáadása
      </Button>

      {loading ? (
        <div className="text-center py-8">Betöltés...</div>
      ) : jurys.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Még nincsenek zsűri tagok az {year} évhez. Adj hozzá egyet az "Új zsűri tag hozzáadása" gombbal!
        </div>
      ) : (
        <Table aria-label="Zsűri tagok táblázata">
          <TableHeader>
            <TableColumn>Név</TableColumn>
            <TableColumn>Munkakör</TableColumn>
            <TableColumn>Műveletek</TableColumn>
          </TableHeader>
          <TableBody>
            {jurys.map(jury => (
              <TableRow key={jury.id}>
                <TableCell>{jury.name}</TableCell>
                <TableCell>{jury.work || '-'}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={() => openEditForm(jury)}
                  >
                    ✏️
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => handleDelete(jury.id)}
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
            {editingId ? 'Zsűri szerkesztése' : 'Új zsűri hozzáadása'}
          </ModalHeader>
          <ModalBody className="gap-4">
            <Input
              label="Név"
              placeholder="Teljes név"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <Input
              label="Munkakör"
              placeholder="pl. Operatőr, Rendező"
              value={formData.work}
              onChange={(e) => setFormData({...formData, work: e.target.value})}
            />
            <Textarea
              label="Leírás"
              placeholder="Zsűri tag leírása, biográfiája"
              value={formData.desc}
              onChange={(e) => setFormData({...formData, desc: e.target.value})}
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

export default JuryManager
