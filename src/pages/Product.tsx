import { BrainCircuit, Building2, CircleCheck, Cloud, CloudUpload, CodeXml, Network, ShieldCheck, Smartphone, Workflow } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import CtaPanel from '../components/CtaPanel'

const coreSolutions = [
  { icon: Building2, title: 'Enterprise Software Solutions', text: 'Purpose-built platforms that connect people, processes, and systems across your organization.' },
  { icon: Workflow, title: 'Business Process Automation', text: 'Automate repetitive workflows to reduce cost, increase speed, and eliminate operational friction.' },
  { icon: CloudUpload, title: 'Cloud Migration & Deployment', text: 'Move workloads to secure, scalable cloud environments with optimized performance and cost efficiency.' },
  { icon: BrainCircuit, title: 'AI-Driven Analytics Platforms', text: 'Convert raw data into actionable business insight through intelligent dashboards and predictive models.' },
  { icon: ShieldCheck, title: 'Cybersecurity & Risk Protection', text: 'Strengthen security posture with monitoring, layered protection, and proactive risk management.' },
  { icon: Smartphone, title: 'Custom Web & Mobile Applications', text: 'Build engaging, responsive digital experiences tailored to your customers, teams, and business goals.' },
]

// Capabilities named in the intro paragraph, drawn as a layered stack
const stackLayers = [
  { icon: CodeXml, label: 'Custom software' },
  { icon: Cloud, label: 'Cloud architecture' },
  { icon: ShieldCheck, label: 'Cybersecurity' },
  { icon: Network, label: 'Integration' },
  { icon: BrainCircuit, label: 'AI-driven optimization' },
]

const deliverables = [
  'Scalable digital architecture',
  'Business-focused software design',
  'Secure and future-ready infrastructure',
  'System integration and automation',
  'Long-term support and optimization',
]

export default function Product() {
  return (
    <>
      <PageHeader crumb="Solutions" title="Our Solutions" />

      <section className="section">
        <div className="container media-split">
          <div data-reveal>
            <p className="eyebrow">Digital transformation</p>
            <h2 className="section-title">Solutions that help businesses run smarter</h2>
            <div className="prose">
              <p>
                Sparked Global develops and delivers technology solutions designed to improve efficiency, secure data, automate operations, and support business growth.
              </p>
              <p>
                From custom software and cloud architecture to cybersecurity, integration, and AI-driven optimization, we help organizations modernize their systems with practical, scalable, and future-ready technology.
              </p>
            </div>
          </div>
          <div className="stack-visual" data-reveal aria-hidden="true">
            {stackLayers.map(({ icon: Icon, label }, i) => (
              <div className="stack-layer" key={label} style={{ marginLeft: `${i * 6}%` }}>
                <span className="stack-layer-icon"><Icon size={20} /></span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading eyebrow="Capabilities" title="Core Solutions" />
          <div className="feature-grid">
            {coreSolutions.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title} data-reveal>
                <span className="feature-icon" aria-hidden="true"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="deliver-panel" data-reveal>
            <h2>What we deliver</h2>
            <ul>
              {deliverables.map((d) => (
                <li key={d}><CircleCheck size={20} aria-hidden="true" /> {d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}
