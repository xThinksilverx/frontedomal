import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CategoryCreate() {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.post('/categorias', { name })
      navigate('/categorias')
    } catch (err) {
      setError('Erro ao cadastrar categoria.')
    }
  }

  return (
    <div className="container-branco">
      <h2>Cadastrar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome da categoria"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br />
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}