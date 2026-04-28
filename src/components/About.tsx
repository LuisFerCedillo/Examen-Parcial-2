const About = () => {
  const techs: [string, string][] = [
    ['React', '⚛️'],
    ['TypeScript', '🔷'],
    ['Vite', '⚡'],
  ]
  return (
    <div style={{ background: 'rgba(10, 15, 26, 0.92)', borderRadius: 20, padding: '36px 28px', boxShadow: '0 24px 60px rgba(0,0,0,0.28)', textAlign: 'center', color: '#e2e8f0' }}>
      <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>

      <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f8fafc', margin: '0 0 8px' }}>Documentos Automáticos</h2>

      <p style={{ color: '#38bdf8', fontWeight: 600, fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', margin: '0 0 20px' }}>
        Generador de Documentos Personales
      </p>

      <p style={{ color: '#cbd5e1', fontSize: 15, lineHeight: 1.8, maxWidth: 560, margin: '0 auto 28px' }}>
        Aplicación web que permite capturar información personal y generar dos documentos formales: una <strong style={{ color: '#f8fafc' }}>Ficha de Datos</strong> y una <strong style={{ color: '#f8fafc' }}>Carta de Presentación</strong>.
      </p>

      {/* Tecnologías */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, maxWidth: 440, margin: '0 auto 28px' }}>
        {techs.map(([tech, icon]) => (
          <div key={tech} style={{ background: 'rgba(15,23,42,0.7)', borderRadius: 10, padding: '12px 10px', border: '1px solid rgba(148,163,184,0.08)' }}>
            <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#cbd5e1', margin: 0 }}>{tech}</p>
          </div>
        ))}
      </div>

      {/* Características */}
      <div style={{ background: 'rgba(15,23,42,0.6)', borderRadius: 12, padding: '20px 22px', maxWidth: 560, margin: '0 auto 24px', textAlign: 'left', border: '1px solid rgba(148,163,184,0.06)' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#38bdf8', margin: '0 0 10px' }}>
          Características
        </p>
        {[
          '✅ Formulario con validaciones completas',
          '📋 Documento 1: Ficha de Datos con tabla formal',
          '📝 Documento 2: Carta de Presentación automática',
          '🖨️ Impresión directa desde el navegador',
          '📱 Diseño responsivo',
        ].map((item, i) => (
          <p key={i} style={{ fontSize: 14, color: '#cbd5e1', margin: '6px 0' }}>{item}</p>
        ))}
      </div>

      {/* Autor */}
      <div style={{ borderTop: '1px solid rgba(148,163,184,0.06)', paddingTop: 20, marginTop: 6 }}>
        <p style={{ fontSize: 13, color: '#94a3b8' }}>
          Desarrollado por <strong style={{ color: '#f8fafc' }}>Luis Cedillo</strong>
        </p>
        <p style={{ fontSize: 13, color: '#94a3b8', margin: '4px 0 0' }}>
          UABC - Desarrollo Web - 2026
        </p>
      </div>
    </div>
  )
}

export default About
