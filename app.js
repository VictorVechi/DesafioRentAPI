import express from "express";
import VeiculoController from "./src/controller/VeiculoController";


const app = express()

const PORT = process.env.PORT || 3080

app.listen(PORT, ()=>{
    console.log(`Aplicação online na porta: ${PORT}`)
})

app.use(express.json())

VeiculoController.rotas(app)