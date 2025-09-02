import './HeaderPt3.css'
import medalha from '../../assets/icon-medalha.png'
import instagram from '../../assets/icon-instagram.png'
import youtube from '../../assets/icon-youtube.png'
import facebook from '../../assets/icon-facebook.png'

export const HeaderPt3 = () => {
    return (
        <section className='headerPt3-section'>
            <div className='headerPt3-container'>
                <div>
                    <img src={medalha} alt='Ícone de uma medalha'/>
                    <p>Eletroportas - Maior fábrica de portas de enrolar do Nordeste</p>
                </div>
                <div>
                    <a href='https://www.instagram.com/eletroportas?igsh=MTJ4Zjl4cXhpcHQ1cg==' target='_blank'>
                        <img src={instagram} alt='Logo do instagram' />
                    </a>
                    <a href='https://www.youtube.com/@eletroportas-portasdeenrol7842/featured' target='_blank'>
                        <img src={youtube} alt='Logo do youtube' />
                    </a>
                    <a href='https://www.facebook.com/eletroportasofc/' target='_blank'>
                        <img src={facebook} alt='Logo do facebook' />
                    </a>
                </div>
            </div>
        </section>
    )
}