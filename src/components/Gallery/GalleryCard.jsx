import { usePreferences } from '../Preferences/usePreferences.js'

function GalleryCard({ item }) {
  const { tr } = usePreferences()
  return <figure className="gallery-card"><div className="gallery-card__image-wrap"><img className="gallery-card__image" src={item.image} alt={item.title} loading="lazy" /><span className="gallery-card__category">{item.category}</span></div><figcaption className="gallery-card__caption"><h3>{item.title}</h3><a href={item.sourceUrl} target="_blank" rel="noreferrer">{tr('Kilde:')} {item.source}</a></figcaption></figure>
}
export default GalleryCard
