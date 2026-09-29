import { usePreferences } from '../Preferences/usePreferences.js'

function HomeFooter() {
  const { tr } = usePreferences()
  return <footer className="simple-footer"><p>{tr('Fanside for Shadow of the Colossus')}</p><span>{tr('Ikke tilknyttet Sony Interactive Entertainment')}</span></footer>
}
export default HomeFooter
