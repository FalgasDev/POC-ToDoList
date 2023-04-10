import express from "express";
import { Request, Response } from "express";
import routes from "./Routers/index.js";

const server = express();
server.use(express.json())
server.use(routes)

server.get('/health', (req: Request, res: Response) => {
  res.send('OK!')
})

server.listen(5000, () => console.log('Rodando na porta 5000'))