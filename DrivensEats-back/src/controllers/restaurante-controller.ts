import { Pratos } from "../protocols";
import restauranteService from "../services/restaurante-service";
import { Response, Request } from "express";


export async function getPratos(req: Request, res: Response) {
    try { 
        const tipo = req.params.tipo as string;

        const rows  = await restauranteService.getPratos(tipo);
        return res.send(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Não foi possível conectar ao servidor!');
    }  
};

export async function postPrato(req: Request, res: Response) {
    try {
        const prato: Pratos = req.body;
  
        await restauranteService.postPrato(prato);
  
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Não foi possível conectar ao servidor!');
    }
    
}

export async function deletePrato(req: Request, res: Response) {
    try {
        const { id } = req.body;
        if(isNaN(id))
        {return res.status(401).send("passe o id");} 
  
        await restauranteService.deletePrato(id);
  
        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Não foi possível conectar ao servidor!');
    }
    
}

