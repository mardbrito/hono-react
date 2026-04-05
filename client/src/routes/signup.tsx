import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { authClient } from '../lib/auth-client'
import { useState } from 'react'
import { checkSession } from '../lib/check-session'

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  checkSession()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !email || !password) {
      alert('Please fill in all fields.')
      return
    }

    try {
      await authClient.signUp.email({ name, email, password })
      alert('Account created successfully!')
      router.navigate({
        to: '/todos',
      })
    } catch (error) {
      console.error('Signup failed:', error)
      alert('Failed to create account. Please try again.')
    }
  }

  return (
    <div>
      <h1>Create an account</h1>
      <p>Sign up to get started</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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

      <Link to="/login">Already have an account? Log in</Link>
    </div>
  )
}
