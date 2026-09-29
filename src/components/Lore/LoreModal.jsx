import { usePreferences } from '../Preferences/usePreferences.js'

function LoreModal({ entry, onClose }) {
  const { tr } = usePreferences()
  return <div className="lore-modal" role="presentation">
    <div className="lore-modal__backdrop" aria-hidden="true" onClick={onClose} />
    <div className="lore-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="lore-modal-title">
      <button type="button" className="lore-modal__back" onClick={onClose} autoFocus><span aria-hidden="true">←</span> {tr('Tilbake')}</button>
      <div className="lore-modal__panel">
        <div className="lore-modal__image"><img src={entry.image} alt="" style={{ objectPosition: entry.imagePosition }} /></div>
        <div className="lore-modal__text"><p className="lore-eyebrow">{tr('Lore')}</p><h2 id="lore-modal-title">{entry.name}</h2>{entry.details.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
      </div>
    </div>
  </div>
}
export default LoreModal
