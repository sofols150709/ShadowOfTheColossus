function GalleryFilters({ filters, activeFilter, onChange, translate }) {
  return <div className="gallery-filters">{filters.map(filter => <button type="button" className={`gallery-filter${activeFilter === filter ? ' is-active' : ''}`} aria-pressed={activeFilter === filter} onClick={() => onChange(filter)} key={filter}>{translate(filter)}</button>)}</div>
}
export default GalleryFilters
