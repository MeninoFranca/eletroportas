import './FooterPt2.css'
import check_laranja from '../../assets/icon-check-laranja.png'

export const FooterPt2 = () => {
    return (
        <div className='rodape-parte2'>
            <div className='rodape-sobre-eletroportas'>
                <h3>Eletroportas</h3>
                <p>Fundada em 2011, assume inteiramente a responsabilidade de produzir portas de enrolar automáticas de alta qualidade e soluções personalizadas na entrega dos seus produtos e serviços. Somos a Maior fábrica de portas de enrolar do Nordeste e abrangemos o nosso atendimento para mais de 20 estados. Nosso compromisso é oferecer aos nossos clientes um produto moderno, eficiente e seguro. Além de portas de enrolar automáticas, oferecemos aos nossos clientes itens que compõem toda a instalação e manuseio da porta, como: Kits completos, botoeiras, automatizadores, soleiras, controles remotos, guias & outros.</p>
            </div>
            <div className='rodape-links'>
                <div>
                    <h3>Serviços</h3>
                    <ul>
                        <li>
                            <img src={check_laranja} />
                            <p>Portas de Enrolar Automáticas</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Kit porta de enrolar</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Manutenção de portas</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Pintura Eletrostática</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Automatizadores</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Links rápidos</h3>
                    <ul>
                        <li>
                            <img src={check_laranja} />
                            <p>Início</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Sobre nós</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Produtos</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Seja um revendedor</p>
                        </li>
                        <li>
                            <img src={check_laranja} />
                            <p>Contato</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
