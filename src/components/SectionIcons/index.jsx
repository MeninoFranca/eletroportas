import './SectionIcons.css'

import fabrica from '../../assets/icon-fabrica.png'
import wrench from '../../assets/icon-wrench.png'
import { IconsCards } from '../IconsCards'
import { IconsCards2 } from '../IconsCards2'

export const SectionIcons = () => {
    return (
        <section className='sec-icon-section'>
            <div className='sec-icon-container'>
                <div>
                    <IconsCards imagem={fabrica} titulo='Fabricamos Portas de Enrolar Automáticas' texto='Somos especialistas em portas de enrolar automáticas, acessórios em geral para a sua porta e kits completos para serralheiros, fornecendo produtos duráveis e seguros tanto para residências, comércios e indústrias.' />
                </div>
                <div>
                    <IconsCards2 />
                </div>
                <div>
                    <IconsCards imagem={wrench} titulo='Equipe Profissional qualificada para Instalação' texto='Nossa equipe é formada por profissionais especializados na instalação de portas de enrolar automáticas, garantindo um serviço de alta qualidade e precisão para atender a real necessidade dos nossos clientes.' />
                </div>
            </div>
        </section>
    )
}