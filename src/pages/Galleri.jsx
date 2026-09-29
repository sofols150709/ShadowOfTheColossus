import { useMemo, useState } from 'react'
import Titlebackground from '../assets/bakgrunn-for-overskrifter.png'
import PageHero from '../components/PageHero/PageHero.jsx'
import GalleryFilters from '../components/Gallery/GalleryFilters.jsx'
import GalleryGrid from '../components/Gallery/GalleryGrid.jsx'
import SectionIntro from '../components/SectionIntro/SectionIntro.jsx'
import { usePreferences } from '../components/Preferences/usePreferences.js'
import { localize } from '../i18n/translate.js'
import './Galleri.css'

const filters = ['Alle', 'Ruiner', 'Konseptkunst', 'Kolosser', 'Miljøer']

const galleryItems = [
  {
    title: 'Det sunkne tempelet',
    category: 'Ruiner',
    image:
      'https://img.playstationtrophies.org/images/screenshots/5972/Shadow_of_the_Colossus_PS4_Screen_3.jpg',
    source: 'PlayStationTrophies',
    sourceUrl:
      'https://www.playstationtrophies.org/game/shadow-of-the-colossus-ps4/screenshots/',
  },
  {
    title: 'Broene i det forbudte landet',
    category: 'Ruiner',
    image: 'https://www.4gamer.net/games/384/G038443/SS/006.jpg',
    source: '4Gamer',
    sourceUrl: 'https://www.4gamer.net/games/384/G038443/screenshot.html',
  },
  {
    title: 'En glemt sivilisasjon',
    category: 'Konseptkunst',
    image: 'https://i.imgur.com/Ghug2oR.jpeg',
    source: 'Imgur',
    sourceUrl: 'https://imgur.com/gallery/shadow-of-colossus-concept-art-9VUw3ry',
  },
  {
    title: 'Gaius i landskapet',
    category: 'Konseptkunst',
    image:
      'https://www.creativeuncut.com/gallery-34/art/sotc-gaius-roaming-landscape.jpg',
    source: 'Creative Uncut',
    sourceUrl:
      'https://www.creativeuncut.com/gallery-34/sotc-gaius-roaming-landscape.html',
  },
  {
    title: 'Phaedra',
    category: 'Kolosser',
    image:
      'https://images.rpgsite.net/image/da49c9a1/63295/original/SHADOW%20OF%20THE%20COLOSSUS_20180127141027.jpg',
    source: 'RPG Site',
    sourceUrl:
      'https://www.rpgsite.net/feature/6711-shadow-of-the-colossus-walkthrough-guide-part-2-how-to-defeat-the-fourth-fifth-and-sixth-colossi',
  },
  {
    title: 'Veien til Malus',
    category: 'Kolosser',
    image:
      'https://www.gamepressure.com/shadow-of-the-colossus/gfx/word/81115153.jpg',
    source: 'Gamepressure',
    sourceUrl:
      'https://www.gamepressure.com/shadow-of-the-colossus/colossus-16-malus/z2a962',
  },
  {
    title: 'Fossene',
    category: 'Miljøer',
    image:
      'https://cdn-ak.f.st-hatena.com/images/fotolife/d/dashimaki_tmg/20200801/20200801095418.jpg',
    source: '主人公カメラ',
    sourceUrl: 'https://dashimaki-tmg.hatenablog.com/entry/wander05',
  },
  {
    title: 'Tåken ved innsjøen',
    category: 'Miljøer',
    image:
      'https://videogamesplus.ca/cdn/shop/products/818KHOGBX7L._SL1500_1245x700.jpg?v=1624651994',
    source: 'Video Games Plus',
    sourceUrl: 'https://videogamesplus.ca/products/shadow-of-the-colossus-ps4',
  },
]

function Galleri() {
  const { language, tr } = usePreferences()
  const [activeFilter, setActiveFilter] = useState('Alle')

  const visibleItems = useMemo(() => localize(language,
    activeFilter === 'Alle'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)), [activeFilter, language])

  return (
    <>
      <PageHero
        image={Titlebackground}
        imageAlt="Landskap fra Shadow of the Colossus"
        title={tr('Galleri')}
        className="gallery-page-hero"
      />

      <main className="gallery-content">
        <SectionIntro className="gallery-intro" eyebrowClassName="gallery-eyebrow" eyebrow={tr('Arkiv fra det forbudte landet')} title={tr('Utforsk verdenen')}>{tr('Filtrer samlingen for å se ruiner, konseptkunst, kolosser og miljøer fra spillet.')}</SectionIntro>

        <GalleryFilters filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} translate={tr} />
        <GalleryGrid items={visibleItems} />
      </main>
    </>
  )
}

export default Galleri
