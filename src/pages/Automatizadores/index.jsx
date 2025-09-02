import { MiniSection } from '../../components/MiniSection'
import './Automatizadores.css'
import producao from '../../assets/producao.jpg'
import { SectionAutomatizadores } from '../../components/SectionAutomatizadores'
import { SectionEspecialista2 } from '../../components/SectionEspecialista2'

export const Automatizadores = () => {
    return (
        <section>
            <MiniSection path='/automatizadores' imagem={producao} titulo='Automatizadores' />
            <div className='automat-divisor'></div>
            <SectionAutomatizadores />
            <div className='automat-divisor2'></div>
            <SectionEspecialista2 />
        </section>
    )
}