import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found-page">
      <div className="eyebrow"><span /> WRONG TURN</div>
      <h1>That page is out of stock<span>.</span></h1>
      <p>Let’s get you back to the good stuff.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </section>
  )
}
