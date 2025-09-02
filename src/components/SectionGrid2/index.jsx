import './SectionGrid2.css'

import PropTypes from 'prop-types'

export const SectionGrid2 = (props) => {
    return (
        <section className='section-experiencia-section'>
            <div className='section-experiencia-container'>
                <h2>Tenha a experiência <span>E</span>letroportas na sua vida</h2>
                <p>{props.texto}</p>
                <div className='section-experiencia-fotos'>
                    <div>
                        <img src={props.imagem1} loading="lazy" />
                    </div>
                    <div>
                        <img src={props.imagem2} loading="lazy" />
                    </div>
                    <div>
                        <img src={props.imagem3} loading="lazy" />
                    </div>
                    <div>
                        <img src={props.imagem4} loading="lazy" />
                    </div>
                    <div>
                        <img src={props.imagem5} loading="lazy" />
                    </div>
                    <div>
                        <img src={props.imagem6} loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

SectionGrid2.propTypes = {
    imagem1: PropTypes.string,
    imagem2: PropTypes.string,
    imagem3: PropTypes.string,
    imagem4: PropTypes.string,
    imagem5: PropTypes.string,
    imagem6: PropTypes.string,
    texto: PropTypes.string
}