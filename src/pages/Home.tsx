import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, BrainCircuit, Building2, Cloud, CloudUpload, CodeXml, Database, Server, ShieldCheck, Workflow } from 'lucide-react'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import '../styles.css'
import SectionHeading from '../components/SectionHeading'
import CtaPanel from '../components/CtaPanel'
import { featuredServices } from '../data/services'

const reasons = [
  { title: 'Skilled Technology Professionals', text: 'Experienced engineers, architects, and consultants across the modern technology stack.' },
  { title: 'Secure & Scalable Architecture', text: 'Solutions engineered for security, resilience, and long-term business growth.' },
  { title: 'Agile Delivery', text: 'Transparent milestones and structured delivery that keeps projects moving on time.' },
  { title: 'Custom Business Solutions', text: 'Tailored implementations designed around your real operational goals and workflows.' },
  { title: 'Long-Term Support', text: 'Continuous guidance, updates, and maintenance that protect your digital investments.' },
]

const solutions = [
  { icon: Building2, title: 'Enterprise Software Solutions', text: 'Purpose-built platforms that unify operations, data, and teams across the enterprise.' },
  { icon: Workflow, title: 'Business Process Automation', text: 'Automate repetitive workflows to reduce cost, risk, and manual effort.' },
  { icon: CloudUpload, title: 'Cloud Migration & Deployment', text: 'Move workloads securely to the cloud with scalable architecture and optimized costs.' },
  { icon: BrainCircuit, title: 'AI-Driven Analytics', text: 'Turn raw data into actionable insight with modern analytics and AI capabilities.' },
  { icon: ShieldCheck, title: 'Cybersecurity & Risk Protection', text: 'Protect systems, data, and users with layered security and proactive oversight.' },
]

// Six capability nodes evenly spaced on a circle (percent coordinates) around the hub
const hubNodes = [CodeXml, Cloud, Server, ShieldCheck, BrainCircuit, Database].map((icon, i) => {
  const angle = ((-90 + i * 60) * Math.PI) / 180
  return { icon, x: +(50 + 38 * Math.cos(angle)).toFixed(2), y: +(50 + 38 * Math.sin(angle)).toFixed(2) }
})

export default function Home() {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="hero-badge"><span className="dot" aria-hidden="true" /> Trusted digital partner</p>
            <h1>Smart IT Solutions <span className="accent">for a Digital Future</span></h1>
            <p className="hero-sub">
              Sparked Global helps businesses design, build, secure, and scale modern digital systems through smart software, cloud platforms, automation, and long-term IT support.
            </p>
            <div className="hero-actions">
              <Link to="/product" className="btn btn-primary btn-lg">
                Explore Solutions <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-ghost-light btn-lg">Get In Touch</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hub">
              <svg className="hub-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle className="hub-orbit" cx="50" cy="50" r="38" />
                <circle className="hub-ring" cx="50" cy="50" r="22" />
                {hubNodes.map(({ x, y }, i) => (
                  <line key={i} x1="50" y1="50" x2={x} y2={y} />
                ))}
              </svg>
              <div className="hub-core">
                <svg viewBox="4 4 56 56">
                  <rect x="4" y="4" width="56" height="56" rx="14" fill="#009688" />
                  <path d="M32 13 Q32 32 51 32 Q32 32 32 51 Q32 32 13 32 Q32 32 32 13Z" fill="#fff" />
                  <path d="M45 13 Q45 19 51 19 Q45 19 45 25 Q45 19 39 19 Q45 19 45 13Z" fill="#1F2A33" />
                </svg>
              </div>
              {hubNodes.map(({ x, y, icon: Icon }, i) => (
                <span className="hub-node" key={i} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}>
                  <Icon size={22} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="about-product">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Our IT Services"
            aside={<Link to="/services" className="link-arrow">View all services <ArrowRight size={16} aria-hidden="true" /></Link>}
          />
          <div className="bento">
            {featuredServices.map(({ title, icon: Icon }, i) => (
              <Link to="/services" className={`bento-card bento-card--${i + 1}`} key={title} data-reveal>
                <Icon className="bento-card-watermark" aria-hidden="true" strokeWidth={1.25} />
                <span className="bento-card-chip" aria-hidden="true"><Icon size={24} /></span>
                <div className="bento-card-body">
                  <h3>{title}</h3>
                  <span className="bento-card-icon" aria-hidden="true"><ArrowUpRight size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="info-section bg-light" id="serve">
        <div className="container">
          <h2 className="section-title center">Industries We Empower</h2>
          <Swiper
            grabCursor={true}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {[
              { label: 'Healthcare', image: '/images/serve/healthcare.webp' },
              { label: 'Finance', image: '/images/serve/finance.webp' },
              { label: 'Retail', image: '/images/serve/retail.webp' },
              { label: 'Manufacturing', image: '/images/serve/manufacturing.webp' },
              { label: 'Education', image: '/images/serve/education.webp' },
              { label: 'Logistics', image: '/images/serve/logistics.webp' },
              { label: 'Real Estate', image: '/images/serve/real-estate.webp' },
              { label: 'E-commerce', image: '/images/serve/ecommerce.webp' }
            ].map((industry) => (
              <SwiperSlide key={industry.label}>
                <div className="serve-card">
                  {industry.image ? (
                    <img src={industry.image} alt={industry.label} className="serve-card-image" />
                  ) : (
                    <div className="icon-placeholder">●</div>
                  )}
                  <h4>{industry.label}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      <section className="section section--alt" id="why-sparked-global">
        <div className="container split">
          <div className="split-sticky">
            <SectionHeading eyebrow="Why us" title="Why Choose Sparked Global" />
          </div>
          <ol className="numbered-list">
            {reasons.map((r, i) => (
              <li key={r.title} data-reveal>
                <span className="numbered-list-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="solutions">
        <div className="container">
          <SectionHeading eyebrow="Solutions" title="Digital Solutions Built for Growth" />
          <div className="feature-grid">
            {solutions.map(({ icon: Icon, title, text }) => (
              <article className="feature-card" key={title} data-reveal>
                <span className="feature-icon" aria-hidden="true"><Icon size={22} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <Link to="/product" className="feature-card feature-card--link" data-reveal>
              <span>Explore Solutions</span>
              <ArrowRight size={22} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CtaPanel />
    </>
  )
}
