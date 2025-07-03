import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Categorias from './pages/Categorias'
import Pedidos from './pages/Pedidos'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductCreate from './pages/ProductCreate'
import CategoryCreate from './pages/CategoryCreate'
import OrderCreate from './pages/OrderCreate'
import PrivateRoute from './Autorizacao/PrivateRoute'

export default function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'))

  function handleLogout() {
    localStorage.removeItem('token')
    setIsLogged(false)
    window.location.href = '/login'
  }
  return (
  <Router>
    <div className="main-content-center">
      {isLogged && (
        <nav className="sidebar">
          <Link to="/users">Usuários</Link>
          <Link to="/pedidos">Pedidos</Link>
          <Link to="/pedidos/novo">Novo Pedido</Link>
          <Link to="/categorias">Categorias</Link>
          <Link to="/categorias/nova">Nova Categoria</Link>
          <Link to="/home">Produtos</Link>
          <Link to="/produtos/novo">Novo Produto</Link>
          <button onClick={handleLogout}>Sair</button>
        </nav>
      )}
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <PrivateRoute><Home /></PrivateRoute>
          } />
          <Route path="/users" element={
            <PrivateRoute><Users /></PrivateRoute>
          } />
          <Route path="/categorias" element={
            <PrivateRoute><Categorias /></PrivateRoute>
          } />
          <Route path="/categorias/nova" element={
            <PrivateRoute><CategoryCreate /></PrivateRoute>
          } />
          <Route path="/pedidos" element={
            <PrivateRoute><Pedidos /></PrivateRoute>
          } />
          <Route path="/pedidos/novo" element={
            <PrivateRoute><OrderCreate /></PrivateRoute>
          } />
          <Route path="/produtos/novo" element={
            <PrivateRoute><ProductCreate /></PrivateRoute>
          } />
        </Routes>
      </div>
    </div>
  </Router>
)
}