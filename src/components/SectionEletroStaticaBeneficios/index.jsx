import './EletroStaticaBeneficios.css'
import iconChecked from '../../assets/icon-check.png'
import { ModalVideo } from '../ModalVideo/index'
import portaRosa from '../../assets/potarosa.mp4'
import porta from '../../assets/eletro-portas.jpg'
import { BotaoOrcamento } from '../BotaoOrcamento/index'
const EletroStaticaBeneficios = () => {

    return (
        <>
            <section className='container-beneficios'>
                <div className='content-beneficios'>
                    <div className='content-texto'>
                        <h3>
                            Benefícios Da Pintura Eletrostática
                        </h3>
                        <p>
                            Descubra as vantagens exclusivas de escolher a pintura eletrostática para as suas
                            portas de enrolar automáticas. Com a nossa pintura, você desfrutará de benefícios
                            estéticos e funcionais incomparáveis.                        </p>
                    </div>
                    <div className='content-select'>
                        <ul>
                            <li>
                                <img src={iconChecked} alt="" />
                                Durabilidade Garantida
                            </li>
                            <li>
                                <img src={iconChecked} alt="" />
                                Acabamento Impecável
                            </li>
                            <li>
                                <img src={iconChecked} alt="" />
                                Variedade De Cores
                            </li>
                            <li>
                                <img src={iconChecked} alt="" />
                                Proteção Anticorrosiva
                            </li>

                        </ul>
                        < BotaoOrcamento label={"Orçamento"} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default EletroStaticaBeneficios;