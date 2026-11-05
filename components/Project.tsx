import { ArrowUpRight } from "lucide-react";
const projects = [
    {
        "id": "educonnect",
        "title": "EduConnect",
        "timeline": "2024 – Present",
        "description": "A university-wide collaborative learning platform that intelligently matches students with verified peer mentors using AI skill-profiling, incentivized by interactive gamification mechanics.",
        "techStack": [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "JWT",
            "RESTful API",
            "TailwindCSS",
            "Jira",
            "Git"
        ],
        "github": "https://github.com/nethsalee"
    },
    {
        "id": "sprintsync",
        "title": "SprintSync",
        "timeline": "2024",
        "description": "A streamlined sprint coordination tool designed for academic engineering teams. Visualizes sprint burndown charts, task bottlenecks, and member workload distributions.",
        "techStack": [
            "React.js",
            "JavaScript",
            "TailwindCSS",
            "Node.js",
            "MySQL",
            "Express"
        ],
        "github": "https://github.com/nethsalee"
    },
    {
        "id": "campuscare",
        "title": "CampusCare",
        "timeline": "2023 – 2024",
        "description": "Role-based healthcare scheduling platform for university clinical health centers with automated slot allocation, secure health consultation notes, and prescription logs.",
        "techStack": [
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "TailwindCSS"
        ],
        "github": "https://github.com/nethsalee"
    }
];
export default function Project() {
    return <section id="project" className="section">
    <div className="section-heading heading-row"><div><span className="eyebrow">02 / SELECTED WORK</span><h2>Ideas put into practice.</h2></div><p>A selection of projects exploring everyday needs through technology.</p></div>
    <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.id}>
      <div className={"project-art project-art-" + index} aria-hidden="true"><span className="project-art-number">0{index + 1}</span><div className="project-mini-ui"><span/><span/><span/><div className="mini-sidebar"/><div className="mini-chart"><i/><i/><i/><i/><i/></div><div className="mini-card"/><div className="mini-card mini-card-two"/></div><span className="project-art-title">{project.title}<span>↗</span></span><span className="project-art-caption">{index === 0 ? "CONNECT. LEARN. GROW." : index === 1 ? "A LITTLE MORE CLARITY." : "CARE, MADE SIMPLER."}</span></div>
      <div className="project-info"><span className="eyebrow">{project.timeline}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.techStack.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div><a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={16}/></a></div>
    </article>)}</div>
  </section>;
}
