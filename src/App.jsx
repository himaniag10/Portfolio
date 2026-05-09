import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaEnvelope,
  FaCheckCircle,
  FaCode,
  FaBrain,
  FaRocket,
  FaUsers,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
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
} from "react-icons/si";

export default function App() {
  const [init, setInit] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // ── Initialise tsparticles engine (v3) ──────────────────────────────────
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ── Skills ───────────────────────────────────────────────────────────────
  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <SiPrisma />, name: "Prisma ORM" },
    { icon: <SiMongoose />, name: "Mongoose" },
    { icon: <SiAxios />, name: "Axios" },
    { icon: <SiReactrouter />, name: "React Router" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiPlotly />, name: "Matplotlib" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <FaCode />, name: "VS Code" },
    { icon: <FaLinux />, name: "WSL/Linux" },
    { icon: "💡", name: "DSA" },
    { icon: "🖥️", name: "Operating Systems" },
    { icon: "🌐", name: "Computer Networks" },
    { icon: "⚙️", name: "OOP" },
  ];

  // ── Projects ─────────────────────────────────────────────────────────────
  const projects = [
    {
      title: "SlotX",
      description: "Intelligent exam slot booking system with secure booking logic and dashboard optimization.",
      github: "https://github.com/himaniag10/SlotX",
      live: "#",
    },
    {
      title: "SWG",
      description: "Secure role-based access gateway with JWT authentication and protected routes.",
      github: "https://github.com/himaniag10",
      live: "#",
    },
    {
      title: "AI-Fitpal",
      description: "AI-powered fitness assistant with workout and nutrition recommendations.",
      github: "https://github.com/himaniag10",
      live: "#",
    },
  ];

  // ── About highlights ──────────────────────────────────────────────────────
  const highlights = [
    { icon: <FaCode />, label: "200+ LeetCode Problems", sub: "Consistent problem solver" },
    { icon: <FaBrain />, label: "AI + Full Stack", sub: "End-to-end product builder" },
    { icon: <FaRocket />, label: "CGPA 9.0", sub: "B.Tech CSE @ GEU" },
    { icon: <FaUsers />, label: "Open Source", sub: "Hacktoberfest contributor" },
  ];

  // ── Contact form handler ────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // IMPORTANT: You must replace 'YOUR_FORMSPREE_ID' with your actual ID from Formspree
    // If you don't have one yet, this will show an error.
    try {
      const res = await fetch("https://formspree.io/himaniagarwal1006@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (err) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-black text-white overflow-hidden relative min-h-screen">

      {/* ── PARTICLES ── */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            particles: {
              color: { value: "#00ffff" },
              links: { color: "#00ffff", distance: 150, enable: true, opacity: 0.15, width: 1 },
              move: { enable: true, speed: 1 },
              number: { value: 60 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* GLOW EFFECTS */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 py-4 md:py-5 gap-4">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold text-cyan-400">Himani.</motion.h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-[10px] md:text-sm font-medium uppercase tracking-widest">
            {["about","education","skills","projects","certifications","achievements","contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-cyan-400 transition-colors capitalize">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-24 relative z-10">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="uppercase tracking-[0.5em] text-cyan-400 mb-4 text-xs font-semibold">Inovating the Future</p>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
              Hi, I'm<br/><span className="text-cyan-400"> Himani</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb-6 font-light tracking-tight">AI + Full Stack Developer</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-lg">
              Designing and building futuristic AI-powered applications, secure backend systems, and immersive digital experiences.
            </p>
            <div className="flex gap-5 flex-wrap">
              <a href="#projects" className="px-10 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/20">
                View Projects
              </a>
              <a href="/resume.pdf" download className="px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition duration-300 text-white font-medium">
                Resume
              </a>
            </div>
            <div className="flex gap-8 mt-12 text-3xl text-gray-500">
              <a href="https://github.com/himaniag10" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-all transform hover:-translate-y-1"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/himaniag10/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-all transform hover:-translate-y-1"><FaLinkedin /></a>
              <a href="mailto:himaniagarwal1006@gmail.com" className="hover:text-cyan-400 transition-all transform hover:-translate-y-1"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="flex justify-center relative">
             <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
             <div className="relative p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl">
              <img
                src="/profile.jpeg"
                alt="Himani Agarwal"
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
             </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-32 relative z-10 border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="uppercase tracking-[0.4em] text-cyan-400/60 text-xs mb-3 font-bold">Introduction</p>
          <h2 className="text-5xl font-bold mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                I am a dedicated <span className="text-white font-medium">B.Tech CSE student</span> at Graphic Era University with a strong academic record (CGPA 9.0). My journey is fueled by a curiosity for how AI and web technologies can solve real-world problems.
              </p>
              <p>
                Specializing in <span className="text-cyan-400">Full Stack Development</span> and <span className="text-cyan-400">AI integration</span>, I build applications that are not just fast, but intelligent and secure.
              </p>
              <div className="pt-4">
                <a href="mailto:himaniagarwal1006@gmail.com" className="group flex items-center gap-3 text-cyan-400 font-medium hover:text-white transition-colors">
                  <span className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-all">
                    <FaEnvelope />
                  </span>
                  himaniagarwal1006@gmail.com
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/5 backdrop-blur-sm rounded-3xl p-6 flex flex-col gap-4 hover:border-cyan-400/40 transition-all duration-500 group">
                  <div className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform">{h.icon}</div>
                  <div>
                    <p className="text-white font-bold text-sm mb-1">{h.label}</p>
                    <p className="text-gray-500 text-xs">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="max-w-6xl mx-auto px-8 py-32 relative z-10 bg-white/[0.01]">
        <h2 className="text-5xl font-bold mb-16 text-white text-center">Education</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { school: "Graphic Era University", degree: "B.Tech CSE", detail: "2023 – Present", score: "CGPA: 9.0" },
            { school: "B.L.M Academy", degree: "Class XII", detail: "CBSE Board", score: "93.6%" },
            { school: "Rainbow Academy", degree: "Class X", detail: "CBSE Board", score: "93.1%" },
          ].map((e, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-[2.5rem] p-10 hover:border-cyan-400/30 transition-all text-center">
              <h3 className="text-2xl font-bold mb-3 text-white">{e.school}</h3>
              <p className="text-cyan-400 font-semibold mb-2">{e.degree}</p>
              <p className="text-gray-500 text-sm mb-4">{e.detail}</p>
              <p className="text-white text-xl font-bold">{e.score}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-6xl mx-auto px-8 py-32 relative z-10">
        <h2 className="text-5xl font-bold mb-20 text-white">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300"
            >
              <div className="text-4xl text-cyan-400 mb-4">{skill.icon}</div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section id="certifications" className="max-w-6xl mx-auto px-8 py-32 relative z-10 border-t border-white/5">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <h2 className="text-5xl font-bold mb-16 text-white">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "AWS", detail: "Cloud Practitioner Basics, Shared Responsibility Model, DevOps Fundamentals" },
              { title: "Google Cloud", detail: "Generative AI, Large Language Models" },
              { title: "SWAYAM (NPTEL)", detail: "Multi-Core Computer Architecture" },
            ].map((c, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 hover:border-cyan-400/30 transition-all">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-6xl mx-auto px-8 py-32 relative z-10 border-t border-white/5">
        <h2 className="text-5xl font-bold mb-16 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[3rem] p-10 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl group-hover:bg-cyan-400/10 transition-colors" />
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-10 flex-grow text-lg font-light">{project.description}</p>
              <div className="flex gap-5 relative z-10">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-4 rounded-2xl bg-white text-black text-center font-bold hover:bg-cyan-400 transition-colors">GitHub</a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 py-4 rounded-2xl border border-white/10 text-white text-center font-bold hover:bg-white/10 transition-colors">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="max-w-6xl mx-auto px-8 py-32 relative z-10 border-t border-white/5">
        <h2 className="text-5xl font-bold mb-16 text-white">Achievements</h2>
        <div className="space-y-6">
          {[
            { title: "LeetCode", detail: "Solved 200+ DSA problems strengthening algorithmic thinking and problem-solving skills." },
            { title: "Hacktoberfest 2025", detail: "Successfully completed Hacktoberfest with 6+ accepted pull requests in open-source projects." },
            { title: "Holopin", detail: "Earned final-level evolving Holopin badge for impactful open-source contributions." },
          ].map((a, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:border-cyan-400/20 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{a.title}</h3>
              <p className="text-gray-400 font-light">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-4xl mx-auto px-8 py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/[0.02] border border-white/5 p-12 md:p-20 rounded-[4rem]">
          <h2 className="text-5xl font-bold mb-4 text-white text-center">Let's Connect</h2>
          <p className="text-gray-400 text-center mb-16 text-lg font-light">Have a vision? Let's turn it into reality. Message me directly.</p>

          {formStatus === "success" && (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center justify-center gap-3 bg-cyan-400 text-black rounded-3xl p-5 mb-10 font-bold">
              <FaCheckCircle className="text-2xl" />
              <span>Message received! Check your mail soon!</span>
            </motion.div>
          )}

          {formStatus === "error" && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-3xl p-5 mb-10 text-center font-medium">
              Form error. Use the email link above instead!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/5 outline-none focus:border-cyan-400/50 transition-all text-white"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/5 outline-none focus:border-cyan-400/50 transition-all text-white"
              />
            </div>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Message..."
              rows="5"
              className="w-full px-8 py-8 rounded-[2rem] bg-white/5 border border-white/5 outline-none focus:border-cyan-400/50 transition-all text-white resize-none"
            />
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="w-full py-6 rounded-3xl bg-cyan-400 text-black font-extrabold text-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all disabled:opacity-50"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="relative z-10 py-12 text-center border-t border-white/5">
        <p className="text-gray-600 text-sm tracking-widest font-medium uppercase">© {new Date().getFullYear()} Himani Agarwal · Design & Code</p>
      </footer>

    </div>
  );
}