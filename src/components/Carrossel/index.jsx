import './Carrossel.css'
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import slide6 from '../../assets/slide6.jpg'
import setaDireita from '../../assets/duplodireita.png'
import setaEsquerda from '../../assets/duploesquerda.png'
import { useEffect, useState } from 'react'

export const Carrossel = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('');

    const imagens = [
        { id: 1, image: slide1 },
        { id: 2, image: slide2 },
        { id: 3, image: slide3 },
        { id: 4, image: slide4 },
        { id: 5, image: slide5 },
        { id: 6, image: slide6 }
    ];

    const [tamanhoDaTela, setTamanhoDaTela] = useState({
        altura: window.innerHeight,
        largura: window.innerWidth
    });

    const handleTamanhoAtualdaTela = () => {
        setTamanhoDaTela({
            altura: window.innerHeight,
            largura: window.innerWidth
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleTamanhoAtualdaTela);
        return () => {
            window.removeEventListener('resize', handleTamanhoAtualdaTela)
        }
    }, []);

    const getSlideClass = (id) => {
        if (direction === 'left') return 'deslizar-esquerda imagens';
        if (direction === 'right') return 'deslizar-direita imagens';
        return '';
    }

    const handleIncrementIndex = () => {
        setDirection('left');
        setTimeout(() => {
            setIndex((prevIndex) => {
                const increment = tamanhoDaTela.largura >= 1024 ? 3 : tamanhoDaTela.largura >= 725 ? 2 : 1;
                return (prevIndex + increment) % imagens.length;
            });
            setDirection('');
        }, 500);
    }

    const handleDecrementIndex = () => {
        setDirection('right');
        setTimeout(() => {
            setIndex((prevIndex) => {
                const decrement = tamanhoDaTela.largura >= 1440 ? 3 : tamanhoDaTela.largura >= 725 ? 2 : 1;
                return (prevIndex - decrement + imagens.length) % imagens.length;
            });
            setDirection('');
        }, 500);
    }

    const renderSlides = () => {
        const numSlides = tamanhoDaTela.largura >= 1024 ? 3 : tamanhoDaTela.largura >= 725 ? 2 : 1;
        const slidesToShow = [];

        for (let i = 0; i < numSlides; i++) {
            const slideIndex = (index + i) % imagens.length;
            slidesToShow.push(imagens[slideIndex]);
        }

        return slidesToShow.map((item) => (
            <div className={`transicao-carrossel`} key={item.id}>
                <img className={getSlideClass(item.id)} src={item.image} loading="lazy" alt={`image.${item.id}`} />
            </div>
        ));
    }

    return (
        <div className='lolo'>
            <section className='container-carrossel-principal'>
                <div className='container-principal titulo'>
                    <div className='titulo'>
                        <h5 className='titulo-h5'>Trabalhos incríveis</h5>
                        <h2>Nossos projetos</h2>
                    </div>
                    </div>
                <div className='container-carrossel'>
                    <div>
                        <img onClick={handleDecrementIndex} src={setaEsquerda} className='setas' />
                    </div>
                    <div className='imagem-container'>
                        {renderSlides()}
                    </div>
                    <div>
                        <img onClick={handleIncrementIndex} src={setaDireita} className='setas' />
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Carrossel;