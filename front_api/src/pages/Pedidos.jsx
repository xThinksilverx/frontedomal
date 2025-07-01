import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    api.get('/orders').then(res => setPedidos(res.data))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Pedidos</h1>
      <ul>
        {pedidos.map(order => (
          <li key={order.id}>
            Pedido #{order.id} - Usuário ID: {order.userId}
          </li>
        ))}
      </ul>
    </div>
  )
}