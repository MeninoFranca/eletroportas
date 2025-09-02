import './SectionModelos.css'

import transvision from '../../assets/transvision.jpeg'
import meiaCanaLisa from '../../assets/meia-cana-lisa.jpg'
import oblongo from '../../assets/oblongo.jpeg'

export const SectionModelos = () => {
    return (
        <section className='section-modelos-section'>
            <div className='section-modelos-container'>
                <h3>Vamos te ajudar com o seu Projeto!</h3>
                <h2>Qual modelo devo escolher?</h2>
                <div className='section-modelos-modelos'>
                    <div>
                        <h4>Porta de Enrolar Automática Lâmina Meia Cana Lisa </h4>
                        <p>A <b>porta de enrolar com lâmina meia cana lisa</b> é uma escolha popular em
                            ambientes comerciais e residenciais devido à sua estética minimalista e funcionalidade
                            robusta. As lâminas meia cana lisa são caracterizadas por terem uma superfície lisa e um
                            formato curvado semelhante a uma meia lua, que se encaixa perfeitamente uma na outra
                            quando a porta é fechada. Esse design proporciona um acabamento muito uniforme e
                            discreto. </p>
                        <img src={meiaCanaLisa} loading="lazy" />
                    </div>
                    <div>
                        <h4>Porta de Enrolar Automática Lâmina Oblongo</h4>
                        <p>A <b>lâmina oblongo</b> é uma variante moderna e eficiente das tradicionais portas de enrolar, oferecendo funcionalidade e segurança para estabelecimentos comerciais e industriais, bem como para garagens residenciais. As lâminas oblongo são caracterizadas por seu formato alongado e perfurado, que permite uma ventilação adequada e uma visibilidade parcial através da porta, sem comprometer a segurança.</p>
                        <img src={oblongo} />
                    </div>
                    <div>
                        <h4>Porta de Enrolar Automática Lâmina Transvision</h4>
                        <p>A <b>porta de enrolar automática com lâmina transvision</b> é uma opção altamente sofisticada e funcional para estabelecimentos que necessitam de segurança sem sacrificar a estética e a visibilidade. As lâminas transvision são fabricadas com perfurações uniformes e pequenas que criam um efeito de transparência, permitindo visão para o interior ou exterior do espaço, enquanto mantém a robustez necessária para a segurança.</p>
                        <img src={transvision} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}