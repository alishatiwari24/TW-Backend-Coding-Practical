import express from "express";
import { connectToDatabase } from "./helpers/connectToDatabase.helper.js";
import { ridesController } from "./controller/rides.js";

// TASK-003 Move PORT to environment file
const PORT = 54321;

export const app = express();

export async function startServer() {
  await connectToDatabase();

  app.get("/health", (req, res) => {
    console.log("GET /health");
    // TASK-001 Fix health route. The above console is printing but the response is not sent to client.
    return res.status(200).send({ message: "Server is in good health!!!" });
  });

  app.get("/rides", (req, res) => ridesController.getRides(req, res));

  app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    return Promise.resolve();
  });
}
