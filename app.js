import express from "express";

const app = express()

const PORT = process.env.PORT || 3080

app.listen(PORT, ()=>{
    console.log(`Aplicação online na porta: ${PORT}`)
})

app.use(express.json())

