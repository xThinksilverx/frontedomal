const express = require('express');
const app = express();
const database = require('./config/db.js');
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const produtosRoutes = require('./routes/produtosRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const categoriasRoutes = require('./routes/categoriasRoutes.js');
const ordersRoutes = require('./routes/ordersRoutes.js');

database.db.sync({ alter: true })
  .then(() => {
    console.log('Bd conectado');
  })
  .catch((err) => {
    console.error('Bd com erro', err.message);
  });

app.get('/', (req, res) => {
  res.send('Funcinouuu');
});

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger.js');

app.get('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/produtos', produtosRoutes);
app.use('/users', usersRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Erro rota' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Deu certo, esta na porta ${PORT}`);
});
