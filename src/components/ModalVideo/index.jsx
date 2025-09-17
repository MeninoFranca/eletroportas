import './ModalVideo.css'
import play from '../../assets/icon-play.png'
import { useState, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

const LazyIframe = lazy(() => Promise.resolve({
    default: ({ src, title, ...props }) => (
        <iframe
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            {...props}
        />
    )
}))

export const ModalVideo = (props) => {
    const [modalEstado, setModalEstado] = useState(false)

    return (
        <section className='modal-video-section'>
            <div className='modal-video-container'>
                <div className='modal-video-parte1'>
                    <button onClick={(e) => {
                        e.preventDefault()
                        setModalEstado(true)
                    }}>
                        <img src={play} alt="Play" />
                    </button>
                    <p>{props.texto}</p>
                </div>
                <div className='modal-video-parte2'>
                    <img src={props.imagem} alt="Thumbnail" />
                </div>
            </div>

            {
                modalEstado && (
                    <div className='modal-video-modal'>
                        <p onClick={() => setModalEstado(false)}>X</p>
                        {
                            props.tipo === 'iframe' && (
                                <Suspense fallback={<div>Carregando vídeo...</div>}>
                                    <LazyIframe
                                        width="560"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                                        title="YouTube video player"
                                    />
                                </Suspense>
                            )
                        }
                        {
                            props.tipo === 'video/mp4' && (
                                <video controls autoPlay>
                                    <source src={props.videoId} type={props.tipo} />
                                </video>
                            )
                        }
                    </div>
                )
            }
        </section>
    )
}

ModalVideo.propTypes = {
    videoId: PropTypes.string.isRequired, // YouTube video ID
    texto: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    tipo: PropTypes.string
}
