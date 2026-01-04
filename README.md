h1("Interactive Portfolio (Full-Stack)")

p(
    "A full-stack, interactive, desktop-first developer portfolio showcasing my projects, skills, "
    "and journey as a software developer. The application uses a dynamic backend with MongoDB, "
    "animated UI built with React and GSAP, and an AI assistant powered by OpenRouter."
)

h2("Key Features")

p("- Editorial grid-based layout with structured borders and visual stripes")
p("- Interactive hero section with animated software-themed icons")
p("- Projects fetched dynamically from a MongoDB database")
p("- GSAP-powered scroll-driven About timeline")
p("- AI chatbot integrated using OpenRouter API")
p("- Embedded \"Why You Should Hire Me\" video (Google Drive)")
p("- Client-side routing with React Router")
p("- Desktop-first design with uniform scaling on very small screens")

h2("Tech Stack")

p("Frontend")
p("- React")
p("- Tailwind CSS")
p("- GSAP (ScrollTrigger, MotionPath)")
p("- React Router DOM")

p("Backend")
p("- Node.js")
p("- Express.js")
p("- MongoDB")
p("- REST APIs")

p("AI")
p("- OpenRouter API")

h2("Project Architecture")

p(
    "The project is divided into a frontend and a backend. "
    "The frontend is a React application responsible for UI, animations, and routing. "
    "The backend is an Express server connected to MongoDB, responsible for serving project data "
    "and handling AI chatbot requests."
)

h2("Backend Structure")

p("server/")
p(" ├─ models/")
p(" │  └─ Project.js")
p(" ├─ routes/")
p(" │  ├─ projects.js")
p(" │  └─ chat.js")
p(" ├─ controllers/")
p(" │  ├─ projectController.js")
p(" │  └─ chatController.js")
p(" ├─ config/")
p(" │  └─ db.js")
p(" └─ server.js")

h2("API Endpoints")

p("GET /api/projects")
p("- Fetches all projects stored in MongoDB and returns them as JSON.")

p("POST /api/chat")
p("- Sends user messages to OpenRouter and returns the AI response.")

h2("Environment Variables")

p("The backend requires the following environment variables:")
p("- PORT")
p("- MONGODB_URI")
p("- OPENROUTER_API_KEY")

p(
    "The frontend does not require any environment variables. "
    "All configuration is handled directly in the application code."
)

h2("Running the Project Locally")

p("1. Clone the repository")
p("2. Navigate to the backend folder and install dependencies using npm install")
p("3. Create a .env file in the backend folder and add the required environment variables")
p("4. Start the backend server using npm run dev or node server.js")
p("5. Navigate to the frontend folder and install dependencies using npm install")
p("6. Start the frontend development server using npm run dev")

h2("Design Philosophy")

p(
    "This portfolio is intentionally desktop-first and layout-driven. "
    "Instead of collapsing content into a simplified mobile layout, "
    "the entire UI scales uniformly on small screens so that users can still "
    "access all features and visual elements."
)

h2("Author")

p("Abhijeet Singh Rajput")
p("Full-stack Developer | Competitive Programmer")
p("Codeforces: https://codeforces.com/profile/singhabhijeet1212")
p("LeetCode: https://leetcode.com/u/Jpr9utstOH/")

h2("License")

p(
    "This project is built for personal portfolio use. "
    "The code is shared for learning and reference purposes only."
)