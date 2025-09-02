import { FooterPt1 } from '../FooterPt1'
import { FooterPt2 } from '../FooterPt2'
import { FooterPt3 } from '../FooterPt3'
import './Footer.css'

export const Footer = () => {
    return (
        <footer className='rodape'>
            <section className='rodape-container'>
                <FooterPt1 />
                <div className='rodape-linha'></div>
                <FooterPt2 />
                <FooterPt3 />
            </section>
        </footer>
    )
}