import './WppButton.css'
import wpp from '../../assets/icon-whatsapp.png'
import { useState } from 'react'

export const WppButton = () => {
    const [isOpen, setOpen] = useState(false);

    const msg = () => {
        return `
        Atendimento via Site Eletroportas 

            Seu nome: 
            WhatsApp:
            Email:
            Estado:
            Cidade:
            Mensagem:
        `
    }

    const handleMandarMenssagem = (clickValue) => {
        switch (clickValue) {

            case 'salvador':
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'whatsapp_button_click',
                });
                const url1 = `https://api.whatsapp.com/send?phone=${encodeURIComponent('5571996102055')}&text=${encodeURIComponent(msg())}`;
                console.log('Generated URL:', url1);
                window.open(url1, '_blank');
                break;

            case 'barreiras':
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'whatsapp_button_click',
                });
                const url3 = `https://api.whatsapp.com/send?phone=${encodeURIComponent('5577998622777')}&text=${encodeURIComponent(msg())}`;
                console.log('Generated URL:', url3);
                window.open(url3, '_blank');
                break;
        }

    };

    return (
        <div className='wpp-modal-container'>

            <button
                className='wpp-button'
                onClick={() => setOpen(true)}
                aria-label="Abrir formulário WhatsApp"
            >
                <img src={wpp} alt="WhatsApp" />
            </button>


            {isOpen && (
                <div className='full-modal'>
                    <div className='modal-content'>
                        <span className='modal-close' onClick={() => setOpen(false)}>X</span>
                        <div className='modal-inputs'>
                            <header className='header-content-wpp'>
                                <div className='titulo-sessao-wpp'>
                                    CENTRAL ELETROPORTAS

                                    <img src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000" alt="Botão para whatsapp" />

                                </div>

                                <hr className='separador-wpp' />
                                {/* <div className='status-sessao'>
                                    <span className='radial-status'></span>  <span>online</span>
                                </div> */}
                                <div className='label-section-wpp'>
                                    Escolha a unidade mais próxima de você!
                                </div>
                            </header>
                            <section className='section-content-wpp'>
                                <div
                                    onClick={() => handleMandarMenssagem('salvador')}
                                    className='button-salvador-wpp' >
                                    <span
                                        title='clique aqui para iniciar uma conversa'
                                    >
                                        UNIDADE - SALVADOR
                                    </span>
                                </div>
                                <div>
                                    <div
                                        onClick={() => handleMandarMenssagem('barreiras')}
                                        className='button-barreiras-wpp'>
                                        <span
                                            title='clique aqui para iniciar uma conversa'
                                        >
                                            UNIDADE - BARREIRAS
                                        </span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};