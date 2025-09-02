import { useContext } from 'react';
import './Orcamento.css'
import OrcamentoContext from '../../context/OrcamentoContext';
const TipoDeProduto = () => {
    
    const { dados,atualizarTipoProduto } = useContext(OrcamentoContext);
    const tipos = ["Porta com Instalacao", "Apenas o Material"];

    return (
        <>
            <div className='container-input'>
                <label className='label'>Qual tipo de Produto? <span className='required'>*</span> </label>
                <select 
                className='select' 
                onChange={(e) => atualizarTipoProduto(e.target.value)}
                value={dados.tipoDeProduto}
                >
                    <option selected> -- selecione aqui</option>
                    {
                        tipos.map((tipoAtividade, index) => {
                            return <option
                                key={index}
                                value={tipoAtividade}
                            >
                                {tipoAtividade}
                            </option>
                        })
                    }
                </select>
            </div>
        </>
    )
}
export default TipoDeProduto;