function OfficialPageButton({ onClick, children }) {
  return <button type="button" className="official-page-button" onClick={onClick}>{children}</button>
}
export default OfficialPageButton
