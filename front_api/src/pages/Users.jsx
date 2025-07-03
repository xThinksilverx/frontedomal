import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api.get('/users').then(res => setUsers(res.data))
  }, [])

  return (
    <div className="container-branco">
      <h1>Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}