import './Checked.css'
import PropTypes from 'prop-types'
import check from '../../assets/icon-check.png'

export const Checked = (props) => {
    return (
        <div className='check-container'>
            <img src={check} />
            <h2>{props.texto}</h2>
        </div>
    )
}

Checked.propTypes = {
    texto: PropTypes.string
}