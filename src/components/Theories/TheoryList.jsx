import TheoryCard from './TheoryCard.jsx'

function TheoryList({ theories, selectedId, onSelect }) {
  return <section className="theory-list" aria-label="Fan-teorier">{theories.map(theory => <TheoryCard theory={theory} selected={selectedId === theory.id} onSelect={onSelect} key={theory.id} />)}</section>
}
export default TheoryList
