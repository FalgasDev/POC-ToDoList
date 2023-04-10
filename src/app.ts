import express from "express";
import { Request, Response } from "express";

const server = express();

server.get('/health', (req: Request, res: Response) => {
  res.send('OK!')
})

server.listen(5000, () => console.log('Rodando na porta 5000'))