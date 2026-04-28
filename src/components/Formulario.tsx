import { useState } from 'react'
import Campo from './Campo'
import { emptyForm, validar } from '../utils/validaciones'
import type { FormData, FormErrors } from '../types'

type FormularioProps = {
  onSubmit: (data: FormData) => void
}

const Formulario = ({ onSubmit }: FormularioProps) => {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = () => {
    const errs = validar(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    onSubmit(form)
  }

  const handleReset = () => {
    setForm(emptyForm)
    setErrors({})
  }

  return (
    <div style={{ display: 'grid', gap: 24, gridTemplateColumns: 'minmax(220px, 0.78fr) minmax(0, 1.22fr)' }}>
      <aside style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, padding: 28, background: 'linear-gradient(180deg, rgba(9,14,25,0.96), rgba(17,24,39,0.96))', border: '1px solid rgba(148,163,184,0.12)', boxShadow: '0 24px 60px rgba(0,0,0,0.26)', textAlign: 'left' }}>
        <div style={{ position: 'absolute', inset: '-20% auto auto -10%', width: 180, height: 180, borderRadius: '999px', background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 70%)', pointerEvents: 'none' }} />
        <p style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#7dd3fc', margin: 0 }}>Documentos Automáticos</p>
        <h1 style={{ fontSize: 34, fontWeight: 700, color: '#f8fafc', margin: '14px 0 12px', lineHeight: 1.1 }}>Captura de datos</h1>
        <p style={{ color: '#cbd5e1', margin: 0, fontSize: 15, lineHeight: 1.7 }}>
          Completa la información para generar tu ficha y tu carta con una presentación más sobria y oscura.
        </p>

        <div style={{ marginTop: 28, display: 'grid', gap: 14 }}>
          {[
            'Nombre y contacto en la parte superior.',
            'Datos profesionales agrupados al centro.',
            'Descripción y habilidades al final para cerrar el perfil.',
          ].map((item, index) => (
            <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 16, background: 'rgba(15, 23, 42, 0.72)', border: '1px solid rgba(148,163,184,0.12)' }}>
              <div style={{ width: 28, height: 28, borderRadius: '999px', display: 'grid', placeItems: 'center', background: 'rgba(56,189,248,0.16)', color: '#7dd3fc', fontWeight: 700, flex: '0 0 auto' }}>
                {index + 1}
              </div>
              <p style={{ margin: 0, color: '#e2e8f0', fontSize: 14, lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </aside>

      <div style={{ background: 'rgba(10, 15, 26, 0.92)', borderRadius: 24, padding: '28px 30px', border: '1px solid rgba(148,163,184,0.14)', boxShadow: '0 24px 60px rgba(0,0,0,0.28)' }}>
        <div style={{ display: 'grid', gap: 6, marginBottom: 24 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#f8fafc', margin: 0 }}>Formulario principal</h2>
        </div>

        <h3 style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#38bdf8', marginBottom: 18, marginTop: 0 }}>
          Información personal
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0 16px' }}>
          <Campo containerStyle={{ gridColumn: 'span 12' }} label="Nombre completo" name="nombre" placeholder="Ej. Juan Pérez García" value={form.nombre} onChange={handleChange} error={errors.nombre} />
          <Campo containerStyle={{ gridColumn: 'span 3' }} label="Edad" name="edad" type="number" placeholder="Ej. 28" value={form.edad} onChange={handleChange} error={errors.edad} />
          <Campo containerStyle={{ gridColumn: 'span 5' }} label="Ciudad" name="ciudad" placeholder="Ej. Mexicali, B.C." value={form.ciudad} onChange={handleChange} error={errors.ciudad} />
          <Campo containerStyle={{ gridColumn: 'span 4' }} label="Teléfono" name="telefono" placeholder="Ej. +52 686 123 4567" value={form.telefono} onChange={handleChange} error={errors.telefono} />
          <Campo containerStyle={{ gridColumn: 'span 7' }} label="Dirección" name="direccion" placeholder="Calle, número, colonia" value={form.direccion} onChange={handleChange} error={errors.direccion} />
          <Campo containerStyle={{ gridColumn: 'span 5' }} label="Email" name="email" type="email" placeholder="correo@ejemplo.com" value={form.email} onChange={handleChange} error={errors.email} />
        </div>

        <div style={{ height: 1, background: 'rgba(148,163,184,0.16)', margin: '8px 0 24px' }} />

        <h3 style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#38bdf8', marginBottom: 18, marginTop: 0 }}>
          Información profesional
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '0 16px' }}>
          <Campo containerStyle={{ gridColumn: 'span 12' }} label="Ocupación / Puesto" name="ocupacion" placeholder="Ej. Desarrollador Web" value={form.ocupacion} onChange={handleChange} error={errors.ocupacion} />
          <Campo containerStyle={{ gridColumn: 'span 12' }} label="Empresa / Institución (opcional)" name="empresa" placeholder="Ej. Tech Solutions S.A." value={form.empresa} onChange={handleChange} error={errors.empresa} />
          <Campo containerStyle={{ gridColumn: 'span 12' }} label="Habilidades (separadas por comas)" name="habilidades" placeholder="Ej. React, TypeScript, Diseño UX" value={form.habilidades} onChange={handleChange} error={errors.habilidades} />
          <Campo containerStyle={{ gridColumn: 'span 12' }} label="Descripción personal / Perfil" name="descripcion" placeholder="Escribe una breve descripción de ti mismo..." value={form.descripcion} onChange={handleChange} error={errors.descripcion} textarea />
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <button
            onClick={handleSubmit}
            style={{ flex: '1 1 240px', padding: '14px 18px', background: 'linear-gradient(135deg, #0f172a, #1d4ed8)', color: '#f8fafc', border: '1px solid rgba(96,165,250,0.35)', borderRadius: 14, fontWeight: 700, fontSize: 15, cursor: 'pointer', boxShadow: '0 10px 24px rgba(29,78,216,0.24)' }}
          >
            Generar documentos
          </button>
          <button
            onClick={handleReset}
            style={{ padding: '14px 24px', background: 'rgba(15,23,42,0.8)', color: '#cbd5e1', border: '1px solid rgba(148,163,184,0.16)', borderRadius: 14, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Formulario
