import './IconsCards.css'
import PropTypes from 'prop-types'

export const IconsCards = (props) => {
    return (
        <div className='icon-card-container'>
            <img src={props.imagem} loading="lazy"/>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>
    )
}

IconsCards.propTypes = {
    imagem: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}