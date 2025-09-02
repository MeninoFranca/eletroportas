import './SectionPreparados.css'
import checkLaranja from '../../assets/icon-check-laranja.png'

export const SectionPreparados = () => {
    return (
        <section className='section-preparados-section'>
            <div className='section-preparados-container'>
                <div>
                    <h2>Estamos preparados para atender a sua real necessidade</h2>
                    <p>Na Eletroportas, temos paixão por tudo que produzimos e fazemos. Estamos a todo momento investindo em tecnologia e inovação para fornecer as melhores soluções em portas de enrolar automáticas. </p>
                    <p>Além disso, nos orgulhamos de oferecer um serviço excepcional, com uma equipe profissional e altamente capacitada. Estamos prontos para atender as suas necessidades e superar as suas expectativas.</p>
                    <p>Na Eletroportas, a sua opinião reflete o nosso compromisso em proporcionar a melhor porta de enrolar automática.</p>
                </div>
                <div className='section-preparados-lista'>
                    <ul>
                        <li>
                            <img src={checkLaranja} />
                            <p>Compromisso Com A Qualidade</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Suporte Ao Cliente</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Variedade De Opções</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Expertise Técnica</p>
                        </li>
                        <li>
                            <img src={checkLaranja} />
                            <p>Sustentabilidade</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}