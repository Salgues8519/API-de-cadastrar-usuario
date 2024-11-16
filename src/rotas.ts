import { Router } from "express";
import { cadastrar, fraseInicial } from "./controladorUsuario";


const rotas = Router()

rotas.get('/', fraseInicial)
rotas.post('/usuarios', cadastrar)








export default rotas