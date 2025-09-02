import './RevendedorBeneficios.css'
import { BotaoOrcamento } from '../BotaoOrcamento'
import checkLaranja from '../../assets/icon-check-laranja.png'

export const RevenderdorBeneficios = () => {
    return (
        <section className='section-revendedor-section'>
            <div className='section-revendedor-container'>
                <div>
                    <h2>Benefícios de ser um revendedor Eletroportas</h2>
                    <p>Ao tornar-se um revendedor dos nossos produtos, você desfrutará de uma gama de vantagens que fomentarão o desenvolvimento de sua empresa.</p>
                    <p>Disponibilizamos portas automáticas de enrolar fabricadas com materiais de alta qualidade e tecnologia de ponta, assegurando resistência e a satisfação dos seus clientes.</p>
                    <p>Aproveite nosso atendimento técnico qualificado e tenha mais lucratividade nas suas vendas.</p>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
                <div>
                    <ul>
                        <li>
                            <img src={checkLaranja} />
                            <p>Produtos de Alta Qualidade</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Assistência Técnica</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Lucratividade Favorável</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Customização e Diversidade</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Reputação da Marca</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}