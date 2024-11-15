import { Request, Response } from "express";


export function fraseInicial(req:Request, res:Response):any {
    return res.status(200).json({
        mensagem: "Servidor <3"
    })
}