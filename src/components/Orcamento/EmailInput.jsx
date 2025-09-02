import { useContext, useEffect, useRef, useState } from "react";
import './Orcamento.css'
import PropTypes from 'prop-types'
import OrcamentoContext from "../../context/OrcamentoContext";

const EmailInput = ({ inputAtual }) => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);
    const [ valor, setValor] = useState('');

    const handleChangeDados = (e) => {
        if (inputAtual === 8)
        setValor(e.target.value);
        adicionarInput('email', e.target.value);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputAtual]);
  
    return (
        <>
            <div className='container-input'>
                <label className='label'>Por fim, qual seu Email? <span className='required'>*</span> </label>
                <input
                    ref={inputRef}
                    onChange={handleChangeDados}
                    value={dados.input.email}
                    type="text"
                    className='altura-texto'
                    placeholder='digite aqui'
                />
            </div>
        </>
    )
}

EmailInput.propType = {
    inputAtual: PropTypes.number,
}

export default EmailInput;