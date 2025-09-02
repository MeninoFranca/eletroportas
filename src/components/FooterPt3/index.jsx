import './FooterPt3.css'
import instagram from '../../assets/icon-instagram.png'
import youtube from '../../assets/icon-youtube.png'
import facebook from '../../assets/icon-facebook.png'

export const FooterPt3 = () => {
    return (
        <div className='footer-parte3'>
            <div>
                <p>Desenvolvido por Agência In Up</p>
                <p>Eletroportas © 2024 - Todos os Direitos Resevados</p>
            </div>
            <div className='rodape-redes'>
                <a href='https://www.facebook.com/eletroportasofc/' target='_blank'>
                    <img src={facebook} />
                </a>
                <a target='_blank' href='https://www.youtube.com/@eletroportas-portasdeenrol7842/featured'>
                    <img src={youtube} />
                </a>
                <a target='_blank' href='https://www.instagram.com/eletroportas?igsh=MTJ4Zjl4cXhpcHQ1cg=='>
                    <img src={instagram} />
                </a>
            </div>
        </div>
    )
}