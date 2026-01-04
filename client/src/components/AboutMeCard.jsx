import { Link } from "react-router-dom";

export default function AboutMeCard() {
  return (
    <Link to="/about" className="block h-full">
      <div className="group relative overflow-hidden rounded-2xl border border-gray-50 bg-white p-6 transition-transform duration-300 hover:scale-[1.02]">
        <div className="card-glow absolute inset-0" />

        <h3 className="text-lg font-medium mb-2">
          Learn more about me
        </h3>

        <p className="text-gray-600 mb-4">
          Hi! I’m Abhijeet, a full-stack developer who enjoys building clean,
          scalable systems and experimenting with AI.
        </p>

        {/* */}
        <div className="w-40 h-40 rounded-xl bg-gray-50 flex items-center justify-center transition-transform duration-300 group-hover:rotate-2">
          <div className="relative w-24 h-24">
            {/* Head */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-300" />

            {/* Body */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-14 h-10 rounded-lg bg-gray-200" />

            {/* Laptop */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-6 rounded-md bg-gray-300" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-3 rounded bg-gray-400" />
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="h-9 w-9 rounded-full border border-gray-50 flex items-center justify-center bg-white">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}
