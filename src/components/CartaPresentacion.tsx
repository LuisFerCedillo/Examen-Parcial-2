import { printSection } from '../utils/validaciones'
import type { FormData } from '../types'

type CartaPresentacionProps = {
  datos: FormData
  onNuevo: () => void
}

const CartaPresentacion = ({ datos, onNuevo }: CartaPresentacionProps) => {
  const hoy = new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })
  const habilidadesList = datos.habilidades
    ? datos.habilidades.split(',').map(h => h.trim()).filter(Boolean)
    : []

  const btnStyle: React.CSSProperties = {
    padding: '10px 24px', borderRadius: 8, border: 'none',
    cursor: 'pointer', fontWeight: 700, fontSize: 13, color: '#fff',
  }

  return (
    <div>
      {/* Barra superior */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1a1a2e', margin: 0 }}>Carta de Presentación</h2>
          <p style={{ color: '#6b7280', margin: '4px 0 0', fontSize: 14 }}>Documento 2 — Generada automáticamente</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ ...btnStyle, background: '#4f46e5' }} onClick={() => printSection('carta-presentacion')}>🖨️ Imprimir</button>
          <button style={{ ...btnStyle, background: '#374151' }} onClick={onNuevo}>Nuevo</button>
        </div>
      </div>

      {/* Documento */}
      <div id="carta-presentacion" style={{ fontFamily: 'Georgia, serif', maxWidth: 680, margin: '0 auto', padding: 48, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', lineHeight: 1.8 }}>

        {/* Membrete */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <p style={{ fontSize: 18, fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{datos.nombre}</p>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>
              {datos.ocupacion}{datos.empresa ? ` · ${datos.empresa}` : ''}
            </p>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '2px 0 0' }}>{datos.email} · {datos.telefono}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>{datos.ciudad}</p>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{hoy}</p>
          </div>
        </div>

        <div style={{ borderTop: '2px solid #1a1a2e', marginBottom: 32 }} />

        {/* Destinatario */}
        <p style={{ fontSize: 14, color: '#374151', marginBottom: 4 }}>A quien corresponda,</p>
        <p style={{ fontSize: 14, color: '#374151', marginBottom: 28 }}>
          {datos.empresa ? datos.empresa : 'Estimado/a responsable de selección'}
        </p>

        {/* Cuerpo */}
        <p style={{ fontSize: 14, color: '#374151', marginBottom: 20 }}>
          Por medio de la presente, me permito presentarme. Mi nombre es <strong>{datos.nombre}</strong>,
          tengo <strong>{datos.edad} años</strong> y resido actualmente en <strong>{datos.ciudad}</strong>.
          Me desempeño como <strong>{datos.ocupacion}</strong>{datos.empresa ? ` en ${datos.empresa}` : ''}.
        </p>

        <p style={{ fontSize: 14, color: '#374151', marginBottom: 20 }}>
          {datos.descripcion}
        </p>

        {habilidadesList.length > 0 && (
          <p style={{ fontSize: 14, color: '#374151', marginBottom: 20 }}>
            Entre mis principales habilidades se encuentran: <strong>{habilidadesList.join(', ')}</strong>;
            mismas que he desarrollado a lo largo de mi trayectoria y que estoy seguro/a contribuirán de manera positiva.
          </p>
        )}

        <p style={{ fontSize: 14, color: '#374151', marginBottom: 48 }}>
          Quedo a sus órdenes para cualquier información adicional. Pueden contactarme al correo{' '}
          <strong>{datos.email}</strong> o al teléfono <strong>{datos.telefono}</strong>.
          Agradezco de antemano la atención brindada a la presente.
        </p>

        <p style={{ fontSize: 14, color: '#374151', marginBottom: 48 }}>Atentamente,</p>

        {/* Firma */}
        <div style={{ borderTop: '1px solid #1a1a2e', width: 220, paddingTop: 10, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{datos.nombre}</p>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '4px 0 0' }}>{datos.ocupacion}</p>
        </div>
      </div>
    </div>
  )
}

export default CartaPresentacion
