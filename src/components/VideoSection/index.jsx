import './VideoSection.css';
// import bgVideo from '../../assets/section_video.mp4'
import { BotaoOrcamento } from '../BotaoOrcamento';

export const VideoSection = () => {
    const ID_DO_VIDEO = "IJ5XR1QFo7c";
    return (
        <section className='sec'>
            <div className='video-container'>
                {/* <video className='video' autoPlay muted loop>
                    <source src={bgVideo} />
                </video> */}
                <iframe
                    className='video'
                    src={`https://www.youtube.com/embed/${ID_DO_VIDEO}?autoplay=1&mute=1&loop=1&playlist=${ID_DO_VIDEO}`}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                ></iframe>
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