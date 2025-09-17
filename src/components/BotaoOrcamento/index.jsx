import './BotaoOrcamento.css'
import Orcamento from '../Orcamento/index'
import grafico from '../../assets/icon-grafico.png'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const BotaoOrcamento = ({label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleGetOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <button className='btn-orcamento' onClick={handleGetOpen}>
                <img src={grafico}  loading="lazy" alt="grafico"/>
                <h3>{label}</h3>
            </button>
            {isOpen && <Orcamento setOpen={setIsOpen} />}
        </>
    )
}

BotaoOrcamento.propTypes = {
    label: PropTypes.string
}

