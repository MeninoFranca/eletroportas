import './Acessorios.css'
import { SectionPers } from '../../components/SectionPers'
import { SectionIcons2 } from '../../components/SectionIcons2'
import { ModalVideo } from '../../components/ModalVideo'
import { AcessorioCard } from '../../components/AcessorioCard'
import { SectionOrcamento } from '../../components/SectionOrcamento'
import { SectionDuvidas } from '../../components/SectionDuvidas'

import noBreak from '../../assets/Aparelho Nobreak.jpg'
import automatizador from '../../assets/automatizador.png'
import caixaBotoeira from '../../assets/caixa_botoeira.png'
import botoeira from '../../assets/botoeira.jpg'
import controle from '../../assets/controle.jpg'
import kitCentral from '../../assets/kit_central.png'
import fita from '../../assets/fita_lubrificante.png'
import sensorInfravermelho from '../../assets/sensor-infra-vermelho.jpg'
import laminas from '../../assets/laminas.jpg'
import travaLaminas from '../../assets/trava-laminas.jpg'
import travaQueda from '../../assets/trava.png'
import eixo from '../../assets/eixo.jpg'
import esmaga from '../../assets/anti_esmaga.png'
import trilha from '../../assets/trilha.png'
import soleiraR from '../../assets/soleira-com-reforço.jpg'
import borrachaVedacao from '../../assets/borracha-de-vedação-para-soleira.jpg'
import video from '../../assets/potarosa.mp4'
import eletroportas from '../../assets/eletro-portas.jpg'

export const Acessorios = () => {
    return (
        <section className='acessorios-section'>
            <SectionPers />
            <SectionIcons2 />
            <div className='sec-personalizavel-divisoria'></div>
            <h2 className='acessorios-titulo'>Confira os acessórios que podem fazer a diferença nas portas de enrolar automáticas</h2>
            <p className='acessorios-texto'>Confira nossos acessórios únicos, projetados para enriquecer e aprimorar sua porta de enrolar</p>
            <div className='acessorios-container'>
                <AcessorioCard imagem={noBreak} acessorio='Aparelhos Nobreak' />
                <AcessorioCard imagem={automatizador} acessorio='Automatizadores' />
                <AcessorioCard imagem={caixaBotoeira} acessorio='Caixa para Botoeira' />
                <AcessorioCard imagem={botoeira} acessorio='Botoeira' />
                <AcessorioCard imagem={controle} acessorio='Controle Remoto' />
                <AcessorioCard imagem={kitCentral} acessorio='Kit Central de Comando' />
                <AcessorioCard imagem={fita} acessorio='Fita Auto Lubrificante' />
                <AcessorioCard imagem={sensorInfravermelho} acessorio='Sensor Infravermelho' />
                <AcessorioCard imagem={laminas} acessorio='Lâminas' />
                <AcessorioCard imagem={travaLaminas} acessorio='Trava Lâminas' />
                <AcessorioCard imagem={travaQueda} acessorio='Trava Anti-Queda' />
                <AcessorioCard imagem={eixo} acessorio='Eixo' />
                <AcessorioCard imagem={esmaga} acessorio='Sensor Anti-Esmagamento' />
                <AcessorioCard imagem={trilha} acessorio='Guías ou Trilhas Laterais' />
                <AcessorioCard imagem={soleiraR} acessorio='Soleira com Reforço' />
                <AcessorioCard imagem={borrachaVedacao} acessorio='Borracha de vedação para soleira' />
            </div>
            <div className='sec-personalizavel-divisoria'></div>
            <SectionOrcamento />
            <SectionDuvidas />
        </section>
    )
}