/**
 * @swagger
 * components:
 *   schemas:
 *     produtos:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 10
 *         name:
 *           type: string
 *           example: Cadeira
 *         price:
 *           type: number
 *           format: float
 *           example: 69.69
 *         categoriaId:
 *           type: integer
 *           example: 2
 *       required:
 *         - name
 *         - price
 *         - categoriaId
 * tags:
 *   name: Categorias
 *   description: Rotas para gerenciar categorias
 *
 * /categorias:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *
 * /categorias/{id}:
 *   get:
 *     summary: Busca uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoria encontrada
 *       404:
 *         description: Categoria não encontrada
 *   put:
 *     summary: Atualiza uma categoria pelo ID
 *     tags: [Categorias]
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
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *   delete:
 *     summary: Remove uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Categoria removida com sucesso
 */


const express = require('express');
const router = express.Router();
const categoriasControllers = require('../controllers/categoriasControllers.js');
const authenticated = require('../middlewares/authenticateToken.js');

router.use(authenticated);

router.get('/', categoriasControllers.findAllCategorias);
router.get('/:id', categoriasControllers.findCategoriaById);
router.post('/', categoriasControllers.createCategoria);
router.put('/:id', categoriasControllers.updateCategoria);
router.delete('/:id', categoriasControllers.deleteCategoria);
router.get('/produtos/:id', categoriasControllers.findProdutosByCategoriaId);

module.exports = router;