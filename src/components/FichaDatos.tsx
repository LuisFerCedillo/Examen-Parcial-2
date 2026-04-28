import { printSection } from '../utils/validaciones'
import type { FormData } from '../types'

type FichaDatosProps = {
  datos: FormData
  onNuevo: () => void
}

const FichaDatos = ({ datos, onNuevo }: FichaDatosProps) => {
  const hoy = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })
  const folio = Math.random().toString(36).substring(2, 8).toUpperCase()

  const filas: [string, string][] = [
    ['Nombre completo', datos.nombre],
    ['Edad', datos.edad + ' años'],
    ['Dirección', datos.direccion],
    ['Ciudad', datos.ciudad],
    ['Teléfono', datos.telefono],
    ['Correo electrónico', datos.email],
    ['Ocupación', datos.ocupacion],
    ['Empresa / Institución', datos.empresa || '—'],
    ['Habilidades', datos.habilidades || '—'],
  ]

  const btnStyle: React.CSSProperties = {
    padding: '10px 24px', borderRadius: 8, border: 'none',
    cursor: 'pointer', fontWeight: 700, fontSize: 13, color: '#fff',
  }

  return (
    <div>
      {/* Barra superior */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a1a2e', margin: 0 }}>Ficha de Datos</h2>
          <p style={{ color: '#6b7280', margin: '4px 0 0', fontSize: 14 }}>Documento 1 — Reporte personal</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ ...btnStyle, background: '#4f46e5' }} onClick={() => printSection('ficha-datos')}>🖨️ Imprimir</button>
          <button style={{ ...btnStyle, background: '#374151' }} onClick={onNuevo}>Nuevo</button>
        </div>
      </div>

      {/* Documento */}
      <div id="ficha-datos" style={{ fontFamily: 'Georgia, serif', maxWidth: 680, margin: '0 auto', padding: 40, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        
        {/* Encabezado */}
        <div style={{ borderBottom: '3px solid #1a1a2e', paddingBottom: 20, marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#6b7280', margin: 0 }}>Ficha de Registro</p>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: '#1a1a2e', margin: '6px 0 0' }}>DATOS PERSONALES</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: 11, color: '#6b7280', margin: 0 }}>Fecha de emisión</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#1a1a2e', margin: '4px 0 0' }}>{hoy}</p>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {filas.map(([label, val], i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff' }}>
                <td style={{ padding: '12px 16px', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#6b7280', width: '38%', borderBottom: '1px solid #e5e7eb' }}>
                  {label}
                </td>
                <td style={{ padding: '12px 16px', fontSize: 14, color: '#1a1a2e', borderBottom: '1px solid #e5e7eb' }}>
                  {val}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Perfil */}
        <div style={{ marginTop: 28, padding: '20px 24px', background: '#f0f4ff', borderRadius: 8, borderLeft: '4px solid #4f46e5' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#4f46e5', margin: '0 0 8px' }}>Perfil Personal</p>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{datos.descripcion}</p>
        </div>

        {/* Pie */}
        <div style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 11, color: '#9ca3af' }}>Documento generado digitalmente</p>
          <p style={{ fontSize: 11, color: '#9ca3af' }}>Folio: #{folio}</p>
        </div>
      </div>
    </div>
  )
}

export default FichaDatos
