const groups = [
    { title: "Analysis & understanding", description: "Connecting needs with clear, practical solutions.", skills: ["Requirements documentation", "Systems analysis & design", "Process understanding", "Microsoft Excel", "Google Sheets"] },
    { title: "Quality & detail", description: "Taking care of the details that make things work well.", skills: ["Postman & API testing", "UI review", "Problem solving", "Documentation", "Attention to detail"] },
    { title: "Planning & collaboration", description: "Keeping work organised and people connected.", skills: ["Agile & Scrum", "Jira & Trello", "Sprint planning", "Team communication", "Git & GitHub"] },
    { title: "Technology & tools", description: "A hands-on foundation for building digital experiences.", skills: ["React & JavaScript", "Node.js & Express", "MySQL & MongoDB", "HTML & CSS", "Figma"] },
];
export default function Skills() { return <section id="skills" className="section"><div className="section-heading"><span className="eyebrow">03 / WHAT I BRING</span><h2>A connected set of skills.</h2></div><div className="skills-grid">{groups.map(group => <article key={group.title}><h3>{group.title}</h3><p>{group.description}</p><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>; }
