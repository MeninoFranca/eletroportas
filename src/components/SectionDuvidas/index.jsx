import { useState } from 'react'
import './SectionDuvidas.css'
import interrogacao from '../../assets/icon-interrogacao.png'
import interrogacaoLaranja from '../../assets/icon-interrogacao-laranja.png'
import industria from '../../assets/industria.jpg'
// import iconFabrica from '../../assets/icon-fabrica.png'
import { MapasTabs } from '../MapasTabs'

export const SectionDuvidas = () => {
    const informacoes = [
        {
            titulo: 'O que é uma pintura eletrostática?',
            texto: 'Seja a pó ou líquida, quando aplicada em superfícies de aço ou mesmo alumínios,  também promove resultados estéticos muito bons, esse processo de pintura protege o produto contra a corrosão ao longo do tempo. É um recurso empregado também pelas montadoras na pintura de veículos e pela indústria petroquímica.'
        },
        {
            titulo: 'O que significa "Meia Cana"?',
            texto: 'Em forma de semicírculo, possui bordas curvas. Isso significa que as lâminas se travam umas nas outras, resultando em uma porta de alta resistência. Disponível nos modelos Liso, Transvision e Oblongo.'
        },
        {
            titulo: 'O que significa "Transvision"?',
            texto: 'A expressão sugere transparência, permite visibilidade da parte interna do estabelecimento, sem perder as características de segurança, também ressalta o design e o layout do negócio.'
        },
        {
            titulo: 'O que significa "Oblongo"?',
            texto: 'Alongado cuja largura é menor que o comprimento, ou seja, que possui forma arredondada ou em esfera, sendo mais comprido do que largo.'
        }
    ]

    const [informacaoClicada, setInformacaoClicada] = useState(0)

    return (
        <section className='section-duvidas-section'>
            <div className='section-duvidas-container'>
                <div className='section-duvidas-parte1'>
                    <h2>Informações relevantes</h2>
                    <p>Algumas expressões comuns deste segmento podem ser desconhecidas do público que busca entender nossas descrições, para tanto selecionamos algumas que podem ajudá-los.</p>

                    <div className='section-duvidas-informacoes'>
                        {
                            informacoes.map((item, indice) => (
                                <div key={indice} className='section-duvidas-informacoes-container'>
                                    <div className='info-titulo' onClick={() => setInformacaoClicada(indice)}>
                                        <img src={informacaoClicada === indice ? interrogacao : interrogacaoLaranja} />
                                        <p>{item.titulo}</p>
                                    </div>
                                    <div className={`info-info ${informacaoClicada === indice ? 'open' : ''}`}>
                                        {item.texto}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='section-duvidas-parte2'>
                    <div className='parte2-foto'>
                        <div className='parte2-foto-img'>
                            <img src={industria} />
                        </div>
                    </div>
                    {/* <div className='div-tabs'>
                        <MapasTabs />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
