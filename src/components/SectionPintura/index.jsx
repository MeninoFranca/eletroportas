import './SectionPintura.css'
import { BotaoOrcamento } from '../BotaoOrcamento'
import EletroStaticaBeneficios from '../SectionEletroStaticaBeneficios'
import pintor from '../../assets/pintor2.jpg'

export const SectionPintura = () => {
    return (
        <>
        <section className='section-pintura-section'>
            <div className='section-pintura-container'>
                <div className='section-pintura-parte1'>
                    <h3>Sobre a pintura eletrostática</h3>
                    <h2>Pintura Eletrostática de Excelência com Reciprocador de Pintura</h2>
                    <p>Na Eletroportas, proporcionamos um serviço de pintura eletrostática de alta qualidade para as portas  de enrolar automáticas.</p>
                    <p>Utilizando técnicas avançadas e materiais de primeira linha, garantimos uma pintura durável e resistente, que não só protege, mas também traz um acabamento estético superior.</p>
                    <BotaoOrcamento label={'Orçamento'}/>
                </div>
                <div className='section-pintura-parte2'>
                    <img src={pintor}  loading="lazy"/>
                </div>
            </div>
        </section>

        <EletroStaticaBeneficios/>
        </>
    )
}