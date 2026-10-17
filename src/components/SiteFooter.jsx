import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" to="/">
        <span className="brand-mark">g<span>.</span></span><span className="brand-name">goodphone</span>
      </Link>
      <span>Little things. Big phone energy.</span>
      <span>© 2026 goodphone supply co.</span>
      <div>
        <Link to="/shop">Shop</Link><Link to="/about">Our story</Link><a href="mailto:hello@goodphone.example">Say hello</a>
      </div>
    </footer>
  )
}
