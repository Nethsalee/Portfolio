const interests = [
    ["01", "Understand", "Explore needs, ask thoughtful questions, and make complex information easier to follow."],
    ["02", "Improve", "Look closely at how things work, consider different perspectives, and pay attention to quality."],
    ["03", "Bring together", "Keep ideas, people, and tasks connected through clear communication and thoughtful planning."],
    ["04", "Build", "Use hands-on experience with web technologies and databases to bring ideas to life."],
];
export default function About() {
    return <section id="about" className="section">
    <div className="section-heading"><span className="eyebrow">01 / A LITTLE ABOUT ME</span><h2>A thoughtful approach.<br />A practical mindset.</h2></div>
    <div className="about-intro"><p>I’m studying Information Systems at Sabaragamuwa University of Sri Lanka. I’m interested in the space between people, processes, and technology — and how they can work better together.</p><p>I enjoy learning across disciplines, working with others, and following an idea from the first question to the final detail. My technical background helps me connect the bigger picture with what it takes to make something work.</p></div>
    <div className="approach-grid">{interests.map(([number, title, text]) => <article key={number}><span className="item-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
  </section>;
}
