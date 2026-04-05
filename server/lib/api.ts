import { hc } from "hono/client";
import type { AppType } from "../../server/index";

export const client = hc<AppType>("/", {
  fetch: (input: RequestInfo | URL, init?: RequestInit) => {
    return fetch(input, {
      ...init,
      credentials: "include",
    });
  },
});

// export const signUp = (name: string, email: string, password: string) => {
//     try {
//         const res = await client.auth.signUp.$post({
//     }
// }
