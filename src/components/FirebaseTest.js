import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import { Card, CardBody, Button } from '@heroui/react'

const FirebaseTest = () => {
  const [status, setStatus] = useState({
    firebaseInit: false,
    firestoreConnection: false,
    collectionsExist: false,
    error: null,
    details: {}
  })
  const [testing, setTesting] = useState(false)

  const testFirebase = async () => {
    setTesting(true)
    const results = {
      firebaseInit: false,
      firestoreConnection: false,
      collectionsExist: false,
      error: null,
      details: {}
    }

    try {
      // Test 1: Firebase initialized
      if (db) {
        results.firebaseInit = true
        console.log('✅ Firebase initialized')
      }

      // Test 2: Can connect to Firestore
      try {
        const testRef = collection(db, 'years')
        const snapshot = await getDocs(testRef)
        results.firestoreConnection = true
        results.details.yearsCount = snapshot.size
        console.log(`✅ Firestore connection successful. Found ${snapshot.size} year(s)`)

        // Test 3: Check if 2026 document exists
        const year2026Exists = snapshot.docs.some(doc => doc.id === '2026')
        if (year2026Exists) {
          console.log('✅ Year 2026 document exists')
          results.details.year2026 = true

          // Test 4: Check subcollections
          try {
            const moviesRef = collection(db, 'years/2026/movies')
            const moviesSnapshot = await getDocs(moviesRef)
            results.details.moviesCount = moviesSnapshot.size
            console.log(`✅ Movies subcollection exists with ${moviesSnapshot.size} movie(s)`)

            const juryRef = collection(db, 'years/2026/jury')
            const jurySnapshot = await getDocs(juryRef)
            results.details.juryCount = jurySnapshot.size
            console.log(`✅ Jury subcollection exists with ${jurySnapshot.size} jury member(s)`)

            results.collectionsExist = true
          } catch (subError) {
            console.error('❌ Error accessing subcollections:', subError.message)
            results.details.subcollectionError = subError.message
          }
        } else {
          console.log('⚠️ Year 2026 document not found')
          results.details.year2026 = false
        }
      } catch (firestoreError) {
        console.error('❌ Firestore connection error:', firestoreError.message)
        results.error = firestoreError.message
      }
    } catch (error) {
      console.error('❌ Firebase test error:', error.message)
      results.error = error.message
    }

    setStatus(results)
    setTesting(false)
  }

  useEffect(() => {
    testFirebase()
  }, [])

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardBody className="gap-4">
          <h2 className="text-2xl font-bold text-gray-900">🔥 Firebase Connection Test</h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {status.firebaseInit ? '✅' : '❌'}
              <span>Firebase Initialization</span>
            </div>

            <div className="flex items-center gap-2">
              {status.firestoreConnection ? '✅' : '❌'}
              <span>Firestore Connection</span>
              {status.details.yearsCount !== undefined && (
                <span className="text-sm text-gray-500">({status.details.yearsCount} documents in 'years')</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {status.details.year2026 ? '✅' : '⚠️'}
              <span>Year 2026 Document</span>
            </div>

            <div className="flex items-center gap-2">
              {status.collectionsExist ? '✅' : '❌'}
              <span>Subcollections (movies & jury)</span>
            </div>

            {status.details.moviesCount !== undefined && (
              <div className="ml-6 text-sm text-gray-600">
                → Movies: {status.details.moviesCount} documents
              </div>
            )}

            {status.details.juryCount !== undefined && (
              <div className="ml-6 text-sm text-gray-600">
                → Jury: {status.details.juryCount} documents
              </div>
            )}
          </div>

          {status.error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
              <p className="text-red-800 font-semibold">Error:</p>
              <p className="text-red-600 text-sm">{status.error}</p>
            </div>
          )}

          {status.details.subcollectionError && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="text-yellow-800 font-semibold">Subcollection Issue:</p>
              <p className="text-yellow-600 text-sm">{status.details.subcollectionError}</p>
            </div>
          )}

          {!status.details.year2026 && status.firestoreConnection && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-blue-800 font-semibold">Setup Instructions:</p>
              <ol className="text-blue-700 text-sm list-decimal ml-4 mt-2 space-y-1">
                <li>Go to Firebase Console → Firestore Database</li>
                <li>Create collection: <code className="bg-blue-100 px-1 rounded">years</code></li>
                <li>Add document with ID: <code className="bg-blue-100 px-1 rounded">2026</code></li>
                <li>Add subcollection: <code className="bg-blue-100 px-1 rounded">movies</code></li>
                <li>Add subcollection: <code className="bg-blue-100 px-1 rounded">jury</code></li>
              </ol>
            </div>
          )}

          {status.firebaseInit && status.firestoreConnection && status.collectionsExist && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
              <p className="text-green-800 font-semibold">✅ All checks passed!</p>
              <p className="text-green-700 text-sm mt-1">
                Your Firebase setup is complete. You can now use the admin panel at <code className="bg-green-100 px-1 rounded">/admin</code>
              </p>
            </div>
          )}

          <Button 
            color="primary" 
            onPress={testFirebase}
            isLoading={testing}
            className="mt-4"
          >
            🔄 Retest Connection
          </Button>

          <div className="text-xs text-gray-500 mt-4">
            Check browser console (F12) for detailed logs
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default FirebaseTest
