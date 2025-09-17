import './HeaderPt1.css'
import logo from '../../assets/logo.png'
import telefone from '../../assets/icon-telefone.png'
import email from '../../assets/icon-email.png'

export const HeaderPt1 = () => {
    return (
        <section className='headerPt1-section'>
            <div className='headerPt1-container'>
                <div className='headerPt1-logo'>
                    <img style={{width: '210px', height: '200px'}} src={logo} alt="logo da eletroportas" />
                </div>
                <div className='headerPt1-faleconosco'>
                    <img src={telefone} alt="icon telefone"/>
                    <div>
                        <h3>Fale conosco</h3>
                        <p>(71) 99610-2055 Salvador</p>
                        <p>(77) 99862-2777 Barreiras</p>
                    </div>
                </div>
                <div className='headerPt1-faleconosco'>
                    <img src={email} alt="icon email" />
                    <div>
                        <h3>Mande um e-mail</h3>
                        <p>contato@eletroportas.com.br</p>
                    </div>
                </div>
            </div>
        </section>
    )
}