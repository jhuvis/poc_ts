import { Router } from "express";
import { validateBody } from "../middlewares";
import { getPratos, postPrato, deletePrato } from "../controllers";
import { createPratosSchema } from "../schemas";

const restauranteRouter = Router();

restauranteRouter
  .get("/pratos/:tipo", getPratos)
  .post("/prato", validateBody(createPratosSchema), postPrato)
  .delete("/prato", deletePrato);

export { restauranteRouter };