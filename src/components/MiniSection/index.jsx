import { Link } from 'react-router-dom'
import './MiniSection.css'
import PropTypes from 'prop-types'

export const MiniSection = (props) => {
    return (
        <section className='mini-section-section'>
            <div className='mini-section-imagem'>
                <img src={props.imagem} />
            </div>
            <div className='mini-section-container'>
                <div className='mini-section-div'>
                    <h2>{props.titulo}</h2>
                    <p>
                        <Link className='mini-link1' to='/' >Início</Link> ➢ <Link className='mini-link2' to={props.path}>{props.titulo}</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

MiniSection.propTypes = {
    imagem: PropTypes.string,
    titulo: PropTypes.string,
    path: PropTypes.string
}