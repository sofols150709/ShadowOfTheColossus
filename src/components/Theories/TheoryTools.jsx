import { usePreferences } from '../Preferences/usePreferences.js'
function TheoryTools({ query, onQueryChange, category, onCategoryChange, categories }) {
  const { tr } = usePreferences()
  return <section className="theory-tools" aria-label={tr('Søk og filtrering')}><label className="theory-search"><span aria-hidden="true">⌕</span><span className="sr-only">{tr('Søk i teorier')}</span><input type="search" value={query} onChange={event => onQueryChange(event.target.value)} placeholder={tr('Søk i teorier ...')} /></label><label className="theory-filter"><span>{tr('Tema')}</span><select value={category} onChange={event => onCategoryChange(event.target.value)}>{categories.map(item => <option value={item} key={item}>{tr(item)}</option>)}</select></label></section>
}
export default TheoryTools
