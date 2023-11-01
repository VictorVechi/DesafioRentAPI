import VeiculosModel from "../models/VeiculosModel.js"


class VeiculosController {

    /**
     * @param {Express} app
     */

    static rotas(app) {

        app.get('/veiculos', async (request, response) => {
            try {
                const veiculos = await VeiculosModel.findAll()
                response.status(200).json(veiculos)
            } catch (error) {
                response.status(400).json({ error: true, message: error })
            }

        })

        app.get('/veiculos/:id', async (request, response) => {
            try {
                const id = request.params.id
                const veiculo = await VeiculosModel.findByPk(id)
                if (!!veiculo) {
                    response.status(200).json(veiculo)
                } else {
                    response.status(404).json({ error: false, message: "Veículo não encontrado" })
                }
            } catch (error) {
                response.status(502).json({ error: true, message: error })
            }

        })

        app.post('/veiculos', (request, response) => {


        })

        app.put('/veiculos:id', (request, response) => {


        })

        app.delete('/veiculos:id', (request, response) => {


        })
    }
} export default VeiculosController