import React from 'react'
import { Button } from '@heroui/react'
import { useConsent } from '../../contexts/ConsentContext'
import { useTheme } from 'contexts/ThemeContext'

const CookieSettings = ({ className = '' }) => {
    const { showConsentSettings, hasConsentBeenSet, consentPreferences } = useConsent()
  const { colors } = useTheme()

    const handleShowSettings = () => {
        showConsentSettings()
    }

    return (
        <div className={`inline-block ${className}`}>
            <Button
                onPress={handleShowSettings}
                variant="light"
                size="sm"
                className={ ` hover:text-white underline h-auto p-0 min-w-0 bg-transparent text-white` }
            >
                🍪 Cookie beállítások
            </Button>

            {hasConsentBeenSet() && (
                <div className="text-xs mt-1">
                    Analitikai sütik: {consentPreferences.analytics_Storage === 'granted' ? '✅ Engedélyezve' : '❌ Tiltva'}
                </div>
            )}
        </div>
    )
}

export default CookieSettings