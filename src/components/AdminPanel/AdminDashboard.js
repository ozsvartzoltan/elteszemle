import React from 'react'
import { Button, Tabs, Tab } from '@heroui/react'
import MovieManager from './MovieManager'
import JuryManager from './JuryManager'
import SettingsManager from './SettingsManager'
import BlockManager from './BlockManager'
import ExtraProgramManager from './ExtraProgramManager'
import DailyProgramManager from './DailyProgramManager'
import { useData } from '../../contexts/DataContext'

const AdminDashboard = ({ user, onLogout }) => {
  const { year, changeYear } = useData()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#542142] text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">ELTE Szemle Admin Panel</h1>
            <p className="text-purple-100 mt-1">Bejelentkezve: {user.email}</p>
          </div>
          <Button
            color="danger"
            variant="light"
            onPress={onLogout}
            className="text-white hover:bg-[#6a2952]"
          >
            Kijelentkezés
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Year Selector */}
        <div className="mb-6 flex gap-2">
          {[2025, 2026].map(y => (
            <Button
              key={y}
              onPress={() => changeYear(y)}
              color={year === y ? 'primary' : 'default'}
              variant={year === y ? 'solid' : 'bordered'}
            >
              {y}
            </Button>
          ))}
          {year !== 2025 && (
            <span className="text-sm text-gray-600 ml-auto flex items-center">
              ✅ Firebase - {year}
            </span>
          )}
          {year === 2025 && (
            <span className="text-sm text-gray-600 ml-auto flex items-center">
              📄 const.js - {year}
            </span>
          )}
        </div>

        {year === 2025 ? (
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-yellow-800">
            ⚠️ A 2025-ös év adatai a const.js fájlban vannak tárolva. 
            Csak a {new Date().getFullYear()}-es évet lehet módosítani az admin panelban.
          </div>
        ) : (
          <Tabs aria-label="Admin sections" className="bg-white rounded-lg shadow">
            <Tab key="blocks" title="Blokkok">
              <BlockManager year={year} />
            </Tab>
            <Tab key="movies" title="Filmek">
              <MovieManager year={year} />
            </Tab>
            <Tab key="jury" title="Szakmai zsűri">
              <JuryManager year={year} />
            </Tab>
            <Tab key="extra-programs" title="Szakmai programok">
              <ExtraProgramManager year={year} />
            </Tab>
            <Tab key="daily-programs" title="Napi bontás">
              <DailyProgramManager year={year} />
            </Tab>
            <Tab key="settings" title="Beállítások">
              <SettingsManager />
            </Tab>
          </Tabs>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
