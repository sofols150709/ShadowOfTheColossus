import { Link } from 'react-router-dom'

function NavItem({ to, children }) {
  return <li><div className="logo-container"><span className="nav-placeholder" aria-hidden="true" /></div><Link to={to}>{children}</Link></li>
}
export default NavItem
