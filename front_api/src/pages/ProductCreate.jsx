import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function ProductCreate() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [categorias, setCategorias] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/categorias').then(res => setCategorias(res.data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.post('/produtos', {
        name,
        price: Number(price),
        categoriaId: Number(categoriaId)
      })
      navigate('/home')
    } catch (err) {
      setError('Erro ao cadastrar produto.')
    }
  }

  return (
    <div className="container-branco">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        /><br />
        <input
          type="number"
          step="0.01"
          placeholder="Preço"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        /><br />
          <select
    value={categoriaId}
    onChange={e => setCategoriaId(e.target.value)}
    required
  >
    <option value="">Selecione a categoria</option>
    {categorias.map(cat => (
      <option key={cat.id} value={cat.id}>{cat.name}</option>
    ))}
  </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}