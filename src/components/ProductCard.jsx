import { useStore } from '../hooks/useStore'
import Icon from './Icon'

export default function ProductCard({ product }) {
  const { favorites, addToCart, toggleFavorite } = useStore()
  const isFavorite = favorites.includes(product.id)

  return (
    <article className="product-card">
      <div className={`product-image ${product.tone}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.label && <span className="product-label">{product.label}</span>}
        <button
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={isFavorite}
          onClick={() => toggleFavorite(product.id)}
        >
          <Icon name="heart" size={19} />
        </button>
        <button className="quick-add" onClick={() => addToCart(product)}>
          <Icon name="plus" size={17} /> Quick add
        </button>
      </div>
      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <div className="product-name-row">
          <h3>{product.name}</h3>
          <div className="product-price">
            <strong>${product.price}</strong>
            {product.oldPrice && <del>${product.oldPrice}</del>}
          </div>
        </div>
        <p>{product.description}</p>
        <div className="product-rating"><span>★★★★★</span> <small>({product.id * 23 + 14})</small></div>
      </div>
    </article>
  )
}
