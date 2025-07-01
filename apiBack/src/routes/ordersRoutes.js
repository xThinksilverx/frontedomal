/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Rotas para gerenciar pedidos
 *
 * /orders:
 *   get:
 *     summary: Lista os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *   post:
 *     summary: Cria um pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               produtos:
 *                 type: array
 *                 items:
 *                   type: integer
 *     responses:
 *       201:
 *         description: Pedido criado
 *
 * /orders/{id}:
 *   get:
 *     summary: Busca um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 *   put:
 *     summary: Atualiza um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *   delete:
 *     summary: Remove um pedido pelo ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pedido removido
 */


const express = require('express');
const router = express.Router();
const ordersControllers = require('../controllers/ordersControllers');



router.get('/', ordersControllers.findAllOrders);
router.get('/:id', ordersControllers.findOrderById);
router.post('/', ordersControllers.createOrder);
router.put('/:id', ordersControllers.updateOrder);
router.delete('/:id', ordersControllers.deleteOrder);
router.get('/user/:id', ordersControllers.findOrdersByUserId);

module.exports = router;

