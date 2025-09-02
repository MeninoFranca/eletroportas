import './SectionIcons2.css'
import wrench from '../../assets/icon-wrench.png'
import garantia from '../../assets/icon-garantia.png'
import durabilidade from '../../assets/icon-durabilidade.png'
import conveniencia from '../../assets/icon-conveniencia.png'

export const SectionIcons2 = () => {
    return (
        <section className='section-icons2-section'>
            <div className='section-icons2-container'>
                <div>
                    <img src={wrench} />
                    <h3>Segurança</h3>
                    <p> Nosso compromisso é com a proteção do seu espaço, por isso oferecemos uma variedade de acessórios que aprimoram a segurança.</p>
                </div>
                <div>
                    <img src={garantia} />
                    <h3>Praticidade</h3>
                    <p>Aproveite nossos sistemas que simplificam o uso da sua Porta de Enrolar.</p>
                </div>
                <div>
                    <img src={durabilidade} />
                    <h3>Durabilidade</h3>
                    <p>Segue os critérios de manutenção e limpeza indicados pela a Eletroportas;</p>
                </div>
                <div>
                    <img src={conveniencia} />
                    <h3>Conveniência</h3>
                    <p>A abertura e o fechamento automático permitem que você entre e saia, economizando tempo e esforço.</p>
                </div>
            </div>
        </section>
    )
}