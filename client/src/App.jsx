import { useEffect, useMemo, useState } from "react";
import API from "./services/api";
import "./index.css";

const fallbackProjects = [
  {
    _id: "blogpost",
    title: "BlogPost",
    description:
      "A full-stack publishing platform with role-based moderation, rich text editing, and image-backed articles.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhijtek/BlogPost",
    live: "",
  },
  {
    _id: "flight-booking",
    title: "XTechon Flight Booking",
    description:
      "Flight booking platform with JWT authentication, dynamic pricing, wallet balance, PDF tickets, and email delivery.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abhijtek/xtechon-flight-booking",
    live: "",
  },
  {
    _id: "ecommerce",
    title: "E-Commerce Web App",
    description:
      "Responsive e-commerce frontend with Redux Toolkit state management and reusable interface components.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/abhijtek/React-E-Commerce-UI",
    live: "",
  },
  {
    _id: "backend",
    title: "User Management Backend",
    description:
      "Secure backend system with JWT authentication, role-based access, and complete CRUD APIs.",
    tech: ["Node.js", "Express", "MongoDB"],
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

const experiences = [
  {
    year: "2026",
    date: "Current",
    company: "TC Consulting",
    role: "Portfolio & Full-Stack Developer",
    body:
      "Building full-stack portfolio features with React, Express, MongoDB, project APIs, and a polished single-page UI.",
  },
  {
    year: "2025",
    date: "Project Work",
    company: "Independent Development",
    role: "React Developer",
    body:
      "Created responsive project interfaces, reusable components, API integrations, and modern layouts using Tailwind CSS.",
  },
  {
    year: "2024",
    date: "Backend Practice",
    company: "Personal Projects",
    role: "Node.js Developer",
    body:
      "Built authentication, project models, CRUD APIs, and backend services with Express and MongoDB.",
  },
  {
    year: "2024",
    date: "Learning Path",
    company: "Programming Foundations",
    role: "Java and Python Developer",
    body:
      "Gained foundational programming knowledge and strengthened problem-solving through Java, Python, and web development.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Basic",
    description: "A clean one-page website for a personal brand or small service.",
    features: ["Responsive page", "Contact section", "Basic SEO setup", "1 week support"],
  },
  {
    name: "Professional",
    price: "Custom",
    description: "A multi-section portfolio, business page, or product-style website.",
    features: ["Modern UI", "Project sections", "API integration", "Fast delivery"],
    featured: true,
  },
  {
    name: "Full Stack",
    price: "Advanced",
    description: "A complete app with frontend, backend, database, and auth flow.",
    features: ["React frontend", "Express backend", "MongoDB models", "Bug fixes for 1 week"],
  },
];

const navItems = ["about", "experience", "projects", "services", "pricing", "contact"];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1b1b1b]/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="font-display text-3xl font-semibold tracking-tight text-white">
          &lt;TC/&gt;
        </a>
        <nav className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-wide text-white md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="transition hover:text-blue-500">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="mailto:23je0015@iitism.ac.in"
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
            Python Dev
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            I'm a passionate WordPress developer with skills in Oracle APEX,
            HTML/CSS, and a growing interest in Java and Python. I love building
            clean, responsive websites and web apps that solve real problems.
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
            I'm passionate and self-taught developer with hands-on experience in
            WordPress and Oracle APEX. I've built websites from scratch and
            contributed to projects by managing content, replacing visuals, and
            optimizing design layouts.
          </p>
          <p>
            I'm always eager to explore new technologies. I've gained foundational
            knowledge in Java and Python, and enjoy working with HTML/CSS to
            enhance front-end experiences.
          </p>
          <p>
            Currently, I'm focused on improving my skills, learning best
            practices, and working with clients to deliver impactful digital
            solutions.
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
        <h2 className="mb-16 font-display text-5xl text-white">Experience</h2>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr]">
          <div className="hidden overflow-hidden bg-zinc-200/90 lg:block">
            <img className="h-full min-h-[760px] w-full object-cover opacity-80" src="/static/S2.png" alt="" />
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article key={`${item.year}-${item.role}`} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-card">
                  <p className="font-display text-2xl font-semibold text-blue-600">{item.date}</p>
                  <p className="mt-2 text-lg text-zinc-500">{item.company}</p>
                  <h3 className="mt-12 font-display text-4xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-200">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
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
          setRemoteProjects(res.data);
        }
      })
      .catch(() => setRemoteProjects([]));
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
            I'm a passionate developer with skills in React, Node.js, Express,
            MongoDB, HTML/CSS, and a growing interest in Java and Python.
          </p>
        </div>
        <div>
          <div className="mb-8 flex flex-wrap gap-2">
            {["All", "React Projects", "Backend Projects"].map((filter) => (
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
            </div>
          </a>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <a key={project._id || project.title} className="project-tile" href={project.github || project.live || "#"} target="_blank" rel="noreferrer">
                <span>{project.tech?.[0] || "Project"}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
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
          <p className="section-kicker">Services</p>
          <h2 className="section-title">What I Provide</h2>
          <p className="mt-8 text-lg leading-8 text-zinc-300">
            I offer professional web development services, creating modern,
            responsive, and user-friendly websites. I specialize in building
            customized solutions with secure features, optimized performance,
            and a clean design.
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

function Pricing() {
  return (
    <section id="pricing" className="section-pad border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker">Pricing</p>
          <h2 className="section-title">Flexible packages for real projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.featured ? "pricing-card-featured" : ""}`}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <p className="description">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const whatsappLink = useMemo(
    () => "https://wa.me/923462373957?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services",
    []
  );

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's Work Together, Get In Touch!</h2>
          <p className="mt-8 text-lg leading-8 text-zinc-300">
            Feel free to reach out for any project inquiries, collaborations, or
            questions. I'll be happy to assist you.
          </p>
          <div className="mt-14 space-y-10">
            <a href={whatsappLink} className="contact-line">
              <span>☎</span>
              <div>
                <h3>Contact</h3>
                <p>+923462373957</p>
              </div>
            </a>
            <a href="mailto:23je0015@iitism.ac.in" className="contact-line">
              <span>✉</span>
              <div>
                <h3>Email</h3>
                <p>23je0015@iitism.ac.in</p>
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
            window.location.href = `mailto:23je0015@iitism.ac.in?subject=${subject}&body=${body}`;
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
          <a href="mailto:23je0015@iitism.ac.in" aria-label="Email">
            ✉
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#1b1b1b] text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
