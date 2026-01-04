import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTimeline from "./components/AboutTimeline";
import Projects from "./components/Projects";
import Video from "./components/Video";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Header from "./components/Header";
import Contact from "./components/Contact"
export default function App() {
  return (
    <div className="app-root">
      <Header />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Video />
            </>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutTimeline />}
        />

        {/* PROJECTS */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            // <div className="mr-30 ml-30 bg-gray-50">
            //   <div className="frame">
            //     <div className="b10" />
            //     <div className="bmid border-b border-gray-300 px-12 py-24 text-center">
            //       <h1 className="text-4xl font-semibold mb-4">
            //         Contact
            //       </h1>
            //       <p className="text-gray-600 max-w-xl mx-auto">
            //         Reach out via email or LinkedIn. I’m always open to
            //         collaboration and discussion.
            //       </p>
            //     </div>
            //     <div className="b11" />
            //   </div>
            // </div>
            <Contact/>
          }
        />
      </Routes>

      <Footer />
      <Chatbot />
    </div>
  );
}
