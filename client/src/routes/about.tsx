import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { hc } from 'hono/client'
import type { AppType } from '../../../server/index'

const client = hc<AppType>('/')

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { data } = useQuery({
    queryKey: ['people'],
    queryFn: async () => {
      const response = await client.api.people.$get()
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  return (
    <main className="page-wrap px-4 py-12">
      <ul>
        {data?.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </main>
  )
}
