import { BotaoOrcamento } from '../BotaoOrcamento'
import './SectionBeneficios.css'
import porta3 from '../../assets/porta3.jpg'
import checklaranja from '../../assets/icon-check-laranja.png'

export const SectionBeneficios = () => {
    return (
        <section className='section-beneficios-section'>
            <div className='section-beneficios-bg'>
                <img src={porta3} />
            </div>
            <div className='section-beneficios-container'>
                <h2>Benefícios das portas de enrolar automáticas</h2>
                <div className='container-listas'>
                    <div>
                        <ul>
                            <li>
                                <img src={checklaranja} />
                                <p>Economia de Espaço: Como elas se enrolam verticalmente, as portas de enrolar automáticas economizam espaço significativo, que pode ser utilizado de outras formas, especialmente útil em ambientes onde o espaço é limitado.</p>
                            </li>
                            <li>
                                <img src={checklaranja} />
                                <p>Segurança Aprimorada: As portas são fabricadas com materiais robustos como aço, oferecendo uma barreira física forte contra invasões ou tentativas de arrombamento.</p>
                            </li>
                            <li>
                                <img src={checklaranja} />
                                <p>Conveniência e Facilidade de Uso: Com o sistema de acionamento automático, abrir e fechar a porta torna-se muito mais conveniente, podendo ser operada por um controle remoto.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <img src={checklaranja} />
                                <p>Durabilidade e Baixa Manutenção: As portas de enrolar automática requerem manutenção mínima, resistindo bem a condições climáticas adversas.</p>
                            </li>
                            <li>
                                <img src={checklaranja} />
                                <p>Estética e Personalização: As portas de enrolar automáticas podem ser personalizadas de acordo com o ambiente do seu negócio, residência e/ou indústria. Existem 3 tipos de lâminas e diversas cores disponíveis pra você escolher na hora de adquirir a sua porta de enrolar automática.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <BotaoOrcamento label={'Orçamento'} />
            </div>
        </section>
    )
}