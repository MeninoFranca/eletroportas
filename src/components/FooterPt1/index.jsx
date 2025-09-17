import './FooterPt1.css'
import logo from '../../assets/logo.png'
import relogio from '../../assets/icon-relogio.png'
import placeholder from '../../assets/icon-placeholder.png'

export const FooterPt1 = () => {
    return (
        <div className='rodape-parte1'>
            <div className='rodape-logo'>
               <img src={logo} loading='lazy' />
            </div>
            <div className='rodape-infos'>
                <div>
                    <img src={relogio} />
                    <h5>Horário de funcionamento</h5>
                    <p>Seg a Qui 8:00 - 18:00</p>
                    <p>Sex 8:00 - 17:00</p>
                </div>
                <div>
                    <img src={placeholder} />
                    <h5>Endereços</h5>
                    <p><b>Salvador:</b> Rua Tancredo Neves da Ceasa, 100
                        Jardim das Margaridas</p>
                    <p><b>Barreiras:</b> Av. Antônio Carlos Magalhães, 2524
                        Serra do Mimo</p>
                </div>
            </div>
        </div>
    )
}