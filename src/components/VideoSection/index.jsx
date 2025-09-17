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

