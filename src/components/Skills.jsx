const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'Dart'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Flutter', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Django', 'Java'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Tools & Practices',
    items: ['Git', 'GitHub', 'Figma', 'Trello', 'Agile', 'Scrum', 'MVC', 'MVT'],
  },
  {
    title: 'Security & Other',
    items: ['JWT', 'HTTPS', 'OOP', 'Data Structures', 'Algorithms', 'UI/UX', 'Debugging'],
  },
]

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-title">Core Competencies</h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skills__card">
            <h3 className="skills__card-title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
