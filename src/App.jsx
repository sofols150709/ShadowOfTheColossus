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

        <div>
          <h1>Shadow of the Colossus</h1>
          <p>
            Kanskje tekst her også ja
          </p>
        </div>

         <h2>Tekst til undertittel for knapper</h2>
          <div className="button-row">
            <OfficalPageButton
              className="official-page-button"
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Official Page
            </OfficalPageButton>

            <OfficalPageButton
              className="official-page-button"
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Official Page
            </OfficalPageButton>

            <OfficalPageButton
              className="official-page-button"
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Official Page
            </OfficalPageButton>
            
            <OfficalPageButton
              className="official-page-button"
              onClick={() => window.open('https://www.playstation.com/', '_blank')}
            >
              Official Page
            </OfficalPageButton>
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
