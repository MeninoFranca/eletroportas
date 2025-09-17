import './DualSection.css'
import gear2 from '../../assets/icon-gear2.png'
import escudo from '../../assets/icon-escudo.png'
import { BotaoPersonalizado } from '../BotaoPersonalizado'
// import pintor from '../../assets/pintor.jpg'

export const DualSection = () => {
    return (
        <section className='dual-mega-container'>
            <section className='dual-sec'>
                <div className='dual-container'>
                    <div className='parte-azul'>
                        <h3>Maior Fábrica de Portas de Enrolar Automáticas do Nordeste </h3>
                        <h2>Mais segurança para você</h2>
                        <h4>Nosso compromisso é alcançar a excelência em todos os nossos produtos e serviços.</h4>
                        <p>Utilizamos materiais de alta qualidade e seguimos processos de fabricação rigorosos para garantir que nossas portas de enrolar automáticas sejam duráveis, resistentes e funcionem de maneira eficiente.</p>
                        <div>
                            <div>
                                <img src={gear2} />
                                <h3>Tecnologia de automação</h3>
                                <p>Equipadas com motores de última geração, nossas portas automatizadas oferecem segurança avançada e controle remoto, assegurando um desempenho seguro e confiável.</p>
                            </div>
                            <div>
                                <img src={escudo} />
                                <h3>Proteção contra intrusos</h3>
                                <p>Fabricadas com materiais robustos, nossas portas de enrolar automáticas fornecem uma barreira contra invasões e intrusos, garantindo proteção efetiva.</p>
                            </div>
                        </div>
                    </div>

                    <div className='parte-laranja'>
                        <div className='laranja'></div>
                        <p>Fale com nossa equipe de vendas</p>
                        <div>
                            <BotaoPersonalizado href={`https://api.whatsapp.com/send?phone=${encodeURIComponent('5571996102055')}&text=${encodeURIComponent('Olá, gostaria de falar com um atendente.')}`} ddd='71' cidade='Salvador' />
                            <BotaoPersonalizado href={`https://api.whatsapp.com/send?phone=${encodeURIComponent('5577998622777')}&text=${encodeURIComponent('Olá, gostaria de falar com um atendente.')}`} ddd='77' cidade='Barreiras' />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}