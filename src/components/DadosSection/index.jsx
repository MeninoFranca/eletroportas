import { useEffect, useState } from 'react';
import './DadosSection.css';

export const DadosSection = () => {
    const [ativado, setAtivado] = useState(false);
    const [countAnosMarcado, setAnosMarcados] = useState(0);
    const [countPortasFabricadas, setPortasFabricadas] = useState(0);
    const [countPortasInstaladas, setPortasInstaladas] = useState(0);
    const [countClientesSatisfeitos, setClientesSatisfeitos] = useState(0);

    useEffect(() => {
        let timeoutId;
        const handleEventoScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
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
            }, 10);
        };

        window.addEventListener('scroll', handleEventoScroll);
        return () => {
            window.removeEventListener('scroll', handleEventoScroll);
            clearTimeout(timeoutId);
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
                    return prevContador + Math.ceil(INDICADORANOSMARCADOS / 100);
                });
            }, 50);
            
            const interval2 = setInterval(() => { // funcao do react igual o setTimeOut
                setPortasFabricadas(prevContador => {
                    if (prevContador >= INDICADORPORTASFABRICADAS) {
                        clearInterval(interval2); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + Math.ceil(INDICADORPORTASFABRICADAS / 100);
                });
            }, 50);
            
            const interval3 = setInterval(() => { // funcao do react igual o setTimeOut
                setPortasInstaladas(prevContador => {
                    if (prevContador >= INDICADORPORTASINSTALADAS) {
                        clearInterval(interval3); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + Math.ceil(INDICADORPORTASINSTALADAS / 100);
                });
            }, 50);
            
            const interval4 = setInterval(() => { // funcao do react igual o setTimeOut
                setClientesSatisfeitos(prevContador => {
                    if (prevContador >= INDICADORCLIENTESSATISFEITOS) {
                        clearInterval(interval4); // para o intervalo 
                        return prevContador;
                    }
                    return prevContador + Math.ceil(INDICADORCLIENTESSATISFEITOS / 100);
                });
            }, 50);
            
            return () => {
                clearInterval(interval1);
                clearInterval(interval2);
                clearInterval(interval3);
                clearInterval(interval4);
            };
        }
    }, [ativado, countAnosMarcado]);
    
    return (
        <section className='dados-sec'>
            <div className='dados-container'>
                <div>
                    <p>{ativado ? Math.min(countAnosMarcado, 1500) : 0}</p>
                    <p>Anos no Mercado</p>
                </div>
                <div>
                    <p>{ativado ? Math.min(countPortasFabricadas, 2500) : 0}</p>
                    <p>Portas Fabricadas</p>
                </div>
                <div>
                    <p>{ativado ? Math.min(countPortasInstaladas, 1900) : 0}</p>
                    <p>Portas Instaladas</p>
                </div>
                <div>
                    <p>{ativado ? Math.min(countClientesSatisfeitos, 2300) : 0}</p>
                    <p>Clientes Satisfeitos</p>
                </div>
            </div>
        </section>
    );
};
