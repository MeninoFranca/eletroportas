import { useContext, useEffect, useRef, useState } from "react";
import './Orcamento.css'
import PropTypes from 'prop-types'
import OrcamentoContext from "../../context/OrcamentoContext";

const LarguraInput = ({ inputAtual }) => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);
    const [ valor, setValor] = useState('');

    const handleChangeDados = (e) => {
        if (inputAtual === 2)
        setValor(e.target.value);
        adicionarInput('largura', e.target.value);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputAtual]);
  
    return (
        <>
            <div className='container-input'>
                <label className='label'>Largura do Vão: <span className='required'>*</span> </label>
                <input
                    ref={inputRef}
                    onChange={handleChangeDados}
                    value={dados.input.largura === 0 ? '' : dados.input.largura}
                    type="text"
                    className='altura-texto'
                    placeholder='digite aqui a largura do vão'
                />
            </div>
        </>
    )
}

LarguraInput.propType = {
    inputAtual: PropTypes.number,
}

export default LarguraInput;