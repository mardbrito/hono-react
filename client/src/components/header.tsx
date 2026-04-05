import { Link } from "@tanstack/react-router";

export default function Header() {
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
        <nav>
          <Link
            to="/todos"
            activeProps={{ className: "font-bold text-blue-500" }}
            className="text-xl font-bold "
          >
            Todos
          </Link>
        </nav>
      </div>
    </div>
  );
}
