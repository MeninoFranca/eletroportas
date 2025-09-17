import './SectionKit.css'
import interrogacao from '../../assets/icon-interrogacao.png'
import interrogacaoLaranja from '../../assets/icon-interrogacao-laranja.png'
import kit from '../../assets/kit.png'
import { useState } from 'react'
import { BotaoOrcamento } from '../BotaoOrcamento/index'

export const SectionKit = () => {
    const [clicadoKit, setClicadoKit] = useState(0)

    const listaKit = [
        {
            titulo: 'Componentes que podem conter no seu kit portas:',
            itens: [
                '✔  Automatizador',
                '✔  Testeira',
                '✔  Lâminas',
                '✔  Guia Lateral',
                '✔  Soleira',
                '✔  Borracha da Soleira',
                '✔  Central de comando',
                '✔  Eixo',
                '✔  Trava Lâminas',
                '✔  Fita PVC auto lubrificante',

            ]
        },
        {
            titulo: 'Componentes opcionais que podem conter no seu kit portas:',
            itens: [
                'Sim, estamos prontos para atender toda demanda necessária, dentre os itens estão:',
                '✔   Soleira com reforço',
                '✔   Anti Esmagamento',
                '✔   Sensor Infravermelho',
                '✔   Caixa inox para botoeira',
                '✔   Controle Remoto'
            ]
        }
    ]

    return (
        <>
            <section className='section-kit-section'>
                <div className='dual-section'>
                    <div className='img-kit'>
                        <img src={kit} alt="kit portas" />
                        <div className='botao-kit'>
                            <BotaoOrcamento label="Orçamento" />
                        </div>
                    </div>

                    <div>
                        {listaKit.map((item, indice) => (
                            <div key={indice}>
                                <div className='item1' onClick={() => setClicadoKit(indice)}>
                                    <img src={indice === clicadoKit ? interrogacao : interrogacaoLaranja} />
                                    <p>{item.titulo}</p>
                                </div>
                                <div className={`item2 ${indice === clicadoKit ? 'open' : ''}`}>
                                    <ul>
                                        {item.itens.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
