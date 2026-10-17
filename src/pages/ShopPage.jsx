import { Link, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useStore } from '../hooks/useStore'
import { products } from '../data/products'

const filters = ['All accessories', 'Glass & displays', 'Cables', 'Audio', 'Charging']

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { favorites } = useStore()
  const activeCategory = searchParams.get('category') || 'All accessories'
  const query = (searchParams.get('q') || '').trim().toLowerCase()
  const showFavorites = searchParams.get('favorites') === 'true'
  const visibleProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === 'All accessories' || product.category === activeCategory
    const matchesSearch =
      !query ||
      `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(query)
    const matchesFavorites = !showFavorites || favorites.includes(product.id)
    return matchesCategory && matchesSearch && matchesFavorites
  })

  function selectCategory(category) {
    const next = new URLSearchParams(searchParams)
    if (category === 'All accessories') next.delete('category')
    else next.set('category', category)
    setSearchParams(next)
  }

  function clearFilters() {
    setSearchParams({})
  }

  return (
    <section className="shop-section shop-page">
      <div className="shop-heading">
        <div>
          <div className="eyebrow"><span /> {showFavorites ? 'SAVED FOR LATER' : 'THE GOOD STUFF'}</div>
          <h1>{showFavorites ? 'Your favourites' : 'Everyday favourites'}<span>.</span></h1>
        </div>
        <span className="product-count">{visibleProducts.length} lovely things</span>
      </div>
      <div className="shop-controls">
        <div className="filter-tabs" aria-label="Filter products">
          {filters.map((category) => (
            <button
              className={activeCategory === category ? 'filter-active' : ''}
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="sort-label">CURATED FOR EVERYDAY <span>✳</span></span>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="product-grid">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      ) : (
        <div className="empty-results">
          <span>⌕</span><h2>No matches just yet.</h2>
          <p>
            {showFavorites && favorites.length === 0
              ? 'Tap the heart on anything you love and it will be waiting here.'
              : 'Try another search or browse all our everyday favourites.'}
          </p>
          <button onClick={clearFilters}>Show everything</button>
        </div>
      )}
      <Link className="button button-outline" to="/">Back to home</Link>
    </section>
  )
}
