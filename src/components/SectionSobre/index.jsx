import './SectionSobre.css';
import { lazy, Suspense } from 'react';

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

export const SectionSobre = () => {
    return (
        <section className='section-sobre-section'>
            <div className='section-sobre-container'>
                <div>
                    <h2>Eletroportas fazendo parte dos seus Sonhos</h2>
                    <p>Somos líder no mercado de portas de enrolar automática há mais de 13 anos e assumimos inteiramente a responsabilidade de produzir portas de enrolar automáticas de alta qualidade e soluções personalizadas na entrega dos seus produtos e serviços. Somos a Maior fábrica de portas de enrolar do Nordeste e abrangemos o nosso atendimento para mais de 20 estados. Nosso compromisso é oferecer aos nossos clientes um produto moderno, eficiente e seguro. Além de portas de enrolar automáticas, oferecemos aos nossos clientes itens que compõem toda a instalação e manuseio da porta, como: Kits completos, botoeiras, automatizadores, soleiras, controles remotos, guias & outros.</p>
                </div>
                <div>
                    <Suspense fallback={<div style={{width: '560px', height: '315px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Carregando vídeo...</div>}>
                        <LazyIframe
                            className='section-sobre-video'
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/GcuISns5bWE"
                            title="YouTube video player"
                        />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
