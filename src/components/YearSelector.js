import React from 'react'
import { Button, ButtonGroup } from '@heroui/react'
import { useData } from '../contexts/DataContext'

const YearSelector = () => {
  const { year, changeYear } = useData()
  const availableYears = [2025, 2026]

  return (
    <div className="flex justify-center gap-2 my-4">
      <ButtonGroup>
        {availableYears.map(y => (
          <Button
            key={y}
            onPress={() => changeYear(y)}
            isActive={year === y}
            color={year === y ? 'primary' : 'default'}
            variant={year === y ? 'solid' : 'bordered'}
          >
            {y}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}

export default YearSelector
