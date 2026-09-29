import { Link } from 'react-router-dom'

function ExploreCard({ title, text, image, to }) {
  return <article className="explore-card"><div className="explore-card__image"><img src={image} alt="" /></div><div className="explore-card__info"><div><h3>{title}</h3><p>{text}</p></div><Link className="explore-card__arrow" to={to} aria-label={`Les mer om ${title}`}>→</Link></div></article>
}
export default ExploreCard
