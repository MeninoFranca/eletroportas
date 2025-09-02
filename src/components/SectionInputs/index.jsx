import './SectionInputs.css'
import { MapasTabs } from '../MapasTabs'
import { useState } from 'react'

export const SectionInputs = () => {
    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB",
        "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
    ];


    const [dados, setDados] = useState({
        nome: '',
        whatsApp: '',
        email: '',
        cidade: '',
        estado: '',
        assunto: '',
        outros: '',
        menssagem: '',
    })

    const handleChangeDados = (campo, valor) => {
        setDados(prevDados => ({
            ...prevDados,
            [campo]: valor
        }))
    }


    const menssagemOrcamento = () => {
        return `
            Atendimento via Site - EletroPortas.
            Cliente: ${dados.nome || 'não quis informar'}
            WhatsApp: ${dados.whatsApp || 'não quis informar'}
            Email: ${dados.email || 'nao quis informar'}
            Tipo de Produto: ${dados.assunto}
            Estado: ${dados.estado}
            Cidade: ${dados.cidade}
            Mensagem: ${dados.menssagem}
        `
    }

    const handleMandarMenssagem = () => {
        window.dataLayer || [];
        window.dataLayer.push({
            event: 'orcamento_button_click',
            cliente: dados.nome || 'não quis informar',
            whatsapp: dados.whatsApp || 'não quis informar',
            email: dados.email || 'não quis informar',
            produto: dados.tipoDeProduto || 'não quis informar',
            estado: dados.estado || 'não quis informar',
            cidade: dados.cidade || 'não quis informar',
        })
        const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent('5571996102055')}&text=${encodeURIComponent(menssagemOrcamento())}`;
        window.open(url, '_blank');
    }



    return (
        <section className='section-inputs-section'>
            <div className='section-inputs-container'>
                <div className='section-inputs-formulario'>
                    <input
                        name='nome'
                        placeholder='Nome:'
                        onChange={(e) => handleChangeDados('nome', e.target.value)}
                    />
                    <input
                        name='email'
                        placeholder='Email:'
                        onChange={(e) => handleChangeDados('email', e.target.value)}
                    />
                    <input
                        type='tel'
                        name='whatsApp'
                        placeholder='Seu WhatsApp: '
                        onChange={(e) => handleChangeDados('whatsApp', e.target.value)}
                    />
                    <input
                        name='cidade'
                        placeholder='cidade:'
                        onChange={(e) => handleChangeDados('cidade', e.target.value)}
                    />
                    <select
                        name='estado'
                        onChange={(e) => handleChangeDados('estado', e.target.value)}
                    >
                        <option value="">--escolha aqui</option>
                        {
                            estados.map((est,index) => {
                                return <option key={index} value={est}>{est}</option>
                            })
                        }

                    </select>
                    <select
                        name='assunto'
                        onChange={(e) => handleChangeDados('assunto', e.target.value)}
                    >
                        <option value=''>Assunto</option>
                        <option value='orcamento'>Orçamento</option>
                        <option value='duvidas'>Dúvidas</option>
                        <option value='outro'>Outro</option>
                    </select>
                    <textarea
                        name='menssagem'
                        placeholder='Mensagem:'
                        onChange={(e) => handleChangeDados('menssagem', e.target.value)}
                    ></textarea>
                    <button
                        className='btn-enviar'
                        onClick={handleMandarMenssagem}
                    >
                        <h3>Enviar</h3>
                    </button>
                </div>
                <MapasTabs />
            </div>
        </section>
    )
} 