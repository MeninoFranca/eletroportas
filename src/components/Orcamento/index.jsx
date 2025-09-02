import { useContext, useEffect, useState } from 'react';
import './Orcamento.css';
import '../CircularProgress/CircularPrograss.css'
import EstadoEntregar from './EstadoEntregar';
import Observacoes from './Observacoes';
import OrcamentoContext from '../../context/OrcamentoContext';
import TipoDeProduto from './TipoProduto'
import AlturaInput from './AlturaInput';
import CidadeInput from './CidadeInput';
import NomeInput from './NomeInput';
import WhatsAppInput from './WhatsAppInput';
import EmailInput from './EmailInput';
import LarguraInput from './LarguraInput';
// import CircularWithValueLabel from '../CircularProgress/CircularProgressWithLabel';
import PropTypes from 'prop-types'

const Orcamento = ({ setOpen }) => {
    const { dados } = useContext(OrcamentoContext);
    const [proximo, setProximo] = useState(0);
    // const [isLoading, setLoading] = useState(true);
    const QUANT_SLIDE = 9
    const handleClose = () => {
        setOpen(false);
    };

    const handleProximo = () => {
        if (QUANT_SLIDE <= 9) {
            setProximo(prev => prev + 1);
        }
    }

    const handleVoltar = () => {
        setProximo(prev => prev - 1)
    }

    const menssagemOrcamento = () => {
        return `
            Cliente: ${dados.input.nome || 'não quis informar'}
            WhatsApp: ${dados.input.whatsApp || 'não quis informar'}
            Email: ${dados.input.email || 'nao quis informar'}
            Tipo de Produto: ${dados.tipoDeProduto || 'não quis informar'}
            Altura do Vão: ${dados.input.altura || 'não quis informar'}
            Largura do Vão: ${dados.input.largura || 'não quis informar'}
            Area: ${dados.input.altura * dados.input.largura} M² 
            Estado para entregar: ${dados.estado || 'não quis informar'}
            Cidade: ${dados.input.cidade || 'não quis informar'}
            Observação: ${dados.input.observacoes || 'não quis informar'}
        `
    }

    const handleMandarMenssagem = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'orcamento_button_click',
            cliente: dados.input.nome || 'não quis informar',
            whatsapp: dados.input.whatsApp || 'não quis informar',
            email: dados.input.email || 'não quis informar',
            produto: dados.tipoDeProduto || 'não quis informar',
            estado: dados.estado || 'não quis informar',
            cidade: dados.input.cidade || 'não quis informar',
            mensagem: menssagemOrcamento()
        });
    
        console.log(window.dataLayer);
    
        const mensagem = menssagemOrcamento().replace(/\s+/g, ' ').trim();
        const url = `https://api.whatsapp.com/send?phone=5571996102055&text=${encodeURIComponent(mensagem)}`;
        console.log(url);
        window.open(url, '_blank');
    };

    //recurso de loading mais chamada da função desativado a pedido do cliente.
    // useEffect(() => {
    //     if (proximo === 9) {
    //         const loadingTimer = setTimeout(() => {
    //             setLoading(false);
    //             handleMandarMenssagem();
    //             window.location.reload();
    //         }, 8000);
    //         return () => clearTimeout(loadingTimer);
    //     }
    // }, [proximo]);

    return (
        <div className='modal'>
            <div className="container-orcamento">
                <div className='content'>
                    <div className="button-close">
                        <button className="" onClick={handleClose}>X</button>
                    </div>
                    <div className='titulo'>
                        <span>
                            Iniciar Uma Conversa Com Um Atendente No Whatsapp
                        </span>
                    </div>
                    <div className="conteudo">
                        <div>

                        </div>
                        {
                            proximo === 0 ? (
                                <TipoDeProduto />
                            ) : proximo === 1 ? (
                                <AlturaInput
                                    inputAtual={proximo}
                                />
                            ) : proximo === 2 ? (
                                <LarguraInput
                                    inputAtual={proximo}
                                />
                            ) : proximo === 3 ? (
                                <EstadoEntregar />
                            ) : proximo === 4 ? (
                                <CidadeInput
                                    inputAtual={proximo}
                                />
                            ) : proximo === 5 ? (
                                <Observacoes inputAtual={proximo} />
                            ) : proximo === 6 ? (
                                <NomeInput
                                    inputAtual={proximo}
                                />
                            ) : proximo === 7 ? (
                                <WhatsAppInput
                                    inputAtual={proximo}
                                />
                            ) : proximo === 8 ? (
                                <EmailInput
                                    inputAtual={proximo}
                                />
                            ) : null
                        }

                        {
                            proximo < 9 && (
                                <div className={`container-botoes ${proximo > 0 && 'container-botoes-avante'}`}>
                                    {
                                        proximo > 0 &&
                                        < div
                                            className='botao-voltar'
                                            onClick={handleVoltar}>
                                            <button
                                                className='voltar'>
                                                Voltar
                                            </button>
                                        </div>
                                    }
                                    <div className={`botao-proximo ${proximo > 0 ? 'botao-avante' : ''}`}>
                                        <button
                                            className='proximo'
                                            disabled={proximo > 8}
                                            onClick={() => {
                                                handleProximo(); proximo === 8 ? (
                                                    handleMandarMenssagem(),
                                                    window.location.reload()
                                                ) : null
                                             
                                            }}
                                        >
                                            {proximo === 8 ? 'Enviar' : 'Próximo'}
                                        </button>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Orcamento;
Orcamento.propTypes = {
    setOpen: PropTypes.func.isRequired
}