import { useContext, useEffect, useRef, useState } from "react";
import './Orcamento.css'
import PropTypes from 'prop-types'
import OrcamentoContext from "../../context/OrcamentoContext";

const WhatsAppInput = ({ inputAtual }) => {

    const inputRef = useRef(null);
    const { dados, adicionarInput } = useContext(OrcamentoContext);
    const [ valor, setValor] = useState('');

    const handleChangeDados = (e) => {
        if (inputAtual === 7)
        setValor(e.target.value);
        adicionarInput('whatsApp', e.target.value);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputAtual]);
  
    return (
        <>
            <div className='container-input'>
                <label className='label'>E seu WhatsApp? <span className='required'>*</span> </label>
                <input
                    ref={inputRef}
                    onChange={handleChangeDados}
                    value={dados.input.whatsApp}
                    type="text"
                    className='altura-texto'
                    placeholder='e seu whatsapp'
                />
            </div>
        </>
    )
}

WhatsAppInput.propType = {
    inputAtual: PropTypes.number,
}

export default WhatsAppInput;