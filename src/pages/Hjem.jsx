import HomeHero from '../components/Home/HomeHero.jsx'
import OfficialLinks from '../components/Home/OfficialLinks.jsx'
import ExploreSection from '../components/Home/ExploreSection.jsx'
import HomeBanner from '../components/Home/HomeBanner.jsx'
import HomeFooter from '../components/Home/HomeFooter.jsx'
import './Hjem.css'

function Hjem() {
  return <>
    <main>
      <section className="home-top">
        <HomeHero />
        <OfficialLinks />
      </section>
      <ExploreSection />
      <HomeBanner />
    </main>
    <HomeFooter />
  </>
}

export default Hjem
