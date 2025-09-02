import { ServicosCard } from '../ServicosCard'
import './SectionServicos.css'

import fabrica2 from '../../assets/icon-fabrica2.png'
import wrench2 from '../../assets/icon-wrench2.png'
import spray2 from '../../assets/icon-spray2.png'

export const SectionServicos = () => {
    return (
        <section className='sec-servicos-section'>
            <div className='sec-servicos-container'>
                <ServicosCard imagem={fabrica2} texto='Sua porta personalizada' />
                <ServicosCard imagem={wrench2} texto='Instalação com equipe qualificada' />
                <ServicosCard imagem={spray2} texto='Pintura resistente com a alta tecnologia do Reciprocador de Pintura' />
            </div>
        </section>
    )
}