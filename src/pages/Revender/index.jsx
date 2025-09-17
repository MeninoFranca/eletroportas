import './Revender.css'
// import { SectionServicos } from '../../components/SectionServicos'
import { SectionKit } from '../../components/SectionKit'
import { RevenderdorBeneficios } from '../../components/RevendedorBeneficios'
import { SectionModelos } from '../../components/SectionModelos'
import { ModalVideo }from '../../components/ModalVideo'
import { SectionSucesso } from '../../components/SectionSucesso'
import { SectionGrid } from '../../components/SectionGrid'

import prt1 from '../../assets/ptgrid1.jpg'
import prt2 from '../../assets/ptgrid2.jpg'
import prt3 from '../../assets/slide3.jpg'
import prt4 from '../../assets/ptgrid4.jpg'
import prt5 from '../../assets/ptgrid5.jpg'
import prt6 from '../../assets/slide5.jpg'
import eletroportas from '../../assets/eletro-portas.jpg'

import { SectionOrcamento } from '../../components/SectionOrcamento'
import { SectionDuvidas } from '../../components/SectionDuvidas'
import { SectionPersonalizavel2 } from '../../components/SectionPersonalizavel2'

export const Revender = () => {
    return (
        <>
            <SectionPersonalizavel2 />
            {/* <SectionServicos /> */}
            <SectionKit />
            <RevenderdorBeneficios />
            <SectionModelos />
            <div className='outradivisoria'></div>
            <SectionSucesso />
            <SectionGrid titulo='Eletroportas fazendo parte dos seus Sonhos!' texto='Descubra porque somos a Maior Fábrica de Portas de Enrolar do Nordeste' imagem1={prt6} imagem2={prt3} imagem3={prt5} imagem4={prt1} />
            <SectionOrcamento />
            <SectionDuvidas />
        </>
    )
};