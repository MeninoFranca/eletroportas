import './SectionContato.css'
import placeholder from '../../assets/icon-placeholder.png'

export const SectionContato = () => {
    return (
        <section className='dual-sec2'>
            <div className='dual-container2'>
                <div className='parte-azul2'>
                    <h2>Entre em contato conosco</h2>
                    <p>Estamos aqui prontos para ajudar você! Não hesite em nos contatar e permita-nos esclarecer todas as suas dúvidas. A sua satisfação é a nossa maior recompensa!</p>
                    <div>
                        <div>
                            <img src={placeholder} />
                            <h3>Confira nossos Endereços</h3>
                            <p>Rua: Tancredo Neves da Ceasa, 100, Jardim das Margaridas - Salvador/BA</p>
                            <p>Av. Presidente Dutra, 2457, Centro - Feira de Santana/BA</p>
                            <p>Av. Antônio Carlos Magalhães, 2524, Serra do Mimo - Barreiras/BA</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}