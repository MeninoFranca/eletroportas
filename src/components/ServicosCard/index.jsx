import './ServicosCard.css'
import PropTypes from 'prop-types'

export const ServicosCard = (props) => {
    return (
        <div className='servicos-card-container'>
            <img src={props.imagem} loading="lazy" />
            <h4>{props.texto}</h4>
        </div>
    )
}

ServicosCard.propTypes = {
    imagem: PropTypes.string,
    texto: PropTypes.string
}