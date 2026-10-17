import { Link, NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '../hooks/useStore'
import CartDrawer from './CartDrawer'
import Icon from './Icon'

export default function SiteHeader() {
  const { favorites } = useStore()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const search = searchParams.get('q') || ''
  const showingFavorites = searchParams.get('favorites') === 'true'

  function updateSearch(value) {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('q', value)
    else next.delete('q')
    navigate(`/shop${next.size ? `?${next.toString()}` : ''}`, { replace: true })
  }

  function toggleFavorites() {
    const next = new URLSearchParams(searchParams)
    if (showingFavorites) next.delete('favorites')
    else next.set('favorites', 'true')
    navigate(`/shop${next.size ? `?${next.toString()}` : ''}`)
  }

  return (
    <>
      <div className="announcement">
        <span className="announcement-spark">✳</span>
        A little upgrade goes a long way. <Link to="/shop">Find your next favourite</Link>
        <span className="announcement-right">Free shipping on orders over $50</span>
      </div>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Goodphone home">
          <span className="brand-mark">g<span>.</span></span>
          <span className="brand-name">goodphone</span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shop all</NavLink>
          <Link to="/shop?category=Glass%20%26%20displays">Collections</Link>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>Our story</NavLink>
        </nav>
        <div className="header-actions">
          <label className="search-box">
            <Icon name="search" size={18} />
            <input
              aria-label="Search products"
              placeholder="Search anything..."
              value={search}
              onFocus={() => {
                if (pathname !== '/shop') {
                  navigate(`/shop${searchParams.size ? `?${searchParams.toString()}` : ''}`, { replace: true })
                }
              }}
              onChange={(event) => updateSearch(event.target.value)}
            />
            <kbd>⌘ K</kbd>
          </label>
          <button
            className={`icon-button favorites-link ${showingFavorites ? 'is-favorite' : ''}`}
            aria-label={showingFavorites ? 'Show all products' : `Show favorites, ${favorites.length} items`}
            aria-pressed={showingFavorites}
            onClick={toggleFavorites}
          >
            <Icon name="heart" />
          </button>
          <CartDrawer />
        </div>
      </header>
    </>
  )
}
