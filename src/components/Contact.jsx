export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">Get in Touch</h2>
      <div className="contact__content">
        <p className="contact__text">I'm open to opportunities and collaboration.</p>
        <ul className="contact__list">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:sammanbaral123@gmail.com">sammanbaral123@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+9779816953955">+977 9816953955</a>,{' '}
            <a href="tel:+9779863726888">+977 9863726888</a>
          </li>
          <li>
            <strong>Location:</strong> Kathmandu 44600, Nepal
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/samman-baral-2ab8101b0/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/samman-baral
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/SammanBaral" target="_blank" rel="noopener noreferrer">
              github.com/SammanBaral
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
