const PROJECTS = [
  {
    title: 'CircleShare – Community-Based Item Sharing App',
    description: 'A mobile application that enables users to share, borrow, and lend household items within their local communities, promoting sustainability and reducing waste.',
    tech: ['Flutter (Dart)', 'Node.js', 'MongoDB', 'RESTful APIs', 'Provider', 'Hive', 'JWT', 'Figma', 'Git'],
    role: 'Solo Project',
    link: 'https://github.com/SammanBaral/CircleShare.git',
  },
  {
    title: 'CircleShare – Web Platform',
    description: 'A web-based platform for listing, discovering, and managing shared items with an admin panel for moderation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB', 'JWT', 'Figma', 'Git'],
    role: 'Solo Project',
    link: 'https://github.com/SammanBaral/Web-CircleShare.git',
  },
  {
    title: 'Academia – Student Management System',
    description: 'Desktop application for attendance tracking, result publishing, fee management, and student records. Includes student ID card generation and automated report printing.',
    tech: ['Java (Swing)', 'MySQL', 'JDBC', 'MVC', 'GitHub', 'Figma', 'Agile'],
    role: 'Full Stack Developer',
    link: 'https://github.com/kripesh03/Academia.git',
  },
  {
    title: 'Mero Herbs – Multivendor Herb Marketplace',
    description: 'Web-based eCommerce platform for buying and selling herbs, fostering a community for herb enthusiasts in Nepal.',
    tech: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'MVT', 'JWT', 'HTTPS', 'Figma', 'Trello', 'Git'],
    role: 'Scrum Master & Full Stack Developer',
    link: 'https://github.com/SammanBaral/Mero-Herbs.git',
  },
]

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section-title">Projects</h2>
      <div className="projects__grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t} className="project-card__tag">{t}</span>
              ))}
            </div>
            <p className="project-card__role">Role: {project.role}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
              View on GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
