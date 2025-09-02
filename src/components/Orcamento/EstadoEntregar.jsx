import { useContext, useState } from 'react';
import './Orcamento.css'
import OrcamentoContext from '../../context/OrcamentoContext';
const EstadoEntregar = () => {
    const { dados, atualizarEstado } = useContext(OrcamentoContext);
    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB",
        "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];
    console.log(dados)
    return (
        <>
            <div className='container-input'>
                <label className='label'>Qual Estado p/ entregar?<span className='required'>*</span> </label>
                <select
                    className='select'
                    name='estado'
                    onChange={(e) => atualizarEstado(e.target.value)}
                    value={dados.estado}
                >
                    <option selected> -- selecione aqui</option>
                    {
                        estados.map((estados, index) => {
                            return <option key={index} onClick={(e) => atualizarEstado(e.target.value)} value={estados}>
                                {estados}
                            </option>
                        })
                    }
                </select>
            </div>
        </>
    )
}
export default EstadoEntregar;