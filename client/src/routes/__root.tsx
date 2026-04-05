import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white">
        <main className="container mx-auto grow p-4">
          <Header />
          <Outlet />
        </main>
        <footer className="border-t p-4 text-sm text-gray-500">
          <p>&copy; 2023 My App. All rights reserved.</p>
        </footer>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      <TanStackRouterDevtools position="bottom-left" />
    </>
  );
}
