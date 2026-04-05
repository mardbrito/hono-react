import { authClient } from './auth-client'
import { useRouter } from '@tanstack/react-router'

export async function checkSession() {
  const router = useRouter()
  const { data: session } = await authClient.getSession()

  if (session) {
    router.navigate({ to: '/todos' })
  }
}
