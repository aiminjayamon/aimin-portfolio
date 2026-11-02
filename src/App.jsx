import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BarChart3, BrainCircuit, FileText } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "DATA ANALYTICS",
    title: "IPL Player Performance Dashboard",
    description: "An interactive dashboard for exploring IPL 2025 batting statistics, comparing players and filtering team performance.",
    tools: ["Python", "Pandas", "Streamlit", "Plotly"],
    icon: BarChart3,
    link: ""
  },
  {
    number: "02",
    type: "MACHINE LEARNING",
    title: "Student Performance Prediction",
    description: "A machine learning project exploring how study habits, attendance and lifestyle factors relate to student exam performance.",
    tools: ["Python", "Pandas", "Scikit-learn"],
    icon: BrainCircuit,
    link: ""
  },
  {
    number: "03",
    type: "PYTHON DEVELOPMENT",
    title: "Student Management System",
    description: "A menu-driven application for managing student records and practising core programming concepts.",
    tools: ["Python", "CRUD", "Problem Solving"],
    icon: Code2,
    link: ""
  }
];

const skills = [
  { name: "Python", group: "Programming" },
  { name: "C", group: "Programming" },
  { name: "HTML & CSS", group: "Web" },
  { name: "JavaScript", group: "Web" },
  { name: "React", group: "Web" },
  { name: "Pandas", group: "Data" },
  { name: "Data Analytics", group: "Data" },
  { name: "Streamlit", group: "Tools" },
  { name: "Git & GitHub", group: "Tools" },
  { name: "AI Tools", group: "Tools" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>AJ<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR LEARNING & OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M AIMIN JAYAMON</p>
            <h1>Curious mind.<br /><span>Digital builder.</span></h1>
            <p className="hero-description">
              I'm an aspiring developer exploring the intersection of technology,
              data and creativity. I enjoy turning ideas into useful digital projects
              and learning something new along the way.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#about">More about me <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-side" aria-label="Portfolio introduction graphic">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="monogram">A<span>J</span></div>
            <div className="side-note note-top">CREATIVE THINKING</div>
            <div className="side-note note-bottom">CONTINUOUS LEARNING · 2026</div>
            <div className="hero-index">01 / 04</div>
          </div>
          <div className="scroll-cue"><span></span> SCROLL TO EXPLORE</div>
        </section>

        <section className="intro-band">
          <div className="section-wrap intro-inner">
            <span className="section-label">01 — INTRODUCTION</span>
            <p>Building skills through <em>curiosity</em>, practical projects and a willingness to experiment.</p>
          </div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading">
            <span className="section-label">02 — ABOUT ME</span>
            <h2>A little about<br /><span>what drives me.</span></h2>
          </div>
          <div className="about-content">
            <p className="large-copy">I'm a technology enthusiast and student who enjoys understanding how things work — then building something with that knowledge.</p>
            <p className="muted-copy">My interests include programming, data analytics, artificial intelligence and entrepreneurship. I'm currently focused on strengthening my fundamentals, creating practical projects and growing as a developer.</p>
            <div className="about-facts">
              <div><span>01</span><strong>Learn</strong><small>Stay curious and keep improving.</small></div>
              <div><span>02</span><strong>Build</strong><small>Turn concepts into real projects.</small></div>
              <div><span>03</span><strong>Share</strong><small>Make useful work others can explore.</small></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading heading-row">
              <div><span className="section-label">03 — TOOLKIT</span><h2>Skills & <span>interests.</span></h2></div>
              <p className="muted-copy">A growing toolkit. I'm always open to learning new technologies and approaches.</p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{skill.name}</strong>
                  <span className="skill-group">{skill.group}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="work">
          <div className="section-heading heading-row">
            <div><span className="section-label">04 — SELECTED WORK</span><h2>Projects in <span>progress.</span></h2></div>
            <p className="muted-copy">A selection of academic and personal projects. I'll keep adding as I build more.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-icon"><Icon size={25} strokeWidth={1.4} /></div>
                  <div className="project-main">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
                  </div>
                  {project.link ? <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight /></a> : <span className="project-link muted-link" title="Add your project URL in src/App.jsx"><FileText /></span>}
                </article>
              );
            })}
          </div>
          <p className="edit-hint">TIP: Add your GitHub repository links to the projects in <code>src/App.jsx</code>.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="section-label">05 — GET IN TOUCH</span>
            <h2>Have an idea?<br /><span>Let's connect.</span></h2>
            <p>I'm open to learning opportunities, collaborations and conversations about technology and creative projects.</p>
            <a className="button button-light" href="mailto:your-email@example.com">Send me an email <Mail size={16} /></a>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
            <p className="contact-edit">Remember to replace the sample email and social links with your own.</p>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">AJ<span>.</span></a>
        <p>Designed & built with curiosity.</p>
        <span>© 2026 Aimin Jayamon</span>
      </footer>
    </div>
  );
}

export default App;
