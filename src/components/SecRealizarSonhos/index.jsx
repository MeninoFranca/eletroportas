import { Checked } from '../Checked'
import './SecRealizarSonhos.css'

import trabalhador from '../../assets/trabalhador.jpg'
import lampada from '../../assets/icon-lampada.png'

export const SecRealizarSonhos = () => {
    return (
        <section className='main-sec-container'>
            <div className='sec-container'>
                <div className='sub-container1'>
                    <div className='sub-container1_frases'>
                        <h3>Realizar o seu Sonho é o que nos move <span>a proporcionar cada vez mais qualidade e segurança para você</span></h3>
                        <p>A Eletroportas tem como principal produto as portas de enrolar automáticas, que atendem a indústrias, comércios, supermercados, centros comerciais, shoppings e residências. Trabalhamos com todos os acessórios que compõem a fabricação e
                        fazemos a revenda do kit completo para a sua porta de enrolar automática.</p>
                    </div>
                    <div>
                        <Checked texto='Qualidade Superior' />
                        <Checked texto='Tecnologia de Ponta' />
                        <Checked texto='Pontualidade' />
                        <Checked texto='Soluções personalizadas' />
                        <Checked texto='Suporte' />
                    </div>
                </div>
                <div className='sub-container2'>
                    <img src={trabalhador} loading="lazy" />
                    <div>
                        <img src={lampada} loading="lazy" />
                        <p>Você é a nossa maior prioridade!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}