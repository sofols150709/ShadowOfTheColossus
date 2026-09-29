import heroImg from '../../assets/Hero.png'
import { usePreferences } from '../Preferences/usePreferences.js'

function HomeHero() {
  const { tr } = usePreferences()
  return <div className="home-hero"><img src={heroImg} alt="Shadow of the Colossus" /><div className="home-title"><h1>{tr('Mer enn et spill')}</h1><p>{tr('En verden som fortsatt vekker spørsmål')}</p></div></div>
}
export default HomeHero
