function MapMarker({ location, label, active, onSelect }) {
  return <button type="button" className={`map-marker map-marker--${location.category}${active ? ' is-active' : ''}`} style={{ left: `${location.x}%`, top: `${location.y}%` }} onPointerDown={event => event.stopPropagation()} onClick={() => onSelect(location)} aria-label={`Vis ${location.name} på kartet`} title={location.name}><span>{label}</span></button>
}
export default MapMarker
