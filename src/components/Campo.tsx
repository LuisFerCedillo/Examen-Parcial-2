type CampoProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  textarea?: boolean
  containerStyle?: React.CSSProperties
}

const Campo = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  textarea,
  containerStyle,
}: CampoProps) => {
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: 14,
    border: error ? '1.5px solid #ef4444' : '1.5px solid #263244',
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    background: 'rgba(10, 15, 26, 0.8)',
    color: '#e5edf9',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
  }

  return (
    <div style={{ marginBottom: 18, ...containerStyle }}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#9fb0c9', marginBottom: 8 }}>
        {label}
      </label>

      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}

      {error && (
        <p style={{ color: '#f87171', fontSize: 12, marginTop: 6 }}>{error}</p>
      )}
    </div>
  )
}

export default Campo
