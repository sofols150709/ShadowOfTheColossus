import { usePreferences } from '../Preferences/usePreferences.js'
function MapControls({ onZoomIn, onZoomOut, onReset }) {
  const { tr } = usePreferences()
  return <div className="map-controls" aria-label={tr('Kartkontroller')}><button type="button" onClick={onZoomIn} aria-label={tr('Zoom inn')}>+</button><button type="button" onClick={onZoomOut} aria-label={tr('Zoom ut')}>-</button><button type="button" className="map-controls__reset" onClick={onReset}>{tr('Nullstill')}</button></div>
}
export default MapControls
