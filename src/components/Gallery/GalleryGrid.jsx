import GalleryCard from './GalleryCard.jsx'

function GalleryGrid({ items }) {
  return <div className="gallery-grid" aria-live="polite">{items.map(item => <GalleryCard item={item} key={item.title} />)}</div>
}
export default GalleryGrid
