const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = 'CHAVE SECRETA DO JWT';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Sem Token' });
  }

  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error('Erro ao verificar token:', err.message);
      return res.status(403).json({ error: 'Token errado.' });
    }
    req.user = { id: decoded.id, name: decoded.name };
    next();
  });
}

module.exports = authenticateToken;
