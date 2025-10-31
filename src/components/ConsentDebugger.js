import React from 'react'
import { Button, Card, CardBody } from '@heroui/react'
import { useConsent } from '../contexts/ConsentContext'

export default function ConsentDebugger() {
    const {
        consentPreferences,
        hasConsentBeenSet,
        showConsentSettings,
        isInitialized
    } = useConsent()

    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
        return null
    }

    return (
        <Card className="fixed top-4 right-4 max-w-xs z-40">
            <CardBody className="bg-gray-800 text-white">
                <h3 className="font-bold mb-2 text-sm">🍪 Consent Debug</h3>
                <div className="space-y-1 text-xs">
                    <div>Initialized: {isInitialized ? '✅' : '❌'}</div>
                    <div>Consent Set: {hasConsentBeenSet() ? '✅' : '❌'}</div>
                    <div>Analytics: {consentPreferences.analytics_Storage}</div>
                    <div>Timestamp: {consentPreferences.timestamp ? new Date(consentPreferences.timestamp).toLocaleTimeString() : 'None'}</div>
                    <Button
                        onPress={showConsentSettings}
                        color="primary"
                        size="sm"
                        className="mt-2 w-full"
                    >
                        Show Banner
                    </Button>
                </div>
            </CardBody>
        </Card>
    )
}