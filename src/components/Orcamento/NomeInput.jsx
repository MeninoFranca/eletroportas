import { useContext, useEffect, useRef, useState } from "react";
import './Orcamento.css'
import PropTypes from 'prop-types'
import OrcamentoContext from "../../context/OrcamentoContext";

const NomeInput = ({ inputAtual }) => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);
    const [ valor, setValor] = useState('');

    const handleChangeDados = (e) => {
        if (inputAtual === 6)
        setValor(e.target.value);
        adicionarInput('nome', e.target.value);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputAtual]);
  
    return (
        <>
            <div className='container-input'>
                <label className='label'>Qual o seu nome: <span className='required'>*</span> </label>
                <input
                    ref={inputRef}
                    onChange={handleChangeDados}
                    value={dados.input.nome}
                    type="text"
                    className='altura-texto'
                    placeholder='digite aqui'
                />
            </div>
        </>
    )
}

NomeInput.propType = {
    inputAtual: PropTypes.number,
}

export default NomeInput;