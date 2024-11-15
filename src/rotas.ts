import { Router } from "express";
import { fraseInicial } from "./controladorUsuario";


const rotas = Router()

rotas.get('/', fraseInicial)








export default rotas