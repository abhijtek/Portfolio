export default function ToolBoxCard() {
  const tools = [
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "GitHub",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
  ];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-50 bg-white p-6 transition-transform duration-300 hover:scale-[1.02]">
      {/* subtle glow */}
      <div className="card-glow absolute inset-0" />

      <h3 className="text-lg font-medium mb-2">
        Toolbox
      </h3>

      <p className="text-gray-600 mb-6">
        Tools and technologies I use regularly.
      </p>

      {/* ICON GRID */}
      <div className="grid grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="
              h-14 w-14
              rounded-xl
              border border-gray-50
              flex items-center justify-center
              bg-gray-50
            "
          >
            <img
              src={tool.src}
              alt={tool.name}
              style={{
                all: "unset",        // protects from global SVG styles
                width: "24px",
                height: "24px",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="h-9 w-9 rounded-full border border-gray-50 flex items-center justify-center bg-white">
          →
        </div>
      </div>
    </div>
  );
}
