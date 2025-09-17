import './VideoSection.css';
import { BotaoOrcamento } from '../BotaoOrcamento';
import { LazyImage } from '../LazyImage';

export const VideoSection = () => {
    return (
        <section className='sec'>
            <div className='video-container'>
                <LazyImage
                    src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                    alt="Fábrica de portas de enrolar"
                    className="video"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className='section-container'>
                <div className='frases-container'>
                    <div className='frases'>
                        <p>Garanta segurança, qualidade, alta tecnologia e durabilidade nas suas Portas de Enrolar Automáticas</p>
                        <h2>Maior Fábrica de Portas de Enrolar Automáticas do <span>N</span>ordeste</h2>
                        <p>Oferecemos soluções ideais para garantir a segurança e comodidade de ambientes residenciais, comerciais ou industriais.</p>
                        <BotaoOrcamento label={'Orçamento'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

