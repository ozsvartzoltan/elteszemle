import React, { createContext, useContext, useState, useEffect } from 'react'

// Consent states
export const CONSENT_STATES = {
    GRANTED: 'granted',
    DENIED: 'denied'
}

// Storage keys
const CONSENT_STORAGE_KEY = 'clarity_consent_preferences'
const CONSENT_SHOWN_KEY = 'clarity_consent_shown'

// Create context
const ConsentContext = createContext()

// Hook to use consent context
export const useConsent = () => {
    const context = useContext(ConsentContext)
    if (!context) {
        throw new Error('useConsent must be used within a ConsentProvider')
    }
    return context
}

// Default consent preferences
const defaultPreferences = {
    analytics_Storage: CONSENT_STATES.DENIED,
    timestamp: null
}

export const ConsentProvider = ({ children }) => {
    const [consentPreferences, setConsentPreferences] = useState(defaultPreferences)
    const [showConsentBanner, setShowConsentBanner] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)

    // Load saved preferences on mount
    useEffect(() => {
        const loadSavedPreferences = () => {
            try {
                const saved = localStorage.getItem(CONSENT_STORAGE_KEY)
                const hasShown = localStorage.getItem(CONSENT_SHOWN_KEY)

                if (saved) {
                    const parsed = JSON.parse(saved)
                    setConsentPreferences(parsed)
                    // Apply consent to Clarity
                    applyConsentToClarity(parsed)
                } else if (!hasShown) {
                    // Show banner if no preferences saved and banner hasn't been shown
                    setShowConsentBanner(true)
                }
            } catch (error) {
                console.error('Error loading consent preferences:', error)
                setShowConsentBanner(true)
            } finally {
                setIsInitialized(true)
            }
        }

        loadSavedPreferences()
    }, [])

    // Apply consent to Microsoft Clarity
    const applyConsentToClarity = (preferences) => {
        if (typeof window !== 'undefined' && window.clarity) {
            try {
                window.clarity('consentv2', {
                    ad_Storage: "denied", // Always deny ad storage since we don't use ads
                    analytics_Storage: preferences.analytics_Storage
                })
                console.log('Clarity consent applied:', preferences)
            } catch (error) {
                console.error('Error applying consent to Clarity:', error)
            }
        }
    }

    // Save preferences to localStorage
    const savePreferences = (preferences) => {
        try {
            const preferencesWithTimestamp = {
                ...preferences,
                timestamp: Date.now()
            }
            localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(preferencesWithTimestamp))
            localStorage.setItem(CONSENT_SHOWN_KEY, 'true')
        } catch (error) {
            console.error('Error saving consent preferences:', error)
        }
    }

    // Accept analytics cookies
    const acceptAnalytics = () => {
        const newPreferences = {
            analytics_Storage: CONSENT_STATES.GRANTED
        }

        setConsentPreferences(newPreferences)
        savePreferences(newPreferences)
        applyConsentToClarity(newPreferences)
        setShowConsentBanner(false)
    }

    // Reject analytics cookies
    const rejectAnalytics = () => {
        const newPreferences = {
            analytics_Storage: CONSENT_STATES.DENIED
        }

        setConsentPreferences(newPreferences)
        savePreferences(newPreferences)
        applyConsentToClarity(newPreferences)
        setShowConsentBanner(false)
    }

    // Show consent banner again (for settings)
    const showConsentSettings = () => {
        setShowConsentBanner(true)
    }

    // Check if consent has been given for a specific purpose
    const hasConsent = (purpose) => {
        return consentPreferences[purpose] === CONSENT_STATES.GRANTED
    }

    // Check if user has interacted with consent
    const hasConsentBeenSet = () => {
        return localStorage.getItem(CONSENT_SHOWN_KEY) === 'true'
    }

    return (
        <ConsentContext.Provider value={{
            consentPreferences,
            showConsentBanner,
            isInitialized,
            acceptAnalytics,
            rejectAnalytics,
            showConsentSettings,
            hasConsent,
            hasConsentBeenSet,
            CONSENT_STATES
        }}>
            {children}
        </ConsentContext.Provider>
    )
}

export default ConsentContext