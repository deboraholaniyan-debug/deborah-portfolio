"use client";

import { useState } from "react";
import Image from "next/image";

const researchAreas = [
  {
    number: "01",
    title: "Explainable Artificial Intelligence",
    description:
      "Developing interpretable and transparent AI systems that support trustworthy decision-making.",
    tags: ["XAI", "SHAP", "Trustworthy ML"],
  },
  {
    number: "02",
    title: "Computer Vision & Multimodal AI",
    description:
      "Exploring intelligent systems that understand human behaviour through visual and multimodal signals.",
    tags: ["Deep Learning", "Computer Vision", "Multimodal Learning"],
  },
  {
    number: "03",
    title: "Educational Artificial Intelligence",
    description:
      "Applying AI to personalised learning, student modelling, affective computing and educational decision support.",
    tags: ["Educational AI", "Learning Analytics", "Affective Computing"],
  },
  {
    number: "04",
    title: "Trustworthy & Responsible Machine Learning",
    description:
      "Investigating reliable, ethical and human-centred approaches to intelligent systems.",
    tags: ["Responsible AI", "Model Evaluation", "Human-AI Interaction"],
  },
];

const projects = [
  {
    category: "EXPLAINABLE AI",
    title: "Explainable AI for Intelligent Lesson Planning",
    description:
      "Investigating the integration of language models and explainability techniques to support intelligent educational planning.",
  },
  {
    category: "TEMPORAL MACHINE LEARNING",
    title: "Temporal Graph Neural Networks for Student Knowledge Evolution",
    description:
      "Exploring temporal graph representations to model changes in student knowledge and learning progression.",
  },
  {
    category: "MULTIMODAL AI",
    title: "Contactless Multimodal Cognitive Load Estimation",
    description:
      "Developing multimodal approaches to understanding cognitive load in remote learning environments.",
  },
];


const publications = [
  {
    year: "2026",
    title: "Contactless Multimodal Cognitive Load Estimation for African Remote Learners",
    venue: "Publication details to be verified",
    category: "Multimodal AI",
    authors: "Olaniyan, D. et al.",
    link: "",
  },
  {
    year: "2026",
    title: "Explainable Knowledge Tracing",
    venue: "Publication details to be verified",
    category: "Graph ML",
    authors: "Olaniyan, D. et al.",
    link: "",
  },
  {
    year: "2026",
    title: "Graph-Enhanced Reasoning Networks",
    venue: "Publication details to be verified",
    category: "Explainable AI",
    authors: "Olaniyan, D. et al.",
    link: "",
  },
  {
    year: "2026",
    title: "Neuro-Symbolic Reasoning for Affective-Aware Personalization",
    venue: "Publication details to be verified",
    category: "Neuro-Symbolic AI",
    authors: "Olaniyan, D. et al.",
    link: "",
  },
  {
    year: "2026",
    title: "Temporal Graph Neural Networks for Student Knowledge Evolution",
    venue: "Algorithms",
    category: "Graph ML",
    authors: "Olaniyan, D. et al.",
    link: "",
  },
];

const categories = [
  "All",
  "Explainable AI",
  "Graph ML",
  "Multimodal AI",
  "Educational AI",
  "Neuro-Symbolic AI",
  "Applied AI",
  "NLP",
  "Speech AI",
];

const achievements = [
  {
    year: "2026",
    title: "Innovative Research Award",
    organisation: "Global Innovation Technologist Awards",
    description: "Research and innovation recognition.",
  },
  {
    year: "2026",
    title: "Scientific Editor",
    organisation: "Elsevier — Next Research",
    description: "Scientific editorial appointment.",
  },
  {
    year: "2026",
    title: "International Research Reviewer",
    organisation: "International academic journals",
    description: "Peer-review contributions to academic publishing.",
  },
];


export default function Home() {
const [searchTerm, setSearchTerm] = useState("");
const [activeCategory, setActiveCategory] = useState("All");

const filteredPublications = publications.filter((publication) => {
  const matchesSearch =
    publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    publication.venue.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    activeCategory === "All" ||
    publication.category === activeCategory;

  return matchesSearch && matchesCategory;
});
  return (
    <main>
      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <a className="brand" href="#">
            DO<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
            <a href="#achievements">Achievements</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href="#contact">
            Let&apos;s Connect <span>↗</span>
          </a>
        </nav>
      </header>

      
      <section className="hero">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            ARTIFICIAL INTELLIGENCE · RESEARCH & ENGINEERING
          </div>

          <p className="eyebrow">
            RESEARCH. INNOVATION. REAL-WORLD IMPACT.
          </p>

          <h1>
            Dr Deborah
            <br />
            <span>Olaniyan.</span>
          </h1>

          <h2>
            AI Researcher & Academic
            <br />
            <span>Explainable AI · Multimodal Intelligence</span>
          </h2>

          <p className="hero-description">
            I advance human-centred and trustworthy Artificial Intelligence
            through research in Explainable AI, Computer Vision, Multimodal
            Learning and Educational AI. My work explores how intelligent
            systems can become more interpretable, adaptive and effective
            in addressing complex real-world challenges.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#research">
              Explore My Research <span>↗</span>
            </a>

            <a className="button-secondary" href="#about">
              Read My Biography ↓
            </a>
          </div>

          <div className="hero-location">
            <span>University of the Free State, South Africa</span>
            <span className="location-divider">/</span>
            <span>Open to Global Research Opportunities</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-core">
            <span>AI</span>
            <small>RESEARCH</small>
          </div>

          <div className="visual-tag tag-one">
            EXPLAINABLE AI
          </div>

          <div className="visual-tag tag-two">
            MULTIMODAL AI
          </div>

          <div className="visual-tag tag-three">
            TRUSTWORTHY ML
          </div>

          <div className="visual-caption">
            <span>01 / 04</span>
            <span>INTELLIGENCE THROUGH RESEARCH</span>
          </div>
        </div>
      </section>


      <section className="impact-strip" aria-label="Research highlights">
        <div className="impact-item">
          <strong>40+</strong>
          <span>Research Publications</span>
        </div>
        <div className="impact-item">
          <strong>222+</strong>
          <span>Google Scholar Citations</span>
        </div>
        <div className="impact-item">
          <strong>8</strong>
          <span>H-index</span>
        </div>
        <div className="impact-item">
          <strong>15</strong>
          <span>MSc Students · 6 Completed, 9 Ongoing</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2>
            Researching AI.
            <br />
            <span>Creating meaningful impact.</span>
          </h2>
        </div>

        <div className="about-grid">
          
          <div className="about-label">
            <span>WHO I AM</span>
            <div className="about-line" />
          </div>

          <div className="about-image">
            <Image
              src="/deborah-profile.jpeg"
              alt="Dr Deborah Olaniyan"
              width={400}
              height={480}
              className="profile-picture"
            />
          </div>

          <div className="about-text">
             <p className="about-lead">
                I am Dr Deborah Olaniyan, an Artificial Intelligence researcher,
                academic affiliated with the University of the Free
                State, South Africa. I hold a PhD in Computer Science, with
                research expertise spanning Explainable AI, Computer Vision,
                Multimodal Learning, Educational AI and Trustworthy Machine Learning.
              </p>

              <p>
                My research investigates the development of intelligent,
                interpretable and human-centred systems, particularly in
                educational environments and other real-world application
                domains. My doctoral research focused on multimodal emotion
                detection in e-learning classrooms, integrating facial, speech
                and contactless physiological signals to understand learners'
                emotional states.
              </p>

              <p>
                Beyond research, I have experience in university teaching,
                postgraduate supervision, software development and
                interdisciplinary research. I have contributed to scholarly
                publications and research collaborations and serve as a
                Scientific Editor with Elsevier.
              </p>

              <p>
                I am particularly interested in advancing responsible AI
                research, developing practical intelligent systems and
                building collaborations that translate scientific discoveries
                into meaningful societal and technological impact.
              </p>

            <a className="text-link" href="#experience">
              Discover my professional journey ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading">
          <p className="eyebrow">02 — RESEARCH INTERESTS</p>
          <h2>
            Advancing the frontiers
            <br />
            <span>of intelligent systems.</span>
          </h2>
          <p className="section-intro">
            My research focuses on developing intelligent, explainable
            and human-centred AI solutions.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <span className="card-number">{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <div className="tag-list">
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 — SELECTED RESEARCH</p>
          <h2>
            Ideas translated
            <br />
            <span>into research contributions.</span>
          </h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-index">
                0{index + 1}
              </span>
              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="project-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
          
<section className="section publications-section" id="publications">
  <div className="section-heading">
    <p className="eyebrow">04 — RESEARCH OUTPUT</p>
    <h2>
      Selected publications.
      <br />
      <span>Research with impact.</span>
    </h2>
    <p className="section-intro">
      More than 40 peer-reviewed publications spanning explainable
      AI, graph learning, multimodal intelligence and educational
      technology.
    </p>
  </div>

  <div className="publication-controls">
    <input
      type="search"
      placeholder="Search publications or journals..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      aria-label="Search publications"
    />

    <div className="publication-filters">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={
            activeCategory === category ? "filter-active" : ""
          }
        >
          {category}
        </button>
      ))}
    </div>
  </div>

  <div className="publication-list">
    {filteredPublications.map((publication, index) => (
      <article className="publication-card" key={publication.title}>
        <div className="publication-year">
          {publication.year}
        </div>

        <div className="publication-details">
          <span className="project-category">
            {publication.category}
          </span>

          <h3>{publication.title}</h3>

          <p>{publication.authors}</p>

          <span className="publication-venue">
            {publication.venue}
          </span>

          {publication.link ? (
            <a
              href={publication.link}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              View DOI ↗
            </a>
          ) : (
            <span className="publication-unlinked">
              Publication details to be linked
            </span>
          )}
        </div>

        <span className="publication-number">
          #{String(index + 1).padStart(2, "0")}
        </span>
      </article>
    ))}

    {filteredPublications.length === 0 && (
      <p className="no-results">
        No publications match your search.
      </p>
    )}
  </div>

  <a
    href="https://scholar.google.com/citations?user=uibdwl4AAAAJ"
    target="_blank"
    rel="noreferrer"
    className="button-primary scholar-button"
  >
    View Complete Google Scholar Profile ↗
  </a>
</section>

<section className="section achievements-section" id="achievements">
  <div className="section-heading">
    <p className="eyebrow">05 — ACHIEVEMENTS & RECOGNITION</p>
    <h2>
      Academic leadership.
      <br />
      <span>Research recognition.</span>
    </h2>
  </div>

  <div className="achievement-grid">
    {achievements.map((achievement) => (
      <article className="achievement-card" key={achievement.title}>
        <span className="achievement-year">
          {achievement.year}
        </span>
        <h3>{achievement.title}</h3>
        <p className="achievement-org">
          {achievement.organisation}
        </p>
        <p>{achievement.description}</p>
      </article>
    ))}
  </div>

  <div className="academic-service">
    <div>
      <p className="eyebrow">ACADEMIC CONTRIBUTIONS</p>
      <h3>Beyond publications.</h3>
      <p>
        Contributing to academic development through postgraduate
        supervision, institutional service, peer review and
        interdisciplinary research.
      </p>
    </div>

    <div className="service-stat">
      <strong>6</strong>
      <span>Completed MSc projects</span>
    </div>

    <div className="service-stat">
      <strong>9</strong>
      <span>Ongoing MSc projects</span>
    </div>

    <div className="service-stat">
      <strong>50+</strong>
      <span>Undergraduate capstone projects</span>
    </div>
  </div>

  <div className="talks-block">
    <p className="eyebrow">INVITED TALKS & SEMINARS</p>

    <div className="talk-item">
      <span>2025</span>
      <div>
        <h4>Trustworthy Machine Learning in Educational Analytics</h4>
        <p>Invited Speaker — AI Research Seminar, Bowen University</p>
      </div>
    </div>

    <div className="talk-item">
      <span>2024</span>
      <div>
        <h4>Recent Advances in Explainable AI</h4>
        <p>Guest Lecture — Webdev Forum, Nigeria</p>
      </div>
    </div>
  </div>
</section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">04 — PROFESSIONAL EXPERIENCE</p>
          <h2>
            Research, teaching
            <br />
            <span>& technology practice.</span>
          </h2>
        </div>

        <div className="experience-list">
          <article className="experience-item">
            <span className="experience-period">OCT 2025 — PRESENT</span>
            <div>
              <h3>Postdoctoral Fellow</h3>
              <p>University of the Free State · South Africa</p>
              <small>Artificial Intelligence and interdisciplinary research</small>
            </div>
          </article>

          <article className="experience-item">
            <span className="experience-period">2024 — 2025</span>
            <div>
              <h3>Lecturer</h3>
              <p>Bowen University · Nigeria</p>
              <small>Computer Science, Artificial Intelligence and Software Engineering</small>
            </div>
          </article>

          <article className="experience-item">
            <span className="experience-period">2023 — 2024</span>
            <div>
              <h3>Lecturer / Assistant Lecturer</h3>
              <p>Landmark University · Nigeria</p>
              <small>Computer Science teaching and research</small>
            </div>
          </article>

          <article className="experience-item">
            <span className="experience-period">2016 — 2023</span>
            <div>
              <h3>Senior Web Developer</h3>
              <p>3gig Options Ltd · Nigeria</p>
              <small>Software development, learning management and student information systems</small>
            </div>
          </article>
        </div>
      </section>

      
      <section className="contact-section" id="contact">
        <p className="eyebrow">07 — LET&apos;S COLLABORATE</p>

        <h2>
          Have an interesting
          <br />
          <span>research opportunity?</span>
        </h2>

        <p>
          I welcome opportunities for research collaboration, academic
          appointments, AI innovation and interdisciplinary projects.
        </p>

        <a href="mailto:fatoluwafisayo@gmail.com">
          Get in Touch ↗
        </a>

        <div className="social-links">
          <a
            href="https://scholar.google.com/citations?user=uibdwl4AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar ↗
          </a>

          <a
            href="https://orcid.org/0000-0002-7940-060X"
            target="_blank"
            rel="noopener noreferrer"
          >
            ORCID ↗
          </a>

          <a
            href="https://www.linkedin.com/in/deborah-olaniyan-fatinikun"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=59299317400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scopus Author Profile ↗
          </a>
        </div>
      </section>


      <footer className="site-footer">
        <a className="brand" href="#">DO<span>.</span></a>
        <p>© 2026 Dr Deborah Olaniyan. All rights reserved.</p>
        <span>Designed for research. Built for impact.</span>
      </footer>
    </main>
  );
}
