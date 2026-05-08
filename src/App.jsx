import { motion } from "framer-motion";

import Particles from "react-tsparticles";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPrisma,
  SiPostman,
  SiVercel,
  SiC,
  SiCplusplus,
  SiMongoose,
  SiAxios,
  SiReactrouter,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiVisualstudiocode,
  SiLinux,
} from "react-icons/si";

export default function App() {

  const skills = [

  // Languages
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiC />, name: "C" },
  { icon: <SiCplusplus />, name: "C++" },

  // Web Technologies
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss3 />, name: "CSS3" },

  // Database
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPrisma />, name: "Prisma ORM" },

  // Libraries & Frameworks
  { icon: <SiMongoose />, name: "Mongoose" },
  { icon: <SiAxios />, name: "Axios" },
  { icon: <SiReactrouter />, name: "React Router" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiPlotly />, name: "Matplotlib" },

  // Tools & Platforms
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiLinux />, name: "WSL/Linux" },

  // Core CS
  { icon: "💡", name: "DSA" },
  { icon: "🖥️", name: "Operating Systems" },
  { icon: "🌐", name: "Computer Networks" },
  { icon: "⚙️", name: "OOP" },

];

  const projects = [
    {
      title: "SlotX",
      description:
        "Intelligent exam slot booking system with secure booking logic and dashboard optimization.",
      github: "https://github.com/himaniag10",
      live: "#",
    },

    {
      title: "SWG",
      description:
        "Secure role-based access gateway with JWT authentication and protected routes.",
      github: "https://github.com/himaniag10",
      live: "#",
    },

    {
      title: "AI-Fitpal",
      description:
        "AI-powered fitness assistant with workout and nutrition recommendations.",
      github: "https://github.com/himaniag10",
      live: "#",
    },
  ];

  return (

    <div className="bg-black text-white overflow-hidden relative">

      {/* PARTICLES BACKGROUND */}
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },

          fpsLimit: 120,

          particles: {
            color: {
              value: "#00ffff",
            },

            links: {
              color: "#00ffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
            },

            number: {
              value: 70,
            },

            opacity: {
              value: 0.3,
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: true,
        }}
      />

      {/* GLOW EFFECTS */}
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

            <a href="#education" className="hover:text-cyan-400 transition">
              Education
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
      <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.4em] text-cyan-400 mb-4">
              Portfolio
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

              <a
                href="https://github.com/himaniag10"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/himaniag10/"
                target="_blank"
                rel="noreferrer"
              >
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
                src="/profile.jpeg"
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
        className="max-w-6xl mx-auto px-8 py-32 relative z-10"
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

            I am a B.Tech CSE student passionate about
            Artificial Intelligence, Full Stack Development,
            Backend Systems, and futuristic digital experiences.

          </p>

        </motion.div>

      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="max-w-6xl mx-auto px-8 py-24 relative z-10"
      >

        <h2 className="text-5xl font-bold mb-16 text-cyan-400">
          Education
        </h2>

        <div className="space-y-8">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-cyan-400 transition"
          >

            <h3 className="text-3xl font-bold mb-3">
              Graphic Era University
            </h3>

            <p className="text-cyan-400 mb-2">
              B.Tech CSE
            </p>

            <p className="text-gray-400">
              2023 - Present | CGPA: 9.0
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-cyan-400 transition"
          >

            <h3 className="text-3xl font-bold mb-3">
              B.L.M Academy Sr. Sec. School
            </h3>

            <p className="text-cyan-400 mb-2">
              Class XII (CBSE)
            </p>

            <p className="text-gray-400">
              Percentage: 93.6%
            </p>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-cyan-400 transition"
          >

            <h3 className="text-3xl font-bold mb-3">
              Rainbow Academy Sr. Sec. School
            </h3>

            <p className="text-cyan-400 mb-2">
              Class X (CBSE)
            </p>

            <p className="text-gray-400">
              Percentage: 93.1%
            </p>

          </motion.div>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-8 py-20 relative z-10"
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
        className="max-w-6xl mx-auto px-8 py-32 relative z-10"
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
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
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
        className="max-w-4xl mx-auto px-8 py-32 relative z-10"
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