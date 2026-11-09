import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function Contact() {
  return (
    <>
      <PageHeader crumb="Contact" title="Contact Us" />

      <section className="section">
        <div className="container contact-split">
          <div data-reveal>
            <p className="eyebrow">Let’s talk</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-lead">
              Need a digital partner for software, infrastructure, automation, or security? Reach out to Sparked Global and let’s discuss what your business needs.
            </p>
          </div>

          <div className="contact-cards">
            <a href="mailto:info@arkelon.com" className="contact-card contact-card--link" data-reveal>
              <span className="contact-card-icon" aria-hidden="true"><Mail size={22} /></span>
              <div>
                <strong>Email</strong>
                <p>info@arkelon.com</p>
              </div>
              <ArrowUpRight size={20} className="contact-card-arrow" aria-hidden="true" />
            </a>

            {/* <div className="contact-card">
              <span className="contact-card-icon"><Phone size={22} /></span>
              <div>
                <strong>Phone</strong>
                <p>+91-XXXXXXXXXX</p>
              </div>
            </div> */}

            <div className="contact-card" data-reveal>
              <span className="contact-card-icon" aria-hidden="true"><MapPin size={22} /></span>
              <div>
                <strong>Address 1</strong>
                <p>2nd floor, AOJ House, 2818, 6th Cross, 19th Main, HAL II stage, Bengaluru - 560008, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
