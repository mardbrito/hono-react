import { useState } from 'react'
import { checkSession } from '../lib/check-session'
import { authClient } from '../lib/auth-client'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  checkSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!password || !email) {
      alert('Please fill in all fields.')
      return
    }

    try {
      await authClient.signIn.email({ email, password })
      alert('Loged in successfully!')
      router.navigate({
        to: '/todos',
      })
    } catch (error) {
      console.error('Signin failed:', error)
      alert('Failed to sign in. Please try again.')
    }
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <p>Sign in to get started</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
  )
}
