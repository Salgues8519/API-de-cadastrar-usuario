import { Router } from "express";
import { cadastrar, detalharUsuario, excluirUsuario, fraseInicial, listar } from "./controladorUsuario";


const rotas = Router()

rotas.get('/', fraseInicial)
rotas.post('/usuarios', cadastrar)
rotas.get('/usuarios', listar)
rotas.get('/usuarios/:id', detalharUsuario)
rotas.delete('/usuarios/:id', excluirUsuario)








export default rotas