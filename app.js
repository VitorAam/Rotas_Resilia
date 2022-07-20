import express from "express";
import * as dotenv from "dotenv";
import Dicas from "./src/controller/Dicas.js";

dotenv.config()


const port = process.env.PORT || 3000;

const app = express()

app.listen(port, () =>{
    console.log(`Servidor online no endereço http://localhost:${port}`)
})

app.use(express.json())

Dicas.rotas(app)