import { BotaoOrcamento } from '../BotaoOrcamento'
import './AcessorioCard.css'
import PropTypes from 'prop-types'

export const AcessorioCard = (props) => {
    return (
        <div className='acessorio-card-container'>
            <img src={props.imagem}  loading="lazy" />
            <h3>{props.acessorio}</h3>
            <BotaoOrcamento label={'Orçamento'} />
        </div>
    )
}

AcessorioCard.propTypes = {
    imagem: PropTypes.string,
    acessorio: PropTypes.string
}