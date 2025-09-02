import { ProdutosCard } from '../ProdutosCard'
import './SectionProdutos.css'

import foto1 from '../../assets/portas-de-enrolar.jpeg'
import store from '../../assets/icon-store.png'

import foto2 from '../../assets/automatizador.png'
import gear from '../../assets/icon-gear.png'

import foto3 from '../../assets/kit2.png'
import mais from '../../assets/icon-mais.png'

export const SectionProdutos = () => {
    return (
        <section className='sec-prod'>
            <div className='produtos-container'>
                <div className='textos'>
                    <h5>Modernidade para residências, comércios e indústrias</h5>
                    <h2>Produtos</h2>
                    <p>Somos especializados na produção, comercialização e instalação de Portas de Enrolar Automáticas.</p>
                </div>

                <div className='cards'>
                    <ProdutosCard icone={store} imagem={foto1} titulo='Portas de enrolar automáticas' texto='Fabricamos três tipos de lâminas para a sua porta de enrolar automática: Lâmina Meia Cana Lisa, Lâmina Oblongo e Lâmina Transvision para uso residencial, comercial e Industrial.' />
                    <ProdutosCard icone={gear} imagem={foto2} titulo='Automatizadores' texto='As nossas portas de enrolar automáticas são equipadas com os automatizadores mais modernos em tecnologia, garantindo um desempenho excepcional e maior durabilidade.' />
                    <ProdutosCard icone={mais} imagem={foto3} titulo='Acessórios' texto='A Eletroportas vende diversos acessórios que são essenciais para a porta de enrolar automática e também realiza a revenda no atacado.' />
                </div>
            </div>
        </section>
    )
}