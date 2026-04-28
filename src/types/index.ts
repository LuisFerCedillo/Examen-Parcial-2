export type FormData = {
  nombre: string
  edad: string
  direccion: string
  ciudad: string
  telefono: string
  email: string
  ocupacion: string
  empresa: string
  habilidades: string
  descripcion: string
}

export type FormErrors = Partial<Record<keyof FormData, string>>
