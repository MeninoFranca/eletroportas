import { useState } from 'react'
import './MapasTabs.css'

export const MapasTabs = () => {

    const [tabClicada, setTabClicada] = useState('Salvador')

    return (
        <div className='mapas-container'>
            <div className='mapas-tabs'>
                <h3 onClick={() => setTabClicada('Salvador')} className={tabClicada === 'Salvador' ? 'tab-clicada' : ''}>
                    Salvador
                </h3>
                <h3 onClick={() => setTabClicada('Feira de Santana')} className={tabClicada === 'Feira de Santana' ? 'tab-clicada' : ''}>
                    Feira de Santana
                </h3>
                <h3 onClick={() => setTabClicada('Barreiras')} className={tabClicada === 'Barreiras' ? 'tab-clicada' : ''}>
                    Barreiras
                </h3>
            </div>
            <div className='mapa-container'>
                {
                    tabClicada === 'Salvador' && (
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2253996300205!2d-38.36024848940539!3d-12.893222987362464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716166036ddf90f%3A0x700bfeb8b24d605b!2sR.%20Tancredo%20Neves%20da%20Ceasa%2C%20100%20-%20Jardim%20das%20Margaridas%2C%20Salvador%20-%20BA%2C%2041502-095!5e0!3m2!1spt-BR!2sbr!4v1716352338160!5m2!1spt-BR!2sbr" className='iframe'></iframe>
                        </div>
                    )
                }
                {
                    tabClicada === 'Feira de Santana' && (
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7377743697366!2d-38.946780789416145!3d-12.266016487938138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71437753336cc47%3A0x2c0a72d295fee32d!2sAv.%20Pres.%20Dutra%2C%202457%20-%20Bras%C3%ADlia%2C%20Feira%20de%20Santana%20-%20BA%2C%2044088-451!5e0!3m2!1spt-BR!2sbr!4v1716352529168!5m2!1spt-BR!2sbr" className='iframe'></iframe>
                        </div>
                    )
                }
                {
                    tabClicada === 'Barreiras' && (
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.552197399781!2d-44.97581178941796!3d-12.142761688051952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75f8acdc0ff7cdb%3A0xd289fb422c137501!2sAv.%20Ant%C3%B4nio%20Carlos%20Magalh%C3%A3es%2C%202524%20-%20Rio%20Grande%2C%20Barreiras%20-%20BA%2C%2047802-500!5e0!3m2!1spt-BR!2sbr!4v1716352600336!5m2!1spt-BR!2sbr" className='iframe'></iframe>
                        </div>
                    )
                }
            </div>
        </div>
    )
}