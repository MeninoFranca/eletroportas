import './SectionPers.css'
import { BotaoOrcamento } from '../BotaoOrcamento'
import eletroportas from '../../assets/porta.jpg'

export const SectionPers = () => {
    return (
        <section className='sec-person2-section'>
            <div className='sec-person2-bg'>
                <img src={eletroportas}  loading="lazy"/>
            </div>
            <div className='sec-person2-container'>
                <div className='sec-person2-conteudo'>
                    <h3>Acessórios para portas de enrolar automáticas</h3>
                    <h2>Personalize de acordo com o seu projeto</h2>
                    <p>Confira uma vasta seleção de acessórios para portas de enrolar que aumentam a segurança, eficiência e personalização.</p>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
            </div>
        </section>
    )
}
