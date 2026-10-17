import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

function Benefits() {
  return (
    <section className="benefits" aria-label="Shop benefits">
      <div><span className="benefit-icon">↗</span><span><strong>Free shipping</strong><small>On orders over $50</small></span></div>
      <div><span className="benefit-icon">♡</span><span><strong>Made to last</strong><small>Quality you can feel</small></span></div>
      <div><span className="benefit-icon">↺</span><span><strong>Easy returns</strong><small>30 days, no worries</small></span></div>
      <div><span className="benefit-icon">☻</span><span><strong>Real human help</strong><small>Here when you need us</small></span></div>
    </section>
  )
}

function Newsletter() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <section className="newsletter">
      <div>
        <div className="eyebrow"><span /> THE GOOD LIST</div>
        <h2>Good things, occasionally<span>.</span></h2>
        <p>New finds, little perks, and absolutely no spam. Pinky promise.</p>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}>
        {subscribed ? (
          <p className="subscribed-message">You’re on the list. Talk soon! <span>✳</span></p>
        ) : (
          <>
            <label className="newsletter-input">
              <span className="sr-only">Email address</span>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe"><Icon name="arrow" size={20} /></button>
            </label>
            <small>By subscribing, you agree to our very occasional good emails.</small>
          </>
        )}
      </form>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> GOOD TECH. GOOD FEELING.</div>
          <h1>Little things.<br />Big <span>phone</span> energy.</h1>
          <p className="hero-description">
            The everyday essentials that make your phone feel brand new. Thoughtfully picked,
            fairly priced, ready for wherever.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" to="/shop">Shop accessories <Icon name="arrow" size={18} /></Link>
            <Link className="text-link" to="/shop">Explore collections</Link>
          </div>
          <div className="hero-proof">
            <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>S</span></div>
            <div><strong>Loved by 12,000+</strong><br /><span>phone people like you</span></div>
            <span className="proof-stars">★★★★★</span>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-sticker"><span>GOOD<br />CHOICE</span><b>✳</b></div>
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1400&q=90"
              alt="A collection of carefully chosen phone accessories"
            />
          </div>
          <div className="floating-note"><span className="note-icon">✳</span><span><strong>Small upgrade</strong><br />very good feeling</span></div>
          <div className="hero-caption">MADE FOR YOUR EVERYDAY <span>↗</span></div>
        </div>
        <div className="hero-index"><span>01</span> — 04</div>
      </section>

      <Benefits />

      <section className="category-section">
        <div className="section-heading">
          <div><div className="eyebrow"><span /> FIND YOUR THING</div><h2>A good place to start<span>.</span></h2></div>
          <Link className="text-link category-all" to="/shop">Browse everything <Icon name="arrow" size={17} /></Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className={`category-card category-${index + 1}`}
              key={category.name}
              to={`/shop?category=${encodeURIComponent(category.name)}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-info">
                <strong>{category.name}</strong><small>{category.note}</small>
                <em>{category.count} <span>↗</span></em>
              </span>
              <span className="category-arrow"><Icon name="arrow" size={17} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shop-section featured-section">
        <div className="shop-heading">
          <div><div className="eyebrow"><span /> THE GOOD STUFF</div><h2>Everyday favourites<span>.</span></h2></div>
          <Link className="text-link" to="/shop">View all <Icon name="arrow" size={17} /></Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="story-banner">
        <div className="story-mark">g<span>.</span></div>
        <div>
          <div className="eyebrow"><span /> A LITTLE ABOUT US</div>
          <h2>Good gear. No guesswork.</h2>
          <p>We try the little things, so you can find the ones that just feel right. Better everyday tech, minus the overwhelm.</p>
        </div>
        <Link className="button button-light" to="/about">Get to know us <Icon name="arrow" size={18} /></Link>
        <span className="story-spark story-spark-one">✳</span><span className="story-spark story-spark-two">✳</span>
      </section>

      <Newsletter />
    </>
  )
}
