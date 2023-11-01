import VeiculosDAO from "../DAO/VeiculosDAO.js"

class VeiculosController {

    /**
     * @param {Express} app
     */

    static rotas(app) {

        app.get('/veiculos', async (request, response) => {
            try {
                const veiculos = await VeiculosDAO.listarVeiculos()
                response.status(200).json(veiculos)
            } catch (error) {
                response.status(400).json({ error: true, message: error })
            }

        })

        app.get('/veiculos/:id', async (request, response) => {
            try {
                const id = request.params.id
                const veiculo = await VeiculosDAO.listarVeiculoPorId(id)
                if (!!veiculo) {
                    response.status(200).json(veiculo)
                } else {
                    response.status(404).json({ error: false, message: "Veículo não encontrado" })
                }
            } catch (error) {
                response.status(502).json({ error: true, message: error })
            }

        })

        app.post('/veiculos', async (request, response) => {
            try {
                const data = request.body
                const veiculo = await VeiculosDAO.criarVeiculo(data)
                response.status(201).json({ error: false, message: 'Veículo criado com sucesso' })
            } catch (error) {
                response.status(400).json({ error: true, message: error, alerta: 'Verifique os campos e tente novamente' })
            }
        })

        app.put('/veiculos:id', async (request, response) => {
            try {
                const id = request.params.id
                const data = request.body
                const veiculo = await VeiculosDAO.atualizarVeiculo(id, data)
                if (!!veiculo) {
                    response.status(204).json({ error: false, message: 'Veículo atualizado com sucesso' })
                } else {
                    response.status(404).json()
                }
            } catch (error) {
                response.status(400).json({ error: true, message: error, alerta: 'Verifique os campos e tente novamente' })
            }
        })

        app.delete('/veiculos:id', (request, response) => {


        })
    }
} export default VeiculosController