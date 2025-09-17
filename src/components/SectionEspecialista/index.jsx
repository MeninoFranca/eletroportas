import './SectionEspecialista.css'

import grinder from '../../assets/icon-grinder.png'
import { BotaoEspecialista } from '../BotaoEspecialista'

export const SectionEspecialista = () => {
    return (
        <section>
            <div className='container'>
                <div className='sub-container'>
                    <div className='salvando'>
                        <img src={grinder} alt="grinder"/>
                        <div>
                            <h3>Para Serralheiros de Excelência</h3>
                            <p>Assegure a Parceria que Vai Impulsionar o Seu Negócio</p>
                        </div>
                    </div>
                    <BotaoEspecialista />
                </div>
            </div>
        </section>
    )
}

