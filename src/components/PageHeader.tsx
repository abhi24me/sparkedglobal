import { Link } from 'react-router-dom'

type PageHeaderProps = {
  crumb: string
  title: string
}

export default function PageHeader({ crumb, title }: PageHeaderProps) {
  return (
    <header className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="page-hero-title">{title}</h1>
      </div>
    </header>
  )
}
