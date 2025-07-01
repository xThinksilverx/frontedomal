const Categorias = require('../models/categorias');

class CategoriasControllers {
    static async createCategoria(req, res){
        try{
            const {name} = req.body;

            if(!name){
                return res.status(400).json({message: 'Precisa de nome'});
            }

            const categorias = await Categorias.create({
                name
            });
            return res.status(201).json(categorias);
        } catch(err){
            return res.status(500).json({message: 'erro na criação', error: err.message});
        }
    }
    static async updateCategoria(req, res){
        try{
            const {id} = req.params;
            const {name} = req.body;
            const categoria = await Categorias.findByPk(id);
            if(!categoria){
                return res.status(404).json({message: 'Nao encontrda'});
            }
            categoria.name = name;
            await categoria.save();
            return res.status(200).json(categoria);
    } catch(err){
            return res.status(500).json({message: 'Erro ao atualizar', error: err.message});
        }
    }
    static async deleteCategoria(req, res){
        try{
            const {id} = req.params;
            const categoria = await Categorias.findByPk(id);
            if(!categoria){
                return res.status(404).json({message: 'Categoria não encontrada'});
            }
            await categoria.destroy();
            return res.status(204).send();
        } catch(err){
            return res.status(500).json({message: 'Erro ao deletar categoria', error: err.message});
        }
    }
    static async findAllCategorias(req, res){
        try{
            const categorias = await Categorias.findAll();
            return res.status(200).json(categorias);
        } catch(err){
            return res.status(500).json({message: 'Erro ao buscar', error: err.message});
        }
    }
    static async findCategoriaById(req, res){
        try{
            const {id} = req.params;
            const categoria = await Categorias.findByPk(id);
            if(!categoria){
                return res.status(404).json({message: 'Não encontrada'});
            }
            return res.status(200).json(categoria);
        } catch(err){
            return res.status(500).json({message: 'Erro ao buscar categoria', error: err.message});
        }
    }
    static async findProdutosByCategoriaId(req, res){
        try{
            const {id} = req.params;
            const categoria = await Categorias.findByPk(id, {
                include: {
                    association: 'produtos'
                }
            });
            if(!categoria){
                return res.status(404).json({message: 'Não encontrada'});
            }
            return res.status(200).json(categoria.produtos);
        } catch(err){
            return res.status(500).json({message: 'Erro categoria', error: err.message});
        }
    }
}
module.exports = CategoriasControllers;
