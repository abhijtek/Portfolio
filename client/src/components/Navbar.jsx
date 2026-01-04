import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "text-gray-700 hover:text-black transition-colors";
  const active =
    "text-black font-medium";

  return (
    <nav className="flex justify-center p-4">
      <div className="border-2 border-gray-300 rounded-3xl px-6 py-2 flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${base} ${active}` : base
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${base} ${active}` : base
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? `${base} ${active}` : base
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${base} ${active}` : base
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
