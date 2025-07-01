/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Rotas para gerenciar usuários
 *
 * /users:
 *   get:
 *     summary: Lista os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada
 *   post:
 *     summary: Cria um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 *
 * /users/login:
 *   post:
 *     summary: Faz login
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário logado e token valido po
 *       401:
 *         description: Credenciais inválidas
 *
 * /users/{id}:
 *   get:
 *     summary: Busca usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 *   put:
 *     summary: Atualiza usuário pelo ID
 *     tags: [Users]
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
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado
 *   delete:
 *     summary: Remove usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Usuário removido
 */


const express = require('express');
const router = express.Router();

const UserController = require('../controllers/usersControllers');  

router.post('/login', UserController.login);
router.put('/:id', UserController.updateUser);
router.post('/', UserController.createUser);
router.get('/', UserController.findAllUsers);
router.get('/:id', UserController.findUserById);
router.delete('/:id', UserController.deleteUser);
router.get('/:id/orders', UserController.findOrdersByUserId);

module.exports = router;
