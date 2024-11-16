import { Request, Response } from "express";
import {TUsuario, usuarios} from './bancoDeDados'
import {v4 as uuid} from 'uuid'


export function fraseInicial(req:Request, res:Response):any {
    return res.status(200).json({
        mensagem: "Servidor menor que 3"
    })
}

export function cadastrar(req:Request, res:Response):any {
    const {nome, endereco, idade} =req.body

    if (!nome || !endereco || !idade){
        return res.status(400).json({
            mensagem: "Todos os campos são obrigatorios"
        })
    }
    const novoUsuario:TUsuario ={
        id: uuid(),
        nome,
        endereco,
        idade
    }

    usuarios.push(novoUsuario)
    return res.status(200).json({
        mensagem: "Novo Usuario Cadastrado"
    })
}

export function listar(req:Request, res:Response) {
    res.json(usuarios)
}

export function detalharUsuario(req:Request, res:Response):any {
    const {id} = req.params
    const usuario = usuarios.find((item)=> {
        return item.id === id
    })
    
    if (!usuario) {
        return res.status(404).json({
            mensangem: 'Usuario não encontrado'
        })
    }
    return res.status(200).json(usuario)

}