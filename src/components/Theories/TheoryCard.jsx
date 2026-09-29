import { usePreferences } from '../Preferences/usePreferences.js'
function TheoryCard({ theory, selected, onSelect }) {
  const { language, tr } = usePreferences()
  return <article className={`theory-card ${selected ? 'selected' : ''}`}><img src={theory.image} alt="" style={{ objectPosition: theory.position }} /><button type="button" onClick={() => onSelect(theory.id)}><span className="category">{theory.category}</span><strong>{theory.title}</strong><span className="stats"><span aria-label={`${theory.votes} ${tr('stemmer')}`}>◆ {theory.votes.toLocaleString(language)}</span><span aria-label={`${theory.comments} ${tr('kommentarer')}`}>▱ {theory.comments}</span></span></button></article>
}
export default TheoryCard
