import './Carrossel.css';
import setaDireita from '../../assets/duplodireita.png';
import setaEsquerda from '../../assets/duploesquerda.png';
import { useEffect, useState, useMemo } from 'react';
import { LazyImage } from '../LazyImage';

// Array de imagens otimizadas do Pexels
const imagens = [
    { id: 1, image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Porta de enrolar automática instalada' },
    { id: 2, image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Sistema de automação de portas' },
    { id: 3, image: 'https://images.pexels.com/photos/1108097/pexels-photo-1108097.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Fábrica de portas industriais' },
    { id: 4, image: 'https://images.pexels.com/photos/1108095/pexels-photo-1108095.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Instalação profissional de portas' },
    { id: 5, image: 'https://images.pexels.com/photos/1108093/pexels-photo-1108093.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Porta automática comercial' },
    { id: 6, image: 'https://images.pexels.com/photos/1108091/pexels-photo-1108091.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', alt: 'Tecnologia em automação' }
];

export const Carrossel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const [tamanhoDaTela, setTamanhoDaTela] = useState(window.innerWidth);

    // MELHORIA DE PERFORMANCE: Debounce para o evento de resize
    useEffect(() => {
        let timeoutId = null;
        const handleTamanhoAtualdaTela = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setTamanhoDaTela(window.innerWidth);
            }, 200); // Executa 200ms após o usuário parar de redimensionar
        };

        window.addEventListener('resize', handleTamanhoAtualdaTela);
        return () => {
            window.removeEventListener('resize', handleTamanhoAtualdaTela);
        };
    }, []);

    // MELHORIA DE LÓGICA: Calcula o número de slides visíveis uma única vez
    const numSlidesVisiveis = useMemo(() => {
        if (tamanhoDaTela >= 1024) return 3;
        if (tamanhoDaTela >= 725) return 2;
        return 1;
    }, [tamanhoDaTela]);

    const handleNext = () => {
        if (direction) return; // Evita cliques múltiplos durante a animação
        setDirection('left');
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + numSlidesVisiveis) % imagens.length);
            setDirection('');
        }, 500);
    };

    const handlePrev = () => {
        if (direction) return; // Evita cliques múltiplos durante a animação
        setDirection('right');
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - numSlidesVisiveis + imagens.length) % imagens.length);
            setDirection('');
        }, 500);
    };

    const renderSlides = () => {
        const slidesToShow = [];
        for (let i = 0; i < numSlidesVisiveis; i++) {
            const slideIndex = (index + i) % imagens.length;
            slidesToShow.push(imagens[slideIndex]);
        }

        const slideClass = direction === 'left' ? 'deslizar-esquerda' : direction === 'right' ? 'deslizar-direita' : '';

        return slidesToShow.map((item) => (
            <div className="transicao-carrossel" key={item.id}>
                <LazyImage 
                    className={`imagens ${slideClass}`} 
                    src={item.image} 
                    alt={item.alt}
                    style={{
                        height: '265px',
                        width: '240px',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease-in-out'
                    }}
                />
            </div>
        ));
    };

    return (
        <div className='lolo'>
            <section className='container-carrossel-principal'>
                <div className='container-principal titulo'>
                    <div className='titulo'>
                        {/* CORREÇÃO DE ACESSIBILIDADE: Título na ordem correta */}
                        <p className='titulo-h5'>Trabalhos incríveis</p>
                        <h2>Nossos projetos</h2>
                    </div>
                </div>
                <div className='container-carrossel'>
                    {/* CORREÇÃO DE ACESSIBILIDADE: Usando <button> para navegação */}
                    <button onClick={handlePrev} className='botao-carrossel' aria-label="Slide anterior">
                        <img src={setaEsquerda} className='setas' alt=""/>
                    </button>

                    <div className='imagem-container'>
                        {renderSlides()}
                    </div>

                    <button onClick={handleNext} className='botao-carrossel' aria-label="Próximo slide">
                        <img src={setaDireita} className='setas' alt=""/>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Carrossel;