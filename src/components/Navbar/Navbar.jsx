import './Navbar.css'
import NavItem from './NavItem.jsx'
import { usePreferences } from '../Preferences/usePreferences.js'

import homeIcon from '../../assets/nav-icons/home.png'
import galleryIcon from '../../assets/nav-icons/gallery.png'
import mapIcon from '../../assets/nav-icons/map.png'
import loreIcon from '../../assets/nav-icons/lore.png'
import theoriesIcon from '../../assets/nav-icons/theories.png'

const links = [
  ['/', 'home', homeIcon],
  ['/galleri', 'gallery', galleryIcon],
  ['/kart', 'map', mapIcon],
  ['/lore', 'lore', loreIcon],
  ['/fan-teorier', 'theories', theoriesIcon],
]

function Navbar() {
  const { t } = usePreferences()

  return (
    <nav className="navbar-content" aria-label="Hovednavigasjon">
      <ul>
        {links.map(([to, label, icon]) => (
          <NavItem to={to} icon={icon} key={to}>
            {t[label]}
          </NavItem>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
