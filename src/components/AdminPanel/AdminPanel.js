import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { Button, Input, Card, CardBody, CardHeader } from '@heroui/react'
import AdminDashboard from './AdminDashboard'

const AdminPanel = () => {
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Check if user is already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return unsubscribe
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setEmail('')
      setPassword('')
    } catch (err) {
      setError('Sikertelen bejelentkezés. Ellenőrizze az email címet és jelszót.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      setUser(null)
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  // If user is logged in, show admin dashboard
  if (user) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AdminDashboard user={user} onLogout={handleLogout} />
      </div>
    )
  }

  // Show login form
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#542142] to-[#3a1730] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-3 bg-[#542142] text-white rounded-t-lg">
          <h1 className="text-2xl font-bold">🍪 ELTE Szemle Admin</h1>
          <p className="text-sm">Bejelentkezés szükséges</p>
        </CardHeader>
        <CardBody className="gap-4">
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <Input
              label="Jelszó"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />

            {error && (
              <div className="bg-purple-100 border border-purple-400 text-purple-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full"
              isLoading={loading}
              disabled={loading}
            >
              Bejelentkezés
            </Button>
          </form>

          <div className="text-center text-sm text-gray-500 mt-4">
            <p>Ez egy privát adminisztrációs felület</p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default AdminPanel
