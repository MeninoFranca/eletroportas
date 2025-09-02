import {createContext, useState } from "react";

//criando um contexto 
const OrcamentoContext = createContext();

//criando um provider 
export const OrcamentoProvider = ({children}) => {
    const [dados, setDados] = useState({
        tipoDeProduto: '',
        estado: '',
        input: {
          altura: 0,
          largura: 0,
          cidade: '',
          observacoes:'',
          nome: '',
          whatsApp: '',
          email: '',
        }
      });

    //função para atualizar o tipo de produto
    const atualizarTipoProduto = (tipo) => {
        setDados((prevDados) => ({
            ...prevDados,
                tipoDeProduto: tipo,
        }));
    }

    const atualizarEstado = (estado) => {
        setDados((prevDados) => ({
            ...prevDados, 
            estado:estado,
        }))
    }

    //função para atualizar os inputs
    const adicionarInput = (campo,valor) => {
        setDados((prevDados) => ({
            ...prevDados,
            input: {
                ...prevDados.input,
                [campo]: valor
            }
        }))
    }
    // retornando recursos e provendo para o componente pai.
    return (
        <OrcamentoContext.Provider value={{dados,atualizarTipoProduto,atualizarEstado,adicionarInput}}>
            {children}
        </OrcamentoContext.Provider>
    );
}

export default OrcamentoContext;
