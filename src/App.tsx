import { useState } from 'react'
import Navbar from './components/Navbar'
import Formulario from './components/Formulario'
import FichaDatos from './components/FichaDatos'
import CartaPresentacion from './components/CartaPresentacion'
import About from './components/About'
import type { FormData } from './types'

type Vista = 'form' | 'ficha' | 'carta' | 'about'

function App() {
  const [vista, setVista] = useState<Vista>('form')
  const [datos, setDatos] = useState<FormData | null>(null)

  const handleSubmit = (data: FormData) => {
    setDatos(data)
    setVista('ficha')
  }

  const handleNuevo = () => {
    setDatos(null)
    setVista('form')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at top, rgba(56,189,248,0.12), transparent 28%), linear-gradient(180deg, #050816 0%, #0b1220 100%)' }}>
      <Navbar
        vista={vista}
        setVista={setVista}
        hayDatos={datos !== null}
      />

      <main style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 20px 56px' }}>
        {vista === 'form' && (
          <Formulario onSubmit={handleSubmit} />
        )}

        {vista === 'ficha' && datos && (
          <FichaDatos datos={datos} onNuevo={handleNuevo} />
        )}

        {vista === 'carta' && datos && (
          <CartaPresentacion datos={datos} onNuevo={handleNuevo} />
        )}

        {vista === 'about' && (
          <About />
        )}
      </main>
    </div>
  )
}

export default App
