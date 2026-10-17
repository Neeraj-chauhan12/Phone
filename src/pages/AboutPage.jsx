import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="eyebrow"><span /> A LITTLE ABOUT US</div>
        <h1>Good gear.<br />No <span>guesswork.</span></h1>
        <p>
          We believe the little things you use every day should feel a little better.
          So we test, pick, and share phone essentials that simply do their job well.
        </p>
        <Link className="button button-primary" to="/shop">Find your everyday favourite <Icon name="arrow" size={18} /></Link>
      </section>
      <section className="about-values">
        <article><span>01</span><h2>Thoughtfully picked</h2><p>We keep our collection focused on useful accessories that feel good to use—not a wall of endless choices.</p></article>
        <article><span>02</span><h2>Everyday quality</h2><p>Dependable cables, clear displays, and comfortable audio make the daily routine a little smoother.</p></article>
        <article><span>03</span><h2>People first</h2><p>Shopping should be straightforward. We make it easy to find what fits and help when you need us.</p></article>
      </section>
      <section className="story-banner about-banner">
        <div className="story-mark">g<span>.</span></div>
        <div>
          <div className="eyebrow"><span /> HERE FOR YOUR EVERYDAY</div>
          <h2>Small upgrades. Good energy.</h2>
          <p>Find accessories for your phone, your playlist, and everything in between.</p>
        </div>
        <Link className="button button-light" to="/shop">Explore the shop <Icon name="arrow" size={18} /></Link>
        <span className="story-spark story-spark-one">✳</span>
      </section>
    </>
  )
}
