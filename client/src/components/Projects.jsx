import { useEffect, useState } from "react";
import API from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="projects" className="bg-gray-50">
      <div className="frame">
        {/* LEFT STRIPE */}
        <div className="b10"></div>

        {/* MIDDLE */}
        <div className="bmid border-t border-gray-300">
          {/* Heading */}
          <div className="text-center py-12 border-b border-gray-300">
            <h2 className="text-4xl font-semibold">
              A collection of my favourite works
            </h2>
            <p className="mt-3 text-gray-500">
              Projects I’ve built with focus on real-world impact and clean design.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {projects.map((project) => (
              <a
                key={project._id}
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div
                  className="
                    group
                    relative
                    rounded-2xl
                    bg-gray-100
                    border border-gray-300
                    p-6
                    transition
                    duration-300
                    md:hover:-translate-y-1
                    md:hover:rotate-[0.5deg]
                    md:hover:shadow-xl
                    md:hover:shadow-blue-200/40
                  "
                >
                  {/* Glow */}
                  <div className="card-glow absolute inset-0"></div>

                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="text-xs text-gray-500">
                    {project.tech?.join(" • ")}
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-300
                      md:group-hover:opacity-100
                      md:group-hover:translate-y-0
                    "
                  >
                    <div className="h-9 w-9 rounded-full border border-gray-300 bg-white flex items-center justify-center">
                      →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT STRIPE */}
        <div className="b11"></div>
      </div>
    </section>
  );
}
