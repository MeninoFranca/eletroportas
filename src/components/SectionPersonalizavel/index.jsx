import './SectionPersonalizavel.css'
import PropTypes from 'prop-types'
import { BotaoOrcamento } from '../BotaoOrcamento'

export const SectionPersonalizavel = (props) => {
    return (
        <section className='sec-person-section'>
            <div className='sec-person-bg'>
                <img src={props.imagem}  loading="lazy"/>
            </div>
            <div className='sec-person-container'>
                <div className='sec-person-conteudo'>
                    <h3>{props.subtitulo}</h3>
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
                    <BotaoOrcamento label={'Orçamento'} />
                </div>
            </div>
        </section>
    )
}

SectionPersonalizavel.propTypes = {
    imagem: PropTypes.string,
    subtitulo: PropTypes.string,
    titulo: PropTypes.string,
    texto: PropTypes.string
}