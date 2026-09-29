import { Link } from 'react-router-dom'

function NavItem({ to, icon, children }) {
  return (
    <li>
      <Link className="nav-link" to={to}>
        <span className="logo-container" aria-hidden="true">
          <img src={icon} alt="" />
        </span>
        <span>{children}</span>
      </Link>
    </li>
  )
}
export default NavItem
