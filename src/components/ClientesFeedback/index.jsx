import './ClientesFeedback.css'
import { BotaoOrcamento } from '../BotaoOrcamento'
import aspas from '../../assets/icon-aspas.png'

export const ClientesFeedback = () => {
    return (
        <section className='clifeed-section'>
            <div className='clientes-feedback-container'>
                <div className='clientes-feedback-parte1'>
                    <h2>Confira a opinião dos nossos clientes</h2>
                    <p>
                        <span>Prezamos em proporcionar para cada cliente uma parceria única com o intuito de valorizar sempre a qualidade, a segurança e um atendimento excepcional.</span>
                        Com uma equipe qualificada e produtos de qualidade sustentáveis, garantimos a satisfação e a tranquilidade dos nossos clientes.
Veja por que somos a melhor escolha para a atender a real necessidade do seu projeto.
                    </p>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
                <div className='clientes-feedback-parte2'>
                    <div className='div-aspas'>
                        <img src={aspas} />
                    </div>
                    <div className='cliente-comentario'>
                        <p>Material de qualidade, atendimento excelente, preços atrativos!  Super índico a Eletroportas!</p>
                        <div className='cliente-perfil'>
                            <img src='https://lh3.googleusercontent.com/a-/ALV-UjXaKC-IXV6ckdCSds1wj_PjWB-whr4BIs8THuJUB44jYZr4iRIu=w75-h75-p-rp-mo-br100'  loading="lazy"/>
                            <div>
                                <h5>Ana Paula Alves</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}