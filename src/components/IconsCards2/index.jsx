import './IconsCards2.css'
import spray from '../../assets/icon-spray.png'

export const IconsCards2 = () => {
    return (
        <div className='icon-card-container'>
            <img src={spray} loading="lazy"/>
            <h2>Pintura Durável e <span>Protetora</span></h2>
            <p>Nossas portas são pintadas com materiais de alta resistência, proporcionando proteção contra intempéries e mantendo uma aparência estética por muitos anos.</p>
        </div>
    )
}