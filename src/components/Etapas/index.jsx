import './Etapas.css'
import PropTypes from 'prop-types'

export const Etapas = (props) => {
    return (
        <section className='etapas-container'>
            <div>
                <h4>{props.numero}</h4>
                <img src={props.imagem} />
            </div>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </section>
    )
}

Etapas.propTypes = {
    numero: PropTypes.number,
    imagem: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}