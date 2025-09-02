import { Link } from 'react-router-dom'
import './BotaoEspecialista.css'

import aviao from '../../assets/icon-aviao.png'

export const BotaoEspecialista = () => {
    const handleEventoGTM = () => {
        const dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'especialista_button_click'
        })
        console.log(dataLayer)
    }
    return (
        <div>
            <Link className='link' to='/atendimento'>
                <button 
                onClick={handleEventoGTM}
                className='btn-especialista'>
                    <img src={aviao}  loading="lazy" />
                    <p>Falar com especialista</p>
                </button>
            </Link>
        </div>
    )
}