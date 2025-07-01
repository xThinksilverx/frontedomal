function validateLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Precisa de email e senha.' });
  }
  next();
}

module.exports = validateLogin;