import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WppButton } from './components/WppButton'

// Lazy loading das páginas
const Inicio = lazy(() => import('./pages/Inicio').then(module => ({ default: module.Inicio })))
const PortaInstalada = lazy(() => import('./pages/PortaInstalada').then(module => ({ default: module.PortaInstalada })))
const Revender = lazy(() => import('./pages/Revender').then(module => ({ default: module.Revender })))
const Acessorios = lazy(() => import('./pages/Acessorios').then(module => ({ default: module.Acessorios })))
const Automatizadores = lazy(() => import('./pages/Automatizadores').then(module => ({ default: module.Automatizadores })))
const Sobre = lazy(() => import('./pages/Sobre').then(module => ({ default: module.Sobre })))
const Pintura = lazy(() => import('./pages/Pintura').then(module => ({ default: module.Pintura })))
const Atendimento = lazy(() => import('./pages/Atendimento').then(module => ({ default: module.Atendimento })))

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#2A5E9E'
  }}>
    Carregando...
  </div>
)

function App() {
  return (
    <section className='main-container'>
      <BrowserRouter>

        <Header />

        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>

        <Footer />
        <WppButton />
        
      </BrowserRouter>

    </section>
  )
}

export default App
