import './Carrossel.css';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.jpg';
import setaDireita from '../../assets/duplodireita.png';
import setaEsquerda from '../../assets/duploesquerda.png';
import { useEffect, useState, useMemo } from 'react';

// MELHORIA: Array de imagens com 'alt' descritivo para acessibilidade
const imagens = [
    { id: 1, image: slide1, alt: 'Descrição da imagem 1 para acessibilidade' },
    { id: 2, image: slide2, alt: 'Descrição da imagem 2 para acessibilidade' },
    { id: 3, image: slide3, alt: 'Descrição da imagem 3 para acessibilidade' },
    { id: 4, image: slide4, alt: 'Descrição da imagem 4 para acessibilidade' },
    { id: 5, image: slide5, alt: 'Descrição da imagem 5 para acessibilidade' },
    { id: 6, image: slide6, alt: 'Descrição da imagem 6 para acessibilidade' }
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
                <img className={`imagens ${slideClass}`} src={item.image} loading="lazy" alt={item.alt} />
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