import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Inicio } from './pages/Inicio'
import { Footer } from './components/Footer'
import { PortaInstalada } from './pages/PortaInstalada'
import { Revender } from './pages/Revender'
import { Acessorios } from './pages/Acessorios'
import { Automatizadores } from './pages/Automatizadores'
import { Sobre } from './pages/Sobre'
import { Pintura } from './pages/Pintura'
import { Atendimento } from './pages/Atendimento'
import { WppButton } from './components/WppButton'

function App() {
  return (
    <section className='main-container'>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/portainstalada' element={<PortaInstalada />} />
          <Route path='/revender' element={<Revender />} />
          <Route path='/acessorios' element={<Acessorios />} />
          <Route path='/automatizadores' element={<Automatizadores />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/pintura' element={<Pintura />} />
          <Route path='/atendimento' element={<Atendimento />} />
        </Routes>

        <Footer />
        <WppButton />
        
      </BrowserRouter>

    </section>
  )
}

export default App
