import { useEffect, useMemo, useState } from "react";
import API from "./services/api";
import "./index.css";

const fallbackProjects = [
  {
    _id: "blogpost",
    title: "BlogPost - Full-Stack Publishing Platform",
    description:
      "Production-ready publishing platform with draft, pending, published, and rejected workflows, admin moderation, JWT auth, TinyMCE, Appwrite media storage, and AI writing assistance.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "JWT", "TinyMCE", "Appwrite"],
    github: "https://github.com/abhijtek/BlogPost",
    live: "",
  },
  {
    _id: "flight-booking",
    title: "XTechon Flight Booking",
    description:
      "Full-stack flight booking platform with search, booking, wallet balance, ticket history, JWT auth, dynamic pricing, PDF ticket generation, and email delivery.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "PDF"],
    github: "https://github.com/abhijtek/xtechon-flight-booking",
    live: "",
  },
  {
    _id: "user-management",
    title: "User Management Backend",
    description:
      "Secure backend system for user registration, login, role-based access, validation middleware, modular architecture, and complete CRUD APIs.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "RBAC"],
    github: "https://github.com/abhijtek/project-camp-backend",
    live: "",
  },
];

const services = [
  {
    title: "Web Development",
    subtitle: "Responsive, fast, user-friendly websites",
    detail:
      "I design and develop clean frontends with React and Tailwind, backed by practical APIs and maintainable structure.",
    accent: "purple",
  },
  {
    title: "Full-Stack Apps",
    subtitle: "React, Node, Express, MongoDB",
    detail:
      "I build complete web applications with authentication, dashboards, database models, and production-minded flows.",
    accent: "green",
  },
  {
    title: "Backend APIs",
    subtitle: "Secure services and integrations",
    detail:
      "I create REST APIs with JWT auth, role access, validation, and clear data contracts for real projects.",
    accent: "green",
  },
  {
    title: "UI Revamps",
    subtitle: "Modern layouts with Tailwind CSS",
    detail:
      "I turn older interfaces into polished, responsive single-page experiences with better spacing, rhythm, and motion.",
    accent: "purple",
  },
];

const buildAreas = [
  {
    eyebrow: "Frontend Systems",
    title: "I build responsive React interfaces",
    body:
      "I use React, Redux Toolkit, React Router, HTML5, CSS3, Tailwind CSS, Bootstrap, and Vite to build clean UI flows that work across screen sizes.",
  },
  {
    eyebrow: "Backend APIs",
    title: "I build secure Node.js services",
    body:
      "I create Express.js REST APIs with JWT authentication, role-based access, validation middleware, and backend business logic.",
  },
  {
    eyebrow: "Database Work",
    title: "I model data for real applications",
    body:
      "I work with MongoDB, Mongoose, and Appwrite for user data, publishing workflows, media storage, project records, and app state.",
  },
  {
    eyebrow: "Problem Solving",
    title: "I practice algorithms and fundamentals",
    body:
      "I use JavaScript, C, and C++ foundations with data structures and algorithms practice across LeetCode, Codeforces, and GeeksforGeeks.",
  },
];

const skillStack = [
  { sign: "JS", name: "JavaScript", group: "Language" },
  { sign: "C", name: "C", group: "Language" },
  { sign: "C++", name: "C++", group: "Language" },
  { sign: "R", name: "React.js", group: "Frontend" },
  { sign: "RTK", name: "Redux Toolkit", group: "Frontend" },
  { sign: "RR", name: "React Router", group: "Frontend" },
  { sign: "H5", name: "HTML5", group: "Frontend" },
  { sign: "C3", name: "CSS3", group: "Frontend" },
  { sign: "TW", name: "Tailwind CSS", group: "Frontend" },
  { sign: "BS", name: "Bootstrap", group: "Frontend" },
  { sign: "V", name: "Vite", group: "Tooling" },
  { sign: "N", name: "Node.js", group: "Backend" },
  { sign: "EX", name: "Express.js", group: "Backend" },
  { sign: "API", name: "REST APIs", group: "Backend" },
  { sign: "JWT", name: "JWT Auth", group: "Backend" },
  { sign: "RBAC", name: "Role Access", group: "Backend" },
  { sign: "MDB", name: "MongoDB", group: "Database" },
  { sign: "MG", name: "Mongoose", group: "Database" },
  { sign: "AW", name: "Appwrite", group: "Database" },
  { sign: "GIT", name: "Git & GitHub", group: "Tools" },
  { sign: "NPM", name: "npm", group: "Tools" },
  { sign: "VS", name: "VS Code", group: "Tools" },
];

const navItems = ["about", "experience", "projects", "services", "skills", "contact"];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1b1b1b]/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="font-display text-3xl font-semibold tracking-tight text-white">
          &lt;AR/&gt;
        </a>
        <nav className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-wide text-white md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="transition hover:text-blue-500">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="mailto:singhabhijeet1212@gmail.com"
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          Email Me
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section-pad min-h-[calc(100vh-96px)] border-b border-white/10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Hi, I'm Abhijeet Singh Rajput
          </h1>
          <p className="mt-8 font-display text-4xl font-semibold text-blue-600 sm:text-5xl">
            Full-Stack Developer
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Full-stack developer with hands-on experience building scalable web
            applications using React, Node.js, Express, and MongoDB.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="blue-button" href="#contact">
              Let's Talk
            </a>
            <a className="ghost-button" href="#projects">
              See Projects
            </a>
          </div>
        </div>

        <div className="hero-blob">
          <img src="/static/S2.png" alt="Abhijeet Singh Rajput" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">About Me</p>
          <h2 className="section-title">I'm Abhijeet Singh Rajput</h2>
        </div>
        <div className="space-y-7 text-lg leading-8 text-zinc-300">
          <p>
            I'm a full-stack developer with hands-on experience building scalable
            web applications using React, Node.js, Express, and MongoDB.
          </p>
          <p>
            I have a strong understanding of REST APIs, JWT authentication, state
            management, and backend business logic.
          </p>
          <p>
            I'm currently pursuing B.Tech in Mechanical Engineering at IIT (ISM)
            Dhanbad, with relevant coursework in C Programming, Data Structures,
            and Algorithms.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-pad border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="section-kicker">What I Build</p>
          <h2 className="section-title">Not job history, real skills in motion</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            I have not shown this as professional work experience. These are the
            areas I know and practice through projects, coursework, and problem
            solving.
          </p>
        </div>
        <div className="build-flow">
          {buildAreas.map((item, index) => (
            <article key={item.title} className="build-block reveal-on-scroll" style={{ "--delay": `${index * 90}ms` }}>
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [remoteProjects, setRemoteProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    API.get("/projects")
      .then((res) => {
        if (mounted && Array.isArray(res.data) && res.data.length) {
          console.log("Fetched projects from API:", res.data);
          setRemoteProjects(res.data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch projects. Using fallback projects:", error);
        setRemoteProjects([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const projects = remoteProjects.length ? remoteProjects : fallbackProjects;
  const featured = projects[0] || fallbackProjects[0];

  return (
    <section id="projects" className="section-pad border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">Selected project work</h2>
          <p className="mt-8 text-lg leading-8 text-zinc-300">
            Projects from my CV, built with full-stack and backend-focused
            implementation.
          </p>
        </div>
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "Full Stack", "Backend"].map((filter) => (
              <button key={filter} className="filter-pill">
                {filter}
              </button>
            ))}
          </div>

          <a className="featured-project group" href={featured.github || featured.live || "#"} target="_blank" rel="noreferrer">
            <div>
              <p className="text-sm italic text-zinc-300">Featured Project</p>
              <h3 className="mt-4 font-display text-4xl font-bold text-white">{featured.title}</h3>
              <p className="mt-4 max-w-xl text-zinc-300">{featured.description}</p>
              <div className="tech-tags">
                {featured.tech?.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </a>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <a key={project._id || project.title} className="project-tile" href={project.github || project.live || "#"} target="_blank" rel="noreferrer">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech?.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ service }) {
  const markClass = service.accent === "green" ? "bg-green-400" : "bg-fuchsia-600";

  return (
    <div className="flip-card">
      <div className="flip-inner">
        <div className="flip-face">
          <span className={`check-mark ${markClass}`}>✓</span>
          <h3>{service.title}</h3>
          <p>{service.subtitle}</p>
        </div>
        <div className="flip-face flip-back">
          <span className={`check-mark ${markClass}`}>✓</span>
          <h3>{service.title}</h3>
          <p>{service.detail}</p>
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad border-b border-white/10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">What I can build</h2>
          <p className="mt-8 text-lg leading-8 text-zinc-300">
            This is not a paid services table. It is a quick view of the kinds
            of project work I know how to create from my CV and practice.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="ready-card md:col-span-1">
            <span className="text-6xl leading-none">☆</span>
            <h3>Ready to Build?</h3>
            <p>I create responsive, secure and SEO-friendly websites.</p>
          </div>
          {services.map((service) => (
            <FlipCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-pad border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Tech stack I know</h2>
          <p className="mt-6 text-lg leading-8 text-zinc-300">
            These are the languages, frameworks, databases, and tools listed in
            my CV and used across my projects.
          </p>
        </div>
        <div className="skill-grid">
          {skillStack.map((skill) => (
            <article key={skill.name} className="skill-chip reveal-on-scroll">
              <strong>{skill.sign}</strong>
              <div>
                <h3>{skill.name}</h3>
                <p>{skill.group}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const whatsappLink = useMemo(
    () => "tel:+918604480203",
    []
  );

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's Work Together, Get In Touch!</h2>
          <p className="mt-8 text-lg leading-8 text-zinc-300">
            Feel free to reach out for project discussions, collaboration, or
            anything related to my work.
          </p>
          <div className="mt-14 space-y-10">
            <a href={whatsappLink} className="contact-line">
              <span>☎</span>
              <div>
                <h3>Contact</h3>
                <p>+91 860-448-0203</p>
              </div>
            </a>
            <a href="mailto:singhabhijeet1212@gmail.com" className="contact-line">
              <span>✉</span>
              <div>
                <h3>Email</h3>
                <p>singhabhijeet1212@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
            const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`);
            window.location.href = `mailto:singhabhijeet1212@gmail.com?subject=${subject}&body=${body}`;
          }}
        >
          <label>
            Name
            <input name="name" placeholder="Name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Message" rows="8" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#1b1b1b]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 text-zinc-300 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>2026 Created By Abhijeet Singh Rajput</p>
        <div className="flex gap-8 text-2xl text-blue-600">
          <a href="https://github.com/abhijtek" target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>
          <a href="https://www.linkedin.com/in/abhijeet-rajput-69a783316/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            IN
          </a>
          <a href="mailto:singhabhijeet1212@gmail.com" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#1b1b1b] text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
