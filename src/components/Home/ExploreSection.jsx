import loreImg from '../../assets/lore-hero.jpg'
import mapImg from '../../assets/forbidden-lands-map.png'
import colossusImg from '../../assets/kart-hero.jpg'
import theoriesImg from '../../assets/fan-teorier-hero.jpg'
import ExploreCard from './ExploreCard.jsx'
import { usePreferences } from '../Preferences/usePreferences.js'

const cards = [
  { title: 'Kolossene', text: 'Møt de enorme skapningene som vokter det forbudte landet.', image: colossusImg, to: '/galleri' },
  { title: 'Historien', text: 'Oppdag Wander, Mono og kraften som hviler i landet.', image: loreImg, to: '/lore' },
  { title: 'Verdenen', text: 'Utforsk ruinene, slettene og hemmelighetene mellom dem.', image: mapImg, to: '/kart' },
  { title: 'Teoriene', text: 'Les hva fans tror skjuler seg bak den åpne fortellingen.', image: theoriesImg, to: '/fan-teorier' },
]

function ExploreSection() {
  const { tr } = usePreferences()
  return <section className="explore-world" aria-labelledby="explore-title"><p className="home-kicker">{tr('Det forbudte landet')}</p><h2 id="explore-title">{tr('Utforsk verdenen')}</h2><div className="explore-grid">{cards.map(card => <ExploreCard key={card.title} {...card} title={tr(card.title)} text={tr(card.text)} />)}</div></section>
}
export default ExploreSection
