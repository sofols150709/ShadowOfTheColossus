import OfficalPageButton from './components/Buttons/OfficalPageButton.jsx'
import heroImg from './assets/Hero.png'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} alt="Shadow of the Colossus" />
          

        </div>

        <div className="titletext">
          <h1>Mer enn et spill</h1>
          <p className="subtitle">
            en verden som fortsatt vekker spørsmål
          </p>
        </div>

          <div className="button-row">
            <h2 className="row-title">Dykk dypere i den offisielle siden</h2>

           
            <OfficalPageButton
              
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Karakterer
            </OfficalPageButton>

            <OfficalPageButton
              
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Tutorial
            </OfficalPageButton>

            <OfficalPageButton
            
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Utvikling
            </OfficalPageButton>
            
            <OfficalPageButton
              
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Versjoner
            </OfficalPageButton>
          </div>

      </section>



      <section id="UtforskVerdenen">
        <div className="UtorskVerdenen">
          <h2 className="fourchoice-title">Utforsk verdenen</h2>

          <div className="fourchoice-blocks">

            <article className="choice">
              <div className="choice-image">Bilde av en koloss</div>
              <div className="choice-info">
                <div>
                  <h3>Kolossene</h3>
                  <p>Møt de enorme skapningene som vokter det forbudte landet.</p>
                </div>
                <button className="choice-arrow" type="button" aria-label="Les mer om kolossene">→</button>
              </div>
            </article>

            <article className="choice">
              <div className="choice-image">Bilde av sverdet</div>
              <div className="choice-info">
                <div>
                  <h3>Sverdet</h3>
                  <p>Oppdag våpenet som viser veien til din neste utfordring.</p>
                </div>
                <button className="choice-arrow" type="button" aria-label="Les mer om sverdet">→</button>
              </div>
            </article>

            <article className="choice">
              <div className="choice-image">Bilde av ruinene</div>
              <div className="choice-info">
                <div>
                  <h3>Verdenen</h3>
                  <p>Utforsk ruinene, slettene og hemmelighetene mellom dem.</p>
                </div>
                <button className="choice-arrow" type="button" aria-label="Les mer om verdenen">→</button>
              </div>
            </article>

            <article className="choice">
              <div className="choice-image">Bilde av reisen</div>
              <div className="choice-info">
                <div>
                  <h3>Reisen</h3>
                  <p>Følg Wander og Agro på ferden gjennom det ukjente.</p>
                </div>
                <button className="choice-arrow" type="button" aria-label="Les mer om reisen">→</button>
              </div>
            </article>

          </div>
          
        </div>
      </section>



      <section id="next-steps">
        <div id="docs">

          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>

            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
