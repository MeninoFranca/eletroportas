import {useRef, useEffect, useContext, useState} from 'react'
import PropTypes from 'prop-types';
import OrcamentoContext from '../../context/OrcamentoContext';

const Observacoes = () => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])
    return (
        <>
            <div className='container-input'>
                <label className='label'>Alguma observação? <span className='required'>*</span> </label>
                <textarea
                    ref={inputRef}
                    value={dados.input.observacoes}
                    onChange={(e) => adicionarInput('observacoes', e.target.value)}
                    type="text"
                    className='altura-texto'
                    placeholder='digite aqui, quantidade, prazo, cor, etc...'
                />
            </div>
        </>
    )
}

export default Observacoes