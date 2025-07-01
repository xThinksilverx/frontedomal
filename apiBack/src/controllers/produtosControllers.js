const Produtos = require('../models/produtos');

class ProdutosControllers {
    static async createProdutos(req, res) {
        try {
            const { name, price, categoriaId } = req.body;

            if (!name || !price || !categoriaId) {
                return res.status(400).json({ message: 'Nome, preço e categoriaId é necessario' });
            }

            const produtos = await Produtos.create({
                name,
                price,
                categoriaId
            });
            return res.status(201).json(produtos);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro no produto', error: err.message });
        }
    }
    static async updateProdutos(req, res) {
        try {
            const { id } = req.params;
            const { name, price, categoriaId } = req.body;
            const produtos = await Produtos.findByPk(id);
            if (!produtos) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            produtos.name = name;
            produtos.price = price;
            produtos.categoriaId = categoriaId;
            await produtos.save();
            return res.status(200).json(produtos);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro no atualizar', error: err.message });
        }
    }
    static async deleteProdutos(req, res) {
        try {
            const { id } = req.params;
            const produtos = await Produtos.findByPk(id);
            if (!produtos) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            await produtos.destroy();
            return res.status(204).send();
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro ao deletar produto', error: err.message });
        }
    }
    static async findAllProdutos(req, res) {
        try {
            const produtos = await Produtos.findAll();
            return res.status(200).json(produtos);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar produtos', error: err.message });
        }
    }
    static async findProdutosById(req, res) {
        try {
            const { id } = req.params;
            const produtos = await Produtos.findByPk(id);
            if (!produtos) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar produto', error: err.message });
        }
    }
    static async findProdutosByCategoriaId(req, res) {
        try {
            const { id } = req.params;
            const produtos = await Produtos.findAll({ where: { categoriaId: id } });
            if (!produtos || produtos.length === 0) {
                return res.status(404).json({ message: 'Nenhum produto encontrado para esta categoria' });
            }
            return res.status(200).json(produtos);
        }
        catch (err) {
            return res.status(500).json({ message: 'Erro ao buscar produtos por categoria', error: err.message });
        }
    }
    static async findProdutosByOrderId(req, res) {
        try {
            const { id } = req.params;
            const produtos = await Produtos.findAll({ where: { orderId: id } });
            if (!produtos || produtos.length === 0) {
                return res.status(404).json({ message: 'Nenhum produto encotnrado' });
            }
            return res.status(200).json(produtos);
        }
        catch (err) {
            return res.status(500).json({ message: 'Nenhum buscar produtos por pedido', error: err.message });
        }
    }
}
module.exports = ProdutosControllers;
