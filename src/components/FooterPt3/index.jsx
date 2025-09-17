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
                <a
                    href='https://www.facebook.com/eletroportasofc/'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Página da Eletroportas no Facebook'
                >
                    <img src={facebook} alt='' />
                </a>
                <a
                    href='https://www.youtube.com/@eletroportas-portasdeenrol7842/featured'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Canal da Eletroportas no YouTube'
                >
                    <img src={youtube} alt='' />
                </a>
                <a
                    href='https://www.instagram.com/eletroportas?igsh=MTJ4Zjl4cXhpcHQ1cg=='
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Perfil da Eletroportas no Instagram'
                >
                    <img src={instagram} alt='' />
                </a>
            </div>
        </div>
    )
}
