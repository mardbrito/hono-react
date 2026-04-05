import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="text-center">
      Hello World
      <p>Hello</p>
    </main>
  )
}
