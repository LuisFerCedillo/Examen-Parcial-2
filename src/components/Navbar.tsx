type Vista = 'form' | 'ficha' | 'carta' | 'about'

type NavbarProps = {
  vista: Vista
  setVista: (v: Vista) => void
  hayDatos: boolean
}

const Navbar = ({ vista, setVista, hayDatos }: NavbarProps) => {
  const navBtn = (active: boolean): React.CSSProperties => ({
    padding: '10px 18px',
    borderRadius: 999,
    border: active ? '1px solid rgba(125, 211, 252, 0.34)' : '1px solid transparent',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    background: active ? 'rgba(14, 165, 233, 0.16)' : 'transparent',
    color: active ? '#e0f2fe' : '#94a3b8',
    transition: 'all 0.2s',
  })

  return (
    <nav style={{ background: 'rgba(5, 10, 20, 0.86)', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, boxShadow: '0 12px 30px rgba(0,0,0,0.24)', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(14px)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 22 }}>📋</span>
        <span style={{ color: '#f8fafc', fontWeight: 700, fontSize: 18, letterSpacing: 1 }}>Documentos Automáticos</span>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
        <button style={navBtn(vista === 'form')} onClick={() => setVista('form')}>Formulario</button>
        {hayDatos && <button style={navBtn(vista === 'ficha')} onClick={() => setVista('ficha')}>Ficha</button>}
        {hayDatos && <button style={navBtn(vista === 'carta')} onClick={() => setVista('carta')}>Carta</button>}
        <button style={navBtn(vista === 'about')} onClick={() => setVista('about')}>About</button>
      </div>
    </nav>
  )
}

export default Navbar
