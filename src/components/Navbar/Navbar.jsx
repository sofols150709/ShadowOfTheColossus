import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar-content" aria-label="Hovednavigasjon">
      <ul>
        <li>
          <div className="logo-container">
            <span className="nav-placeholder" aria-hidden="true" />
          </div>
          <Link to="/">Hjem</Link>
        </li>

        <li>
          <div className="logo-container">
            <span className="nav-placeholder" aria-hidden="true" />
          </div>
          <Link to="/galleri">Galleri</Link>
        </li>

        <li>
          <div className="logo-container">
            <span className="nav-placeholder" aria-hidden="true" />
          </div>
          <a href="#Map">Kart</a>
        </li>

        <li>
          <div className="logo-container">
            <span className="nav-placeholder" aria-hidden="true" />
          </div>
          <a href="#Lore">Lore</a>
        </li>

        <li>
          <div className="logo-container">
            <span className="nav-placeholder" aria-hidden="true" />
          </div>
          <a href="#FanTheories">Fan-teorier</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
