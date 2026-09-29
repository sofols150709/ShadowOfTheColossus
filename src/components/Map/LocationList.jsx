function LocationList({ category, locations, activeLocation, onSelect }) {
  return <div className="map-location-list" aria-label={`${category.label} på kartet`}>{locations.map(location => <button type="button" className={activeLocation?.id === location.id ? 'is-active' : ''} onClick={() => onSelect(location)} key={location.id}><span aria-hidden="true">{category.symbol}</span>{location.name}</button>)}</div>
}
export default LocationList
