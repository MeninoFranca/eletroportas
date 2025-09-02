import './SectionAutomatizadores.css'
import automatizador from '../../assets/automatizador.png'

export const SectionAutomatizadores = () => {
    return (
        <section className='section-automatizadores-section'>
            <div className='section-automatizadores-container'>
                <div className='section-automatizadores-imagem'>
                    <img src={automatizador} />
                </div>
                <div className='section-automatizadores-info'>
                    <h3>Conheça nossos automatizadores</h3>
                    <h2>Soluções Inovadoras para Portas de Enrolar Automática</h2>
                    <p>O Motor é uma peça chave para garantir uma operação eficiente e segura de nossas portas de enrolar automáticas. Equipados com tecnologia de última geração e construção sólida, garantido desempenho e durabilidade.</p>
                </div>
            </div>
        </section>
    )
}