import DAO from './DAO.js'
import VeiculosModel from '../models/VeiculosModel.js'
class VeiculosDAO extends DAO {

    // Cria um veiculo no banco de dados
    static async criarVeiculo(data) {
        const response = await this.create(VeiculosModel, data)
        return response
    }

    // Busca todos os veiculos no banco de dados
    static async listarVeiculos() {
        const response = await this.findAll(VeiculosModel)
        return response
    }

    // Busca um veiculo no banco de dados pelo id
    static async listarVeiculoPorId(id) {
        const response = await this.findById(VeiculosModel, id)
        return response
    }

    // Atualiza um veiculo no banco de dados
    static async atualizarVeiculo(id, data) {
        const veiculo = await this.findById(VeiculosModel, id)
        if (!!veiculo) {
            veiculo.locadora = data.locadora
            veiculo.modelo = data.modelo
            veiculo.marca = data.marca
            veiculo.ano = data.ano
            veiculo.motor = data.motor
            veiculo.portas = data.portas
            veiculo.cambio = data.cambio
            veiculo.ar_condicionado = data.ar_condicionado
            const response = await this.updateById(veiculo)
            return response
        } else {
            return false
        }
    }

    // Deleta um veiculo no banco de dados
    static async deletarVeiculo(id) {
        const veiculo = await this.findById(VeiculosModel, id)
        if (!!veiculo) {
            const response = await this.deleteById(veiculo)
            return response
        } else {
            return false
        }
    }

} export default VeiculosDAO