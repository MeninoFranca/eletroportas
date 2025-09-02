import './BotaoPersonalizado.css'
import PropTypes from 'prop-types'

export const BotaoPersonalizado = (props) => {
    const handleEventoGTM = () => {
        const dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'contatos_button_click'
        })
        console.log(dataLayer)
    }
    return (
        <button
            onClick={handleEventoGTM}
            className='botao-personalizado'
        >
            <a href={props.href} target='_blank'><span>({props.ddd})</span>{props.cidade}</a>
        </button>
    )
}

BotaoPersonalizado.propTypes = {
    href: PropTypes.string,
    ddd: PropTypes.string,
    cidade: PropTypes.string
}