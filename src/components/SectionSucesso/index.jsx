import { Etapas } from '../Etapas'
import './SectionSucesso.css'
import foto1 from '../../assets/entrevista.jpg'
import foto2 from '../../assets/section_especialistas.jpg'
import foto3 from '../../assets/industria2.jpg'
import foto4 from '../../assets/instalacao.jpg'

export const SectionSucesso = () => {
    return (
        <section className='section-sucesso-section'>
            <div className='section-sucesso-container'>
                <h2>Confira o passo a passo para você adquirir a sua porta de enrolar automática</h2>
                <p>A Eletroportas te auxilia desde o primeiro contato até a aquisição e fabricação da sua  porta de enrolar automática.</p>
                <div>
                    <Etapas numero={1} imagem={foto1} titulo='Contato e Consultoria' texto='Nossa Equipe é especializada e preparada para te atender conforme as suas necessidades e objetivos. Te ajudará na escolha do modelo e na cor.​​' />
                    <Etapas numero={2} imagem={foto2} titulo='Personalização e orçamento' texto='Prezamos por um orçamento personalizado, detalhado e transparente.' />
                    <Etapas numero={3} imagem={foto3} titulo='Fabricação e entrega' texto='Somos a Maior Fábrica de Portas de Enrolar Automática do Nordeste e prezamos por materiais de alta qualidade e tecnologia avançada.' />
                    <Etapas numero={4} imagem={foto4} titulo='Instalação profissional' texto='Nossa Equipe especializada se desloca até o local combinado para a instalação da Porta.' />
                    <Etapas numero={5} imagem='https://img.freepik.com/fotos-premium/pessoas-usando-celular-com-diversao-e-feliz-na-cidade_35934-1.jpg' titulo='Realização do pós-venda' texto='Após a instalação, queremos saber o quanto o nosso cliente está satisfeito com o nosso produto e serviço.' />
                </div>
            </div>
        </section>
    )
}