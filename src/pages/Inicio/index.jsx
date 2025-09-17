import { VideoSection } from '../../components/VideoSection'
import { SectionEspecialista } from '../../components/SectionEspecialista'
import { SectionProdutos } from '../../components/SectionProdutos'
import './Inicio.css'
import { SecRealizarSonhos } from '../../components/SecRealizarSonhos'
import { SectionIcons } from '../../components/SectionIcons'
import { DualSection } from '../../components/DualSection'
import { ClientesFeedback } from '../../components/ClientesFeedback'
import Carrossel from '../../components/Carrossel'

export const Inicio = () => {
    return (
        <section className='inicio-section'>
            <VideoSection />
            <Carrossel />
            <SectionEspecialista /> 
            <SectionProdutos />
            <SecRealizarSonhos />
            <div className='sep'></div>
            <SectionIcons />
            <DualSection />
            <ClientesFeedback />
        </section>
    )
}