import './SectionEspecialista2.css'
import telefone from '../../assets/icon-telefone2.png'

export const SectionEspecialista2 = () => {
    return (
        <section className='section-especialista2-section'>
            <div className='section-especialista2-container'>
                <img src={telefone} />
                <h3>Fale com um de nossos especialistas</h3>
                <p>(71) 99610-2055 - Salvador</p>
                <p>(77) 99862-2777 - Barreiras</p>
            </div>
        </section>
    )
}