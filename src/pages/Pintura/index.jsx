import { MiniSection } from '../../components/MiniSection'
import './Pintura.css'
import pintura from '../../assets/pintura.jpg'
import { SectionPintura } from '../../components/SectionPintura'
import { SectionGrid } from '../../components/SectionGrid'

import prt1 from '../../assets/ptgrid1.jpg'
import prt2 from '../../assets/ptgrid2.jpg'
import prt3 from '../../assets/slide3.jpg'
import prt4 from '../../assets/ptgrid4.jpg'
import prt5 from '../../assets/ptgrid5.jpg'
import prt6 from '../../assets/slide5.jpg'

export const Pintura = () => {
    return (
        <section className='pintura-section'>
            <MiniSection imagem={pintura} titulo='Pintura Eletrostática' />
            <SectionPintura />
            <SectionGrid titulo='' texto='' imagem1={prt1} imagem2={prt3} imagem3={prt2} imagem4={prt4} imagem5={prt5} imagem6={prt6} />
        </section>
    )
}