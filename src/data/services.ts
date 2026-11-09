import type { LucideIcon } from 'lucide-react'
import { AppWindow, BrainCircuit, Cloud, CodeXml, Database, Headset, Server, ShieldCheck, Smartphone, Users } from 'lucide-react'

export type Service = {
  title: string
  icon: LucideIcon
  description: string
  /** Shown in the services grid on the home page */
  featured?: boolean
}

export const services: Service[] = [
  { title: 'Software Development', icon: CodeXml, featured: true, description: 'Custom software engineered around your business processes for long-term reliability and scalability.' },
  { title: 'Application Development & Customization', icon: AppWindow, featured: true, description: 'Tailored web and enterprise applications designed to fit operational workflows and business requirements.' },
  { title: 'SAP Implementation & Support', icon: Database, featured: true, description: 'End-to-end SAP setup, migration, optimization, and ongoing support for mission-critical systems.' },
  { title: 'Software Maintenance & Technical Support', icon: Headset, featured: true, description: 'Proactive monitoring, updates, and responsive support to keep systems stable and performing at their best.' },
  { title: 'IT Infrastructure Management', icon: Server, featured: true, description: 'Design, monitoring, and management of resilient infrastructure built for uptime, efficiency, and growth.' },
  { title: 'Cloud Implementation Services', icon: Cloud, featured: true, description: 'Cloud strategy, migration, deployment, and optimization across AWS, Azure, and hybrid environments.' },
  { title: 'Data Analytics / AI / ML Development', icon: BrainCircuit, description: 'Advanced analytics, intelligent automation, and AI-powered decision systems built for measurable business value.' },
  { title: 'Cybersecurity Services', icon: ShieldCheck, description: 'Threat protection, risk assessment, compliance support, and secure architecture for modern businesses.' },
  { title: 'Custom Web & Mobile Applications', icon: Smartphone, description: 'Responsive, secure, and user-focused digital experiences built around your goals and customer needs.' },
  { title: 'IT Manpower Services', icon: Users, featured: true, description: 'Skilled IT professionals and staff augmentation to help you scale teams and fill critical skill gaps on demand.' },
]

export const featuredServices = services.filter((s) => s.featured)
