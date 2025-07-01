import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Home() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    api.get('/produtos').then(res => setProdutos(res.data))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            {produto.name} - R$ {produto.price}
          </li>
        ))}
      </ul>
    </div>
  )
}