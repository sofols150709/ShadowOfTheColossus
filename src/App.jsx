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
