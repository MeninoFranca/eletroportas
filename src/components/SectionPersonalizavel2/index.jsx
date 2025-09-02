import './SectionPersonalizavel2.css'
import { BotaoOrcamento } from '../BotaoOrcamento'
import porta from '../../assets/porta2.jpg'

export const SectionPersonalizavel2 = () => {
    return (
        <section className='sec-person-section'>
            <div className='sec-person-bg'>
                <img src={porta} />
            </div>
            <div className='sec-person-container'>
                <div className='sec-person-conteudo'>
                    <h3>Adquira já o seu kit completo de porta de enrolar automática</h3>
                    <h2>Torne-se um parceiro <span>E</span>letroportas</h2>
                    <p>Junte-se à família Eletroportas e proporcione aos seus clientes as melhores opções em portas de enrolar automáticas.</p>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
            </div>
        </section>
    )
}