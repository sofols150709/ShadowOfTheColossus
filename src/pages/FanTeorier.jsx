import { useEffect, useMemo, useState } from 'react'
import Hero from '../assets/fan-teorier-hero.jpg'
import Wander from '../assets/Hero.png'
import Lore from '../assets/lore-hero.jpg'
import Map from '../assets/forbidden-lands-map.png'
import Colossus from '../assets/kart-hero.jpg'
import PageHero from '../components/PageHero/PageHero.jsx'
import { useAuth } from '../components/Auth/useAuth.js'
import { supabase } from '../lib/supabase.js'
import TheoryTools from '../components/Theories/TheoryTools.jsx'
import TheoryList from '../components/Theories/TheoryList.jsx'
import TheoryDetail from '../components/Theories/TheoryDetail.jsx'
import SectionIntro from '../components/SectionIntro/SectionIntro.jsx'
import { usePreferences } from '../components/Preferences/usePreferences.js'
import { localize } from '../i18n/translate.js'
import './FanTeorier.css'

const theories = [
  { id:'wander', category:'Karakterer', title:'Wander startet den hornede slekten', image:Wander, position:'center 28%', votes:2847, comments:126, agree:72, excerpt:'Slutten viser Wander som et spedbarn med horn. Kan dette være begynnelsen på den forbannede slekten vi senere møter i ICO?', body:['Etter at Dormin blir forseglet på nytt, finner Mono et hornet spedbarn i bassenget. Mange fans mener barnet er Wander, forvandlet av kreftene han bar med seg etter de seksten kampene.','Hornene skaper en tydelig forbindelse til guttene som ofres i ICO. Hvis spillene deler verden, kan Wander være opphavet til hele den hornede slekten – og Lord Emons advarsel får en langt mørkere betydning.','Team Ico har bevisst latt tidslinjen være åpen. Teorien er ikke bekreftet, men sluttscenen gjør den til en av de mest populære koblingene mellom spillene.'], source:'https://teamico.fandom.com/wiki/Wander' },
  { id:'dormin', category:'Karakterer', title:'Dormin er ikke historiens skurk', image:Hero, position:'65% center', votes:1932, comments:89, agree:61, excerpt:'Dormin holder avtalen sin og advarer Wander om prisen. Kanskje det egentlig er menneskene som frykter en kraft de ikke forstår.', body:['Dormin lyver aldri direkte til Wander. Skikkelsen sier tydelig at det kan koste dyrt å hente Mono tilbake, men Wander godtar vilkårene.','Kolossene virker fredelige frem til Wander angriper dem, mens Lord Emon utfører et brutalt ritual. Dormin kan være en gammel naturkraft som ble delt og fengslet av mennesker.','Samtidig overtar Dormin kroppen til Wander når den siste delen frigjøres. Det gjør motivene tvetydige, akkurat slik resten av fortellingen er bygget opp.'], source:'https://teamico.fandom.com/wiki/Dormin' },
  { id:'ico', category:'Andre spill', title:'Spillet er en forhistorie til ICO', image:Lore, position:'center 56%', votes:3216, comments:174, agree:84, excerpt:'Hornene, skyggene og den gamle arkitekturen peker mot at Shadow of the Colossus utspiller seg lenge før ICO.', body:['Begge spillene bruker horn som tegn på en forbannelse, og de svarte skyggene rundt Wander ligner skapningene dronningen kontrollerer i ICO.','Den mest utbredte rekkefølgen plasserer Shadow of the Colossus først. Wander blir opphavet til en slekt av hornede barn, og århundrer senere har frykten utviklet seg til ofringsritualet i ICO.','Likhetene kan også være tematiske snarere enn en bokstavelig tidslinje, men slutten inviterer til nettopp denne forbindelsen.'], source:'https://teamico.fandom.com/wiki/Shadow_of_the_Colossus' },
  { id:'land', category:'Verden', title:'Det forbudte landet er et enormt fengsel', image:Map, position:'center', votes:1465, comments:63, agree:67, excerpt:'Broen er den eneste veien inn, tempelet står i sentrum, og seksten voktere omringer området som levende låser.', body:['Landskapet kan leses som ett gigantisk segl. Tempelet er navet, avgudsbildene markerer de seksten delene av Dormin, og kolossene fungerer som levende beholdere.','Den lange broen gjør landet mulig å nå, men enkelt å isolere. Når Emon ødelegger broen, gjenoppretter han fengselet og hindrer noen i å gjenta Wanders handlinger.','Ruiner og tomme bosetninger antyder likevel at området en gang hadde andre innbyggere. Kanskje forseglingen kom etter at en sivilisasjon hadde levd der.'], source:'https://teamico.fandom.com/wiki/Forbidden_Lands' },
  { id:'guardians', category:'Kolossene', title:'Kolossene beskytter verden mot Wander', image:Colossus, position:'center 40%', votes:2204, comments:112, agree:78, excerpt:'De fleste kolossene angriper først når Wander trenger seg inn. Kanskje spilleren bekjemper beskytterne, ikke monstrene.', body:['Kolossene lever isolert og viser sjelden interesse for verden utenfor. Flere ignorerer Wander helt til han skyter, klatrer eller bryter seg inn på territoriet deres.','Hver seier frigjør svart energi som går inn i Wander. Spillet forteller at spilleren ikke renser landet, men demonterer låsene som holder Dormin fanget.','Teorien endrer følelsen i hver kamp: triumfen blir til skyld, og skapningene fremstår som de siste ofrene etter et gammelt ritual.'], source:'https://teamico.fandom.com/wiki/Colossus' },
]
const categories = ['Alle temaer', ...new Set(theories.map(t => t.category))]

function FanTeorier() {
  const { user } = useAuth()
  const { language, tr } = usePreferences()
  const localizedTheories = useMemo(() => localize(language, theories), [language])
  const [query,setQuery]=useState(''), [category,setCategory]=useState('Alle temaer')
  const [selectedId,setSelectedId]=useState(null), [expanded,setExpanded]=useState(false)
  const [votes,setVotes]=useState({}), [voteTotals,setVoteTotals]=useState({}), [comments,setComments]=useState({}), [commentText,setCommentText]=useState('')
  const [dataMessage,setDataMessage]=useState(''), [saving,setSaving]=useState(false)
  const filtered=useMemo(()=>localizedTheories.filter((t,index)=>(category==='Alle temaer'||theories[index].category===category)&&`${t.title} ${t.excerpt} ${t.body.join(' ')}`.toLocaleLowerCase(language).includes(query.trim().toLocaleLowerCase(language))),[query,category,language,localizedTheories])
  const selected=localizedTheories.find(t=>t.id===selectedId), userVote=selected?votes[selected.id]:null
  const storedTotals=selected?voteTotals[selected.id]:null
  const percent=storedTotals?.total ? Math.round(storedTotals.agree/storedTotals.total*100) : selected?.agree || 0

  useEffect(()=>{
    async function loadVotes(){
      const {data,error}=await supabase.from('votes').select('theory_id, user_id, choice')
      if(error){setDataMessage('Databasen er ikke klar ennå. Kjør schema.sql i Supabase.');return}
      const totals={},mine={}
      for(const item of data){totals[item.theory_id]||={agree:0,total:0};totals[item.theory_id].total++;if(item.choice==='agree')totals[item.theory_id].agree++;if(user&&item.user_id===user.id)mine[item.theory_id]=item.choice}
      setVoteTotals(totals);setVotes(mine);setDataMessage('')
    }
    loadVotes()
  },[user])

  useEffect(()=>{
    if(!selectedId)return
    async function loadComments(){
      const {data,error}=await supabase.from('comments').select('id, user_id, username, body, created_at').eq('theory_id',selectedId).order('created_at',{ascending:false})
      if(error){setDataMessage('Databasen er ikke klar ennå. Kjør schema.sql i Supabase.');return}
      setComments(current=>({...current,[selectedId]:data}));setDataMessage('')
    }
    loadComments()
  },[selectedId])
  function open(id){setSelectedId(id);setExpanded(false);setCommentText('');setTimeout(()=>document.querySelector('#theory-detail')?.scrollIntoView({behavior:'smooth'}),0)}
  async function vote(choice){
    if(!user){setDataMessage('Du må logge inn for å stemme.');return}
    if(votes[selected.id])return
    setSaving(true);setDataMessage('')
    const {error}=await supabase.from('votes').insert({theory_id:selected.id,user_id:user.id,choice})
    setSaving(false)
    if(error){setDataMessage('Stemmen kunne ikke lagres. Prøv igjen.');return}
    setVotes(v=>({...v,[selected.id]:choice}))
    setVoteTotals(all=>({...all,[selected.id]:{agree:(all[selected.id]?.agree||0)+(choice==='agree'?1:0),total:(all[selected.id]?.total||0)+1}}))
  }
  async function submit(e){
    e.preventDefault();const text=commentText.trim();if(!text)return
    if(!user){setDataMessage('Du må logge inn for å kommentere.');return}
    setSaving(true);setDataMessage('')
    const username=user.user_metadata?.username||user.email?.split('@')[0]||'Wanderer'
    const {data,error}=await supabase.from('comments').insert({theory_id:selected.id,user_id:user.id,username,body:text}).select().single()
    setSaving(false)
    if(error){setDataMessage('Kommentaren kunne ikke lagres. Prøv igjen.');return}
    setComments(c=>({...c,[selected.id]:[data,...(c[selected.id]||[])]}));setCommentText('')
  }

  return <>
    <PageHero image={Hero} imageAlt="Shadow of the Colossus" title={tr('Fan-teorier')} className="fan-theories-page-hero" />
    <main className="theories-content">
      <SectionIntro className="theories-intro" eyebrowClassName="theories-kicker" eyebrow={tr('Fra fellesskapet')} title={tr('Hva skjuler det forbudte landet?')}>{tr('Utforsk teorier, stem på dem du tror på og del dine egne tanker.')}</SectionIntro>
      <TheoryTools query={query} onQueryChange={setQuery} category={category} onCategoryChange={setCategory} categories={categories} />
      <p className="theory-results" aria-live="polite">{filtered.length} {tr(filtered.length===1?'teori':'teorier')}</p>
      <TheoryList theories={filtered} selectedId={selectedId} onSelect={open} />
      {!filtered.length&&<div className="theory-empty"><h3>{tr('Ingen teorier funnet')}</h3><p>{tr('Prøv et annet søkeord eller tema.')}</p></div>}
      {selected && <TheoryDetail theory={selected} expanded={expanded} onToggleExpanded={() => setExpanded(value => !value)} onClose={() => setSelectedId(null)} user={user} userVote={userVote} percent={percent} saving={saving} onVote={vote} comments={comments[selected.id] || []} commentText={commentText} onCommentChange={setCommentText} onSubmit={submit} message={dataMessage} />}
    </main>
  </>
}
export default FanTeorier
