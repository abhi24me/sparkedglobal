import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CtaPanel from '../components/CtaPanel'
import { services } from '../data/services'

const steps = [
  { title: 'Discover', text: 'We learn your goals, challenges, and users to define the right problem to solve.' },
  { title: 'Plan', text: 'We shape scope, architecture, and a clear roadmap with practical milestones.' },
  { title: 'Design & Develop', text: 'We build intuitive experiences and robust solutions engineered for quality and performance.' },
  { title: 'Integrate & Test', text: 'We connect systems and validate quality, security, speed, and usability.' },
  { title: 'Launch & Support', text: 'We deploy with confidence and provide ongoing support, monitoring, and optimization.' },
]

export default function Services() {
  return (
    <>
      <PageHeader crumb="Services" title="Our IT Services" />

      <section className="section">
        <div className="container">
          <div className="service-grid">
            {services.map(({ title, description, icon: Icon }, i) => (
              <article className="service-card" key={title} data-reveal>
                <div className="service-card-media" aria-hidden="true">
                  <span className="service-card-chip"><Icon size={26} /></span>
                  <span className="service-card-index">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="service-card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="Our Technology Delivery Process" align="center">
            A transparent and proven delivery model designed to reduce risk, improve visibility, and support long-term performance after deployment.
          </SectionHeading>
          <ol className="process">
            {steps.map((step, i) => (
              <li className="process-step" key={step.title} data-reveal>
                <span className="process-num">{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}
