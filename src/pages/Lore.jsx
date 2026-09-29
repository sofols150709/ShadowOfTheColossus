import { useEffect, useMemo, useState } from 'react'
import WanderImage from '../assets/Hero.png'
import LoreBackground from '../assets/lore-hero.jpg'
import DorminImage from '../assets/fan-teorier-hero.jpg'
import EmonImage from '../assets/kart-hero.jpg'
import PageHero from '../components/PageHero/PageHero.jsx'
import LoreList from '../components/Lore/LoreList.jsx'
import LoreModal from '../components/Lore/LoreModal.jsx'
import SectionIntro from '../components/SectionIntro/SectionIntro.jsx'
import { usePreferences } from '../components/Preferences/usePreferences.js'
import { localize } from '../i18n/translate.js'
import './Lore.css'

const loreEntries = [
  {
    id: 'wander',
    name: 'Wander',
    image: WanderImage,
    imagePosition: 'center 30%',
    summary:
      'En ung kriger som trosser lovene i det forbudte landet for å bringe Mono tilbake.',
    details: [
      'Wander ankommer det forbudte landet med Mono liggende over ryggen til hesten Agro. Han bærer det eldgamle sverdet, et våpen som kan lede ham til de seksten kolossene og avsløre deres svake punkter.',
      'Avtalen med Dormin driver reisen fremover: Hvis Wander ødelegger alle avgudsbildene ved å beseire kolossene, kan Mono kanskje vekkes til live. For hver seier blir Wander blekere og mer preget av den mørke kraften han slipper fri.',
      'Historien gjør det aldri helt klart om Wander er en helt eller om sorgen har gjort ham blind for konsekvensene. Det er denne tvetydigheten som gjør reisen hans så sentral i spillets lore.',
    ],
  },
  {
    id: 'mono',
    name: 'Mono',
    image: LoreBackground,
    imagePosition: '65% 58%',
    summary:
      'Den unge kvinnen Wander forsøker å redde, etter at hun ble ofret på grunn av en forbannet skjebne.',
    details: [
      'Mono ligger urørlig på alteret i Shrine of Worship gjennom nesten hele spillet. Vi får svært lite direkte informasjon om hvem hun var, eller hvilket forhold hun hadde til Wander før reisen begynte.',
      'Lord Emon forteller at hun ble ofret fordi hun bar en forbannet skjebne. Spillet forklarer ikke profetien nærmere, og lar derfor spilleren tolke både ritualet og Wanders valg.',
      'Når Dormins kraft blir forseglet på nytt, våkner Mono. Hun finner Wander forvandlet til et hornet spedbarn og bærer ham opp til den hemmelige hagen på toppen av tempelet.',
    ],
  },
  {
    id: 'dormin',
    name: 'Dormin',
    image: DorminImage,
    imagePosition: '70% 45%',
    summary:
      'En eldgammel og tvetydig makt, delt i seksten deler og forseglet inne i kolossene.',
    details: [
      'Dormin taler med flere stemmer fra lyset i tempelet. Skikkelsen lover å hjelpe Wander, men advarer samtidig om at prisen kan bli svært høy.',
      'Hver koloss bærer en del av Dormins forseglede essens. Når en koloss faller, trenger svarte tentakler inn i Wander, mens en ny skyggefigur dukker opp i tempelet.',
      'Etter den siste kampen samles alle delene i Wander, og Dormin gjenoppstår gjennom kroppen hans. Om Dormin er ond, guddommelig eller bare straffet av Emon og hans folk, blir aldri endelig besvart.',
    ],
  },
  {
    id: 'emon',
    name: 'Lord Emon',
    image: EmonImage,
    imagePosition: 'center 42%',
    summary:
      'Sjamanen som vokter kunnskapen om landet og forsøker å hindre Dormin i å bli satt fri.',
    details: [
      'Lord Emon leder gruppen som følger etter Wander inn i det forbudte landet. Masken, kappen og ritualene hans antyder at han tilhører en orden med gammel kunnskap om Dormin.',
      'Da Emon ankommer tempelet, er det allerede for sent å stoppe den siste kolossen fra å falle. Han beordrer mennene sine til å drepe Wander og bruker det eldgamle sverdet til å forsegle Dormin i templets basseng.',
      'Før broen kollapser, uttrykker Emon håp om at Wander en dag kan gjøre bot dersom han fortsatt lever. Ordene gjør avslutningen mindre entydig og knytter historien videre til temaene skyld, arv og gjenfødelse.',
    ],
  },
]

const translatedDetails = {
  en: {
    wander: ['Wander enters the Forbidden Lands with Mono lying across Agro’s back. His ancient sword guides him to the sixteen colossi and reveals their weak points.','Dormin promises that destroying every idol may restore Mono. With each victory Wander grows paler and is consumed by the dark power he releases.','The story never makes clear whether Wander is a hero or whether grief has blinded him to the consequences. This ambiguity is central to his story.'],
    mono: ['Mono lies motionless on the altar for most of the game. Very little is revealed about her life or her relationship with Wander.','Lord Emon says she was sacrificed because she carried a cursed fate, but the prophecy is never explained.','After Dormin is sealed again, Mono awakens. She finds Wander transformed into a horned infant and carries him to the secret garden.'],
    dormin: ['Dormin speaks with several voices from the temple’s light. The being promises to help Wander, but warns that the price may be high.','Each colossus carries part of Dormin’s sealed essence. Every victory sends dark tendrils into Wander and creates another shadow in the temple.','After the final battle Dormin is reborn through Wander. Whether Dormin is evil, divine or merely punished is never fully answered.'],
    emon: ['Lord Emon leads the group pursuing Wander into the Forbidden Lands. His mask and rituals suggest an order with ancient knowledge of Dormin.','He arrives too late to stop the final colossus from falling. He orders Wander killed and uses the sword to seal Dormin in the temple pool.','Before the bridge collapses, Emon hopes Wander may one day atone if he still lives, connecting the ending to guilt, legacy and rebirth.'],
  },
  uk: {
    wander: ['Вандер входить до Заборонених земель із Моно на спині Агро. Стародавній меч веде його до шістнадцяти колосів і показує їхні слабкі місця.','Дормін обіцяє, що знищення ідолів може повернути Моно. Після кожної перемоги Вандер блідне й поглинає темну силу.','Історія не пояснює, чи Вандер герой, чи горе засліпило його. Ця неоднозначність є основою його образу.'],
    mono: ['Моно майже всю гру нерухомо лежить на вівтарі. Про її життя та стосунки з Вандером відомо дуже мало.','Лорд Емон каже, що її принесли в жертву через прокляту долю, але пророцтво не пояснюється.','Після запечатування Дорміна Моно прокидається, знаходить Вандера рогатим немовлям і несе його до таємного саду.'],
    dormin: ['Дормін говорить кількома голосами зі світла храму. Він обіцяє допомогти Вандеру, але попереджає про високу ціну.','Кожен колос містить частину сутності Дорміна. Після кожної перемоги темрява входить у Вандера, а в храмі з’являється нова тінь.','Після останньої битви Дормін відроджується через Вандера. Чи він злий, божественний або несправедливо покараний — невідомо.'],
    emon: ['Лорд Емон переслідує Вандера до Заборонених земель. Його маска й ритуали вказують на давній орден, що знає про Дорміна.','Він прибуває надто пізно, наказує вбити Вандера й мечем запечатує Дорміна в храмовому басейні.','Перед руйнуванням мосту Емон сподівається, що Вандер колись спокутує провину, пов’язуючи фінал із провиною, спадком і відродженням.'],
  },
}

function Lore() {
  const { language, tr } = usePreferences()
  const localizedEntries = useMemo(() => localize(language, loreEntries).map(entry => ({ ...entry, details: translatedDetails[language]?.[entry.id] || entry.details })), [language])
  const [selectedEntryId, setSelectedEntryId] = useState(null)
  const selectedEntry = localizedEntries.find(entry => entry.id === selectedEntryId) || null

  useEffect(() => {
    if (!selectedEntry) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function closeOnEscape(event) {
      if (event.key === 'Escape') setSelectedEntryId(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedEntry])

  return (
    <>
      <PageHero
        image={LoreBackground}
        imageAlt="Wander and Mono — Shadow of the Colossus"
        title={tr('Lore')}
        className="lore-page-hero"
      />

      <main className="lore-content">
        <SectionIntro className="lore-intro" eyebrowClassName="lore-eyebrow" eyebrow={tr('Historier fra det forbudte landet')} title={tr('Personer og krefter')}>{tr('Velg et navn for å lese mer om rollen deres i fortellingen.')}</SectionIntro>

        <LoreList entries={localizedEntries} onSelect={entry => setSelectedEntryId(entry.id)} />
      </main>

      {selectedEntry && <LoreModal entry={selectedEntry} onClose={() => setSelectedEntryId(null)} />}
    </>
  )
}

export default Lore
