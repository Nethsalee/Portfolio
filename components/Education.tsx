const educationData = [
    {
        degree: "BSc (Hons) in Information Systems",
        institution: "Faculty of Computing, Sabaragamuwa University of Sri Lanka",
        location: "Belihuloya, Sri Lanka",
        period: "2024 – Present",
        status: "ongoing",
        description: "Specializing in enterprise systems analysis, software engineering principles, and technology management. Actively developing technical leadership through agile projects and collaborative academic coursework.",
        coursework: [
            "Software Project Management",
            "Systems Analysis & Design",
            "Database Management Systems",
            "Web Technologies & Frameworks",
            "Object-Oriented Programming",
            "Agile & Scrum Methodologies",
        ],
    },
    {
        degree: "Diploma in Information Technology (DIT)",
        institution: "ESOFT Metro Campus",
        location: "Kandy, Sri Lanka",
        period: "2023",
        status: "completed",
        description: "Completed comprehensive foundational diploma covering practical programming fundamentals, database structures, system design basics, and modern web application development.",
        coursework: [
            "Programming Fundamentals",
            "Relational Databases",
            "Web Development Basics",
            "IT Systems Architecture",
        ],
    },
    {
        degree: "G.C.E. Advanced Level (Physical Science Stream)",
        institution: "Mahamaya Girls' College, Kandy",
        location: "Kandy, Sri Lanka",
        period: "2022",
        status: "completed",
        description: "Rigorous physical science stream foundation emphasizing analytical problem-solving, advanced mathematics, physics, and scientific research methodologies.",
        coursework: ["Combined Mathematics", "Physics", "Chemistry"],
    },
];
export default function Education() { return <section id="education" className="section"><div className="section-heading"><span className="eyebrow">04 / EDUCATION</span><h2>Always learning.</h2></div><div className="education-list">{educationData.map(item => <article key={item.degree}><span className="education-period">{item.period}</span><div><h3>{item.degree}</h3><p>{item.institution}</p><span className="small-muted">{item.location}</span></div>{item.status === "ongoing" && <span className="studying">In progress</span>}</article>)}</div></section>; }
