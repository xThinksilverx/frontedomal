import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function OrderCreate() {
  const [userId, setUserId] = useState('')
  const [users, setUsers] = useState([])
  const [produtos, setProdutos] = useState([])
  const [selectedProdutos, setSelectedProdutos] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data))
    api.get('/produtos').then(res => setProdutos(res.data))
  }, [])

  const handleCheckboxChange = (id) => {
    setSelectedProdutos(prev =>
      prev.includes(id)
        ? prev.filter(pid => pid !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.post('/orders', {
        userId: Number(userId),
        produtos: selectedProdutos
      })
      navigate('/pedidos')
    } catch (err) {
      setError('Erro ao cadastrar pedido.')
    }
  }

  return (
    <div className="container-branco">
      <h2>Cadastrar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuário:</label><br />
        <select
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        >
          <option value="">Selecione o usuário</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name} ({user.email})</option>
          ))}
        </select>
        <br /><br />
        <label>Produtos:</label><br />
        {produtos.map(prod => (
          <div key={prod.id}>
            <label>
              <input
                type="checkbox"
                value={prod.id}
                checked={selectedProdutos.includes(prod.id)}
                onChange={() => handleCheckboxChange(prod.id)}
              />
              {prod.name}
            </label>
          </div>
        ))}
        <br />
        <button type="submit">Cadastrar Pedido</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}