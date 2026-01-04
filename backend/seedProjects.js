import mongoose from "mongoose";

import Project from "./models/Project.js";
import dotenv from 'dotenv'

dotenv.config({ path: ".env" })



const seedProjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing projects (optional but recommended)
    await Project.deleteMany();

    // Insert projects
    await Project.insertMany([
      {
        title: "XTechon Flight Booking System",
        description:
          "Full-stack flight booking platform with JWT authentication, dynamic pricing, wallet balance, PDF ticket generation, and email delivery.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/abhijtek/xtechon-flight-booking",
        live: ""
      },
      {
        title: "E-Commerce Web Application",
        description:
          "Responsive e-commerce frontend with global state management using Redux Toolkit and reusable UI components.",
        tech: ["React", "Redux Toolkit", "Tailwind CSS"],
        github: "https://github.com/abhijtek/React-E-Commerce-UI",
        live: ""
      },
      {
        title: "User Management Backend",
        description:
          "Secure backend system with JWT-based authentication, role-based access, and full CRUD APIs.",
        tech: ["Node.js", "Express", "MongoDB"],
        github: "https://github.com/abhijtek/project-camp-backend",
        live: ""
      }
    ]);

    console.log("✅ Projects seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
};

seedProjects();
