import LoreCard from './LoreCard.jsx'

function LoreList({ entries, onSelect }) {
  return <div className="lore-list">{entries.map(entry => <LoreCard entry={entry} onSelect={onSelect} key={entry.id} />)}</div>
}
export default LoreList
