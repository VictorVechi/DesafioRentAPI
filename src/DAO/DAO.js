
class DAO {
    
    // Cria um registro no banco de dados
    static async create(model, data){
        return await model.create(data)
    }

    // Busca todos os registros no banco de dados
    static async findAll(model){
        return await model.findAll()
    }

    // Busca um registro no banco de dados pelo id
    static async findById(model, id){
        return await model.findByPk(id)
    }

    // Atualiza um registro no banco de dados
    static async updateById(model){
        return await model.save()
    }

    // Deleta um registro no banco de dados
    static async deleteById(model){
        return await model.destroy()
    }

} export default DAO