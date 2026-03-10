import React, { useState } from 'react'
import { Card, CardBody, Input, Button } from '@heroui/react'
import { useTheme } from '../../contexts/ThemeContext'
import { useData } from '../../contexts/DataContext'

export default function SettingsManager() {
  const { year } = useData()
  const { colors, updateTheme } = useTheme()
  const [mainColor, setMainColor] = useState(colors.mainColor)
  const [linkColor, setLinkColor] = useState(colors.linkColor)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    try {
      await updateTheme({ mainColor, linkColor })
      setMessage('Colors saved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('Error saving colors: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  const handleReset = () => {
    setMainColor(colors.mainColor)
    setLinkColor(colors.linkColor)
  }

  if (year === 2025) {
    return (
      <div className="p-6">
        <Card className="bg-gray-800">
          <CardBody>
            <p className="text-white text-center">
              Theme settings are not available for 2025 (colors are hardcoded).
              <br />
              Switch to 2026 or later to customize colors.
            </p>
          </CardBody>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Theme Settings ({year})</h2>

      <Card className="bg-white border border-gray-200">
        <CardBody className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-gray-800 text-sm font-medium mb-2 block">
                Main Color (Header background, buttons, etc.)
              </label>
              <div className="flex gap-4 items-center">
                <Input
                  type="color"
                  value={mainColor}
                  onChange={(e) => setMainColor(e.target.value)}
                  className="w-24 h-12 cursor-pointer"
                />
                <Input
                  type="text"
                  value={mainColor}
                  onChange={(e) => setMainColor(e.target.value)}
                  placeholder="#cc2d1c"
                  className="flex-1"
                />
              </div>
              <div 
                className="mt-2 p-4 rounded border border-white/20"
                style={{ backgroundColor: mainColor }}
              >
                <p className="text-white font-semibold">Preview</p>
              </div>
            </div>

            <div>
              <label className="text-gray-800 text-sm font-medium mb-2 block">
                Link Color (Text links, accents)
              </label>
              <div className="flex gap-4 items-center">
                <Input
                  type="color"
                  value={linkColor}
                  onChange={(e) => setLinkColor(e.target.value)}
                  className="w-24 h-12 cursor-pointer"
                />
                <Input
                  type="text"
                  value={linkColor}
                  onChange={(e) => setLinkColor(e.target.value)}
                  placeholder="#cc2d1c"
                  className="flex-1"
                />
              </div>
              <div className="mt-2 p-4 rounded bg-gray-900">
                <a 
                  href="#" 
                  className="underline font-semibold"
                  style={{ color: linkColor }}
                  onClick={(e) => e.preventDefault()}
                >
                  Preview Link
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              color="primary"
              onPress={handleSave}
              isLoading={saving}
              className="flex-1"
            >
              Save Colors
            </Button>
            <Button
              color="danger"
              variant="bordered"
              onPress={handleReset}
              className="flex-1"
            >
              Reset
            </Button>
          </div>

          {message && (
            <p className={`text-center ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
        </CardBody>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardBody>
          <h3 className="text-gray-800 font-semibold mb-2">Current Theme:</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Main Color: <span className="font-mono">{colors.mainColor}</span></p>
            <p>Link Color: <span className="font-mono">{colors.linkColor}</span></p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
