import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Categorias() {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    api.get('/categorias').then(res => setCategorias(res.data))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Categorias</h1>
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  )
}