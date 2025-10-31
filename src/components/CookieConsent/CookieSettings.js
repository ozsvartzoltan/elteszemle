import React from 'react'
import { Button } from '@heroui/react'
import { useConsent } from '../../contexts/ConsentContext'

const CookieSettings = ({ className = '' }) => {
    const { showConsentSettings, hasConsentBeenSet, consentPreferences } = useConsent()

    const handleShowSettings = () => {
        showConsentSettings()
    }

    return (
        <div className={`inline-block ${className}`}>
            <Button
                onPress={handleShowSettings}
                variant="light"
                size="sm"
                className="text-red-100 hover:text-white underline h-auto p-0 min-w-0 bg-transparent"
            >
                🍪 Cookie beállítások
            </Button>

            {hasConsentBeenSet() && (
                <div className="text-xs text-red-200 mt-1">
                    Analitikai sütik: {consentPreferences.analytics_Storage === 'granted' ? '✅ Engedélyezve' : '❌ Tiltva'}
                </div>
            )}
        </div>
    )
}

export default CookieSettings