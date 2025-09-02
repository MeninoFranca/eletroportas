import './Sobre.css'
import { MiniSection } from '../../components/MiniSection'
import industria from '../../assets/industria.jpg'
import { SectionSobre } from '../../components/SectionSobre'
import { PqEscolher } from '../../components/PqEscolher'
import { SectionPreparados } from '../../components/SectionPreparados'

export const Sobre = () => {
    return (
        <section>
            <MiniSection titulo='Sobre Nós' path='/sobre' imagem={industria} />
            <div className='pagina-sobre-divisoria'></div>
            <SectionSobre />
            <PqEscolher />
            <SectionPreparados />
        </section>
    )
}