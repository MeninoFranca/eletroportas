import { useEffect, useState } from 'react';
import './DadosSection.css';

export const DadosSection = () => {
    const [ativado, setAtivado] = useState(false);
    const [countAnosMarcado, setAnosMarcados] = useState(0);
    const [countPortasFabricadas, setPortasFabricadas] = useState(0);
    const [countPortasInstaladas, setPortasInstaladas] = useState(0);
    const [countClientesSatisfeitos, setClientesSatisfeitos] = useState(0);

    useEffect(() => {
        const handleEventoScroll = () => {
            const divSelecionada = document.querySelector('.dados-sec');

            if (!divSelecionada) return;

            const { top, bottom } = divSelecionada.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Verifica a div .dados-sec está visível na tela
            if (top < windowHeight && bottom >= 0) {
                setAtivado(true);
            } else {
                setAtivado(false);
            }
        };

        window.addEventListener('scroll', handleEventoScroll);
        return () => {
            window.removeEventListener('scroll', handleEventoScroll);
        };
    }, [ativado]);

    useEffect(() => {
        if (ativado) {
            const INDICADORANOSMARCADOS = 1500
            const INDICADORPORTASFABRICADAS = 2500
            const INDICADORPORTASINSTALADAS = 1900
            const INDICADORCLIENTESSATISFEITOS = 2300
            const interval1 = setInterval(() => { // funcao do react igual o setTimeOut
                setAnosMarcados(prevContador => {
                    if (prevContador >= INDICADORANOSMARCADOS) {
                        clearInterval(interval1); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + 1;
                });
            }, 100);
            const interval2 = setInterval(() => { // funcao do react igual o setTimeOut
                setPortasFabricadas(prevContador => {
                    if (prevContador >= INDICADORPORTASFABRICADAS) {
                        clearInterval(interval2); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + 1;
                });
            }, 100);
            const interval3 = setInterval(() => { // funcao do react igual o setTimeOut
                setPortasInstaladas(prevContador => {
                    if (prevContador >= INDICADORPORTASINSTALADAS) {
                        clearInterval(interval3); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + 1;
                });
            }, 100);
            const interval4 = setInterval(() => { // funcao do react igual o setTimeOut
                setClientesSatisfeitos(prevContador => {
                    if (prevContador >= INDICADORCLIENTESSATISFEITOS) {
                        clearInterval(interval4); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + 1;
                });
            }, 100);
        }
    }, [ativado, countAnosMarcado]);
    return (
        <section className='dados-sec'>
            <div className='dados-container'>
                <div>
                    <p>{ativado ? countAnosMarcado : 0}</p>
                    <p>Anos no Mercado</p>
                </div>
                <div>
                <p>{ativado ? countPortasFabricadas : 0}</p>
                    <p>Portas Fabricadas</p>
                </div>
                <div>
                <p>{ativado ? countPortasInstaladas : 0}</p>
                    <p>Portas Instaladas</p>
                </div>
                <div>
                <p>{ativado ? countClientesSatisfeitos : 0}</p>
                    <p>Clientes Satisfeitos</p>
                </div>
            </div>
        </section>
    );
};
