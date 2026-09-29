import { Link } from 'react-router-dom'
import theoriesImg from '../../assets/fan-teorier-hero.jpg'
import { usePreferences } from '../Preferences/usePreferences.js'

function HomeBanner() {
  const { tr } = usePreferences()
  return <section className="home-banner"><img src={theoriesImg} alt="Shadow of the Colossus" /><div><p>{tr('Historien slutter ikke med spillet')}</p><h2>{tr('Hva tror du skjedde?')}</h2><Link to="/fan-teorier">{tr('Utforsk fan-teorier →')}</Link></div></section>
}
export default HomeBanner
