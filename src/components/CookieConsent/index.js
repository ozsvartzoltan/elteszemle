import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody } from '@heroui/react'
import { useConsent } from '../../contexts/ConsentContext'

const CookieConsentBanner = () => {
    const {
        showConsentBanner,
        acceptAnalytics,
        rejectAnalytics,
        consentPreferences
    } = useConsent()

    const handleAcceptAnalytics = () => {
        acceptAnalytics()
    }

    const handleRejectAnalytics = () => {
        rejectAnalytics()
    }

    return (
        <Modal
            isOpen={showConsentBanner}
            isDismissable={false}
            hideCloseButton
            placement="middle"
            classNames={{
                base: "max-w-2xl",
                backdrop: "bg-black/50"
            }}
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold text-gray-900">
                        🍪 Cookie beállítások
                    </h2>
                </ModalHeader>

                <ModalBody>
                    <div className="space-y-4">
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Ez a weboldal sütiket használ a jobb felhasználói élmény biztosítása érdekében.
                        </p>
                        {/* Analytics cookies info */}
                        <Card>
                            <CardBody className="bg-blue-50">
                                <h3 className="font-semibold text-gray-900 mb-1">Analitikai sütik</h3>
                                <p className="text-sm text-gray-600">
                                    Segítenek megérteni, hogyan használják a látogatók a weboldalt.
                                    Anonim statisztikákat gyűjtenek a weboldal fejlesztése érdekében.
                                </p>
                            </CardBody>
                        </Card>
                    </div>
                </ModalBody>

                <ModalFooter>
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <Button
                            color="primary"
                            onPress={handleAcceptAnalytics}
                            className="flex-1"
                            size="lg"
                        >
                            Sütik elfogadása
                        </Button>
                        <Button
                            variant="flat"
                            onPress={handleRejectAnalytics}
                            className="flex-1"
                            size="lg"
                        >
                            Sütik elutasítása
                        </Button>
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CookieConsentBanner