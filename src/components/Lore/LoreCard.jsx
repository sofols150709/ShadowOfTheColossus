import { usePreferences } from '../Preferences/usePreferences.js'
function LoreCard({ entry, onSelect }) {
  const { tr } = usePreferences()
  return <article className="lore-row"><img src={entry.image} alt="" style={{ objectPosition: entry.imagePosition }} /><div className="lore-row__body"><button type="button" className="lore-row__trigger" onClick={() => onSelect(entry)} aria-label={`${tr('Les mer om')} ${entry.name}`}><span>{entry.name}</span><span className="lore-row__arrow" aria-hidden="true">→</span></button><p>{entry.summary}</p></div></article>
}
export default LoreCard
