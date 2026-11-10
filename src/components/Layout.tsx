import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowRight, Mail, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useReveal } from '../hooks/useReveal'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/product', label: 'Solutions' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact', end: true },
]

export default function Layout() {
  const location = useLocation()
  // The menu remembers the route it was opened on, so navigating closes it without an effect
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const menuOpen = menuPath === location.pathname
  const setMenuOpen = (open: boolean) => setMenuPath(open ? location.pathname : null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  useReveal(location.pathname)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuPath(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuPath(null)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <header ref={headerRef} className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Sparked Global home">
            <Logo variant="dark" size={40} />
          </Link>

          <nav id="primary-nav" className="primary-nav" aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary btn-sm header-cta">
              Get In Touch <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-nav"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      {/* Floating WhatsApp Button */}
      {/* <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff"><path d="M16.004 2.002c-7.732 0-14.002 6.27-14.002 14.002 0 2.468.657 4.876 1.904 6.988L2 30l7.168-1.88A13.94 13.94 0 0 0 16.004 30c7.732 0 14.002-6.27 14.002-14.002S23.736 2.002 16.004 2.002zm0 25.63a11.6 11.6 0 0 1-5.916-1.62l-.424-.252-4.398 1.154 1.174-4.294-.276-.44a11.58 11.58 0 0 1-1.778-6.178c0-6.418 5.224-11.636 11.636-11.636 6.414 0 11.636 5.218 11.636 11.636-.002 6.416-5.224 11.63-11.654 11.63zm6.382-8.716c-.35-.176-2.07-1.022-2.39-1.138-.322-.118-.556-.176-.79.176s-.906 1.138-1.112 1.372c-.204.234-.41.264-.76.088-.35-.176-1.476-.544-2.812-1.736-1.04-.926-1.742-2.07-1.946-2.42-.204-.35-.022-.54.154-.714.158-.158.35-.41.526-.616.176-.204.234-.35.35-.584.118-.234.06-.44-.028-.616-.088-.176-.79-1.904-1.082-2.606-.286-.684-.576-.592-.79-.604-.206-.01-.44-.012-.674-.012s-.616.088-.938.44c-.322.35-1.228 1.2-1.228 2.926s1.258 3.394 1.434 3.628c.176.234 2.476 3.782 6.002 5.302.838.362 1.492.578 2.002.74.842.268 1.608.23 2.214.14.676-.1 2.07-.846 2.362-1.664.292-.818.292-1.518.204-1.664-.088-.146-.322-.234-.672-.41z" /></svg>
      </a> */}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" aria-label="Sparked Global home">
                <Logo variant="dark" size={42} />
              </Link>
              <p>
                Sparked Global delivers modern software, infrastructure, and digital transformation solutions built for secure growth and long-term business performance.
              </p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/product">Solutions</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <Link to="/services">Software Development</Link>
              <Link to="/services">Cloud Services</Link>
              <Link to="/services">IT Support</Link>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:business@sparkedglobal.com" className="footer-mail">
                <Mail size={16} aria-hidden="true" /> business@sparkedglobal.com
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Sparked Global. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
