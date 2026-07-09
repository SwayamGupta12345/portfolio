import { FaFileAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa6";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaMobileAlt,
  FaBrain,
  FaKey,
  FaHtml5,
} from "react-icons/fa";
import { RiOpenaiFill, RiGeminiFill } from "react-icons/ri";
import { FaReact, FaNodeJs, FaJs, FaPython } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiGo,
  SiOllama,
  SiFlask,
  SiFastapi,
  SiC,
  SiDocker,
  SiRender,
  SiVercel,
} from "react-icons/si";
import { SiLangchaincorporate } from "react-icons/si";
import { DiMysql, DiPhp } from "react-icons/di";
import { TbLetterC } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";
import "./bento_landing.css";
const animationStyles = `
@keyframes slideInLeft {
  0% {
    opacity: 0;
    transform:
      translate3d(-120vw,-40px,0)
      rotate(-18deg)
      scale(.8);
  }

  70% {
    opacity: 1;
    transform:
      translate3d(20px,8px,0)
      rotate(2deg)
      scale(1.03);
  }

  100% {
    opacity: 1;
    transform:
      translate3d(0,0,0)
      rotate(0deg)
      scale(1);
  }
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform:
      translate3d(120vw,-30px,0)
      rotate(18deg)
      scale(.8);
  }

  70% {
    opacity: 1;
    transform:
      translate3d(-20px,8px,0)
      rotate(-2deg)
      scale(1.03);
  }

  100% {
    opacity: 1;
    transform:
      translate3d(0,0,0)
      rotate(0)
      scale(1);
  }
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform:
      translate3d(0,120vh,0)
      rotate(8deg)
      scale(.82);
  }

  70% {
    opacity: 1;
    transform:
      translate3d(0,-15px,0)
      rotate(-1deg)
      scale(1.02);
  }

  100% {
    opacity: 1;
    transform:
      translate3d(0,0,0)
      rotate(0)
      scale(1);
  }
}

@keyframes slideInDown {
  0% {
    opacity: 0;
    transform:
      translate3d(0,-120vh,0)
      rotate(-8deg)
      scale(.82);
  }

  70% {
    opacity: 1;
    transform:
      translate3d(0,15px,0)
      rotate(1deg)
      scale(1.02);
  }

  100% {
    opacity: 1;
    transform:
      translate3d(0,0,0)
      rotate(0)
      scale(1);
  }
}

.animate-slide-left{
  opacity:0;
  animation:slideInLeft .95s cubic-bezier(.22,1,.36,1) forwards;
}

.animate-slide-right{
  opacity:0;
  animation:slideInRight .95s cubic-bezier(.22,1,.36,1) forwards;
}

.animate-slide-up{
  opacity:0;
  animation:slideInUp .95s cubic-bezier(.22,1,.36,1) forwards;
}

.animate-slide-down{
  opacity:0;
  animation:slideInDown .95s cubic-bezier(.22,1,.36,1) forwards;
}

.stagger-1{animation-delay:.08s;}
.stagger-2{animation-delay:.18s;}
.stagger-3{animation-delay:.28s;}
.stagger-4{animation-delay:.38s;}
.stagger-5{animation-delay:.48s;}
.stagger-6{animation-delay:.58s;}
`;

export default function Portfolio() {
  return (
    <div className="bento-page">
      <style>{animationStyles}</style>
      <div className="bento-wrapper">
        {/* <div className="w-full mx-auto"> */}
        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Top Left - Swayam Gupta Intro */}
          <div className="lg:col-span-2 bento-card p-5 flex items-center justify-center animate-slide-left stagger-1">
            <div className="text-center">
              <h1 className="bento-title" style={{ color: "var(--primary)" }}>
                About me
              </h1>

              <p className="bento-subtitle mt-1 about-text">
                Building production-grade AI systems, developer tools and
                scalable web applications with expertise in multi-agent systems,
                real-time collaboration and open-source software.
              </p>
            </div>
          </div>

          {/* Top Right - Contact Section */}
          <div
            className="lg:col-span-2 bento-card rounded-3xl p-4 md:p-6 lg:p-8 min-h-40  animate-slide-right stagger-2"
            style={{ color: "var(--primary)" }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <p
                  className="text-sm uppercase tracking-[0.3em]"
                  style={{ color: "var(--primary)" }}
                >
                  Let&apos;s Connect
                </p>

                <h2 className="text-2xl lg:text-4xl font-bold mt-2">
                  Let&apos;s Build Something Great.
                </h2>

                <p
                  className=" mt-3 max-w-sm"
                  style={{ color: "var(--primary)" }}
                >
                  Open to Software Engineering, AI and Full-Stack roles,&nbsp;
                  internships, freelance work and open-source collaborations.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-4 ">
                <a
                  href="https://github.com/SwayamGupta12345"
                  className="flex items-center justify-center rounded-xl bg-white/10 p-4 transition duration-300 hover:bg-white/20 hover:scale-110"
                  aria-label="GitHub"
                  style={{ color: "var(--primary)" }}
                >
                  <FaGithub size={26} />
                </a>

                <a
                  href="https://www.linkedin.com/in/swayamgupta12/"
                  className="flex items-center justify-center rounded-xl bg-white/10 p-4 transition duration-300 hover:bg-white/20 hover:scale-110"
                  aria-label="LinkedIn"
                  style={{ color: "var(--primary)" }}
                >
                  <FaLinkedin size={26} />
                </a>

                <a
                  href="mailto:swayamsam2005@gmail.com"
                  className="flex items-center justify-center rounded-xl bg-white/10 p-4 transition duration-300 hover:bg-white/20 hover:scale-110"
                  aria-label="Email"
                  style={{ color: "var(--primary)" }}
                >
                  <FaEnvelope size={26} />
                </a>

                <a
                  href="/resume.pdf"
                  className="flex items-center justify-center rounded-xl bg-white/10 p-4 transition duration-300 hover:bg-white/20 hover:scale-110"
                  style={{ color: "var(--primary)" }}
                >
                  <FaFileAlt size={22} />
                  {/* <span>Resume</span> */}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 bento-card p-6 animate-slide-left stagger-3">
            <h2 className="bento-heading">Tech Stack</h2>
            <p className="bento-small mb-2">Technologies I build with</p>

            <div className="stack-group">
              <span className="stack-title">Programming</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <FaCode className="badge-icon" />C / C++
                </span>

                <span className="skill-badge">
                  <FaPython className="badge-icon" />
                  Python
                </span>

                <span className="skill-badge">
                  <DiPhp className="badge-icon" />
                  PHP
                </span>

                <span className="skill-badge">
                  <FaJs className="badge-icon" />
                  JavaScript
                </span>

                <span className="skill-badge">
                  <SiTypescript className="badge-icon" />
                  TypeScript
                </span>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-title">Frontend</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <FaHtml5 className="badge-icon" />
                  HTML/CSS
                </span>

                <span className="skill-badge">
                  <FaReact className="badge-icon" />
                  React
                </span>

                <span className="skill-badge">
                  <SiNextdotjs className="badge-icon" />
                  Next.js
                </span>

                <span className="skill-badge">
                  <SiTailwindcss className="badge-icon" />
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-title">Backend</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <FaNodeJs className="badge-icon" />
                  Node.js
                </span>

                <span className="skill-badge">
                  <SiExpress className="badge-icon" />
                  Express
                </span>

                <span className="skill-badge">
                  <SiFastapi className="badge-icon" />
                  FastAPI
                </span>

                <span className="skill-badge">
                  <FaKey className="badge-icon" />
                  JWT/OAuth
                </span>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-title">Databases</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <SiMongodb className="badge-icon" />
                  MongoDB
                </span>

                <span className="skill-badge">
                  <DiMysql className="badge-icon" />
                  MySQL
                </span>

                <span className="skill-badge">Pinecone</span>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-title">AI & GenAI</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <RiOpenaiFill className="badge-icon" />
                  CrewAI
                </span>

                <span className="skill-badge">
                  <SiLangchaincorporate className="badge-icon" />
                  LangChain
                </span>

                <span className="skill-badge">
                  <RiOpenaiFill className="badge-icon" />
                  RAG
                </span>

                <span className="skill-badge">
                  <RiOpenaiFill className="badge-icon" />
                  OpenAI
                </span>

                <span className="skill-badge">
                  <RiGeminiFill className="badge-icon" />
                  Gemini
                </span>
              </div>
            </div>

            <div className="stack-group">
              <span className="stack-title">Tools & DevOps</span>

              <div className="stack-tags">
                <span className="skill-badge">
                  <FaGithub className="badge-icon" />
                  GitHub
                </span>

                <span className="skill-badge">
                  <SiDocker className="badge-icon" />
                  Docker
                </span>

                <span className="skill-badge">
                  <SiRender className="badge-icon" />
                  Render
                </span>

                <span className="skill-badge">
                  <SiVercel className="badge-icon" />
                  Vercel
                </span>
              </div>
            </div>
          </div>
          {/* Middle Left - projects */}

          {/* Hero Column */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Hero */}
            <div className="bento-card p-6 aspect-square flex flex-col justify-center items-center text-center animate-slide-right stagger-2">
              <img
                src="https://swayamgupta.vercel.app/assets/profile-Dc8wZ4zI.jpg"
                alt="Swayam Gupta"
                className="hero-image "
              />

              <h2 style={{ color: "var(--text)" }} className="hero-name">
                Swayam Gupta
              </h2>
              <p className="hero-role">
                Full-Stack AI Engineer Building Real-Time AI Systems
              </p>
              <p className="hero-role">swayamsam2005@gmail.com</p>
              <p className="hero-location">Delhi, India</p>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                <span
                  className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  AI
                </span>
                <span
                  className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Open Source
                </span>
                <span
                  className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Full-Stack
                </span>
                <span
                  className="rounded-full bg-green-600/10 px-3 py-1 text-xs font-medium"
                  style={{ color: "var(--primary)" }}
                >
                  Open Source
                </span>
                <p>
                  400+ LeetCode • 870+ npm Downloads
                  <br /> 1000+ Users • AWS Certified
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bento-card p-4 animate-slide-up stagger-3">
              <h2
                className="bento-heading  mb-4"
                style={{ color: "var(--primary)" }}
              >
                Certifications
              </h2>

              <div className="space-y-3">
                <div className="rounded-xl bg-green-600/5 p-3 border-l-2  border-green-600">
                  <p style={{ color: "var(--text)" }}>
                    AWS Certified Cloud Practitioner
                  </p>
                  <p style={{ color: "var(--muted)" }}>Amazon Web Services</p>
                </div>

                <div className="rounded-xl bg-green-600/5 p-3 border-l-2  border-green-600">
                  <p style={{ color: "var(--text)" }}>
                    McKinsey Forward Program
                  </p>
                  <p style={{ color: "var(--muted)" }}>McKinsey & Company</p>
                </div>

                <div className="rounded-xl bg-green-600/5 p-3 border-l-2  border-green-600">
                  <p style={{ color: "var(--text)" }}>AI/ML Specialization</p>
                  <p style={{ color: "var(--muted)" }} className="text-xs mt-1">
                    Coursera
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bento-card p-4 md:p-6 lg:p-8 animate-slide-up stagger-4">
            <h2
              className="text-2xl font-black mb-6  dark:text-white "
              style={{ color: "var(--text)" }}
            >
              Featured Projects
            </h2>

            <div className="mt-2 flex flex-col">
              <div className="project-item animate-slide-up stagger-5 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="project-title"
                      style={{ color: "var(--text)" }}
                    >
                      Mirai - Multi-Agent AI Platform
                    </h3>

                    <span className="project-tag">AI • Open Source</span>
                  </div>

                  <span className="project-number">01</span>
                </div>

                <p className="mt-3" style={{ color: "var(--muted)" }}>
                  Real-time collaborative AI workspace powered by FastAPI,
                  Next.js, CrewAI and WebSockets with streaming responses,
                  shared context and specialized AI agents.
                </p>

                <div className="project-links">
                  <a
                    href="https://github.com/SwayamGupta12345/mirai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>

                  <span className="project-separator">•</span>

                  <a
                    href="https://mirai-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>

              <div className="project-item animate-slide-up stagger-4 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="project-title">Smart Stick LoadBalancer</h3>

                    <span className="project-tag">Open Source</span>
                  </div>

                  <span className="project-number">02</span>
                </div>

                <p className="project-desc">
                  Open-source, Production-ready npm package with
                  <span className="font-bold primary-text">
                    {" "}
                    870+ downloads{" "}
                  </span>
                  implementing multiple load-balancing strategies including
                  Round Robin, Least Connections and Weighted algorithms for
                  Node.js applications.
                </p>

                <div className="project-links">
                  <a
                    href="https://github.com/SwayamGupta12345/smart-stick-loadbalancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>

                  <span className="project-separator">•</span>

                  <a
                    href="https://www.npmjs.com/package/smart-stick-loadbalancer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                   npm →
                  </a>
                </div>
              </div>

              <div className="project-item animate-slide-up stagger-6 transition-all duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="project-title">Jaypee Learning Hub</h3>

                    <span className="project-tag">Education</span>
                  </div>

                  <span className="project-number">03</span>
                </div>

                <p className="mt-3" style={{ color: "var(--muted)" }}>
                  Academic resource platform serving 1000+ active students with
                  1200+ study resources, optimized backend architecture and
                  improved query performance.
                </p>

                <a href="https://jaypeelearninghub.great-site.net" className="project-link">
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
