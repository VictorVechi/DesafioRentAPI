import VeiculosModel from "../models/VeiculosModel"


class VeiculoController {

    /**
     * @param {Express} app
     */

    static rotas(app){

        app.get('/veiculos', async (request, response) => {
            try {
                const veiculos = await VeiculosModel.findAll()
                response.status(200).json(veiculos)
            } catch(error){
                response.status(400).json({error: true, message:error})
            }

        })

        app.get('/veiculos/:id', (request, response) => {
            

        })

        app.post('/veiculos', (request, response) => {
            

        })

        app.put('/veiculos:id', (request, response) => {
            

        })

        app.delete('/veiculos:id', (request, response) => {
            

        })
    }
} export default VeiculoController