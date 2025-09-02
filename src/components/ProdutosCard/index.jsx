import './ProdutosCard.css'
import PropTypes from 'prop-types'

export const ProdutosCard = (props) => {
    return (
        <div className='card'>
            <div className='supradiv'>
                <img src={props.icone} />
            </div>
            <img src={props.imagem} />
            <h6>{props.titulo}</h6>
            <p>{props.texto}</p>
        </div>
    )
}

ProdutosCard.propTypes = {
    icone: PropTypes.string,
    imagem: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}