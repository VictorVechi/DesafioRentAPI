import express from "express";
import VeiculosController from "./src/controller/VeiculosController.js";
import sequelize from "./src/config/database.js";
import cors from "cors";

// Inicia o express
const app = express()

//Seleciona uma porta setado no .env ou a porta 3080
const PORT = 3000

try {
    //Sincroniza as models com as entidades no banco de dados
    await sequelize.sync()
    //Inicia o servidor
    app.listen(PORT, ()=>{
        console.log(`Aplicação online na porta: ${PORT}`)
    })
} catch (error) {
    console.log(error.message)
}


//Configura o express para receber requisições de outros domínios
app.use(cors('*'))
//Configura o express para receber dados em json
app.use(express.json())

//Inicializa as rotas para veículos
VeiculosController.rotas(app)