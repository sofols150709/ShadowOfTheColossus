function MapCategories({ categories, activeCategory, onSelect }) {
  return <div className="map-categories" aria-label="Velg type sted">{categories.map(category => <button type="button" className={`map-category${activeCategory === category.id ? ' is-active' : ''}`} aria-pressed={activeCategory === category.id} onClick={() => onSelect(category.id)} key={category.id}><span aria-hidden="true">{category.symbol}</span>{category.label}</button>)}</div>
}
export default MapCategories
