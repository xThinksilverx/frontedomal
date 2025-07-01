const Orders = require('../models/orders');

class OrdersControllers {
    static async findAllOrders(req, res) {
        try {
            const orders = await Orders.findAll();
            return res.status(200).json(orders);
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar os pedidos', error: err.message });
        }
    }
    
    static async findOrderById(req, res) {
        try {
            const { id } = req.params;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Id não encontrado' });
            }
            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar o pedido', error: err.message });
        }
    }
    static async createOrder(req, res) {
        try {
            const { userId, produtos } = req.body;
            const newOrder = await Orders.create({ userId, produtos });
            return res.status(201).json(newOrder);
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao criar o pedido', error: err.message });
        }
    }
    static async updateOrder(req, res) {
        try {
            const { id } = req.params;
            const { userId, produtos } = req.body;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            order.userId = userId;
            order.produtos = produtos;
            await order.save();
            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao atualizar o pedido', error: err.message });
        }
    }
    static async deleteOrder(req, res) {
        try {
            const { id } = req.params;
            const order = await Orders.findByPk(id);
            if (!order) {
                return res.status(404).json({ message: 'Pedido não encontrado' });
            }
            await order.destroy();
            return res.status(204).send();
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao deletar o pedido', error: err.message });
        }
    }
    static async findOrdersByUserId(req, res) {
        try {
            const { id } = req.params;
            const orders = await Orders.findAll({ where: { userId: id } });
            if (orders.length === 0) {
                return res.status(404).json({ message: 'Nenhum pedido encontrado para este usuário' });
            }
            return res.status(200).json(orders);
        } catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar os pedidos', error: err.message });
        }
    }
}
module.exports = OrdersControllers;