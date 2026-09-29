import './PageHero.css'

function PageHero({ image, imageAlt = '', title, lines = [], className = '' }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <div className="page-hero__image">
        <img src={image} alt={imageAlt} />
      </div>

      <div className="page-hero__title">
        <h1>{title}</h1>
      </div>

      {lines.length > 0 && (
        <div className="page-hero__context">
          <p>
            {lines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      )}
    </section>
  )
}

export default PageHero
