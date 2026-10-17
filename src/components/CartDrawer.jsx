import { useState } from 'react'
import { products } from '../data/products'
import { useStore } from '../hooks/useStore'
import Icon from './Icon'

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, changeQuantity, notice, setNotice } = useStore()
  const cartItems = products.filter((product) => cart[product.id])
  const cartCount = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  const cartTotal = cartItems.reduce((sum, product) => sum + product.price * cart[product.id], 0)

  return (
    <>
      <button className="bag-button" onClick={() => setIsOpen(true)}>
        <Icon name="bag" size={19} />
        <span>Bag</span>
        <span className="bag-count">{cartCount}</span>
      </button>

      {notice && <div className="toast" role="status">{notice} <span>✓</span></div>}

      {isOpen && (
        <div className="drawer-backdrop" onClick={() => setIsOpen(false)}>
          <aside
            className="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping bag"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-heading">
              <div><span className="eyebrow"><span /> YOUR GOOD FINDS</span><h2>Your bag <span>({cartCount})</span></h2></div>
              <button className="icon-button" aria-label="Close bag" onClick={() => setIsOpen(false)}><Icon name="close" /></button>
            </div>
            {cartItems.length ? (
              <>
                <div className="cart-items">
                  {cartItems.map((product) => (
                    <div className="cart-item" key={product.id}>
                      <img src={product.image} alt="" />
                      <div className="cart-item-info">
                        <span>{product.category}</span><strong>{product.name}</strong>
                        <div className="quantity-control">
                          <button aria-label={`Remove one ${product.name}`} onClick={() => changeQuantity(product.id, -1)}>−</button>
                          <span>{cart[product.id]}</span>
                          <button aria-label={`Add one ${product.name}`} onClick={() => changeQuantity(product.id, 1)}>+</button>
                        </div>
                      </div>
                      <strong className="cart-item-price">${product.price * cart[product.id]}</strong>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <p><span>Subtotal</span><strong>${cartTotal.toFixed(2)}</strong></p>
                  <small>Shipping and taxes calculated at checkout.</small>
                  <button
                    className="button button-primary checkout-button"
                    onClick={() => { setIsOpen(false); setNotice('Checkout is coming soon!') }}
                  >
                    Continue to checkout <Icon name="arrow" size={18} />
                  </button>
                </div>
              </>
            ) : (
              <div className="empty-cart">
                <span>♡</span><h3>Your bag’s feeling lonely.</h3><p>Let’s find it a little something good.</p>
                <button className="button button-primary" onClick={() => setIsOpen(false)}>Explore the shop <Icon name="arrow" size={18} /></button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  )
}
