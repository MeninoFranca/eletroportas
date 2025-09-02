import { SectionPersonalizavel } from '../../components/SectionPersonalizavel'
import './PortaInstalada.css'

import porta2 from '../../assets/porta2.jpg'
import { SectionServicos } from '../../components/SectionServicos'
// import { ModalVideo2 } from '../../components/ModalVideo2'
import { SectionBeneficios } from '../../components/SectionBeneficios'
import { SectionModelos } from '../../components/SectionModelos'
import { SectionSucesso } from '../../components/SectionSucesso'
import { SectionGrid2 } from '../../components/SectionGrid2'

import prt1 from '../../assets/ptgrid1.jpg'
import prt2 from '../../assets/ptgrid2.jpg'
import prt3 from '../../assets/ptgrid3.jpeg'
import prt4 from '../../assets/ptgrid4.jpg'
import prt5 from '../../assets/ptgrid5.jpg'
import prt6 from '../../assets/ptgrid6.jpg'
import { SectionOrcamento } from '../../components/SectionOrcamento'
import { SectionDuvidas } from '../../components/SectionDuvidas'

// import fotoModal from '../../assets/porta-rosa.png'
// import videoModal from '../../assets/IMG_'

export const PortaInstalada = () => {
    return (
        <section className='portainstalada-section'>
            <SectionPersonalizavel imagem={porta2} subtitulo='Porta de enrolar automática' titulo='Acione a sua porta com um clique' texto='Direto da fábrica e instalação inclusa' />
            <SectionServicos />
            {/* <ModalVideo2 imagem={fotoModal} video={videoModal} texto='Conheça agora a Maior Fábrica de Portas de Enrolar do Nordeste Eletroportas' /> */}
            <SectionBeneficios />
            <SectionModelos />
            <SectionSucesso />
            <SectionGrid2 texto='Descubra porque somos a escolhida para realizar o sonho de quem deseja ter uma porta de enrolar automática' imagem1={prt1} imagem2={prt2} imagem3={prt3} imagem4={prt4} imagem5={prt5} imagem6={prt6} />
            <SectionOrcamento />
            <SectionDuvidas />
        </section>
    )
}