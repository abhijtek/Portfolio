Interactive Portfolio (Full-Stack)
A full-stack, interactive, desktop-first developer portfolio showcasing my projects, skills, and journey as a software developer. The application uses a dynamic backend with MongoDB, animated UI built with React and GSAP, and an AI assistant powered by OpenRouter.
Key Features
- Editorial grid-based layout with structured borders and visual stripes
- Interactive hero section with animated software-themed icons
- Projects fetched dynamically from a MongoDB database
- GSAP-powered scroll-driven About timeline
- AI chatbot integrated using OpenRouter API
- Embedded "Why You Should Hire Me" video (Google Drive)
- Client-side routing with React Router
- Desktop-first design with uniform scaling on very small screens
Tech Stack
Frontend
- React
- Tailwind CSS
- GSAP (ScrollTrigger, MotionPath)
- React Router DOM
Backend
- Node.js
- Express.js
- MongoDB
- REST APIs
AI
- OpenRouter API
Project Architecture
The project is divided into a frontend and a backend. The frontend is a React application responsible for UI, animations, and routing. The backend is an Express server connected to MongoDB, responsible for serving project data and handling AI chatbot requests.
Backend Structure
server/
 ├─ models/
 │  └─ Project.js
 ├─ routes/
 │  ├─ projects.js
 │  └─ chat.js
 ├─ controllers/
 │  ├─ projectController.js
 │  └─ chatController.js
 ├─ config/
 │  └─ db.js
 └─ server.js
API Endpoints
GET /api/projects
- Fetches all projects stored in MongoDB and returns them as JSON.
POST /api/chat
- Sends user messages to OpenRouter and returns the AI response.
Environment Variables
The backend requires the following environment variables:
- PORT
- MONGODB_URI
- OPENROUTER_API_KEY
The frontend does not require any environment variables. All configuration is handled directly in the application code.
Running the Project Locally
1. Clone the repository
2. Navigate to the backend folder and install dependencies using npm install
3. Create a .env file in the backend folder and add the required environment variables
4. Start the backend server using npm run dev or node server.js
5. Navigate to the frontend folder and install dependencies using npm install
6. Start the frontend development server using npm run dev
Design Philosophy
This portfolio is intentionally desktop-first and layout-driven. Instead of collapsing content into a simplified mobile layout, the entire UI scales uniformly on small screens so that users can still access all features and visual elements.
Author
Abhijeet Singh Rajput
Full-stack Developer | Competitive Programmer
Codeforces: https://codeforces.com/profile/singhabhijeet1212
LeetCode: https://leetcode.com/u/Jpr9utstOH/
License
This project is built for personal portfolio use. The code is shared for learning and reference purposes only.
