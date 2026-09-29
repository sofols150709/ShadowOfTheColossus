import OfficialPageButton from '../Buttons/OfficialPageButton.jsx'
import { usePreferences } from '../Preferences/usePreferences.js'

const officialUrl = 'https://www.playstation.com/no-no/games/shadow-of-the-colossus/'
const linkLabels = ['Karakterer', 'Tutorial', 'Utvikling', 'Versjoner']

function OfficialLinks() {
  const { tr } = usePreferences()
  const openOfficialPage = () => window.open(officialUrl, '_blank', 'noopener,noreferrer')
  return <div className="official-area"><h2>{tr('Dykk dypere på den offisielle siden')}</h2><div className="official-buttons">{linkLabels.map(label => <OfficialPageButton key={label} onClick={openOfficialPage}>{tr(label)}</OfficialPageButton>)}</div></div>
}
export default OfficialLinks
