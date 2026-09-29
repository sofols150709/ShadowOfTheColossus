import { useRef, useState } from 'react'
import MapBackground from '../assets/kart-hero.jpg'
import ForbiddenLandsMap from '../assets/forbidden-lands-map.png'
import PageHero from '../components/PageHero/PageHero.jsx'
import MapCategories from '../components/Map/MapCategories.jsx'
import MapMarker from '../components/Map/MapMarker.jsx'
import MapControls from '../components/Map/MapControls.jsx'
import LocationList from '../components/Map/LocationList.jsx'
import SectionIntro from '../components/SectionIntro/SectionIntro.jsx'
import { usePreferences } from '../components/Preferences/usePreferences.js'
import { localize } from '../i18n/translate.js'
import './Kart.css'

const categories = [
  { id: 'colossi', label: 'Kolosser', symbol: '◆' },
  { id: 'shrines', label: 'Helligdommer', symbol: '▲' },
  { id: 'ruins', label: 'Ruiner', symbol: '■' },
  { id: 'landmarks', label: 'Landemerker', symbol: '●' },
]

const locations = [
  { id: 'c1', name: 'Valus — I', category: 'colossi', x: 66, y: 56 },
  { id: 'c2', name: 'Quadratus — II', category: 'colossi', x: 53, y: 36 },
  { id: 'c3', name: 'Gaius — III', category: 'colossi', x: 34, y: 32 },
  { id: 'c4', name: 'Phaedra — IV', category: 'colossi', x: 78, y: 42 },
  { id: 'c5', name: 'Avion — V', category: 'colossi', x: 82, y: 31 },
  { id: 'c6', name: 'Barba — VI', category: 'colossi', x: 48, y: 84 },
  { id: 'c7', name: 'Hydrus — VII', category: 'colossi', x: 16, y: 29 },
  { id: 'c8', name: 'Kuromori — VIII', category: 'colossi', x: 80, y: 60 },
  { id: 'c9', name: 'Basaran — IX', category: 'colossi', x: 30, y: 51 },
  { id: 'c10', name: 'Dirge — X', category: 'colossi', x: 16, y: 75 },
  { id: 'c11', name: 'Celosia — XI', category: 'colossi', x: 38, y: 13 },
  { id: 'c12', name: 'Pelagia — XII', category: 'colossi', x: 54, y: 15 },
  { id: 'c13', name: 'Phalanx — XIII', category: 'colossi', x: 57, y: 76 },
  { id: 'c14', name: 'Cenobia — XIV', category: 'colossi', x: 9, y: 47 },
  { id: 'c15', name: 'Argus — XV', category: 'colossi', x: 51, y: 4 },
  { id: 'c16', name: 'Malus — XVI', category: 'colossi', x: 89, y: 87 },
  { id: 's1', name: 'Shrine of Worship', category: 'shrines', x: 57, y: 47 },
  { id: 's2', name: 'Northern Shrine', category: 'shrines', x: 43, y: 27 },
  { id: 's3', name: 'Western Shrine', category: 'shrines', x: 27, y: 63 },
  { id: 's4', name: 'Southern Shrine', category: 'shrines', x: 68, y: 79 },
  { id: 'r1', name: 'Desert Fortress', category: 'ruins', x: 47, y: 7 },
  { id: 'r2', name: 'Stone Arch Gorge', category: 'ruins', x: 21, y: 38 },
  { id: 'r3', name: 'The Broken Seal', category: 'ruins', x: 86, y: 85 },
  { id: 'r4', name: 'Ravine Entrance', category: 'ruins', x: 36, y: 42 },
  { id: 'l1', name: 'Misty Falls', category: 'landmarks', x: 56, y: 22 },
  { id: 'l2', name: 'Half-Moon Canyon', category: 'landmarks', x: 56, y: 31 },
  { id: 'l3', name: 'Autumn Forest', category: 'landmarks', x: 49, y: 60 },
  { id: 'l4', name: 'Green Cape', category: 'landmarks', x: 91, y: 78 },
]

const defaultView = { x: 0, y: 0, scale: 1 }

function Kart() {
  const { language, tr } = usePreferences()
  const viewportRef = useRef(null)
  const canvasRef = useRef(null)
  const dragRef = useRef(null)
  const [view, setView] = useState(defaultView)
  const [activeCategory, setActiveCategory] = useState('colossi')
  const [activeLocation, setActiveLocation] = useState(null)

  const visibleLocations = locations.filter(
    (location) => location.category === activeCategory,
  )

  function constrainView(nextView) {
    const viewport = viewportRef.current
    const canvas = canvasRef.current
    if (!viewport || !canvas) return nextView

    const mapWidth = canvas.offsetWidth
    const mapHeight = canvas.offsetHeight
    const viewportWidth = viewport.clientWidth
    const viewportHeight = viewport.clientHeight
    const scaledWidth = mapWidth * nextView.scale
    const scaledHeight = mapHeight * nextView.scale

    const horizontalLimit = Math.max(0, (scaledWidth - viewportWidth) / 2)
    const minY = viewportHeight - (mapHeight + scaledHeight) / 2
    const maxY = (scaledHeight - mapHeight) / 2

    return {
      ...nextView,
      x: Math.min(horizontalLimit, Math.max(-horizontalLimit, nextView.x)),
      y:
        scaledHeight <= viewportHeight
          ? viewportHeight / 2 - mapHeight / 2
          : Math.min(maxY, Math.max(minY, nextView.y)),
    }
  }

  function focusLocation(location) {
    const viewport = viewportRef.current
    const canvas = canvasRef.current
    if (!viewport || !canvas) return

    const scale = Math.max(view.scale, 1.75)
    const mapWidth = canvas.offsetWidth
    const mapHeight = canvas.offsetHeight
    const pointX = (location.x / 100) * mapWidth
    const pointY = (location.y / 100) * mapHeight

    setView(constrainView({
      scale,
      x: -scale * (pointX - mapWidth / 2),
      y:
        viewport.clientHeight / 2 -
        mapHeight / 2 -
        scale * (pointY - mapHeight / 2),
    }))
    setActiveLocation(location)
  }

  function chooseCategory(category) {
    setActiveCategory(category)
    setActiveLocation(null)
    setView(defaultView)
  }

  function changeZoom(amount) {
    setView((current) =>
      constrainView({
        ...current,
        scale: Math.min(3, Math.max(1, current.scale + amount)),
      }),
    )
  }

  function handlePointerDown(event) {
    if (event.button !== 0 && event.pointerType === 'mouse') return
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      viewX: view.x,
      viewY: view.y,
    }
  }

  function handlePointerMove(event) {
    if (!dragRef.current) return
    setView((current) =>
      constrainView({
        ...current,
        x: dragRef.current.viewX + event.clientX - dragRef.current.pointerX,
        y: dragRef.current.viewY + event.clientY - dragRef.current.pointerY,
      }),
    )
  }

  function stopDragging(event) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragRef.current = null
  }

  function handleWheel(event) {
    event.preventDefault()
    changeZoom(event.deltaY > 0 ? -0.15 : 0.15)
  }

  const localizedCategories = localize(language, categories)
  const activeCategoryData = localizedCategories.find(
    (category) => category.id === activeCategory,
  )

  return (
    <>
      <PageHero
        image={MapBackground}
        imageAlt="Fossefall i det forbudte landet"
        title={tr('Kart')}
        className="map-page-hero"
      />

      <main className="map-section">
        <SectionIntro className="map-section__intro" eyebrowClassName="map-section__eyebrow" eyebrow={tr('Det forbudte landet')} title={tr('Utforsk kartet')}>{tr('Dra kartet, zoom inn og velg en kategori for å finne stedene.')}</SectionIntro>

        <MapCategories categories={localizedCategories} activeCategory={activeCategory} onSelect={chooseCategory} />

        <div className="interactive-map">
          <div
            className="interactive-map__viewport"
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onWheel={handleWheel}
          >
            <div
              className="interactive-map__canvas"
              ref={canvasRef}
              style={{
                transform: `translate3d(calc(-50% + ${view.x}px), ${view.y}px, 0) scale(${view.scale})`,
              }}
            >
              <img src={ForbiddenLandsMap} alt="Kart over hele Forbidden Lands" />

              {visibleLocations.map((location, index) => <MapMarker location={location} label={location.category === 'colossi' ? index + 1 : activeCategoryData.symbol} active={activeLocation?.id === location.id} onSelect={focusLocation} key={location.id} />)}
            </div>

            <MapControls onZoomIn={() => changeZoom(0.25)} onZoomOut={() => changeZoom(-0.25)} onReset={() => { setView(defaultView); setActiveLocation(null) }} />

            {activeLocation && (
              <div className="map-location-card" role="status">
                <span>{activeCategoryData.label}</span>
                <strong>{activeLocation.name}</strong>
              </div>
            )}
          </div>

          <LocationList category={activeCategoryData} locations={visibleLocations} activeLocation={activeLocation} onSelect={focusLocation} />

          <p className="map-credit">
            Kartillustrasjon:{' '}
            <a
              href="https://www.deviantart.com/vgcartography/art/Shadow-of-the-Colossus-Forbidden-Lands-World-Map-1046251268"
              target="_blank"
              rel="noreferrer"
            >
              VGCartography
            </a>
          </p>
        </div>
      </main>
    </>
  )
}

export default Kart
