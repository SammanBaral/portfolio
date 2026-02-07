export default function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav__inner">
        <a href="#" className="nav__logo">SB</a>
        <ul className="nav__links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav__link">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
