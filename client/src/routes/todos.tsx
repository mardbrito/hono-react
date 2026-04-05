import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { client } from "../../../server/lib/api";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/todos")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    router.navigate({ to: "/login" });
    return null;
  }

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const resp = await client.api.todos.$get();
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    },
  });
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      <ul>
        {data &&
          data.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" name={todo.id} id={todo.id} />
              {todo.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
