import './SectionGrid.css'
import PropTypes from 'prop-types'

export const SectionGrid = (props) => {
    return (
        <section className='section-experiencia-section'>
            <div className='section-experiencia-container'>
                <h2>{props.titulo}</h2>
                <p>{props.texto}</p>
                <div className='section-experiencia-fotos'>
                    <div>
                        <img src={props.imagem1} />
                    </div>
                    <div>
                        <img src={props.imagem2} />
                    </div>
                    <div>
                        <img src={props.imagem3} />
                    </div>
                    <div>
                        <img src={props.imagem4} />
                    </div>
                    <div>
                        <img src={props.imagem5} />
                    </div>
                    <div>
                        <img src={props.imagem6} />
                    </div>
                </div>
            </div>
        </section>
    )
}

SectionGrid.propTypes = {
    imagem1: PropTypes.string,
    imagem2: PropTypes.string,
    imagem3: PropTypes.string,
    imagem4: PropTypes.string,
    imagem5: PropTypes.string,
    imagem6: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}