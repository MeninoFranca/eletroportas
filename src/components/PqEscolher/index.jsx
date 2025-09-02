import './PqEscolher.css'
import maiorQue from '../../assets/icon-maior-que.png'
import { BotaoOrcamento } from '../BotaoOrcamento'

export const PqEscolher = () => {
    return (
        <section className='pqEscolher-section'>
            <div className='pqEscolher-container'>
                <div>
                    <h2 className='pqEscolher-titulo'>Por que escolher a <span>E</span>letroportas?</h2>
                    <p className='pqEscolher-texto'>Ao optar em adquirir a sua porta de enrolar automática na Eletroportas você terá diversos benefícios, como segurança, praticidade, tecnologia, durabilidade e até mesmo, pra você que é serralheiro, a oportunidade de revender os nossos produtos. Asseguramos uma entrega pontual, suporte técnico especializado e soluções personalizadas para atender às necessidades do seu projeto.</p>
                    <div className='pq-mini-container'>
                        <div className='pqEscolher-pt1'>
                            <ul>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Excelência nos Produtos</p>
                                </li>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Tecnologia Avançada em Automação</p>
                                </li>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Segurança</p>
                                </li>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Pontualidade na Entrega</p>
                                </li>
                            </ul>

                        </div>
                        <div className='pqEscolher-pt2'>
                            <ul>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Suporte Técnico Qualificado</p>
                                </li>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Soluções Customizadas para Cada Cliente</p>
                                </li>
                                <li>
                                    <img src={maiorQue} />
                                    <p>Equipe especializada</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
                <div>
                    
                </div>
            </div>
        </section>
    )
}