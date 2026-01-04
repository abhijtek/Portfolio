import { Link } from "react-router-dom";

export default function BookCallCard() {
  return (
    <Link to="/contact" className="block h-full">
      <div className="h-full group relative overflow-hidden rounded-2xl border border-gray-50 bg-white p-6 transition-transform duration-300 hover:scale-[1.02]">
        {/* subtle glow */}
        <div className="card-glow absolute inset-0" />

        <h3 className="text-lg font-medium mb-2">
          Book a call with me
        </h3>

        <p className="text-gray-600 mb-6">
          I’d love to chat — even if there’s no agenda.
        </p>

        {/* CALENDAR PREVIEW */}
        <div className="h-40 rounded-xl border border-gray-50 bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-700">
              October 2026
            </span>
            <span className="text-xs text-gray-400">
              Availability
            </span>
          </div>

          <div className="grid grid-cols-7 gap-2 text-xs text-gray-500">
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <div key={d} className="text-center font-medium">
                {d}
              </div>
            ))}

            {[...Array(28)].map((_, i) => (
              <div
                key={i}
                className={`
                  h-6 w-6 rounded-md flex items-center justify-center
                  ${
                    i % 6 === 0
                      ? "bg-blue-100 text-blue-600"
                      : "bg-white"
                  }
                `}
              >
                {i + 1}
              </div>
            ))}
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
