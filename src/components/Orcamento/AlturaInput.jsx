import { useContext, useEffect, useRef, useState } from "react";
import './Orcamento.css'
import PropTypes from 'prop-types'
import OrcamentoContext from "../../context/OrcamentoContext";

const AlturaInput = ({ inputAtual }) => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);
    const [ valor, setValor] = useState('');

    const handleChangeDados = (e) => {
        if (inputAtual === 1)
        setValor(e.target.value);
        adicionarInput('altura', e.target.value);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputAtual]);
  
    return (
        <>
            <div className='container-input'>
                <label className='label'>Altura do Vão: <span className='required'>*</span> </label>
                <input
                    ref={inputRef}
                    onChange={handleChangeDados}
                    value={dados.input.altura === 0 ? '' : dados.input.altura}
                    type="text"
                    className='altura-texto'
                    placeholder='digite aqui a altura do vão'
                />
            </div>
        </>
    )
}

AlturaInput.propType = {
    inputAtual: PropTypes.number,
}

export default AlturaInput;