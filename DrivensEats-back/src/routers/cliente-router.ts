import { Router } from "express";
import { validateBody } from "../middlewares";
const clienteRouter = Router();

/*import { postPedido } from "../controllers";
import { createPedidoSchema } from "../schemas";



clienteRouter
  .post("/pedido", validateBody(createPedidoSchema), postPedido);*/
 

export { clienteRouter };