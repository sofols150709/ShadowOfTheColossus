import './Navbar.css'
import NavItem from './NavItem.jsx'
import { usePreferences } from '../Preferences/usePreferences.js'

import homeIcon from '../../assets/nav-icons/home.svg'
import galleryIcon from '../../assets/nav-icons/gallery.svg'
import mapIcon from '../../assets/nav-icons/map.svg'
import loreIcon from '../../assets/nav-icons/lore.svg'
import theoriesIcon from '../../assets/nav-icons/theories.svg'

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