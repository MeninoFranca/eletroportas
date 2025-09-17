import { Link } from 'react-router-dom'
import './BotaoEspecialista.css'

import aviao from '../../assets/icon-aviao.png'

export const BotaoEspecialista = () => {
    const handleEventoGTM = () => {
        const dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'especialista_button_click'
        });
        console.log(dataLayer);
    };

    return (
        <Link 
            to='/atendimento' 
            className='btn-especialista link'
            onClick={handleEventoGTM}
        >
            <img src={aviao} loading="lazy" alt="Ícone avião" />
            <p>Falar com especialista</p>
        </Link>
    );
};
