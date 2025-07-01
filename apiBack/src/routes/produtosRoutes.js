/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Rotas para gerenciar produtos
 *
 * /produtos:
 *   get:
 *     summary: Mostra todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Mostra lista de produtos
 *   post:
 *     summary: Cria um produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/produtos'
 *     responses:
 *       201:
 *         description: Produto criado
 *       400:
 *         description: Dados errados
 *
 * /produtos/{id}:
 *   get:
 *     summary: Busca o produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *       404:
 *         description: Produto não encontrado
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
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
 *             $ref: '#/components/schemas/produtos'
 *     responses:
 *       200:
 *         description: Produto atualizado
 *   delete:
 *     summary: Remove um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 */

const express = require('express');
const router = express.Router();
const produtosControllers = require('../controllers/produtosControllers');

router.get('/', produtosControllers.findAllProdutos);
router.get('/:id', produtosControllers.findProdutosById);
router.post('/', produtosControllers.createProdutos);
router.put('/:id', produtosControllers.updateProdutos);
router.delete('/:id', produtosControllers.deleteProdutos);
router.get('/categoria/:id', produtosControllers.findProdutosByCategoriaId);
router.get('/orders/:id', produtosControllers.findProdutosByOrderId);

module.exports = router;