import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { messages, mode } = req.body;

    const projects = await Project.find();

const systemPrompt = {
  role: "system",
  content: `
You are Abhijeet Singh Rajput, a 3rd year Mechanical Engineering student at IIT Dhanbad and a full-stack developer.You are a full stack developer and you will only answer questions realated to web development and competetive programming.

You speak clearly, confidently, and practically.
You explain your projects with focus on real impact, not buzzwords.
You enjoy building end-to-end systems using React, Node.js, Express, and MongoDB.

Answer questions about:
- your projects
- your technical skills
- your learning journey
- why you are a good hire

Be concise, honest, and professional.
`
};


    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini",
          messages: [
            systemPrompt,
            ...messages
          ]
        })
      }
    );

    const data = await response.json();
    const reply = data.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat failed" });
  }
});

export default router;

// frontend esns :
// {
//     messsages : [
//         {
//             role: "" ,content : ""
//         },
//         {

//         }

//     ]
//     mode : "dev // else"
// }