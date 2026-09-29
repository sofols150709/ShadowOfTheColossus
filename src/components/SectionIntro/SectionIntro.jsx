function SectionIntro({ className, eyebrowClassName, eyebrow, title, children }) {
  return <header className={className}><p className={eyebrowClassName}>{eyebrow}</p><h2>{title}</h2><p>{children}</p></header>
}
export default SectionIntro
