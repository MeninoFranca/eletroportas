import './SectionOrcamento.css'
import { BotaoOrcamento } from '../BotaoOrcamento'

export const SectionOrcamento = () => {
    return (
        <section className='section-orcamento-section'>
            <div className='section-orcamento-container'>
                <h2>Faça já o seu Orçamento</h2>
                <p>Estamos preparados para deixar o seu ambiente mais seguro, moderno, eficiente e mais bonito. Nossos modelos são fabricados para atender comércios, indústrias e residências</p>
                <BotaoOrcamento label={'Orçamento'}/>
            </div>
        </section>
    )
}