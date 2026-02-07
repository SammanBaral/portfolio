export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Samman Baral</h1>
        <p className="hero__tagline">Full Stack Developer & Software Engineer</p>
        <p className="hero__location">Kathmandu, Nepal</p>
        <div className="hero__links">
          <a href="mailto:sammanbaral123@gmail.com" className="hero__btn" aria-label="Email">
            Email
          </a>
          <a href="https://github.com/SammanBaral" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--outline" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/samman-baral-2ab8101b0/" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--outline" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}
