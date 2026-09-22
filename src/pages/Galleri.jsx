import Titlebackground from '../assets/bakgrunn-for-overskrifter.png'
import './Galleri.css'


function Galleri() {
    return (
        <>
            <section className="gallery-page">
                <div className="gallery-hero">
                    <img src={Titlebackground} alt="Titleback" />
                </div>
            
                <div>
                    <h1>Galleri</h1>
                    <p>Velkommen til galleriet!</p>
                </div>
            </section>

        </>
    );
}

export default Galleri
