import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaPanel() {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="cta-panel" data-reveal>
          <div>
            <h2>Ready to Build Smarter Digital Solutions?</h2>
            <p>
              Partner with Sparked Global to design, develop, integrate, and scale technology solutions that help your business move faster and perform better.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get In Touch <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
