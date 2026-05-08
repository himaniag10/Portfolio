import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

export default function App() {

  const skills = [
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
  ];

  const projects = [
    {
      title: "SlotX",
      description:
        "Intelligent exam slot booking system with secure booking logic and dashboard optimization.",
      github: "#",
      live: "#",
    },

    {
      title: "SWG",
      description:
        "Secure role-based access gateway with JWT authentication and protected routes.",
      github: "#",
      live: "#",
    },

    {
      title: "AI-Fitpal",
      description:
        "AI fitness assistant with personalized workout and nutrition recommendations.",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px]" />

      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px]" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

          <h1 className="text-2xl font-bold text-cyan-400">
            Himani.
          </h1>

          <div className="flex gap-8 text-gray-300">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4">
              Portfolio 2026
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Hi, I'm

              <span className="text-cyan-400">
                {" "}Himani
              </span>

            </h1>

            <h2 className="text-2xl text-gray-300 mb-6">
              AI + Full Stack Developer
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-10">

              Building futuristic AI-powered applications,
              secure backend systems, and immersive web experiences.

            </p>

            <div className="flex gap-5 flex-wrap">

              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/40"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
              >
                Download Resume
              </a>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10 text-3xl text-gray-400">

              <a href="#">
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a href="#">
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-400 blur-[80px] opacity-30 rounded-full" />

              <img
                src="/profile.jpg"
                alt="profile"
                className="relative w-[320px] h-[320px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-500/30"
              />

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-8 py-32"
      >

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl font-bold mb-10 text-cyan-400">
            About Me
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">

            B.Tech CSE student passionate about AI,
            full stack development, backend systems,
            and futuristic digital experiences.

          </p>

        </motion.div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-8 py-20"
      >

        <h2 className="text-5xl font-bold mb-16 text-cyan-400">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400 transition"
            >

              <div className="text-5xl text-cyan-400 mb-4">
                {skill.icon}
              </div>

              <p className="text-gray-300">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-8 py-32"
      >

        <h2 className="text-5xl font-bold mb-16 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex gap-5">

                <a
                  href={project.github}
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-8 py-32"
      >

        <h2 className="text-5xl font-bold mb-16 text-cyan-400 text-center">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            className="w-full py-5 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-[1.02] transition"
          >

            Send Message

          </button>

        </form>

      </section>

    </div>
  );
}