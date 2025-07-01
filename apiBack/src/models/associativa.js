const Orders = require('./orders');
const Produtos = require('./produtos');
const OrderProdutos = require('./orderProdutos');

Orders.belongsToMany(Produtos, {
  through: OrderProdutos,
  foreignKey: 'orderId',
  otherKey: 'produtosId'
});

Produtos.belongsToMany(Orders, {
  through: OrderProdutos,
  foreignKey: 'produtosId',
  otherKey: 'orderId'
});

module.exports = {
  Orders,
  Produtos,
  OrderProdutos
};
