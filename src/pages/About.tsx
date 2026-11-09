import { Eye, Handshake, HeartHandshake, Lightbulb, Scale, ShieldCheck, Target } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CtaPanel from '../components/CtaPanel'

const values = [
  { icon: ShieldCheck, label: 'Trust' },
  { icon: Scale, label: 'Integrity' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: HeartHandshake, label: 'Customer First' },
  { icon: Handshake, label: 'Long-Term Partnerships' },
]

export default function About() {
  return (
    <>
      <PageHeader crumb="About" title="About Sparked Global" />

      <section className="section">
        <div className="container intro-split">
          <p className="lead-statement" data-reveal>
            Sparked Global is a technology-first business focused on delivering smarter, faster, and more secure digital transformation for modern organizations.
          </p>
          <div className="prose" data-reveal>
            <p>
              We help businesses solve operational challenges through custom software development, cloud strategy, infrastructure modernization, business automation, and reliable system integration.
            </p>
            <p>
              Our approach blends technical depth with business understanding, ensuring every solution is aligned to real outcomes, scalability, and long-term performance.
            </p>
            <p>
              As we grow, Sparked Global continues to expand its capability in emerging technologies while building long-term partnerships with clients that value trust, quality, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container mv-grid">
          <article className="mv-card mv-card--dark" data-reveal>
            <span className="mv-icon" aria-hidden="true"><Target size={26} /></span>
            <h2>Our Mission</h2>
            <p>
              To empower businesses with dependable digital systems, practical innovation, and technology solutions that create measurable value.
            </p>
          </article>
          <article className="mv-card mv-card--brand" data-reveal>
            <span className="mv-icon" aria-hidden="true"><Eye size={26} /></span>
            <h2>Our Vision</h2>
            <p>
              To become a trusted technology partner that helps organizations modernize operations, improve efficiency, and scale confidently in a digital-first world.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="What guides us" title="Our Values" align="center" />
          <ul className="values-row">
            {values.map(({ icon: Icon, label }) => (
              <li className="value-tile" key={label} data-reveal>
                <span className="value-icon" aria-hidden="true"><Icon size={22} /></span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}
