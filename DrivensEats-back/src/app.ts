import express, {Express, Request, Response} from "express";
import cors from "cors";
import { connection } from "./database";
import { restauranteRouter, clienteRouter } from "./routers/index";


const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req: Request, res: Response) => res.send("OK!"))
  .use("/restaurante", restauranteRouter)
  .use("/cliente", clienteRouter);

export function init(): Promise<Express> {
    connection;
  return Promise.resolve(app);
}
const port = 4000;
init().then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}.`);
    });
  });

export default app;