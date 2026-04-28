import type { FormData, FormErrors } from '../types'

export const emptyForm: FormData = {
  nombre: '',
  edad: '',
  direccion: '',
  ciudad: '',
  telefono: '',
  email: '',
  ocupacion: '',
  empresa: '',
  habilidades: '',
  descripcion: '',
}

export function validar(form: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!form.nombre.trim())
    errors.nombre = 'El nombre es obligatorio.'
  else if (form.nombre.trim().length < 3)
    errors.nombre = 'Mínimo 3 caracteres.'

  if (!form.edad)
    errors.edad = 'La edad es obligatoria.'
  else if (isNaN(Number(form.edad)) || +form.edad < 1 || +form.edad > 120)
    errors.edad = 'Ingresa una edad válida (1-120).'

  if (!form.direccion.trim())
    errors.direccion = 'La dirección es obligatoria.'

  if (!form.ciudad.trim())
    errors.ciudad = 'La ciudad es obligatoria.'

  if (!form.telefono.trim())
    errors.telefono = 'El teléfono es obligatorio.'
  else if (!/^\+?[\d\s\-()]{7,15}$/.test(form.telefono))
    errors.telefono = 'Teléfono no válido.'

  if (!form.email.trim())
    errors.email = 'El email es obligatorio.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Email no válido.'

  if (!form.ocupacion.trim())
    errors.ocupacion = 'La ocupación es obligatoria.'

  if (!form.descripcion.trim())
    errors.descripcion = 'La descripción es obligatoria.'
  else if (form.descripcion.trim().length < 20)
    errors.descripcion = 'Mínimo 20 caracteres.'

  return errors
}

export function printSection(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  const w = window.open('', '_blank')
  if (!w) return
  w.document.write(`
    <html>
      <head>
        <title>Documento</title>
        <style>
          body { font-family: Georgia, serif; padding: 40px; color: #1a1a2e; }
          * { box-sizing: border-box; }
        </style>
      </head>
      <body>${el.innerHTML}</body>
    </html>
  `)
  w.document.close()
  w.print()
}
