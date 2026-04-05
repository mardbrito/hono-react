import { authClient } from "@/lib/auth-client";
import { Link, useRouter } from "@tanstack/react-router";
import { auth } from "../../../server/lib/auth";

export default function Header() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const handleLogin = () => {
    router.navigate({ to: "/login" });
  };

  const handleLogOut = async () => {
    try {
      await authClient.signOut();
      handleLogin();
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  return (
    <div className="sticky top-0  z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          activeProps={{ className: "font-bold text-blue-500" }}
          className="text-xl font-bold"
        >
          Home
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            to="/todos"
            activeProps={{ className: "font-bold text-blue-500" }}
            className={`${!session ? "opacity-50 cursor-not-allowed" : "text-xl font-bold"}`}
            disabled={!session}
          >
            Todos
          </Link>

          {isPending ? null : session ? (
            <button
              aria-label="Logout"
              className="btn btn-ghost btn-sm"
              onClick={handleLogOut}
            >
              Bye
            </button>
          ) : (
            <button
              aria-label="Login"
              className="btn btn-ghost btn-sm"
              onClick={handleLogin}
            >
              Logar
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
