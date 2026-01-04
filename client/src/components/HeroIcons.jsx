import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroIcons() {
  const iconsRef = useRef([]);

  useEffect(() => {
    // disable animation on small screens
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      iconsRef.current,
      { opacity: 0, x: (i) => (i % 2 === 0 ? -40 : 40) },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  }, []);

  const icons = [
    {
      name: "React",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "HTML",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
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
      name: "Express",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "Tailwind CSS",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "GitHub",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {icons.map((icon, i) => (
        <div
          key={icon.name}
          ref={(el) => (iconsRef.current[i] = el)}
          className="
            relative group
            h-14 w-14
            rounded-xl
            border border-gray-300
            bg-gray-100
            flex items-center justify-center
            transition-transform duration-200
            hover:rotate-6 hover:scale-105
          "
        >
          {/* ICON */}
          <img
            src={icon.src}
            alt={icon.name}
            style={{
              all: "unset",      // overrides global CSS safely
              width: "24px",
              height: "24px",
              display: "block",
            }}
          />

          {/* TOOLTIP */}
          <span
            className="
              pointer-events-none
              absolute -bottom-8
              left-1/2 -translate-x-1/2
              whitespace-nowrap
              rounded-md
              bg-gray-800
              px-2 py-1
              text-xs text-white
              opacity-0
              group-hover:opacity-100
              transition-opacity
            "
          >
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}
